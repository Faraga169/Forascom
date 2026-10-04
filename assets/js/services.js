/* =========================================================
   FORASCOM SERVICES PAGE — INTERACTIVE EXPERIENCE
   ========================================================= */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card');
    const detailDialog = document.querySelector('#service-detail-dialog');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (detailDialog) {
      const serviceKeys = {
        web: 's1',
        wordpress: 's5',
        power: 's4',
        ai: 's2',
        automation: 's3'
      };
      const modalImage = detailDialog.querySelector('[data-service-modal-image]');
      const modalTitle = detailDialog.querySelector('[data-service-modal-title]');
      const modalSubtitle = detailDialog.querySelector('[data-service-modal-subtitle]');
      const modalDescription = detailDialog.querySelector('[data-service-modal-description]');
      const modalBadge = detailDialog.querySelector('[data-service-modal-badge]');
      const modalNumber = detailDialog.querySelector('[data-service-modal-number]');
      const modalVisual = detailDialog.querySelector('.service-modal__visual');
      const modalCapabilities = detailDialog.querySelector('[data-service-modal-capabilities]');
      const modalTags = detailDialog.querySelector('[data-service-modal-tags]');
      const modalLink = detailDialog.querySelector('[data-service-modal-link]');
      let activeCard = null;

      const getServiceCopy = (language, key) => {
        const translations = window.forascomTranslations?.[language]?.services?.showcase;
        return translations?.[key] || '';
      };

      cards.forEach((card) => {
        card.addEventListener('click', (event) => {
          if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          event.preventDefault();

          const serviceKey = serviceKeys[card.dataset.service];
          if (!serviceKey) return;

          activeCard = card;
          const language = document.documentElement.lang === 'en' ? 'en' : 'ar';
          const copyKey = (suffix) => `${serviceKey}${suffix}`;
          const visual = card.querySelector('.service-card__visual img');
          const tags = card.querySelectorAll('.service-tags span');

          detailDialog.lang = language;
          detailDialog.dir = language === 'ar' ? 'rtl' : 'ltr';
          modalTitle.textContent = getServiceCopy(language, copyKey('Title'));
          modalSubtitle.textContent = getServiceCopy(language, copyKey('Subtitle'));
          modalDescription.textContent = getServiceCopy(language, copyKey('Desc'));
          modalBadge.textContent = getServiceCopy(language, copyKey('Badge'));
          modalNumber.textContent = card.querySelector('.service-number')?.textContent.trim() || '';
          modalVisual.classList.toggle('service-modal__visual--web-art', card.dataset.service === 'web');
          modalImage.src = visual?.currentSrc || visual?.getAttribute('src') || '';
          modalImage.alt = modalTitle.textContent;
          modalLink.href = card.getAttribute('href');

          modalCapabilities.replaceChildren();
          [1, 2, 3].forEach((index) => {
            const item = document.createElement('li');
            item.textContent = getServiceCopy(language, copyKey(`P${index}`));
            modalCapabilities.append(item);
          });

          modalTags.replaceChildren();
          tags.forEach((tag) => {
            const item = document.createElement('span');
            item.textContent = tag.textContent.trim();
            modalTags.append(item);
          });

          detailDialog.showModal();
        });
      });

      detailDialog.querySelector('[data-service-modal-close]')?.addEventListener('click', () => {
        detailDialog.close();
      });

      detailDialog.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          detailDialog.close();
        }
      });

      detailDialog.addEventListener('close', () => {
        activeCard?.focus({ preventScroll: true });
        activeCard = null;
      });

      detailDialog.addEventListener('click', (event) => {
        if (event.target === detailDialog) detailDialog.close();
      });
    }

    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      if (!reducedMotion) {
        gsap.set('.service-hero-copy > *', { opacity: 0, y: 18, filter: 'blur(8px)' });
        gsap.set('.services-hero-visual', { opacity: 0, scale: 0.92 });

        gsap.timeline({ defaults: { ease: 'power2.out' } })
          .to('.services-badge', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7 })
          .to('.hero-title', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8 }, '-=0.45')
          .to('.hero-deck', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75 }, '-=0.55')
          .to('.hero-actions a', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, stagger: 0.08 }, '-=0.5')
          .to('.services-hero-visual', { opacity: 1, scale: 1, duration: 0.9 }, '-=0.7');

        cards.forEach((card, index) => {
          gsap.fromTo(card,
            { opacity: 0, y: 52, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              delay: index * 0.08,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 82%',
                end: 'bottom 68%',
                scrub: 1.1,
                toggleActions: 'play none none reverse'
              }
            }
          );
        });

        document.querySelectorAll('.process-step').forEach((step, index) => {
          gsap.fromTo(step,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.12,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: step,
                start: 'top 85%',
                end: 'bottom 72%',
                scrub: 0.9,
                toggleActions: 'play none none reverse'
              }
            }
          );
        });

        document.querySelectorAll('.tech-cluster').forEach((cluster, index) => {
          gsap.fromTo(cluster,
            { opacity: 0, y: 18 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: cluster,
                start: 'top 86%',
                end: 'bottom 72%',
                scrub: 0.8,
                toggleActions: 'play none none reverse'
              }
            }
          );
        });

        document.querySelectorAll('.tech-node').forEach((node, index) => {
          gsap.to(node, {
            y: index % 2 === 0 ? -12 : 12,
            duration: 3.6 + index * 0.35,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.18
          });
        });
      }
    }

    cards.forEach((card) => {
      const activate = () => {
        cards.forEach((item) => item.classList.toggle('is-dimmed', item !== card));
        cards.forEach((item) => item.classList.toggle('is-active', item === card));
      };

      const deactivate = () => {
        cards.forEach((item) => {
          item.classList.remove('is-dimmed');
          item.classList.remove('is-active');
        });
      };

      card.addEventListener('mouseenter', activate);
      card.addEventListener('mouseleave', deactivate);
      card.addEventListener('focusin', activate);
      card.addEventListener('focusout', deactivate);
    });
  });
})();
