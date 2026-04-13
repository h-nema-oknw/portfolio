import './style.css';
import { initParticles } from './modules/particles.js';
import { initAnimations } from './modules/animations.js';
import { initDarkMode } from './modules/darkMode.js';

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initParticles();
  initAnimations();
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
