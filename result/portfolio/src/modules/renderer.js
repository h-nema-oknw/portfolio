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
  // 既存の .qual-item を削除（.quals-title は保持）
  quals.querySelectorAll('.qual-item').forEach(el => el.remove());
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

  const groups = {};
  const order = [];
  works.forEach(w => {
    const cat = w.category || '';
    if (!groups[cat]) { groups[cat] = []; order.push(cat); }
    groups[cat].push(w);
  });

  const renderItem = w => {
    const urlLinks = w.urls
      ? `<div class="w-links">${w.urls.map(u => `<a href="${u.url}" target="_blank" rel="noopener noreferrer" class="w-link">${u.label} →</a>`).join('')}</div>`
      : '';
    const inner = `
      <span class="w-num">${w.num}</span>
      <div>
        <div class="w-title">${w.title}</div>
        ${w.description ? `<div class="w-sub">${w.description}</div>` : ''}
        <div class="w-stack">
          ${w.stack.map(s => `<span class="tag">${s}</span>`).join('')}
        </div>
        ${w.devices ? `<div class="w-devices">${w.devices.map(d => `<span class="w-device">${d}</span>`).join('')}</div>` : ''}
        ${urlLinks}
      </div>
      <span class="w-tag">${w.tag}</span>
    `;
    return w.url
      ? `<a href="${w.url}" target="_blank" rel="noopener noreferrer" class="work-item">${inner}</a>`
      : `<div class="work-item">${inner}</div>`;
  };

  list.innerHTML = order.map(cat => `
    <div class="works-category">${cat}</div>
    ${groups[cat].map(renderItem).join('')}
  `).join('');
}

function renderLinks() {
  const grid = document.querySelector('.links-grid');
  if (!grid) return;
  const iconMap = {
    github:   '◈',
    mail:     '✉',
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
