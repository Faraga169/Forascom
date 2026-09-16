/* ==========================================================================
   FORASCOM - TECHNOLOGIES ORBIT CINEMATIC ENGINE
   Scoped strictly to #tech-orbit-section
   ========================================================================== */

(function () {
  const techOrbitData = [
  {
    id: "ai-llms",
    name: "AI & LLM Solutions",
    nodeName: "AI & LLMs",
    tag: "ARTIFICIAL INTELLIGENCE",
    ring: "inner",
    baseAngle: 280,
    desc: "نحوّل الذكاء الاصطناعي من مجرد فكرة إلى حلول عملية تساعد شركتك على الوصول للمعلومات، أتمتة المهام، وتحسين طريقة اتخاذ القرار.",
    useCases: [
      "مساعدات وروبوتات ذكية",
      "البحث الذكي في معلومات الشركة",
      "تحليل المستندات والبيانات"
    ],
    poweredBy: ["LLMs", "RAG", "AI Agents", "Computer Vision"],
    logo: "assets/images/Ai.png",
    logoAlt: "AI and LLM solutions"
  },

  {
    id: " ",
    name: "Full-Stack Web",
    nodeName: "Full-Stack Web",
    tag: "WEB DEVELOPMENT",
    ring: "outer",
    baseAngle: 150,
    desc: "نبني أنظمة ومواقع ومنصات رقمية مصممة حول احتياجات عملك، من واجهات العملاء إلى الأنظمة الداخلية ولوحات التحكم.",
    useCases: [
      "مواقع للشركات والأعمال",
      "تطبيقات ومنصات مخصصة",
      "لوحات تحكم وأنظمة داخلية"
    ],
    poweredBy: ["Frontend", "Backend", "Databases", "APIs"],
    logo: "assets/images/web.jpg",
    logoAlt: "Full-stack web development"
  },

  {
    id: "wordpress",
    name: "WordPress & WooCommerce",
    nodeName: "WordPress",
    tag: "WEB SOLUTIONS",
    ring: "outer",
    baseAngle: 270,
    desc: "ننشئ مواقع احترافية وسريعة تساعد شركتك على الظهور بشكل قوي على الإنترنت، مع إمكانية إدارة المحتوى والمنتجات بسهولة دون تعقيد تقني.",
    useCases: [
      "مواقع الشركات والأعمال",
      "صفحات الهبوط والتعريف بالخدمات",
      "المتاجر الإلكترونية"
    ],
    poweredBy: ["WordPress", "WooCommerce", "Custom Themes", "Performance Optimization"],
    logo: "assets/images/WordPress.webp",
    logoAlt: "WordPress and WooCommerce"
  },

  {
    id: "n8n",
    name: "n8n Automation",
    nodeName: "n8n Automation",
    tag: "WORKFLOW AUTOMATION",
    ring: "outer",
    baseAngle: 30,
    desc: "نربط الأنظمة والخدمات ونؤتمت المهام المتكررة لتقليل العمل اليدوي، تسريع العمليات، وتقليل الأخطاء داخل شركتك.",
    useCases: [
      "تشغيل المهام المتكررة تلقائيًا",
      "ربط الأنظمة ونقل البيانات بينها",
      "تحديث البيانات وإرسال التنبيهات تلقائيًا"
    ],
    poweredBy: ["n8n", "Webhooks", "APIs", "Integrations"],
    logo: "assets/images/n8n.png",
    logoAlt: "n8n automation"
  },

  {
    id: "power-platform",
    name: "Microsoft Power Platform",
    nodeName: "Power Platform",
    tag: "BUSINESS APPLICATIONS",
    ring: "middle",
    baseAngle: 160,
    desc: "نحوّل العمليات اليومية المعقدة إلى تطبيقات وأنظمة سهلة الاستخدام تساعد فريقك على إنجاز العمل بشكل أسرع وأكثر تنظيمًا.",
    useCases: [
      "تطبيقات داخلية لإدارة العمل",
      "رقمنة وأتمتة إجراءات الشركة",
      "ربط الفرق والبيانات في نظام واحد"
    ],
    poweredBy: ["Power Apps", "Power Automate", "Dataverse", "Microsoft Teams"],
    logo: "assets/images/PowerPlatform.webp",
    logoAlt: "Microsoft Power Platform"
  }
]

  let activeIndex = 0;
  let scrollRotation = 0;
  let idleRotation = 0;
  let isLocked = false;
  let lastTimestamp = 0;
  let autoCycleTimer = null;
  let animFrameId = null;

  function isReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function getHubDimensions() {
    const hub = document.getElementById('tech-orbit-hub');
    if (!hub) return { size: 540, cx: 270, cy: 270, rInner: 105, rMiddle: 165, rOuter: 235 };

    const width = hub.offsetWidth || 540;
    const cx = width / 2;
    const cy = width / 2;

    if (width < 400) {
      // Mobile
      return { size: width, cx, cy, rInner: width * 0.20, rMiddle: width * 0.31, rOuter: width * 0.43 };
    } else if (width < 520) {
      // Tablet
      return { size: width, cx, cy, rInner: width * 0.20, rMiddle: width * 0.31, rOuter: width * 0.44 };
    }
    // Desktop
    return { size: width, cx, cy, rInner: 105, rMiddle: 165, rOuter: 235 };
  }

  /* Create and inject interactive technology nodes */
  function buildOrbitNodes() {
    const hub = document.getElementById('tech-orbit-hub');
    if (!hub) return;

    // Clean existing nodes
    const existingNodes = hub.querySelectorAll('.tech-orbit-node');
    existingNodes.forEach(n => n.remove());

    techOrbitData.forEach((tech, index) => {
      const node = document.createElement('button');
      node.type = 'button';
      node.className = `tech-orbit-node ${index === 0 ? 'is-active' : ''}`;
      node.setAttribute('data-tech-id', tech.id);
      node.setAttribute('data-index', index);
      node.setAttribute('aria-label', `تقنية ${tech.name} - ${tech.tag}`);
      node.tabIndex = 0;

      node.innerHTML = `
        <span class="tech-orbit-node-icon"><img src="${tech.logo}" alt="${tech.logoAlt}" /></span>
      `;

      // Hover, click, and keyboard listeners
      node.addEventListener('mouseenter', () => {
        selectTech(index, false);
      });

      node.addEventListener('click', () => {
        isLocked = true;
        selectTech(index, true);
      });

      node.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          isLocked = true;
          selectTech(index, true);
        }
      });

      hub.appendChild(node);
    });

    selectTech(0, false);
  }

  /* Update 2D positions of nodes based on total rotation */
  function renderOrbitPositions() {
    const hub = document.getElementById('tech-orbit-hub');
    if (!hub) return;

    const { cx, cy, rInner, rMiddle, rOuter } = getHubDimensions();
    const totalRotation = scrollRotation + idleRotation;

    const nodes = hub.querySelectorAll('.tech-orbit-node');
    nodes.forEach((node) => {
      const index = parseInt(node.getAttribute('data-index'), 10);
      const tech = techOrbitData[index];
      if (!tech) return;

      let r = rOuter;
      if (tech.ring === 'inner') r = rInner;
      else if (tech.ring === 'middle') r = rMiddle;

      const currentAngleDeg = (tech.baseAngle + totalRotation) % 360;
      const angleRad = (currentAngleDeg * Math.PI) / 180;

      const x = cx + r * Math.cos(angleRad);
      const y = cy + r * Math.sin(angleRad);

      // Depth scaling: nodes in lower half feel slightly closer
      const depthFactor = (Math.sin(angleRad) + 1) / 2; // 0 to 1
      const scale = node.classList.contains('is-active') ? 1.08 : (0.94 + depthFactor * 0.1);
      const opacity = node.classList.contains('is-active') ? 1 : (0.75 + depthFactor * 0.25);

      node.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -50%) scale(${scale.toFixed(2)})`;
      node.style.opacity = opacity.toFixed(2);
    });
  }

  /* Smooth transition of the Left Dynamic Technology Detail Card */
  function selectTech(index, manualLock = false) {
    activeIndex = index;
    const tech = techOrbitData[index];
    if (!tech) return;

    // Update active node styling
    const allNodes = document.querySelectorAll('.tech-orbit-node');
    allNodes.forEach((n, idx) => {
      if (idx === index) {
        n.classList.add('is-active');
      } else {
        n.classList.remove('is-active');
      }
    });

    // Animate details card with smooth slide + fade
    const cardContent = document.getElementById('tech-orbit-card-content');
    const tagEl = document.getElementById('tech-orbit-tag');
    const bigIconEl = document.getElementById('tech-orbit-big-icon');
    const titleEl = document.getElementById('tech-orbit-title');
    const descEl = document.getElementById('tech-orbit-desc');
    const keywordsEl = document.getElementById('tech-orbit-keywords');
    const poweredByEl = document.getElementById('tech-orbit-powered-by');

    if (!cardContent) return;

    if (typeof gsap !== 'undefined' && !isReducedMotion()) {
      gsap.to(cardContent, {
        opacity: 0,
        x: -12,
        duration: 0.18,
        ease: 'power2.in',
        onComplete: () => {
          if (tagEl) tagEl.textContent = tech.tag;
          if (bigIconEl) bigIconEl.innerHTML = `<img src="${tech.logo}" alt="${tech.logoAlt}" />`;
          if (titleEl) titleEl.textContent = tech.name;
          if (descEl) descEl.textContent = tech.desc;
          if (keywordsEl) {
            keywordsEl.innerHTML = tech.useCases
              .map(kw => `<span class="tech-orbit-keyword-pill">${kw}</span>`)
              .join('');
          }
          if (poweredByEl) poweredByEl.innerHTML = tech.poweredBy.map(item => `<span class="tech-orbit-keyword-pill is-secondary">${item}</span>`).join('');

          gsap.fromTo(cardContent, 
            { opacity: 0, x: 12 },
            { opacity: 1, x: 0, duration: 0.32, ease: 'power2.out' }
          );
        }
      });
    } else {
      if (tagEl) tagEl.textContent = tech.tag;
      if (bigIconEl) bigIconEl.innerHTML = `<img src="${tech.logo}" alt="${tech.logoAlt}" />`;
      if (titleEl) titleEl.textContent = tech.name;
      if (descEl) descEl.textContent = tech.desc;
      if (keywordsEl) {
        keywordsEl.innerHTML = tech.useCases
          .map(kw => `<span class="tech-orbit-keyword-pill">${kw}</span>`)
          .join('');
      }
      if (poweredByEl) poweredByEl.innerHTML = tech.poweredBy.map(item => `<span class="tech-orbit-keyword-pill is-secondary">${item}</span>`).join('');
    }

    if (manualLock) {
      if (autoCycleTimer) clearInterval(autoCycleTimer);
    }
  }

  /* Continuous Animation Loop for Idle Rotation */
  function animationLoop(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const delta = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    if (!isReducedMotion()) {
      // Rotate ~360 deg every 40 seconds (0.009 deg per ms)
      idleRotation = (idleRotation + delta * 0.009) % 360;
    }

    renderOrbitPositions();
    animFrameId = requestAnimationFrame(animationLoop);
  }

  /* Scroll-Driven Orbit Synchronization with GSAP ScrollTrigger */
  function initScrollDrivenOrbit() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (isReducedMotion()) return;

    const section = document.getElementById('tech-orbit-section');
    if (!section) return;

    ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
      onUpdate: (self) => {
        // Scroll rotates the entire orbit smoothly
        scrollRotation = self.progress * 240;
      }
    });
  }

  /* Animate subtle Traveling Particles along Concentric Rings */
  function initTravelingParticles() {
    if (isReducedMotion() || typeof gsap === 'undefined') return;

    const rings = [
      { id: 'tech-orbit-particle-outer', r: 'rOuter', speed: 6 },
      { id: 'tech-orbit-particle-middle', r: 'rMiddle', speed: 8 },
      { id: 'tech-orbit-particle-inner', r: 'rInner', speed: 5 }
    ];

    rings.forEach((item, idx) => {
      const particle = document.getElementById(item.id);
      if (!particle) return;

      const tracker = { angle: idx * 120 };

      gsap.to(tracker, {
        angle: tracker.angle + 360,
        duration: item.speed + idx * 2,
        repeat: -1,
        ease: 'none',
        onUpdate: () => {
          const dims = getHubDimensions();
          let r = dims.rOuter;
          if (item.r === 'rMiddle') r = dims.rMiddle;
          if (item.r === 'rInner') r = dims.rInner;

          const rad = (tracker.angle * Math.PI) / 180;
          const px = dims.cx + r * Math.cos(rad);
          const py = dims.cy + r * Math.sin(rad);

          particle.setAttribute('cx', px.toFixed(1));
          particle.setAttribute('cy', py.toFixed(1));
          particle.setAttribute('opacity', '0.75');
        }
      });
    });
  }

  /* Mouse Parallax on Desktop */
  function initMouseParallax() {
    if (window.innerWidth < 1024 || isReducedMotion() || typeof gsap === 'undefined') return;

    const section = document.getElementById('tech-orbit-section');
    const hub = document.getElementById('tech-orbit-hub');
    const glow = section ? section.querySelector('.tech-orbit-bg-glow') : null;

    if (!section || !hub) return;

    section.addEventListener('mousemove', (e) => {
      const rect = section.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(hub, {
        x: normX * 14,
        y: normY * 14,
        duration: 0.6,
        ease: 'power1.out'
      });

      if (glow) {
        gsap.to(glow, {
          x: normX * -18,
          y: normY * -18,
          duration: 0.8,
          ease: 'power1.out'
        });
      }
    });

    section.addEventListener('mouseleave', () => {
      gsap.to(hub, { x: 0, y: 0, duration: 0.8, ease: 'power2.out' });
      if (glow) gsap.to(glow, { x: 0, y: 0, duration: 0.8, ease: 'power2.out' });
    });
  }

  /* Auto Cycle timer if not locked by user */
  function startAutoCycle() {
    if (autoCycleTimer) clearInterval(autoCycleTimer);
    autoCycleTimer = setInterval(() => {
      if (document.hidden || isLocked) return;
      const nextIndex = (activeIndex + 1) % techOrbitData.length;
      selectTech(nextIndex, false);
    }, 4500);
  }

  /* Resize listener */
  let resizeTimer = null;
  function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      buildOrbitNodes();
      renderOrbitPositions();
    }, 150);
  }

  /* Initialization */
  function initTechOrbit() {
    buildOrbitNodes();
    initScrollDrivenOrbit();
    initTravelingParticles();
    initMouseParallax();
    startAutoCycle();

    if (animFrameId) cancelAnimationFrame(animFrameId);
    animFrameId = requestAnimationFrame(animationLoop);

    window.addEventListener('resize', handleResize, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTechOrbit);
  } else {
    initTechOrbit();
  }
})();