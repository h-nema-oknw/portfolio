// ダークモード切替ロジック
// data-theme 属性を html 要素に設定し、localStorage で状態を保持する

export function initDarkMode() {
  const toggle = document.getElementById('dark-mode-toggle');
  if (!toggle) return;

  const html = document.documentElement;
  const saved = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', saved);
  updateLabel(toggle, saved);

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateLabel(toggle, next);
  });
}

function updateLabel(btn, theme) {
  btn.textContent = theme === 'dark' ? '[ LIGHT ]' : '[ DARK ]';
}
