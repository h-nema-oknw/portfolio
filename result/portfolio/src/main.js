import './style.css';
import { initRenderer }   from './modules/renderer.js';
import { initParticles }  from './modules/particles.js';
import { initAnimations } from './modules/animations.js';
import { initDarkMode }   from './modules/darkMode.js';

function updateAges() {
  const today = new Date();
  document.querySelectorAll('.t-age[data-birth]').forEach(el => {
    const [y, m, d] = el.dataset.birth.split('-').map(Number);
    const age = today.getFullYear() - y
      - (today < new Date(today.getFullYear(), m - 1, d) ? 1 : 0);
    el.textContent = age;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initRenderer();   // コンテンツを先にレンダリング
  updateAges();
  initDarkMode();
  initParticles();
  initAnimations(); // レンダリング後にアニメーション初期化
});

// ローディングオーバーレイを非表示（CSS アニメーション完了後）
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  // アニメーション（1.0s）完了を待ってフェードアウト
  setTimeout(() => {
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 650);
  }, 1050);
});
