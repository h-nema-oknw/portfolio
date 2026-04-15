# Phase 4 タスク指示書

以下のタスクを上から順に実行すること。各タスク完了後に次のタスクへ進む。

---

## Task 1 — content.js に大学エントリを追加

**ファイル**: `result/portfolio/src/data/content.js`

`career` 配列の末尾（`{ period: '2009 — 2016', ... }` の後）に以下を追加：

```js
{
  period: '2009.04 — 2013.03',
  company: '沖縄大学',
  role: '人文学部 国際コミュニケーション学科',
  description:
    '国際コミュニケーションを専攻。在学中よりストリートダンス活動を並行し、卒業後はダンサーとしてのキャリアをスタート。',
  tags: ['Communication', 'International Studies'],
},
```

---

## Task 2 — renderer.js を新規作成

**ファイル**: `result/portfolio/src/modules/renderer.js`（新規作成）

以下の内容で作成する：

```js
import { skills, career, qualifications, works, links } from '../data/content.js';

export function initRenderer() {
  renderSkills();
  renderCareer();
  renderWorks();
  renderLinks();
}

function renderSkills() {
  const list = document.querySelector('.skills-list');
  if (!list) return;
  list.innerHTML = skills.map(s => `
    <div class="sk-row">
      <div>
        <div class="sk-name">${s.name}</div>
        <span class="sk-cat">${s.category}</span>
      </div>
      <div class="sk-track">
        <div class="sk-fill" data-w="${s.level}"></div>
      </div>
      <div class="sk-yr">${s.years} yr</div>
    </div>
  `).join('');
}

function renderCareer() {
  const list = document.querySelector('.career-list');
  if (!list) return;
  list.innerHTML = career.map(c => `
    <div class="career-item">
      <div class="career-period">${c.period}</div>
      <div class="career-body">
        <div class="career-company">${c.company}</div>
        <div class="career-role">${c.role}</div>
        <p class="career-desc">${c.description}</p>
        <div class="career-tags">
          ${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  const quals = document.querySelector('.quals');
  if (!quals) return;
  const inner = quals.querySelector('.quals-inner') || quals;
  const titleEl = quals.querySelector('.quals-title');
  const existingItems = quals.querySelectorAll('.qual-item');
  existingItems.forEach(el => el.remove());

  qualifications.forEach(q => {
    const item = document.createElement('div');
    item.className = 'qual-item';
    item.innerHTML = `
      <span class="t-accent">▸</span>
      <span>${q.name} <span class="qual-year">${q.year}</span></span>
    `;
    quals.appendChild(item);
  });
}

function renderWorks() {
  const list = document.querySelector('.works-list');
  if (!list) return;
  list.innerHTML = works.map(w => {
    const inner = `
      <span class="w-num">${w.num}</span>
      <div>
        <div class="w-title">${w.title}</div>
        <div class="w-sub">${w.stack.join(' + ')}</div>
        <div class="w-stack">
          ${w.stack.map(s => `<span class="tag">${s}</span>`).join('')}
        </div>
      </div>
      <span class="w-tag">${w.tag}</span>
    `;
    return w.url
      ? `<a href="${w.url}" target="_blank" rel="noopener noreferrer" class="work-item">${inner}</a>`
      : `<div class="work-item">${inner}</div>`;
  }).join('');
}

function renderLinks() {
  const grid = document.querySelector('.links-grid');
  if (!grid) return;
  const iconMap = {
    github: '◈',
    mail:   '✉',
    wantedly: '◉',
  };
  grid.innerHTML = links.map(l => `
    <a href="${l.url}" ${l.url.startsWith('mailto') ? '' : 'target="_blank" rel="noopener noreferrer"'} class="link-card">
      <span class="link-icon" aria-hidden="true">${iconMap[l.icon] || '◆'}</span>
      <span class="link-label">${l.label}</span>
      <span class="link-arrow">→</span>
    </a>
  `).join('');
}
```

---

## Task 3 — links に Wantedly を追加

**ファイル**: `result/portfolio/src/data/content.js`

`links` 配列を以下に更新する：

```js
export const links = [
  { label: 'GitHub',    url: '',                                              icon: 'github'   },
  { label: 'Wantedly', url: 'https://www.wantedly.com/id/hiroki_nema',        icon: 'wantedly' },
  { label: 'Email',    url: 'mailto:',                                        icon: 'mail'     },
];
```

---

## Task 4 — main.js を更新

**ファイル**: `result/portfolio/src/main.js`

`initRenderer` を import し、DOMContentLoaded 内で最初に呼び出す：

```js
import './style.css';
import { initRenderer }   from './modules/renderer.js';
import { initParticles }  from './modules/particles.js';
import { initAnimations } from './modules/animations.js';
import { initDarkMode }   from './modules/darkMode.js';

document.addEventListener('DOMContentLoaded', () => {
  initRenderer();   // コンテンツを先にレンダリング
  initDarkMode();
  initParticles();
  initAnimations(); // レンダリング後にアニメーション初期化
});

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  setTimeout(() => {
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 650);
  }, 1050);
});
```

---

## Task 5 — index.html を更新

**ファイル**: `result/portfolio/index.html`

以下の 4 点を変更する。

### 5-1. Hero CTA ボタンを追加

`.hero-desc` の `</p>` 直後に追加：

```html
      <div class="hero-cta">
        <a href="#works" class="btn btn-glow">View Works →</a>
        <a href="#about" class="btn btn-ghost">About Me</a>
      </div>
```

### 5-2. Skills リストを空コンテナに変更

`.skills-list` div の中身（`<div class="sk-row">...` 全部）を削除し、空にする：

```html
        <div class="skills-list">
          <!-- JS で動的に生成 -->
        </div>
```

### 5-3. Career リストを空コンテナに変更

`.career-list` div の中身と `.quals` div 内の各 `.qual-item` を削除し、空にする：

```html
        <div class="career-list">
          <!-- JS で動的に生成 -->
        </div>

        <div class="quals">
          <div class="quals-title">Qualifications</div>
          <!-- JS で動的に生成 -->
        </div>
```

### 5-4. Works リストを空コンテナに変更

`.works-list` div の中身を削除し、空にする：

```html
        <div class="works-list">
          <!-- JS で動的に生成 -->
        </div>
```

### 5-5. Links グリッドを空コンテナに変更

`.links-grid` div の中身を削除し、空にする：

```html
        <div class="links-grid">
          <!-- JS で動的に生成 -->
        </div>
```

### 5-6. マーキーを追加

`#skills` セクションの `.skills-list` の直前に追加：

```html
        <!-- マーキー -->
        <div class="marquee-wrap" aria-hidden="true">
          <div class="marquee-track">
            <span>VBA / Access</span><span>T-SQL</span><span>PHP</span>
            <span>JavaScript</span><span>HTML / CSS</span><span>Claude Code</span>
            <span>SQL Server</span><span>GSAP</span><span>Three.js</span><span>Vite</span>
            <span>VBA / Access</span><span>T-SQL</span><span>PHP</span>
            <span>JavaScript</span><span>HTML / CSS</span><span>Claude Code</span>
            <span>SQL Server</span><span>GSAP</span><span>Three.js</span><span>Vite</span>
          </div>
        </div>
```

---

## Task 6 — animations.js を更新

**ファイル**: `result/portfolio/src/modules/animations.js`

`export function initAnimations()` の冒頭に `gsap.set()` ブロックを追加し、
末尾にマーキー GSAP アニメーションを追加する：

### 6-1. 関数冒頭に追加（gsap.set ブロック）

```js
  // ── 初期状態セットアップ ────────────────────────────────────
  gsap.set('.s-label',     { x: -20, opacity: 0 });
  gsap.set('.card-3d',     { y: 30,  opacity: 0 });
  gsap.set('.about-p',     { y: 20,  opacity: 0 });
  gsap.set('.terminal',    { y: 20,  opacity: 0 });
  gsap.set('.career-item', { y: 20,  opacity: 0 });
  gsap.set('.quals',       { y: 20,  opacity: 0 });
  gsap.set('.sk-row',      { x: -20, opacity: 0 });
  gsap.set('.work-item',   { x: -20, opacity: 0 });
  gsap.set('.link-card',   { y: 20,  opacity: 0 });
```

### 6-2. 関数末尾に追加（マーキー）

```js
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
```

---

## Task 7 — style.css にマーキー CSS とタブレット対応を追加

**ファイル**: `result/portfolio/src/style.css`

末尾の `@media (max-width: 768px)` ブロックの**前**に以下を挿入：

### 7-1. マーキー CSS

```css
/* ── マーキー ── */
.marquee-wrap {
  overflow: hidden;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 0.8rem 0;
  margin-bottom: 3rem;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-track {
  display: flex;
  gap: 2.5rem;
  white-space: nowrap;
  will-change: transform;
}

.marquee-track span {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--muted);
  text-transform: uppercase;
  flex-shrink: 0;
}

.marquee-track span::before {
  content: '◆';
  margin-right: 2.5rem;
  color: var(--gold);
  opacity: 0.4;
}
```

### 7-2. タブレット対応 @media

```css
/* ── タブレット ── */
@media (max-width: 1024px) {
  #nav { padding: 1.2rem 2rem; }
  .container { padding: 0 2rem; }

  .about-body { gap: 2rem; }

  .sk-row { grid-template-columns: 180px 1fr 60px; gap: 1.2rem; }

  .career-item { grid-template-columns: 160px 1fr; gap: 1.5rem; }

  .work-item { grid-template-columns: 60px 1fr auto; }
}
```

---

## 確認事項（実行後にチェック）

- [ ] `index.html` に `.hero-cta` が存在する
- [ ] `.skills-list`・`.career-list`・`.works-list`・`.links-grid` が空コンテナになっている
- [ ] `.marquee-wrap` が `#skills` セクション内に存在する
- [ ] `renderer.js` が `result/portfolio/src/modules/` に存在する
- [ ] `main.js` で `initRenderer()` が `initAnimations()` より前に呼ばれている
- [ ] `animations.js` の冒頭に `gsap.set()` ブロックが存在する
- [ ] `animations.js` の末尾にマーキー GSAP アニメーションが存在する
- [ ] `content.js` の `career` に大学エントリが存在する
- [ ] `content.js` の `links` に Wantedly が存在する
- [ ] `style.css` にマーキー CSS が存在する
- [ ] `style.css` に `@media (max-width: 1024px)` が存在する
