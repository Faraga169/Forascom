/* ==========================================================================
   FORASCOM — ADVANCED GSAP MOTION & INTERACTION SYSTEM
   SIA Tech-Inspired Motion Language: Fast -> Precise -> Smooth -> Controlled
   60fps Performance, Magnetic CTAs, Narrative Thread, Parallax Depth, Progress Tracker
   ========================================================================== */

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const isMobile = window.innerWidth < 768;
  const isBuildMobile = window.innerWidth <= 768;

  function navbarSafeStart(percent) {
    return () => {
      const navbar = document.querySelector(".glass-nav");
      const navbarBottom = navbar?.getBoundingClientRect().bottom || 0;
      const preferredPoint = window.innerHeight * (percent / 100);
      return `top ${Math.max(preferredPoint, navbarBottom + 16)}px`;
    };
  }

  /* ==========================================================================
     01. PAGE ENTRANCE TRANSITION
     ========================================================================== */
  function initPageTransition() {
    if (prefersReducedMotion) return;
    gsap.to("body", { opacity: 1, duration: 0.5, ease: "power2.out" });
  }

  /* ======================================================================
     02. MAGNETIC BUTTONS
     ========================================================================== */
  function initMagneticButtons() {
    if (prefersReducedMotion || isMobile) return;
    document.querySelectorAll(".magnetic-btn").forEach((btn) => {
      const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3.out" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3.out" });
      btn.addEventListener("mousemove", (event) => {
        const rect = btn.getBoundingClientRect();
        xTo((event.clientX - rect.left - rect.width / 2) * 0.28);
        yTo((event.clientY - rect.top - rect.height / 2) * 0.28);
      });
      btn.addEventListener("mouseleave", () => {
        xTo(0);
        yTo(0);
      });
    });
  }

  /* ==========================================================================
     04. HERO CANVAS PARTICLE FIELD
     ========================================================================== */
  function initHeroCanvas() {
    if (prefersReducedMotion) return;
    const canvas = document.getElementById("n-hero-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = 0,
      height = 0,
      particles = [],
      frame = null;
    const count = isMobile ? 20 : 50;
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const seed = () => {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.45 + 0.2,
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.fillStyle = `rgba(25, 169, 229, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        p.x = (p.x + p.vx + width) % width;
        p.y = (p.y + p.vy + height) % height;
      });
      frame = requestAnimationFrame(draw);
    };
    resize();
    seed();
    draw();
    window.addEventListener("resize", () => {
      resize();
      seed();
    });
  }

  /* ==========================================================================
     05. HERO ANIMATION
     ========================================================================== */
  function initHeroAnimation() {
    if (prefersReducedMotion) return;
    const hero = document.querySelector(".n-hero");
    if (!hero) return;
    const bgGrid = document.querySelector(".n-hero-bg-grid");
    const tag = document.querySelector(".n-hero-tag");
    const lines = document.querySelectorAll(".n-hero-title .n-line-inner");
    const subtitle = document.querySelector(".n-hero-subtitle");
    const pills = document.querySelectorAll(".about-hero-pills span");
    const actions = document.querySelector(".n-hero-actions");
    const tl = gsap.timeline({ delay: 0.15 });
    if (bgGrid) tl.from(bgGrid, { opacity: 0, duration: 1.2 }, 0);
    if (tag) tl.from(tag, { opacity: 0, y: 20, duration: 0.6 }, 0.1);
    if (lines.length)
      tl.from(lines, { y: "110%", duration: 0.9, stagger: 0.15 }, 0.25);
    if (subtitle)
      tl.fromTo(
        subtitle,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.85 },
        "-=0.4",
      );
    if (pills.length)
      tl.from(
        pills,
        { opacity: 0, y: 16, duration: 0.5, stagger: 0.15 },
        "-=0.35",
      );
    if (actions)
      tl.from(actions, { opacity: 0, y: 25, duration: 0.75 }, "-=0.3");
  }

  let heroBackgroundParallaxStarted = false;

  function initHeroBackgroundParallax() {
    if (heroBackgroundParallaxStarted) return;
    if (prefersReducedMotion || window.matchMedia("(max-width: 991px)").matches)
      return;

    const hero = document.querySelector(".about-hero-section");
    const layer = hero?.querySelector(".about-hero-bg-layer");
    if (!hero || !layer) return;
    heroBackgroundParallaxStarted = true;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frameId = 0;

    const renderParallax = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      layer.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frameId = requestAnimationFrame(renderParallax);
    };

    const stopParallax = () => {
      cancelAnimationFrame(frameId);
      layer.style.transform = "translate3d(0, 0, 0)";
    };

    frameId = requestAnimationFrame(renderParallax);

    hero.addEventListener("mousemove", (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      targetX = -x * 8;
      targetY = -y * 6;
    });

    hero.addEventListener("mouseleave", () => {
      targetX = 0;
      targetY = 0;
    });

    window.addEventListener("pagehide", stopParallax, { once: true });
  }

  /* ==========================================================================
     06. STORY — JOURNEY OF TRANSFORMATION (Cinematic Scroll Narrative)
     ========================================================================== */
  function initStorySection() {
    const story = document.getElementById("story");
    if (!story) return;

    if (story.classList.contains("who-we-are")) {
      const header = story.querySelector(".who-we-are-header");
      const cards = story.querySelectorAll(".who-we-are-card");
      const stats = story.querySelectorAll(".counter[data-target]");
      const centerNode = story.querySelector(".center-glow-node");
      const cardsContainer = story.querySelector(".who-we-are-cards-container");

      if (prefersReducedMotion) {
        gsap.set([header, cards, centerNode], { opacity: 1, y: 0, scale: 1 });
        stats.forEach((stat) => (stat.textContent = stat.dataset.target));
        return;
      }

      const entrance = gsap.timeline({
        scrollTrigger: {
          trigger: ".who-we-are-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      if (header)
        entrance.from(header.children, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          immediateRender: false,
        });
      if (cards.length) {
        entrance.from(
          cards,
          {
            y: 25,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
            immediateRender: false,
          },
          "-=0.35",
        );
      }
      if (cardsContainer) {
        entrance.fromTo(
          cardsContainer,
          {
            "--who-cross-horizontal": 0,
            "--who-cross-vertical": 0,
          },
          {
            "--who-cross-horizontal": 1,
            "--who-cross-vertical": 1,
            duration: 0.5,
            ease: "power1.inOut",
          },
          "-=0.2",
        );
      }
      if (centerNode) {
        entrance.from(
          centerNode,
          {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            ease: "back.out(1.7)",
            immediateRender: false,
          },
          "-=0.2",
        );
        gsap.to(centerNode, {
          boxShadow: "0 0 18px rgba(0, 210, 255, 1)",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
      if (stats.length) {
        stats.forEach((stat) => {
          const target = Number(stat.dataset.target) || 0;
          const value = { amount: 0 };
          entrance.to(
            value,
            {
              amount: target,
              duration: 1.2,
              ease: "power2.out",
              onUpdate: () => {
                stat.textContent = Math.round(value.amount);
              },
            },
            "-=0.8",
          );
        });
      }
      return;
    }

    const headingLines = story.querySelectorAll(".n-story-heading-inner");
    const lead = story.querySelector(".n-story-lead");
    const journey = story.querySelector(".n-story-journey");
    const threadFill = story.querySelector(".n-story-thread-fill");
    const threadDot = story.querySelector(".n-story-thread-dot");
    const chapters = story.querySelectorAll(".n-story-chapter");
    const bgGrid = story.querySelector(".n-story-bg-grid");
    const bgGlow = story.querySelector(".n-story-bg-glow");

    if (chapters.length === 0) return;

    if (prefersReducedMotion) {
      gsap.set([headingLines, lead, chapters, threadFill, threadDot], {
        opacity: 1,
        y: 0,
        yPercent: 0,
        x: 0,
        scale: 1,
      });
      return;
    }

    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: story,
        start: navbarSafeStart(70),
        once: true,
      },
    });

    headerTl.from(
      headingLines,
      {
        yPercent: 110,
        duration: 0.7,
        stagger: 0.1,
        ease: "power4.out",
      },
      0.1,
    );

    if (lead) {
      headerTl.from(
        lead,
        {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.35",
      );
    }

    chapters.forEach((chapter, i) => {
      const card = chapter.querySelector(".n-story-chapter-card");
      const num = chapter.querySelector(".n-story-chapter-num");
      const icon = chapter.querySelector(".n-story-chapter-icon");
      const meta = chapter.querySelector(".n-story-chapter-meta");
      const isEven = i % 2 === 1;

      if (card) {
        gsap.set(card, {
          opacity: 0,
          y: 15,
          x: isMobile ? 0 : isEven ? 12 : -12,
          scale: 0.99,
          transformPerspective: 1000,
        });
      }
      if (num) gsap.set(num, { opacity: 0 });
      if (icon) gsap.set(icon, { opacity: 0, scale: 0.9 });
      if (meta) gsap.set(meta, { opacity: 0, y: 10 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: chapter,
          start: navbarSafeStart(85),
          once: true,
        },
        onComplete: () => {
          if (!isMobile && card && window.innerWidth >= 1024) {
            attachChapterTilt(chapter, card);
          }
        },
      });

      if (card) {
        tl.to(card, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
        });
      }

      if (num) {
        tl.to(
          num,
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.4",
        );
      }

      if (icon) {
        tl.to(
          icon,
          {
            opacity: 1,
            scale: 1,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.3",
        );
      }

      if (meta) {
        tl.to(
          meta,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25",
        );
      }
    });

    let lastActiveIndex = -1;

    ScrollTrigger.create({
      trigger: journey,
      start: navbarSafeStart(70),
      end: "bottom 55%",
      scrub: 1.2,
      onUpdate: (self) => {
        const p = self.progress;

        if (threadFill) {
          gsap.set(threadFill, { scaleY: p });
        }

        if (threadDot) {
          gsap.set(threadDot, { top: p * 100 + "%" });
        }

        const activeIndex = Math.min(
          Math.floor(p * chapters.length),
          chapters.length - 1,
        );

        if (activeIndex !== lastActiveIndex) {
          lastActiveIndex = activeIndex;

          chapters.forEach((c, ci) => {
            const isActive = ci === activeIndex;
            c.classList.toggle("is-active", isActive);

            const card = c.querySelector(".n-story-chapter-card");
            if (card) {
              gsap.to(card, {
                scale: isActive ? 1.01 : 1,
                duration: 0.6,
                ease: "power2.out",
                overwrite: "auto",
              });
            }
          });
        }
      },
    });

    if (!isMobile) {
      if (bgGrid) {
        gsap.to(bgGrid, {
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: story,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      if (bgGlow) {
        gsap.to(bgGlow, {
          yPercent: -3,
          ease: "none",
          scrollTrigger: {
            trigger: story,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }
  }

  /* Restrained 3D tilt — very subtle, desktop ≥1024px only */
  function attachChapterTilt(chapter, card) {
    const rotXTo = gsap.quickTo(card, "rotationX", {
      duration: 0.6,
      ease: "power2.out",
    });
    const rotYTo = gsap.quickTo(card, "rotationY", {
      duration: 0.6,
      ease: "power2.out",
    });

    chapter.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;

      rotXTo(-py * 1.5);
      rotYTo(px * 1.5);
    });

    chapter.addEventListener("mouseleave", () => {
      rotXTo(0);
      rotYTo(0);
    });
  }

  /* ==========================================================================
     07. WHAT WE BUILD — THE FORASCOM BUILD SYSTEM
     ========================================================================== */

  const buildCapabilities = {
    web: {
      number: "01",
      label: "تطوير الويب",
      title: "نبني تجارب Web تناسب مشروعك.",
      copy: "نبني تجارب وحلول Web تناسب احتياجات مشروعك.",
      specs: ["WordPress", "Custom Code"],
    },
    ai: {
      number: "02",
      label: "أتمتة الذكاء الاصطناعي",
      title: "نحوّل العمليات المتكررة إلى أنظمة ذكية.",
      copy: "نحوّل العمليات المتكررة إلى أنظمة ذكية.",
      specs: ["n8n", "RAG", "AI Agents"],
    },
    power: {
      number: "03",
      label: "Power Platform",
      title: "حلول أعمال أسرع وأوضح.",
      copy: "نبني Business Solutions بسرعة باستخدام Microsoft Power Platform.",
      specs: ["Power Apps", "Power Automate", "Power BI", "Dataverse"],
    },
  };

  function initBuildShowcase() {
    const build = document.getElementById("build");
    if (!build) return; // Ensure the build element exists

    const services = Array.from(build.querySelectorAll("[data-build-service]"));
    const detail = build.querySelector(".n-build-service-detail");
    const detailIndex = build.querySelector("[data-build-detail-index]");
    const detailLabel = build.querySelector("[data-build-detail-label]");
    const detailTitle = build.querySelector("[data-build-detail-title]");
    const detailCopy = build.querySelector("[data-build-detail-copy]");
    const detailSpecs = build.querySelector("[data-build-detail-specs]");
    const detailFlow = build.querySelector("[data-build-flow]");
    if (services.length === 0 || !detail) return;

    let activeKey = "web";
    let detailRenderId = 0;

    function renderDetail(key) {
      const capability = buildCapabilities[key];
      if (!capability) return;
      const update = () => {
        if (detailIndex) detailIndex.textContent = `${capability.number} / 03`;
        if (detailLabel) detailLabel.textContent = capability.label;
        if (detailTitle) detailTitle.textContent = capability.title;
        if (detailCopy) detailCopy.textContent = capability.copy;
        if (detailSpecs) {
          detailSpecs.replaceChildren(
            ...capability.specs.map((spec) => {
              const item = document.createElement("span");
              item.textContent = spec;
              return item;
            }),
          );
        }
        if (detailFlow) detailFlow.hidden = key !== "ai";
      };
      if (prefersReducedMotion) {
        detail.classList.remove("is-changing");
        update();
        return;
      }
      const renderId = ++detailRenderId;
      detail.classList.add("is-changing");
      window.setTimeout(() => {
        if (renderId !== detailRenderId) return;
        update();
        detail.classList.remove("is-changing");
      }, 180);
    }

    function setActive(key, render = true) {
      if (!buildCapabilities[key]) return;
      activeKey = key;
      services.forEach((service) => {
        const active = service.dataset.buildService === key;
        service.classList.toggle("is-active", active);
        service.classList.toggle("is-subdued", !active);
        service.setAttribute("aria-pressed", String(active));
      });
      if (render) renderDetail(key);
    }

    services.forEach((service) => {
      const key = service.dataset.buildService;
      service.addEventListener("mouseenter", () => setActive(key));
      service.addEventListener("focus", () => setActive(key));
      service.addEventListener("mouseleave", () => setActive(activeKey));
      service.addEventListener("blur", () => setActive(activeKey));
      service.addEventListener("click", () => setActive(key));
    });

    setActive(activeKey, false);
    renderDetail(activeKey);

    if (!prefersReducedMotion) {
      const iconTargets = services.map((service) =>
        service.querySelector(".n-build-service-icon"),
      );
      const textTargets = services.flatMap((service) => [
        service.querySelector("strong"),
        service.querySelector(".n-build-service-ar"),
        service.querySelector(".n-build-service-copy"),
        service.querySelector(".n-build-service-tags"),
      ]);
      const showcaseTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: build,
          start: navbarSafeStart(70),
          once: true,
        },
        defaults: { ease: "power3.out" },
      });
      gsap.set([services, detail], { opacity: 0, y: 18 });
      gsap.set(iconTargets, { opacity: 0, y: 12, scale: 0.82 });
      showcaseTimeline.to(services, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.1,
      });
      showcaseTimeline.to(
        iconTargets,
        { opacity: 1, y: 0, scale: 1, duration: 0.42, stagger: 0.08 },
        "-=0.3",
      );
      showcaseTimeline.to(
        textTargets,
        { opacity: 1, y: 0, duration: 0.38, stagger: 0.035 },
        "-=0.18",
      );
      showcaseTimeline.to(
        detail,
        { opacity: 1, y: 0, duration: 0.45 },
        "-=0.15",
      );
    }
  }

  /* Editorial header reveal — line-mask, once */
  function initBuildHeader() {
    const build = document.getElementById("build");
    if (!build) return;

    const headingLines = build.querySelectorAll(".n-build-heading-inner");
    const lead = build.querySelector(".n-build-lead");

    if (prefersReducedMotion) {
      gsap.set([headingLines, lead], { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: build,
        start: navbarSafeStart(70),
        once: true,
      },
    });

    tl.from(
      headingLines,
      {
        yPercent: 110,
        duration: 0.75,
        stagger: 0.12,
        ease: "power4.out",
      },
      0.1,
    );

    if (lead) {
      tl.from(
        lead,
        {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.35",
      );
    }
  }

  /* Row entrance — minimal fade-up, once, desktop + mobile */
  function initBuildRows() {
    const build = document.getElementById("build");
    if (!build) return;

    const rows = build.querySelectorAll(".n-build-row");
    if (rows.length === 0) return;

    if (prefersReducedMotion) {
      gsap.set(rows, { opacity: 1, y: 0 });
      return;
    }

    rows.forEach((row, i) => {
      gsap.from(row, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: navbarSafeStart(88),
          toggleActions: "play none none none",
        },
        delay: i * 0.06,
      });
    });
  }

  function initBuildGrid() {
    const build = document.getElementById("build");
    if (!build || isBuildMobile) return; // Ensure build exists and is not mobile

    const rows = Array.from(build.querySelectorAll(".n-build-row"));
    const visuals = {
      software:
        '<svg viewBox="0 0 180 72" aria-hidden="true"><path d="M12 36h32m32 0h28m32 0h32M44 36l16-18m0 36L44 36m60 0 16-18m0 36-16-18"/><rect x="8" y="26" width="20" height="20" rx="3"/><rect x="60" y="8" width="28" height="18" rx="3"/><rect x="60" y="46" width="28" height="18" rx="3"/><circle cx="120" cy="36" r="5"/><rect x="144" y="26" width="28" height="20" rx="3"/></svg>',
      ai: '<svg viewBox="0 0 180 72" aria-hidden="true"><path d="M14 14l52 22-52 22M66 36l48-22m-48 22 48 22m0-44 48 22-48 22"/><circle cx="14" cy="14" r="5"/><circle cx="14" cy="58" r="5"/><circle cx="66" cy="36" r="7"/><circle cx="114" cy="14" r="5"/><circle cx="114" cy="58" r="5"/><circle cx="162" cy="36" r="6"/></svg>',
      automation:
        '<svg viewBox="0 0 180 72" aria-hidden="true"><path d="M10 36h34m30 0h28m30 0h32m-12-8 12 8-12 8"/><rect x="8" y="22" width="36" height="28" rx="4"/><rect x="74" y="22" width="28" height="28" rx="4"/><rect x="132" y="22" width="36" height="28" rx="4"/><circle cx="26" cy="36" r="4"/><circle cx="88" cy="36" r="4"/><circle cx="150" cy="36" r="4"/></svg>',
      products:
        '<svg viewBox="0 0 180 72" aria-hidden="true"><path d="M10 60h160M20 52V12h72v40m18 0V24h50v28"/><rect x="30" y="22" width="20" height="18" rx="2"/><rect x="58" y="22" width="20" height="18" rx="2"/><rect x="120" y="32" width="28" height="12" rx="2"/><circle cx="148" cy="14" r="5"/></svg>',
      saas: '<svg viewBox="0 0 180 72" aria-hidden="true"><path d="M24 52h132M58 36h64m-32 16V14M36 52c-16 0-16-22 0-24 5-16 29-14 34 2 16-12 38-2 34 14 18-6 31 9 18 20H36Z"/><circle cx="24" cy="52" r="4"/><circle cx="156" cy="52" r="4"/><circle cx="90" cy="14" r="4"/></svg>',
      lowcode:
        '<svg viewBox="0 0 180 72" aria-hidden="true"><path d="M18 54l36-24 36 24 36-24 36 24M54 30V10m72 20V10"/><rect x="8" y="46" width="20" height="16" rx="3"/><rect x="44" y="22" width="20" height="16" rx="3"/><rect x="80" y="46" width="20" height="16" rx="3"/><rect x="116" y="22" width="20" height="16" rx="3"/><rect x="152" y="46" width="20" height="16" rx="3"/></svg>',
    };

    function closeRow(row) {
      const body = row.querySelector(".n-build-row-body");
      row.classList.remove("is-open", "is-active");
      row
        .querySelector(".n-build-row-trigger")
        ?.setAttribute("aria-expanded", "false");
      if (!body) return;
      if (prefersReducedMotion) {
        gsap.set(body, { display: "none", height: 0, opacity: 0 });
        return;
      }
      gsap.to(body, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
        onComplete: () => gsap.set(body, { display: "none" }),
      });
    }

    function openRow(row) {
      const body = row.querySelector(".n-build-row-body");
      if (!body) return;
      row.classList.add("is-open", "is-active");
      row
        .querySelector(".n-build-row-trigger")
        ?.setAttribute("aria-expanded", "true");
      if (prefersReducedMotion) {
        gsap.set(body, { display: "block", height: "auto", opacity: 1 });
        return;
      }
      gsap.set(body, { display: "block", height: "auto", opacity: 1 });
      const height = body.offsetHeight;
      gsap.fromTo(
        body,
        { height: 0, opacity: 0 },
        {
          height,
          opacity: 1,
          duration: 0.45,
          ease: "power2.out",
          onComplete: () => gsap.set(body, { height: "auto" }),
        },
      );
    }

    rows.forEach((row) => {
      const key = row.dataset.build;
      const body = row.querySelector(".n-build-row-body");
      if (!body) return;
      const visual = document.createElement("div");
      visual.className = "n-build-grid-visual";
      visual.innerHTML = visuals[key] || "";
      body.prepend(visual);
      const trigger = row.querySelector(".n-build-row-trigger");
      const toggle = (event) => {
        event.preventDefault();
        const wasOpen = row.classList.contains("is-open");
        rows.forEach((item) => {
          if (item !== row && item.classList.contains("is-open"))
            closeRow(item);
        });
        if (wasOpen) closeRow(row);
        else openRow(row);
      };
      trigger?.addEventListener("click", toggle);
      trigger?.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") toggle(event);
      });
    });

    const first = rows[0];
    rows.slice(1).forEach(closeRow);
    if (first) openRow(first);
  }

  /* Desktop: scroll-scrub active index + console crossfade + progress */
  function initBuildConsole() {
    const build = document.getElementById("build");
    if (!build) return;

    const index = build.querySelector("#n-build-index");
    const consoleEl = build.querySelector("#n-build-console");
    const progressFill = build.querySelector("#n-build-progress-fill");
    const consoleProgress = build.querySelector("#n-build-console-progress");
    const consoleCount = build.querySelector("#n-build-console-count");
    const inlineDetails = build.querySelector("#n-build-inline-details");
    const inlineDetailsInner = inlineDetails?.querySelector(
      ".n-build-inline-details-inner",
    );

    if (!index || !consoleEl) return;
    const triggers = index.querySelectorAll(".n-build-row");
    const panels = Array.from(
      consoleEl.querySelectorAll(".n-build-console-panel"),
    );

    if (triggers.length === 0 || panels.length === 0) return;

    const buildData = Array.from(triggers)
      .map((row) => {
        const key = row.dataset.build;
        const panel = panels.find((p) => p.dataset.panel === key);
        return { row, panel };
      })
      .filter((d) => d.panel);

    let activeIndex = buildData.findIndex((d) =>
      d.row.classList.contains("is-active"),
    );
    let lastActiveIndex = -1;
    let clickOverride = false;
    let clickOverrideUntil = 0;
    let panelTransition;
    let inlineTransition;

    const technicalLabels = {
      software: "ARCHITECTURE SYSTEMS",
      ai: "INTELLIGENCE SYSTEMS",
      automation: "WORKFLOW SYSTEMS",
      products: "PRODUCT SYSTEMS",
      saas: "CLOUD SYSTEMS",
      lowcode: "MODULAR SYSTEMS",
    };

    const inlineVisuals = {
      software: `<svg class="n-build-tech-visual" viewBox="0 0 260 110" role="img" aria-label="Software architecture visualization">
        <path data-tech-line d="M24 55H76M130 55H184M76 55L104 28M76 55L104 82M156 55L184 28M156 55L184 82" />
        <rect data-tech-node x="8" y="40" width="32" height="30" rx="4" /><rect data-tech-node x="104" y="14" width="52" height="28" rx="4" /><rect data-tech-node x="104" y="68" width="52" height="28" rx="4" /><rect data-tech-node x="184" y="14" width="52" height="28" rx="4" /><rect data-tech-node x="184" y="68" width="52" height="28" rx="4" />
        <circle data-tech-node cx="130" cy="55" r="5" />
      </svg>`,
      ai: `<svg class="n-build-tech-visual" viewBox="0 0 260 110" role="img" aria-label="AI neural network visualization">
        <path data-tech-line d="M30 20L105 55L30 90M105 55L180 20M105 55L180 90M180 20L230 55L180 90" />
        <circle data-tech-node cx="30" cy="20" r="7" /><circle data-tech-node cx="30" cy="90" r="7" /><circle data-tech-node cx="105" cy="55" r="10" /><circle data-tech-node cx="180" cy="20" r="7" /><circle data-tech-node cx="180" cy="90" r="7" /><circle data-tech-node cx="230" cy="55" r="9" />
      </svg>`,
      automation: `<svg class="n-build-tech-visual" viewBox="0 0 260 110" role="img" aria-label="Automation workflow visualization">
        <path data-tech-line d="M20 55H62M98 55H140M176 55H238" /><path data-tech-line d="M224 45L238 55L224 65" />
        <rect data-tech-node x="8" y="35" width="54" height="40" rx="5" /><rect data-tech-node x="98" y="35" width="42" height="40" rx="5" /><rect data-tech-node x="176" y="35" width="48" height="40" rx="5" />
        <circle data-tech-node cx="35" cy="55" r="6" /><circle data-tech-node cx="119" cy="55" r="6" /><circle data-tech-node cx="200" cy="55" r="6" />
      </svg>`,
      products: `<svg class="n-build-tech-visual" viewBox="0 0 260 110" role="img" aria-label="Digital product blocks visualization">
        <path data-tech-line d="M20 88H238M32 78V24H142V78M158 78V40H226V78" />
        <rect data-tech-node x="46" y="36" width="34" height="28" rx="3" /><rect data-tech-node x="90" y="36" width="34" height="28" rx="3" /><rect data-tech-node x="172" y="51" width="40" height="18" rx="3" /><circle data-tech-node cx="210" cy="25" r="9" />
      </svg>`,
      saas: `<svg class="n-build-tech-visual" viewBox="0 0 260 110" role="img" aria-label="SaaS cloud systems visualization">
        <path data-tech-line d="M44 67H216M80 44H180M116 25H144M130 67V25" />
        <path data-tech-line d="M72 76C52 76 48 48 70 44C76 25 108 22 116 43C136 28 166 36 164 57C187 48 210 65 194 81H72Z" />
        <circle data-tech-node cx="44" cy="67" r="7" /><circle data-tech-node cx="216" cy="67" r="7" /><circle data-tech-node cx="130" cy="25" r="7" />
      </svg>`,
      lowcode: `<svg class="n-build-tech-visual" viewBox="0 0 260 110" role="img" aria-label="Low-code modular blocks visualization">
        <path data-tech-line d="M30 80L76 48L122 80L168 48L214 80M76 48V20M168 48V20" />
        <rect data-tech-node x="14" y="68" width="32" height="24" rx="4" /><rect data-tech-node x="60" y="36" width="32" height="24" rx="4" /><rect data-tech-node x="106" y="68" width="32" height="24" rx="4" /><rect data-tech-node x="152" y="36" width="32" height="24" rx="4" /><rect data-tech-node x="198" y="68" width="32" height="24" rx="4" />
      </svg>`,
    };

    function renderInlineDetails(panel) {
      if (!inlineDetailsInner) return;
      const key = panel.dataset.panel;
      const create = (tag, className, text) => {
        const element = document.createElement(tag);
        element.className = className;
        if (text !== undefined) element.textContent = text;
        return element;
      };
      const number = panel
        .querySelector(".n-build-console-num")
        ?.cloneNode(true);
      const title = panel
        .querySelector(".n-build-console-title")
        ?.cloneNode(true);
      const arabic = panel
        .querySelector(".n-build-console-en")
        ?.cloneNode(true);
      const description = panel
        .querySelector(".n-build-console-desc")
        ?.cloneNode(true);
      const specs = panel
        .querySelector(".n-build-console-specs")
        ?.cloneNode(true);
      if (!number || !title || !arabic || !description || !specs) return;

      number.classList.add("n-build-inline-watermark");
      title.classList.add("n-build-inline-english");
      arabic.classList.add("n-build-inline-arabic");
      const content = create("div", "n-build-inline-content");
      content.append(number, title, arabic);
      content.appendChild(
        create("div", "n-build-inline-label", technicalLabels[key]),
      );
      content.append(description, specs);

      const visual = create("div", "n-build-inline-visual");
      visual.innerHTML = inlineVisuals[key] || "";

      const status = create("div", "n-build-inline-status");
      status.append(
        create("span", "n-build-inline-system", "FORASCOM BUILD SYSTEM"),
        create(
          "span",
          "n-build-inline-count",
          "BUILD " + String(activeIndex + 1).padStart(2, "0") + " / 06",
        ),
        create("span", "n-build-inline-active", "STATUS · ACTIVE"),
      );

      inlineDetailsInner.replaceChildren(content, visual, status);
    }

    function updateInlineCount(index) {
      const count = inlineDetailsInner?.querySelector(".n-build-inline-count");
      if (count)
        count.textContent =
          "BUILD " + String(index + 1).padStart(2, "0") + " / 06";
    }

    function animateInlineVisual() {
      if (!inlineDetailsInner || prefersReducedMotion) return;
      const nodes = inlineDetailsInner.querySelectorAll("[data-tech-node]");
      const lines = inlineDetailsInner.querySelectorAll("[data-tech-line]");
      gsap.set(nodes, { opacity: 0, y: 3 });
      gsap.set(lines, { opacity: 0 });
      gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .to(lines, { opacity: 0.72, duration: 0.3 })
        .to(
          nodes,
          { opacity: 1, y: 0, duration: 0.3, stagger: 0.025 },
          "-=0.18",
        );
    }

    function closeInlineDetails() {
      if (!inlineDetails || !inlineDetails.classList.contains("is-open")) {
        return;
      }

      if (inlineTransition) inlineTransition.kill();
      inlineTransition = gsap.timeline({ defaults: { ease: "power2.out" } });
      inlineTransition.to(inlineDetails, {
        width: 0,
        opacity: 0,
        x: 12,
        duration: 0.35,
        onComplete: () => {
          inlineDetails.parentElement?.classList.remove("is-detail-open");
          inlineDetails.classList.remove("is-open");
          inlineDetails.setAttribute("aria-hidden", "true");
        },
      });
    }

    function openInlineDetails(index) {
      if (!inlineDetails || !inlineDetailsInner) return;

      const row = buildData[index]?.row;
      const panel = buildData[index]?.panel;
      if (!row || !panel) return;

      if (inlineTransition) inlineTransition.kill();
      const previousRow = inlineDetails.parentElement;
      const open = () => {
        renderInlineDetails(panel);
        row.appendChild(inlineDetails);
        row.classList.add("is-detail-open");
        inlineDetails.classList.add("is-open");
        inlineDetails.setAttribute("aria-hidden", "false");

        const naturalWidth = Math.min(
          380,
          Math.max(300, row.parentElement.clientWidth * 0.52),
        );
        gsap.set(inlineDetails, {
          display: "block",
          width: 0,
          opacity: 0,
          x: 12,
        });
        gsap.set(inlineDetailsInner.children, { opacity: 0, y: 6 });
        inlineTransition = gsap.timeline({
          defaults: { ease: "power2.out" },
        });
        inlineTransition.to(inlineDetails, {
          width: naturalWidth,
          opacity: 1,
          x: 0,
          duration: 0.45,
        });
        inlineTransition.to(
          inlineDetailsInner.children,
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.035 },
          "-=0.25",
        );
        inlineTransition.add(animateInlineVisual, "-=0.28");
      };

      if (
        previousRow &&
        previousRow !== row &&
        inlineDetails.classList.contains("is-open")
      ) {
        previousRow.classList.remove("is-detail-open");
        inlineTransition = gsap.timeline({ defaults: { ease: "power2.out" } });
        inlineTransition.to(inlineDetails, {
          width: 0,
          opacity: 0,
          x: 12,
          duration: 0.25,
          onComplete: open,
        });
      } else {
        open();
      }
    }

    function updateProgress(index, progress) {
      if (progressFill) {
        gsap.set(progressFill, { height: progress * 100 + "%" });
      }
      if (consoleProgress) {
        gsap.set(consoleProgress, { width: progress * 100 + "%" });
      }
      if (consoleCount) {
        const num = String(index + 1).padStart(2, "0");
        consoleCount.textContent = "BUILD " + num + " / 06";
      }
    }

    function setActive(index, animate = false, progress = null) {
      if (index < 0 || index >= buildData.length || index === undefined) {
        return;
      }

      const nextPanel = buildData[index].panel;
      const currentPanel = panels.find((panel) =>
        panel.classList.contains("is-active"),
      );
      const hasPanelChange = currentPanel && currentPanel !== nextPanel;

      activeIndex = index;
      lastActiveIndex = index;

      buildData.forEach((d, di) => {
        const isActive = di === index;
        d.row.classList.toggle("is-active", isActive);
      });

      updateProgress(
        index,
        progress === null
          ? index / Math.max(1, buildData.length - 1)
          : progress,
      );
      updateInlineCount(index);

      if (!hasPanelChange) {
        nextPanel.classList.add("is-active");
        if (!isBuildMobile && animate) {
          if (inlineDetails?.classList.contains("is-open")) {
            closeInlineDetails();
          } else {
            openInlineDetails(index);
          }
        }
        return;
      }

      if (!animate || prefersReducedMotion) {
        panels.forEach((panel) => {
          panel.classList.toggle("is-active", panel === nextPanel);
        });
        gsap.set(panels, { clearProps: "opacity,transform" });
        if (!isBuildMobile) {
          closeInlineDetails();
          if (animate) openInlineDetails(index);
        }
        return;
      }

      if (panelTransition) panelTransition.kill();

      panelTransition = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      gsap.set(nextPanel, { visibility: "visible", opacity: 0, y: 6 });
      panelTransition.to(currentPanel, {
        opacity: 0,
        y: -6,
        duration: 0.2,
      });
      panelTransition.add(() => {
        currentPanel.classList.remove("is-active");
        nextPanel.classList.add("is-active");
        gsap.set(nextPanel, { opacity: 0, y: 6 });
      });
      panelTransition.to(nextPanel, {
        opacity: 1,
        y: 0,
        duration: 0.4,
      });

      if (!isBuildMobile) openInlineDetails(index);
    }

    if (prefersReducedMotion) {
      gsap.set([buildData.map((d) => d.row), panels], {
        opacity: 1,
        transform: "none",
      });
      setActive(activeIndex < 0 ? 0 : activeIndex, false, 0);
      return;
    }

    if (isBuildMobile) return; // mobile uses the accordion

    buildData.forEach((d, index) => {
      d.row.addEventListener("click", () => {
        clickOverride = true;
        clickOverrideUntil = performance.now() + 650;
        setActive(index, true);
      });
    });

    window.addEventListener(
      "scroll",
      () => {
        clickOverride = false;
      },
      { passive: true },
    );

    ScrollTrigger.create({
      trigger: index,
      start: navbarSafeStart(58),
      end: "bottom 42%",
      scrub: 1.2,
      onUpdate: (self) => {
        if (clickOverride) {
          if (performance.now() >= clickOverrideUntil) {
            clickOverride = false;
          } else {
            return;
          }
        }

        const p = self.progress;

        const smooth = gsap.utils.clamp(0, 1, p);
        const activeIndex = Math.min(
          Math.floor(smooth * buildData.length),
          buildData.length - 1,
        );

        updateProgress(activeIndex, smooth);

        if (activeIndex !== lastActiveIndex) {
          lastActiveIndex = activeIndex;
          setActive(activeIndex, true, smooth);
        }
      },
    });
  }

  /* Restrained 3D tilt on the console — desktop ≥1024px only */
  function attachBuildTilt() {
    const build = document.getElementById("build");
    if (
      !build ||
      prefersReducedMotion ||
      isBuildMobile ||
      window.innerWidth < 1024
    )
      return;

    const consoleWrap = build.querySelector(".n-build-console-wrap");
    const consoleEl = build.querySelector("#n-build-console");
    if (!consoleWrap || !consoleEl) return;

    const rotXTo = gsap.quickTo(consoleEl, "rotationX", {
      duration: 0.6,
      ease: "power2.out",
    });
    const rotYTo = gsap.quickTo(consoleEl, "rotationY", {
      duration: 0.6,
      ease: "power2.out",
    });

    gsap.set(consoleEl, { transformPerspective: 1000 });

    consoleWrap.addEventListener("mousemove", (e) => {
      const rect = consoleEl.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;

      rotXTo(gsap.utils.clamp(-1.5, 1.5, -py * 1.5));
      rotYTo(gsap.utils.clamp(-1.5, 1.5, px * 1.5));
    });

    consoleWrap.addEventListener("mouseleave", () => {
      rotXTo(0);
      rotYTo(0);
    });
  }

  /* Mobile: touch accordion — one open at a time, first open by default */
  function initBuildMobile() {
    if (!isBuildMobile) return;

    const reduceMotion = prefersReducedMotion;
    const build = document.getElementById("build");
    if (!build) return;

    const rows = Array.from(build.querySelectorAll(".n-build-row"));
    const mobileInd = build.querySelector("#n-build-mobile-ind");
    const segs = mobileInd
      ? mobileInd.querySelectorAll(".n-build-mobile-seg")
      : [];
    if (rows.length === 0) return;

    const defaultValue = rows[0];

    function closeRow(row) {
      const body = row.querySelector(".n-build-row-body");
      const trigger = row.querySelector(".n-build-row-trigger");
      row.classList.remove("is-open");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
      if (!body) return;

      if (reduceMotion) {
        gsap.set(body, { clearProps: "all" });
        return;
      }

      gsap.to(body, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          gsap.set(body, { display: "none" });
        },
      });
    }

    function openRow(row) {
      const body = row.querySelector(".n-build-row-body");
      const trigger = row.querySelector(".n-build-row-trigger");
      row.classList.add("is-open");
      if (trigger) trigger.setAttribute("aria-expanded", "true");
      if (!body) return;

      if (reduceMotion) {
        gsap.set(body, { clearProps: "all" });
        return;
      }

      gsap.set(body, { display: "block", height: "auto", opacity: 1 });
      const h = body.offsetHeight;
      gsap.fromTo(
        body,
        { height: 0, opacity: 0 },
        {
          height: h,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(body, { height: "auto" });
          },
        },
      );
    }

    function updateMobileIndicator(index) {
      if (!segs.length) return;
      segs.forEach((seg, si) => {
        seg.classList.toggle("is-active", si === index);
      });
    }

    rows.forEach((row, i) => {
      const trigger = row.querySelector(".n-build-row-trigger");
      if (!trigger) return;

      const handler = (e) => {
        e.preventDefault();

        const isOpen = row.classList.contains("is-open");

        rows.forEach((r) => {
          if (r !== row && r.classList.contains("is-open")) {
            closeRow(r);
          }
        });

        if (isOpen) {
          closeRow(row);
          rows.forEach((r) => r.classList.remove("is-active"));
          rows[0].classList.add("is-active");
          updateMobileIndicator(0);
        } else {
          openRow(row);
          rows.forEach((r) => r.classList.remove("is-active"));
          row.classList.add("is-active");
          updateMobileIndicator(i);
        }
      };

      trigger.addEventListener("click", handler);

      trigger.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handler(e);
        }
      });
    });

    const defaultBody = defaultValue.querySelector(".n-build-row-body");
    if (defaultBody) {
      gsap.set(defaultBody, { display: "block", height: "auto", opacity: 1 });
    }
    updateMobileIndicator(0);
  }

  /* Orchestrator */
  function initBuildSection() {
    const build = document.getElementById("build");
    if (!build) return;
    initBuildHeader();
    initBuildShowcase();
  }

  /* ==========================================================================
     08. HOW WE THINK (Process Pipeline & Numbers Count-Up)
     ========================================================================== */
  function initThinkSection() {
    const think = document.getElementById("think");
    if (!think) return;

    const journey = think.querySelector("[data-think-journey]");
    const route = think.querySelector("[data-think-route]");
    const path = think.querySelector("[data-think-progress]");
    const particle = think.querySelector("[data-think-particle]");
    const stages = Array.from(think.querySelectorAll("[data-think-stage]"));
    const activeNumber = think.querySelector("[data-think-active-number]");
    const detail = think.querySelector("[data-think-detail-panel]");
    const detailKicker = think.querySelector("[data-think-detail-kicker]");
    const detailTitle = think.querySelector("[data-think-detail-title]");
    const detailCopy = think.querySelector("[data-think-detail-copy]");
    const completion = think.querySelector("[data-think-completion]");
    if (!journey || !route || !path || !particle || stages.length !== 4) return;

    const stageData = [
      {
        kicker: "UNDERSTAND / 01",
        title: "نفهم قبل أن نبني.",
        copy: "نبحث في المشكلة، المتطلبات، والأهداف حتى يصبح الاتجاه واضحًا.",
      },
      {
        kicker: "DESIGN / 02",
        title: "نصمم الطريق.",
        copy: "نحوّل الفكرة إلى تجربة ومعمارية وتقنية قابلة للتنفيذ.",
      },
      {
        kicker: "BUILD / 03",
        title: "نبني ما يعمل.",
        copy: "نستخدم Web وAI والأتمتة وLow-Code لصناعة الحل المناسب.",
      },
      {
        kicker: "IMPROVE / 04",
        title: "نطوّر باستمرار.",
        copy: "نطلق، نقيس، ونحسّن حتى يكبر الحل مع الفرصة.",
      },
    ];
    const arabicNumbers = ["٠١", "٠٢", "٠٣", "٠٤"];
    const pathLength = path.getTotalLength();
    const stageSnapPositions = [0, 0.333, 0.667, 1];
    const stageProgress = [0.0, 0.17, 0.5, 0.83];
    let currentStage = 0;
    let detailRenderId = 0;

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    function renderStage(index, animate = true) {
      const safeIndex = Math.max(0, Math.min(stages.length - 1, index));
      const data = stageData[safeIndex];
      currentStage = safeIndex;
      stages.forEach((stage, stageIndex) => {
        stage.classList.toggle("is-active", stageIndex === safeIndex);
        stage.classList.toggle("is-past", stageIndex < safeIndex);
        stage.classList.toggle("is-next", stageIndex > safeIndex);
        stage.setAttribute("aria-pressed", String(stageIndex === safeIndex));
      });
      if (activeNumber) activeNumber.textContent = arabicNumbers[safeIndex];
      if (!detail || !animate || prefersReducedMotion) {
        if (detailKicker) detailKicker.textContent = data.kicker;
        if (detailTitle) detailTitle.textContent = data.title;
        if (detailCopy) detailCopy.textContent = data.copy;
        return;
      }
      const renderId = ++detailRenderId;
      detail.classList.add("is-changing");
      window.setTimeout(() => {
        if (renderId !== detailRenderId) return;
        if (detailKicker) detailKicker.textContent = data.kicker;
        if (detailTitle) detailTitle.textContent = data.title;
        if (detailCopy) detailCopy.textContent = data.copy;
        detail.classList.remove("is-changing");
      }, 160);
    }

    function updateJourney(progress) {
      const easedProgress = gsap.utils.clamp(0, 1, progress);
      gsap.set(path, { strokeDashoffset: pathLength * (1 - easedProgress) });
      const complete = easedProgress >= 1;
      const point = path.getPointAtLength(pathLength * easedProgress);
      gsap.set(particle, { attr: { cx: point.x, cy: point.y } });
      let nextStage = 0;
      stageProgress.forEach((threshold, index) => {
        if (easedProgress >= threshold) nextStage = index;
      });
      if (nextStage !== currentStage) renderStage(nextStage);
      completion?.classList.toggle("is-complete", complete);
      route.classList.toggle("is-complete", complete);
    }

    stages.forEach((stage, index) => {
      const activate = (event) => {
        event.preventDefault();
        renderStage(index);
        updateJourney(stageSnapPositions[index]);
      };
      stage.addEventListener("mouseenter", () => renderStage(index));
      stage.addEventListener("focus", () => renderStage(index));
      stage.addEventListener("click", activate);
      stage.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") activate(event);
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          event.preventDefault();
          stages[(index + 1) % stages.length].focus();
        }
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          event.preventDefault();
          stages[(index - 1 + stages.length) % stages.length].focus();
        }
      });
    });

    renderStage(0, false);
    if (prefersReducedMotion) {
      updateJourney(1);
      stages.forEach((stage) => {
        stage.classList.add("is-active");
        stage.classList.remove("is-past", "is-next");
      });
      renderStage(3, false);
      completion?.classList.add("is-complete");
      return;
    }

    const header = think.querySelector(".n-think-header");
    gsap.from(header?.querySelector(".n-section-label"), {
      opacity: 0,
      y: 12,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: { trigger: think, start: navbarSafeStart(78), once: true },
    });
    gsap.from(header?.querySelector(".n-think-heading"), {
      yPercent: 105,
      duration: 0.7,
      ease: "power4.out",
      scrollTrigger: { trigger: think, start: navbarSafeStart(78), once: true },
    });
    gsap.from(header?.querySelector(".n-think-intro"), {
      opacity: 0,
      y: 16,
      duration: 0.55,
      ease: "power3.out",
      scrollTrigger: { trigger: think, start: navbarSafeStart(70), once: true },
    });

    ScrollTrigger.create({
      trigger: think,
      start: "top top",
      end: "+=2400",
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      snap: {
        snapTo: [0, 0.333, 0.667, 1],
        duration: 0.5,
        delay: 0.1,
        ease: "power1.inOut",
      },
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => updateJourney(self.progress),
      onRefresh: (self) => updateJourney(self.progress),
    });

    if (!isMobile) {
      route.addEventListener("pointermove", (event) => {
        const rect = route.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 5;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 5;
        route.style.setProperty("--think-parallax-x", `${x}px`);
        route.style.setProperty("--think-parallax-y", `${y}px`);
      });
      route.addEventListener("pointerleave", () => {
        route.style.setProperty("--think-parallax-x", "0px");
        route.style.setProperty("--think-parallax-y", "0px");
      });
    }
  }

  /* ==========================================================================
     09. CORE PRINCIPLES (Editorial Manifesto)
     ========================================================================== */
  function initPrinciplesSection() {
    const principles = document.getElementById("principles");
    if (!principles) return;

    const nodes = principles.querySelectorAll(".n-principle-node");
    if (nodes.length === 0) return;

    const lines = principles.querySelectorAll(".n-principles-line");
    const flows = principles.querySelectorAll(".n-principles-flow");
    const core = principles.querySelector(".n-principles-core");
    const detail = principles.querySelector(".n-principles-detail");
    const detailKicker = principles.querySelector(
      "[data-principles-detail-kicker]",
    );
    const detailTitle = principles.querySelector(
      "[data-principles-detail-title]",
    );
    const detailCopy = principles.querySelector(
      "[data-principles-detail-copy]",
    );
    const completion = principles.querySelector(".n-principles-completion");

    const PRINCIPLES = {
      1: {
        kicker: "UNDERSTAND FIRST / 01",
        title: "نفهم قبل أن نبني",
        copy: "نبدأ من المشكلة، وليس من التقنية.",
      },
      2: {
        kicker: "KEEP IT SIMPLE / 02",
        title: "نبسّط قبل أن نعقّد",
        copy: "البساطة ليست نقصًا، بل وضوح في الفكر والتنفيذ.",
      },
      3: {
        kicker: "BUILD TO SCALE / 03",
        title: "نبني لننمو",
        copy: "نصمم الحلول لتنمو مع أعمالنا وأعمال عملائنا.",
      },
      4: {
        kicker: "TECHNOLOGY WITH PURPOSE / 04",
        title: "التقنية لها هدف",
        copy: "التقنية وسيلة لتحقيق أثر حقيقي، وليست غاية في حد ذاتها.",
      },
    };

    let userSelected = false;
    let converged = false;

    function setActive(node, manual = false) {
      if (manual) userSelected = true;

      const index = Number(node.dataset.principle) - 1;

      nodes.forEach((n, i) => {
        const isActive = i === index;
        n.classList.toggle("is-active", isActive);
        n.classList.toggle("is-past", !isActive && i < index);
        n.classList.toggle("is-next", !isActive && i > index);
        n.setAttribute("aria-pressed", String(isActive));
      });

      lines.forEach((line, i) => {
        if (converged) {
          line.classList.remove("is-active", "is-past");
          line.classList.add("is-converging");
        } else {
          line.classList.remove("is-converging");
          line.classList.toggle("is-active", i === index);
          line.classList.toggle("is-past", i < index);
        }
      });

      flows.forEach((flow, i) => {
        if (converged) {
          flow.classList.remove("is-visible");
          flow.classList.add("is-converging");
        } else {
          flow.classList.remove("is-converging");
          flow.classList.toggle("is-visible", i <= index);
        }
      });

      if (core) core.classList.toggle("is-converged", converged);

      const data = PRINCIPLES[index + 1];
      if (data && detail) {
        detail.classList.add("is-changing");
        setTimeout(() => {
          if (detailKicker) detailKicker.textContent = data.kicker;
          if (detailTitle) detailTitle.textContent = data.title;
          if (detailCopy) detailCopy.textContent = data.copy;
          detail.classList.remove("is-changing");
        }, 180);
      }

      if (completion) completion.classList.toggle("is-complete", converged);
    }

    const initial = principles.querySelector(".n-principle-node.is-active");
    setActive(initial || nodes[0]);

    nodes.forEach((node) => {
      node.addEventListener("click", () => setActive(node, true));
      node.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setActive(node, true);
        }
      });
    });

    if (prefersReducedMotion) return;

    const system = principles.querySelector(".n-principles-system");

    // Desktop mouse parallax — drives the --principles-parallax-x/y CSS
    // variables on .n-principles-system. Skipped on mobile / reduced motion
    // so it never affects layout.
    if (!isMobile) {
      if (system) {
        system.addEventListener("pointermove", (event) => {
          const rect = system.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width - 0.5) * 14;
          const y = ((event.clientY - rect.top) / rect.height - 0.5) * 14;
          system.style.setProperty("--principles-parallax-x", `${x}px`);
          system.style.setProperty("--principles-parallax-y", `${y}px`);
        });
        system.addEventListener("pointerleave", () => {
          system.style.setProperty("--principles-parallax-x", "0px");
          system.style.setProperty("--principles-parallax-y", "0px");
        });
      }
    }

    const header = principles.querySelector(".n-principles-header");

    const entrance = gsap.timeline({
      scrollTrigger: {
        trigger: principles,
        start: navbarSafeStart(72),
        once: true,
      },
    });

    if (header) {
      entrance.from(header, {
        opacity: 0,
        y: 12,
        duration: 0.65,
        ease: "power2.out",
      });
    }

    entrance.from(
      nodes,
      {
        y: 16,
        duration: 0.65,
        stagger: 0.1,
        ease: "power2.out",
      },
      header ? "-=0.25" : 0,
    );

    nodes.forEach((node) => {
      ScrollTrigger.create({
        trigger: node,
        start: navbarSafeStart(62),
        end: "bottom 42%",
        onEnter: () => {
          if (!userSelected) setActive(node);
        },
        onEnterBack: () => {
          if (!userSelected) setActive(node);
        },
      });
    });

    ScrollTrigger.create({
      trigger: principles,
      start: "bottom 55%",
      once: true,
      onEnter: () => {
        converged = true;
        setActive(nodes[nodes.length - 1]);
      },
    });

    /* ------------------------------------------------------------------
       Dynamic SVG connection lines — measured from the live grid so the
       decorative layer always touches the real nodes at any breakpoint.
       The SVG stays purely decorative: behind content (z-index), no
       pointer events, and it never participates in layout.
       ------------------------------------------------------------------ */
    const VB_W = 1000;
    const VB_H = 620;

    function updatePrinciplesLines() {
      if (!system || !core) return;
      const sysRect = system.getBoundingClientRect();
      if (sysRect.width === 0 || sysRect.height === 0) return;

      const toViewBox = (rect) => ({
        x: ((rect.left + rect.width / 2 - sysRect.left) / sysRect.width) * VB_W,
        y: ((rect.top + rect.height / 2 - sysRect.top) / sysRect.height) * VB_H,
      });

      const coreCenter = toViewBox(core.getBoundingClientRect());

      nodes.forEach((node, i) => {
        const nodeCenter = toViewBox(node.getBoundingClientRect());
        const line = lines[i];
        const flow = flows[i];
        if (line) {
          line.setAttribute(
            "d",
            `M${coreCenter.x.toFixed(1)} ${coreCenter.y.toFixed(1)} L${nodeCenter.x.toFixed(1)} ${nodeCenter.y.toFixed(1)}`,
          );
        }
        if (flow) {
          flow.setAttribute(
            "cx",
            ((coreCenter.x + nodeCenter.x) / 2).toFixed(1),
          );
          flow.setAttribute(
            "cy",
            ((coreCenter.y + nodeCenter.y) / 2).toFixed(1),
          );
        }
      });
    }

    requestAnimationFrame(updatePrinciplesLines);
    entrance.eventCallback("onComplete", updatePrinciplesLines);
    window.addEventListener("load", updatePrinciplesLines);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updatePrinciplesLines);
    }
    let principlesLineRaf = 0;
    window.addEventListener("resize", () => {
      cancelAnimationFrame(principlesLineRaf);
      principlesLineRaf = requestAnimationFrame(updatePrinciplesLines);
    });
  }

  /* ==========================================================================
     10. FROM PROJECTS TO PRODUCTS (Journey Trajectory)
     ========================================================================== */
  function initJourneySection() {
    const nodes = document.querySelectorAll(".n-journey-node");
    if (nodes.length === 0 || prefersReducedMotion || isMobile) return;

    ScrollTrigger.create({
      trigger: ".n-journey-track",
      start: navbarSafeStart(75),
      end: "bottom 45%",
      scrub: 0.5,
      onUpdate: (self) => {
        const activeIndex = Math.min(
          Math.floor(self.progress * nodes.length),
          nodes.length - 1,
        );
        nodes.forEach((node, i) => {
          if (i <= activeIndex) {
            node.classList.add("is-active");
            gsap.to(node, {
              opacity: 1,
              scale: i === activeIndex ? 1.04 : 1.0,
              duration: 0.3,
            });
          } else {
            node.classList.remove("is-active");
            gsap.to(node, { opacity: 0.4, scale: 0.95, duration: 0.3 });
          }
        });
      },
    });
  }

  /* ==========================================================================
     11. VISION & REGIONAL EXPANSION
     ========================================================================== */
  function initVisionSection() {
    const vnodes = document.querySelectorAll(".n-vnode");
    const title = document.querySelector(".n-vision-title");
    const lead = document.querySelector(".n-vision-lead");

    if (prefersReducedMotion) return;

    if (title) {
      gsap.from(title, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: navbarSafeStart(85),
          toggleActions: "play none none none",
        },
      });
    }

    if (lead) {
      gsap.from(lead, {
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lead,
          start: navbarSafeStart(85),
          toggleActions: "play none none none",
        },
      });
    }

    if (vnodes.length > 0) {
      ScrollTrigger.create({
        trigger: ".n-vision-nodes",
        start: navbarSafeStart(85),
        toggleActions: "play none none none",
        onEnter: () => {
          vnodes.forEach((vn, i) => {
            setTimeout(() => {
              vn.classList.add("is-active");
              gsap.fromTo(
                vn,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, ease: "power3.out" },
              );
            }, i * 300);
          });
        },
      });
    }
  }

  /* ==========================================================================
     12. FINAL BRAND STATEMENT — STRONGEST ANIMATION
     ========================================================================== */
  function initStatementSection() {
    const stmt1 = document.querySelector(".n-stmt-1");
    const stmt2 = document.querySelector(".n-stmt-2");
    const divider = document.querySelector(".n-statement-divider");
    const brand = document.querySelector(".n-statement-brand");

    if (!stmt1 || prefersReducedMotion) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".n-statement",
        start: navbarSafeStart(65),
        toggleActions: "play none none none",
      },
    });

    gsap.set([stmt1, stmt2], { opacity: 0, y: 50 });
    tl.to(stmt1, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });
    tl.to(
      stmt2,
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
      "-=0.4",
    );

    if (divider) {
      gsap.set(divider, { scaleX: 0 });
      tl.to(divider, { scaleX: 1, duration: 0.7, ease: "power2.out" }, "-=0.3");
    }

    if (brand) {
      gsap.set(brand, { opacity: 0, y: 15 });
      tl.to(
        brand,
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.2",
      );
    }
  }

  /* ==========================================================================
     13. PARALLAX DEPTH LAYERS
     ========================================================================== */
  function initParallaxDepth() {
    if (prefersReducedMotion || isMobile) return;

    gsap.to(".n-hero-bg-grid", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  /* ==========================================================================
     BOOTSTRAP
     ========================================================================== */
  function initAboutPageAnimations() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      console.warn("GSAP or ScrollTrigger not loaded.");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    initPageTransition();
    initMagneticButtons();
    initHeroCanvas();
    initHeroAnimation();
    initHeroBackgroundParallax();
    initBuildSection();
    initThinkSection();
    initStorySection();
    initPrinciplesSection();
    initJourneySection();
    initVisionSection();
    initStatementSection();
    initParallaxDepth();
    initStatsCounters();
    initAboutMetricCounters();

    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });
  }

  /* ==========================================================================
     ABOUT PAGE METRIC COUNTERS (.forascom-about-metric-value)
     ========================================================================== */
  function initAboutMetricCounters() {
    const metricsBar = document.querySelector(".forascom-about-metrics");
    if (!metricsBar) return;

    const metrics = metricsBar.querySelectorAll(".forascom-about-metric-value");
    if (!metrics.length) return;

    const resetMetric = (metric) => {
      const prefix = metric.dataset.prefix || "";
      const suffix = metric.dataset.suffix || "";
      metric.textContent = `${prefix}0${suffix}`;
      delete metric.dataset.animated;
    };

    const animateMetric = (metric) => {
      const target = Number(metric.dataset.target || 0);
      const prefix = metric.dataset.prefix || "";
      const suffix = metric.dataset.suffix || "";

      if (target === 0) {
        metric.textContent = `${prefix}0${suffix}`;
        return;
      }

      metric.dataset.animated = "true";
      metric.textContent = `${prefix}0${suffix}`;

      const duration = 1400;
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(easeOut * target);
        metric.textContent = `${prefix}${current}${suffix}`;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          metric.textContent = `${prefix}${target}${suffix}`;
          delete metric.dataset.animated;
        }
      };

      requestAnimationFrame(step);
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              metrics.forEach((m) => animateMetric(m));
            } else {
              metrics.forEach((m) => resetMetric(m));
            }
          });
        },
        { threshold: 0.2 },
      );
      observer.observe(metricsBar);
    } else {
      metrics.forEach((m) => animateMetric(m));
    }
  }

  function initStatsCounters() {
    const stats = document.querySelectorAll(
      ".who-we-are-stats .counter[data-target]",
    );
    if (!stats.length) return;

    const resetStat = (stat) => {
      stat.textContent = "0";
      delete stat.dataset.animated;
    };

    const animateStat = (stat) => {
      const target = Number(stat.dataset.target) || 0;
      if (target === 0) {
        stat.textContent = "0";
        return;
      }

      stat.dataset.animated = "true";
      stat.textContent = "0";

      const duration = 1400;
      const startTime = performance.now();

      const step = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        stat.textContent = Math.round(easeOut * target);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          stat.textContent = target;
          delete stat.dataset.animated;
        }
      };
      requestAnimationFrame(step);
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateStat(entry.target);
            } else {
              resetStat(entry.target);
            }
          });
        },
        { threshold: 0.2 },
      );
      stats.forEach((s) => observer.observe(s));
    } else {
      stats.forEach((s) => animateStat(s));
    }
  }

  let aboutAnimationsStarted = false;

  function waitForMotionLibraries() {
    if (aboutAnimationsStarted) return;
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      aboutAnimationsStarted = true;
      initAboutPageAnimations();
      return;
    }

    window.setTimeout(waitForMotionLibraries, 50);
  }

  function waitForHeroBackgroundParallax() {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      initHeroBackgroundParallax();
      return;
    }

    window.setTimeout(waitForHeroBackgroundParallax, 50);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", waitForMotionLibraries, {
      once: true,
    });
  } else {
    waitForMotionLibraries();
  }

  waitForHeroBackgroundParallax();
})();
