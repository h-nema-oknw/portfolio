// GSAP アニメーション（docs/spec/detail.md Section 3 の設定値に準拠）
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {

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

  // ── ターミナル
  gsap.utils.toArray('.terminal').forEach(el => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.8,
      scrollTrigger: { trigger: el, start: 'top 88%' },
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
}
