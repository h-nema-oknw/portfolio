// GSAP アニメーション（docs/spec/detail.md Section 3 の設定値に準拠）
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function extractLineData(terminal) {
  return [...terminal.querySelectorAll(':scope > div')].map(div => ({
    style: div.getAttribute('style') || '',
    tokens: [...div.childNodes]
      .filter(n => !(n.classList && n.classList.contains('t-cursor')))
      .flatMap(n => {
        if (n.nodeType === Node.TEXT_NODE) {
          return n.textContent ? [{ cls: '', text: n.textContent }] : [];
        }
        return n.textContent ? [{ cls: n.className || '', text: n.textContent }] : [];
      }),
  }));
}

function startTypewriter(terminal, lineData) {
  // 総ステップ数から「3秒で完了」する1ステップあたりの遅延を算出
  const totalSteps = lineData.reduce((sum, line) => {
    const chars = line.tokens.reduce((s, tok) => s + tok.text.length, 0);
    return sum + Math.max(chars, 1);
  }, 0);
  const stepDelay = Math.max(8, Math.floor(3000 / totalSteps));

  let li = 0, ti = 0, ci = 0;
  let currentDiv = null, currentSpanEl = null;
  const cursor = terminal.querySelector('.t-cursor');

  function step() {
    if (li >= lineData.length) return;
    const line = lineData[li];

    if (ti === 0 && ci === 0) {
      cursor.remove();
      currentDiv = document.createElement('div');
      if (line.style) currentDiv.setAttribute('style', line.style);
      terminal.appendChild(currentDiv);
      currentDiv.appendChild(cursor);
    }

    if (!line.tokens.length) { li++; return setTimeout(step, stepDelay); }

    const tok = line.tokens[ti];
    if (ci === 0) {
      currentSpanEl = document.createElement('span');
      if (tok.cls) currentSpanEl.className = tok.cls;
      cursor.before(currentSpanEl);
    }

    currentSpanEl.textContent = tok.text.slice(0, ci + 1);

    ci++;
    if (ci >= tok.text.length) {
      ci = 0; ti++;
      if (ti >= line.tokens.length) { ti = 0; li++; }
    }
    setTimeout(step, stepDelay);
  }

  // フェードイン完了 1 秒後にタイピング開始
  setTimeout(step, 1000);
}

export function initAnimations() {

  // ── 初期状態セットアップ ─────────────────────────────────────
  gsap.set('.s-label',     { x: -20, opacity: 0 });
  gsap.set('.card-3d',     { y: 30,  opacity: 0 });
  gsap.set('.about-p',     { y: 20,  opacity: 0 });
  gsap.set('.terminal',    { y: 20,  opacity: 0 });
  gsap.set('.career-item', { y: 20,  opacity: 0 });
  gsap.set('.quals',       { y: 20,  opacity: 0 });
  gsap.set('.sk-row',      { x: -20, opacity: 0 });
  gsap.set('.work-item',   { x: -20, opacity: 0 });
  gsap.set('.link-card',   { y: 20,  opacity: 0 });

  // ── Hero テキストリビール（duration: 1.0s, stagger: 0.12s, ease: power4.out）
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  tl.to('.hero-label',
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5 })
    .to('.hero-title .line span',
        { y: '0%', duration: 1.0, stagger: 0.12 }, '-=0.4')
    .to('.hero-code',
        { opacity: 1, y: 0, duration: 0.8 },        '-=0.4')
    .to('.hero-desc',
        { opacity: 1, y: 0, duration: 0.8 },        '-=0.5')
    .to('.hero-cta',
        { opacity: 1, y: 0, duration: 0.8 },        '-=0.5')
    .to('.hero-scroll',
        { opacity: 1,       duration: 0.8 },        '-=0.3');

  // ── セクションラベル fade-in（duration: 0.8s）
  gsap.utils.toArray('.s-label').forEach(el => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 0.8,
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });

  // ── About: テキスト段落
  gsap.utils.toArray('.about-p').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.8, delay: i * 0.12,
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });

  // ── About: 3D カード（tilt ±14deg）
  gsap.utils.toArray('.card-3d').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.7, delay: i * 0.1,
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });

    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      el.style.transform = `perspective(600px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(8px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(600px) rotateY(0) rotateX(0) translateZ(0)';
    });
  });

  // ── ターミナル: ページロード時点でコンテンツを抽出して空にする
  const terminalMap = new Map();
  gsap.utils.toArray('.terminal').forEach(el => {
    const lineData = extractLineData(el);
    terminalMap.set(el, lineData);
    el.innerHTML = '';
    const cursor = document.createElement('span');
    cursor.className = 't-cursor';
    cursor.textContent = '_';
    el.appendChild(cursor);
  });

  // スクロールでフェードイン → 完了後タイプライター開始
  gsap.utils.toArray('.terminal').forEach(el => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: el, start: 'top 88%' },
      onComplete: () => startTypewriter(el, terminalMap.get(el)),
    });
  });

  // ── Career
  gsap.utils.toArray('.career-item').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.8, delay: i * 0.1,
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });
  gsap.utils.toArray('.quals').forEach(el => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: el, start: 'top 88%' },
    });
  });

  // ── Skills バー（duration: 1.5s, ease: power2.out）
  gsap.utils.toArray('.sk-row').forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      onEnter: () => {
        gsap.to(el, { opacity: 1, x: 0, duration: 0.6, delay: i * 0.07 });
        const fill = el.querySelector('.sk-fill');
        if (fill) {
          gsap.to(fill, {
            width: fill.dataset.w + '%',
            duration: 1.5,
            delay: 0.3 + i * 0.05,
            ease: 'power2.out',
          });
        }
      },
    });
  });

  // ── Works
  gsap.utils.toArray('.work-item').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1, x: 0, duration: 0.6, delay: i * 0.1,
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });

  // ── Links
  gsap.utils.toArray('.link-card').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.7, delay: i * 0.1,
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });

  // ── マーキー（22s、GSAP repeat: -1）─────────────────────────
  const marqueeTrack = document.querySelector('.marquee-track');
  if (marqueeTrack) {
    gsap.to(marqueeTrack, {
      x: '-50%',
      duration: 22,
      ease: 'none',
      repeat: -1,
    });
  }
}
