/* =========================================================
   HOME PAGE
   ========================================================= */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    if (!window.gsap || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const hero = document.querySelector('section.relative.flex');
    const heroItems = document.querySelectorAll('.hero-enter');
    const heroImageArea = document.querySelector('.hero-image-area');
    const heroImage = document.querySelector('.hero-image');
    const heroText = document.querySelector('.lg\\:col-span-7');

    if (!hero || !heroImageArea || !heroImage || !heroItems.length) {
      return;
    }

    const intro = window.gsap.timeline({ defaults: { ease: 'power3.out' } });

    intro.fromTo(
      heroItems,
      { opacity: 0, y: 34, filter: 'blur(8px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, stagger: 0.12 }
    );

    window.gsap.to(heroImageArea, {
      y: -14,
      duration: 3.8,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    hero.addEventListener('mousemove', (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;

      window.gsap.to(heroImage, {
        x: x * 18,
        rotationY: x * 4,
        rotationX: y * -3,
        duration: 0.7,
        ease: 'power2.out',
      });

      if (heroText) {
        window.gsap.to(heroText, {
          x: x * -8,
          y: y * -5,
          duration: 0.9,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      }
    });

    hero.addEventListener('mouseleave', () => {
      window.gsap.to(heroImage, {
        x: 0,
        rotationX: 0,
        rotationY: 0,
        duration: 1,
        ease: 'power3.out',
      });

      if (heroText) {
        window.gsap.to(heroText, {
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        });
      }
    });
  });
})();
