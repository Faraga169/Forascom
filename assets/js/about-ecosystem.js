/* ==========================================================================
   FORASCOM - WHO WE ARE INTERACTIVE TECHNOLOGY ECOSYSTEM (GSAP)
   Scoped strictly to #about / .forascom-about-*
   ========================================================================== */

(function () {
  'use strict';

  let ecosystemTimeline = null;
  let scrollFloatingTimeline = null;
  let particleInterval = null;
  let isInitialized = false;

  function isReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function isMobile() {
    return window.innerWidth < 640;
  }

  /* Compute and update SVG connection lines from Technology Core to 4 Cards */
  function updateConnectionPaths() {
    const wrapper = document.querySelector('.forascom-about-ecosystem-wrapper');
    const core = document.querySelector('.forascom-about-core-anchor');
    const svg = document.querySelector('.forascom-about-svg');
    if (!wrapper || !core || isMobile()) return;

    const wrapRect = wrapper.getBoundingClientRect();
    const coreRect = core.getBoundingClientRect();

    if (wrapRect.width <= 0 || wrapRect.height <= 0) return;

    if (svg) {
      svg.setAttribute('viewBox', `0 0 ${wrapRect.width.toFixed(1)} ${wrapRect.height.toFixed(1)}`);
    }

    // Live Center of Core relative to wrapper
    const cx = coreRect.left - wrapRect.left + coreRect.width / 2;
    const cy = coreRect.top - wrapRect.top + coreRect.height / 2;

    const cards = [
      document.querySelector('.forascom-about-card[data-card="1"]'),
      document.querySelector('.forascom-about-card[data-card="2"]'),
      document.querySelector('.forascom-about-card[data-card="3"]'),
      document.querySelector('.forascom-about-card[data-card="4"]')
    ];

    cards.forEach((card, idx) => {
      const path = document.getElementById(`forascom-path-${idx + 1}`);
      if (!card || !path) return;

      // Live Center of Card relative to wrapper (accounts for all live scroll transforms)
      const cardRect = card.getBoundingClientRect();
      const cardX = cardRect.left - wrapRect.left + cardRect.width / 2;
      const cardY = cardRect.top - wrapRect.top + cardRect.height / 2;

      // Subtle curved bezier line from Core (cx, cy) to Card center (cardX, cardY)
      const ctrlX = cx + (cardX - cx) * 0.45;
      const ctrlY = cy + (cardY - cy) * 0.15;
      const d = `M ${cx.toFixed(1)} ${cy.toFixed(1)} Q ${ctrlX.toFixed(1)} ${ctrlY.toFixed(1)} ${cardX.toFixed(1)} ${cardY.toFixed(1)}`;
      path.setAttribute('d', d);

      // Refresh path length for stroke animation if not yet completed
      if (!path.dataset.animated) {
        const len = path.getTotalLength();
        path.style.strokeDasharray = len;
        path.style.strokeDashoffset = len;
      }
    });
  }

  /* Particle travel along a specific path */
  function sendParticle(index) {
    if (isReducedMotion() || isMobile()) return;
    if (typeof gsap === 'undefined') return;

    const path = document.getElementById(`forascom-path-${index}`);
    const particle = document.getElementById(`forascom-particle-${index}`);
    if (!path || !particle) return;

    const len = path.getTotalLength();
    if (!len || len < 10) return;

    const tracker = { progress: 0 };

    gsap.killTweensOf(particle);
    gsap.killTweensOf(tracker);

    gsap.set(particle, { opacity: 0 });

    gsap.timeline()
      .to(particle, {
        opacity: 0.95,
        duration: 0.25,
        ease: 'power1.out'
      })
      .to(tracker, {
        progress: 1,
        duration: 1.8 + Math.random() * 0.6,
        ease: 'power1.inOut',
        onUpdate: () => {
          const currentLen = path.getTotalLength();
          if (currentLen > 0) {
            const pt = path.getPointAtLength(tracker.progress * currentLen);
            particle.setAttribute('cx', pt.x.toFixed(1));
            particle.setAttribute('cy', pt.y.toFixed(1));
          }
        }
      }, '<')
      .to(particle, {
        opacity: 0,
        duration: 0.35,
        ease: 'power1.in'
      }, '-=0.35');
  }

  /* Periodic subtle particle generator */
  function startParticleCycle() {
    if (particleInterval) clearInterval(particleInterval);
    if (isReducedMotion() || isMobile()) return;

    particleInterval = setInterval(() => {
      if (document.hidden) return;
      const randomIdx = Math.floor(Math.random() * 4) + 1;
      sendParticle(randomIdx);

      // Occasionally trigger a secondary pulse
      if (Math.random() > 0.6) {
        setTimeout(() => {
          const secondIdx = ((randomIdx + 1) % 4) + 1;
          sendParticle(secondIdx);
        }, 400);
      }
    }, 3200);
  }

  /* Interactive Specular Light follow on card hover */
  function initCardHoverSheen() {
    const cards = document.querySelectorAll('.forascom-about-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  /* Scroll-driven Floating Movement with ScrollTrigger Scrub */
  function initScrollDrivenFloating() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (isReducedMotion()) return;

    const section = document.getElementById('about');
    if (!section) return;

    const float1 = section.querySelector('.forascom-about-card-float[data-float="1"]');
    const float2 = section.querySelector('.forascom-about-card-float[data-float="2"]');
    const float3 = section.querySelector('.forascom-about-card-float[data-float="3"]');
    const float4 = section.querySelector('.forascom-about-card-float[data-float="4"]');
    const core = section.querySelector('.forascom-about-core-anchor');
    const storyContent = section.querySelector('.forascom-about-content');

    if (isMobile()) {
      // Mobile subtle vertical parallax offsets (no horizontal or rotational shifts)
      scrollFloatingTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      if (float1) scrollFloatingTimeline.to(float1, { y: -10, ease: 'none' }, 0);
      if (float2) scrollFloatingTimeline.to(float2, { y: -18, ease: 'none' }, 0);
      if (float3) scrollFloatingTimeline.to(float3, { y: -12, ease: 'none' }, 0);
      if (float4) scrollFloatingTimeline.to(float4, { y: -20, ease: 'none' }, 0);
      if (storyContent) scrollFloatingTimeline.to(storyContent, { y: 10, ease: 'none' }, 0);
      return;
    }

    // Desktop/Tablet Multi-directional Floating Scrub
    scrollFloatingTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: () => {
          updateConnectionPaths();
        }
      }
    });

    // Card 1 (Solutions): moves slightly upward & inward (x: -15px, y: -20px, rot: 1deg)
    if (float1) {
      scrollFloatingTimeline.to(float1, {
        x: -15,
        y: -20,
        rotation: 1,
        ease: 'none'
      }, 0);
    }

    // Card 2 (AI): moves slightly upward & toward center (x: +12px, y: -30px, rot: -1deg)
    if (float2) {
      scrollFloatingTimeline.to(float2, {
        x: 12,
        y: -30,
        rotation: -1,
        ease: 'none'
      }, 0);
    }

    // Card 3 (Identity): moves slightly upward & inward (x: -12px, y: -25px, rot: -1deg)
    if (float3) {
      scrollFloatingTimeline.to(float3, {
        x: -12,
        y: -25,
        rotation: -1,
        ease: 'none'
      }, 0);
    }

    // Card 4 (Products): moves slightly downward & inward (x: +10px, y: +25px, rot: 1deg)
    if (float4) {
      scrollFloatingTimeline.to(float4, {
        x: 10,
        y: 25,
        rotation: 1,
        ease: 'none'
      }, 0);
    }

    // Technology Core subtle parallax & scale
    if (core) {
      scrollFloatingTimeline.to(core, {
        y: -10,
        scale: 1.05,
        ease: 'none'
      }, 0);
    }

    // Left Column Narrative gentle parallax
    if (storyContent) {
      scrollFloatingTimeline.to(storyContent, {
        y: 14,
        ease: 'none'
      }, 0);
    }
  }

  /* Main GSAP ScrollTrigger Sequence */
  function initMetricCounters() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const metricsBar = document.querySelector('.forascom-about-metrics');
    if (!metricsBar) return;

    const metrics = metricsBar.querySelectorAll('.forascom-about-metric-value');
    if (!metrics.length) return;

    metrics.forEach((metric) => {
      const target = Number(metric.dataset.target || 0);
      const prefix = metric.dataset.prefix || '';
      const suffix = metric.dataset.suffix || '';
      const counter = { value: 0 };
      let activeTween = null;

      const renderValue = (value) => {
        const current = Math.round(value);
        metric.textContent = `${prefix}${current}${suffix}`;
      };

      const resetCounter = () => {
        if (activeTween) {
          activeTween.kill();
          activeTween = null;
        }
        counter.value = 0;
        renderValue(counter.value);
      };

      const animateCounter = () => {
        resetCounter();
        activeTween = gsap.to(counter, {
          value: target,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate: () => renderValue(counter.value),
          onComplete: () => renderValue(target)
        });
      };

      renderValue(0);

      ScrollTrigger.create({
        trigger: metricsBar,
        start: 'top 80%',
        end: 'bottom 25%',
        invalidateOnRefresh: true,
        onEnter: animateCounter,
        onEnterBack: animateCounter,
        onLeave: resetCounter,
        onLeaveBack: resetCounter
      });
    });
  }

  function buildEcosystemAnimation() {
    if (typeof gsap === 'undefined') {
      console.warn('GSAP is not loaded yet. Falling back to default visibility.');
      return;
    }

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    const section = document.getElementById('about');
    if (!section) return;

    // Reduced motion instant reveal
    if (isReducedMotion()) {
      gsap.set(['.forascom-about-badge', '.forascom-about-title-line', '.forascom-about-highlight', '.forascom-about-desc', '.forascom-about-card', '.forascom-about-core-node'], {
        opacity: 1,
        transform: 'none',
        filter: 'none'
      });
      return;
    }

    updateConnectionPaths();

    // Elements
    const badge = section.querySelector('.forascom-about-badge');
    const titleLine = section.querySelector('.forascom-about-title-line');
    const highlight = section.querySelector('.forascom-about-highlight');
    const desc = section.querySelector('.forascom-about-desc');
    const core = section.querySelector('.forascom-about-core');
    const coreRing = section.querySelector('.forascom-about-core-ring');
    const card1 = section.querySelector('.forascom-about-card[data-card="1"]');
    const card2 = section.querySelector('.forascom-about-card[data-card="2"]');
    const card3 = section.querySelector('.forascom-about-card[data-card="3"]');
    const card4 = section.querySelector('.forascom-about-card[data-card="4"]');
    const lines = section.querySelectorAll('.forascom-about-line');
    const icon1 = card1 ? card1.querySelector('.forascom-about-icon') : null;
    const icon2 = card2 ? card2.querySelector('.forascom-about-icon') : null;
    const icon3 = card3 ? card3.querySelector('.forascom-about-icon') : null;
    const icon4 = card4 ? card4.querySelector('.forascom-about-icon') : null;

    // Initial states for entrance
    gsap.set(badge, { opacity: 0, y: 16, filter: 'blur(4px)' });
    gsap.set(titleLine, { opacity: 0, y: 22 });
    gsap.set(highlight, { opacity: 0, y: 22 });
    gsap.set(desc, { opacity: 0, y: 18 });
    if (core) gsap.set(core, { opacity: 0, scale: 0.3 });
    if (coreRing) gsap.set(coreRing, { opacity: 0, scale: 0.6 });

    // Initial states for 4 cards (distinct subtle directions)
    if (card1) gsap.set(card1, { opacity: 0, y: 35, filter: 'blur(6px)' });
    if (card2) gsap.set(card2, { opacity: 0, x: 35, filter: 'blur(6px)' });
    if (card3) gsap.set(card3, { opacity: 0, x: -35, filter: 'blur(6px)' });
    if (card4) gsap.set(card4, { opacity: 0, y: 35, filter: 'blur(6px)' });

    // Reversible, scroll-driven reveal. Progress directly follows the user's scroll position.
    ecosystemTimeline = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: section,
        start: 'top 86%',
        end: '+=600',
        scrub: 1.2,
        invalidateOnRefresh: true
      },
      onComplete: () => {
        lines.forEach(line => line.setAttribute('data-animated', 'true'));
        if (!isMobile()) {
          startParticleCycle();
        }
      }
    });

    ecosystemTimeline.to(badge, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.25
    }, 0);

    ecosystemTimeline.to(titleLine, {
      opacity: 1,
      y: 0,
      duration: 0.28
    }, 0.1);

    ecosystemTimeline.to(highlight, {
      opacity: 1,
      y: 0,
      duration: 0.3
    }, 0.18);

    ecosystemTimeline.to(desc, {
      opacity: 1,
      y: 0,
      duration: 0.26
    }, 0.32);

    if (core && !isMobile()) {
      ecosystemTimeline.to(core, {
        opacity: 1,
        scale: 1,
        duration: 0.28
      }, 0.34);

      if (coreRing) {
        ecosystemTimeline.to(coreRing, {
          opacity: 0.8,
          scale: 1.5,
          duration: 0.28
        }, 0.42);
      }
    }

    if (lines.length > 0 && !isMobile()) {
      ecosystemTimeline.to(lines, {
        strokeDashoffset: 0,
        opacity: 0.55,
        duration: 0.55,
        stagger: 0.08
      }, 0.4);
    }

    if (card1) {
      ecosystemTimeline.to(card1, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.42
      }, 0.24);
    }

    if (card2) {
      ecosystemTimeline.to(card2, {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 0.42
      }, 0.48);
    }

    if (card3) {
      ecosystemTimeline.to(card3, {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 0.42
      }, 0.7);
    }

    if (card4) {
      ecosystemTimeline.to(card4, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.42
      }, 0.92);
    }

    if (icon1) {
      ecosystemTimeline.to(icon1, {
        scale: 1.15,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut'
      }, 0.55);
    }

    if (icon2) {
      ecosystemTimeline.to(icon2, {
        scale: 1.22,
        boxShadow: '0 0 16px rgba(25, 169, 229, 0.4)',
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut'
      }, 0.7);
    }

    if (icon3) {
      ecosystemTimeline.to(icon3, {
        y: -4,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut'
      }, 0.82);
    }

    if (icon4) {
      ecosystemTimeline.to(icon4, {
        scale: 1.14,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: 'power1.inOut'
      }, 0.98);
    }

    if (!isMobile()) {
      ecosystemTimeline.add(() => {
        sendParticle(1);
        sendParticle(2);
        setTimeout(() => {
          sendParticle(3);
          sendParticle(4);
        }, 250);
      }, 0.82);
    }

    initScrollDrivenFloating();
  }

  /* Debounced Window Resize Handler */
  let resizeTimer = null;
  function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updateConnectionPaths();
    }, 150);
  }

  /* Main Initialization */
  function initAboutEcosystem() {
    if (isInitialized) return;
    isInitialized = true;

    initCardHoverSheen();
    buildEcosystemAnimation();
    initMetricCounters();

    window.addEventListener('resize', handleResize, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAboutEcosystem);
  } else {
    initAboutEcosystem();
  }
})();
