// Three.js パーティクル背景
// マウス: 移動方向に 10% 速度で追従、停止後 1 秒慣性
// スクロール: 逆方向に 10% 速度で移動、停止後 1 秒慣性
import * as THREE from 'three';

export function initParticles() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // ── パーティクル生成 ─────────────────────────────────────
  const COUNT = 2000;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(COUNT * 3);
  const colors    = new Float32Array(COUNT * 3);
  const sizes     = new Float32Array(COUNT);

  // ダーク: ゴールド / テラコッタ
  const darkPrimary   = [201 / 255, 163 / 255,  90 / 255];
  const darkSecondary = [193 / 255, 127 / 255,  89 / 255];
  // ライト: チャコール / ミドルグレー
  const lightPrimary   = [ 60 / 255,  60 / 255,  60 / 255];
  const lightSecondary = [110 / 255, 110 / 255, 110 / 255];

  // 各粒子がどちらのグループか（0: primary, 1: secondary）
  const colorGroup = new Uint8Array(COUNT);

  for (let i = 0; i < COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;

    colorGroup[i] = Math.random() < 0.6 ? 0 : 1;
    const c = colorGroup[i] === 0 ? darkPrimary : darkSecondary;
    colors[i * 3] = c[0]; colors[i * 3 + 1] = c[1]; colors[i * 3 + 2] = c[2];

    sizes[i] = Math.random() * 2.5 + 0.5;
  }

  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(colors,    3));
  geo.setAttribute('size',     new THREE.BufferAttribute(sizes,     1));

  // テーマ変更時に色を更新する関数（geo.setAttribute 後に定義）
  function applyThemeColors(theme) {
    const col = geo.attributes.color.array;
    for (let i = 0; i < COUNT; i++) {
      const c = theme === 'light'
        ? (colorGroup[i] === 0 ? lightPrimary   : lightSecondary)
        : (colorGroup[i] === 0 ? darkPrimary    : darkSecondary);
      col[i * 3] = c[0]; col[i * 3 + 1] = c[1]; col[i * 3 + 2] = c[2];
    }
    geo.attributes.color.needsUpdate = true;
  }

  // 初期テーマを適用
  applyThemeColors(document.documentElement.getAttribute('data-theme') || 'dark');

  // data-theme の変化を監視
  new MutationObserver(() => {
    applyThemeColors(document.documentElement.getAttribute('data-theme') || 'dark');
  }).observe(document.documentElement, { attributeFilter: ['data-theme'] });

  const mat = new THREE.PointsMaterial({
    size: 0.04,
    vertexColors: true,
    transparent: true,
    opacity: 0.55,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(geo, mat);
  scene.add(particles);

  // ── 速度 ──────────────────────────────────────────────────
  // vel: 毎フレーム各粒子に加算される速度（ワールド単位/frame）
  const vel = { x: 0, y: 0 };

  // 速度減衰係数
  // 0.95^60 ≈ 0.046 → 60 fps で約 1 秒後にほぼ停止
  const VEL_DECAY = 0.95;
  // 最大速度クランプ
  const MAX_VEL   = 0.12;

  // フィールドの半幅・半高さ（ラップ境界）
  const HALF_W = 10;
  const HALF_H = 10;

  // ── マウス移動 ───────────────────────────────────────────
  // ポインタ移動量の 10% をワールド単位に変換して vel へ加算
  let prevMX = null, prevMY = null;

  document.addEventListener('mousemove', e => {
    if (prevMX !== null) {
      const dx =  (e.clientX - prevMX) / window.innerWidth  * 12;
      const dy = -(e.clientY - prevMY) / window.innerHeight * 10; // 画面 Y 反転
      vel.x += dx * 0.1;
      vel.y += dy * 0.1;
    }
    prevMX = e.clientX;
    prevMY = e.clientY;
  });

  // ── スクロール ───────────────────────────────────────────
  // スクロール量の 10% を「逆方向」に vel へ加算
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const delta = window.scrollY - lastScrollY;
    // 逆方向 = delta > 0（下スクロール）→ 粒子は上（正 Y）
    vel.y += (delta / window.innerHeight) * 10 * 0.1;
    lastScrollY = window.scrollY;
  });

  // ── リサイズ ─────────────────────────────────────────────
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  let t = 0;

  function animate() {
    requestAnimationFrame(animate);
    t += 0.0008;

    // ── 速度を減衰（約 1 秒で停止）─────────────────────────
    vel.x *= VEL_DECAY;
    vel.y *= VEL_DECAY;

    // クランプ
    vel.x = Math.max(-MAX_VEL, Math.min(MAX_VEL, vel.x));
    vel.y = Math.max(-MAX_VEL, Math.min(MAX_VEL, vel.y));

    // ── 各粒子を個別移動 + フィールド端ラップ（無限タイル）──
    // グループ位置移動の代わりに各粒子を動かすことで
    // フィールド外へ出た粒子が反対側から戻り、粒子が消えない
    const pos = geo.attributes.position.array;
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3]     -= vel.x;
      pos[i * 3 + 1] -= vel.y;

      // 微細な浮遊アニメーション
      pos[i * 3 + 1] += Math.sin(t * 2 + i * 0.01) * 0.0003;

      // ラップアラウンド
      if (pos[i * 3]     >  HALF_W) pos[i * 3]     -= HALF_W * 2;
      if (pos[i * 3]     < -HALF_W) pos[i * 3]     += HALF_W * 2;
      if (pos[i * 3 + 1] >  HALF_H) pos[i * 3 + 1] -= HALF_H * 2;
      if (pos[i * 3 + 1] < -HALF_H) pos[i * 3 + 1] += HALF_H * 2;
    }
    geo.attributes.position.needsUpdate = true;

    // ── 浮遊回転（オリジナル） ──────────────────────────────
    particles.rotation.y = t * 0.12;
    particles.rotation.x = t * 0.06;

    renderer.render(scene, camera);
  }

  animate();
}
