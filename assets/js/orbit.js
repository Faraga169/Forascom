/* ==========================================================================
   FORASCOM - TECHNOLOGIES ORBIT CINEMATIC ENGINE
   Scoped strictly to #tech-orbit-section
   Multi-speed layered planetary constellation with synchronized family glow
   ========================================================================== */

(function () {
  // 5 Main Technology Categories (The Parent Pillars)
  const techGroups = {
    ai: {
      id: "ai",
      name: "AI & LLM Solutions",
      tag: "ARTIFICIAL INTELLIGENCE",
      desc: "نحوّل الذكاء الاصطناعي من مجرد فكرة إلى حلول ونماذج لغوية (LLMs) عملية تساعد شركتك على الوصول للمعلومات، أتمتة المهام، وتحسين طريقة اتخاذ القرار.",
      useCases: [
        "مساعدات وروبوتات ذكية",
        "البحث الذكي في معلومات الشركة (RAG)",
        "تحليل المستندات والبيانات",
      ],
      poweredBy: ["LLMs", "RAG", "AI Agents", "OpenAI Models"],
      logo: "assets/images/Ai.png",
      logoAlt: "AI and LLM Solutions",
    },

    "power-platform": {
      id: "power-platform",
      name: "Microsoft Power Platform",
      tag: "BUSINESS APPLICATIONS",
      desc: "نحوّل العمليات اليومية المعقدة إلى تطبيقات وأنظمة سهلة الاستخدام تساعد فريقك على إنجاز العمل بشكل أسرع وأكثر تنظيمًا.",
      useCases: [
        "تطبيقات داخلية لإدارة العمل",
        "رقمنة وأتمتة إجراءات الشركة",
        "ربط الفرق والبيانات في نظام واحد",
      ],
      poweredBy: ["Power Apps", "Power Automate", "Power BI", "SharePoint"],
      logo: "assets/images/PowerPlatform.webp",
      logoAlt: "Microsoft Power Platform",
    },

    "web-dev": {
      id: "web-dev",
      name: "Full-Stack Web Development",
      tag: "WEB DEVELOPMENT",
      desc: "نبني أنظمة ومواقع ومنصات رقمية مصممة حول احتياجات عملك، من واجهات العملاء إلى الأنظمة الداخلية ولوحات التحكم.",
      useCases: [
        "مواقع للشركات والأعمال",
        "تطبيقات ومنصات مخصصة",
        "لوحات تحكم وأنظمة داخلية",
      ],
      poweredBy: ["Angular", "JavaScript", "Tailwind CSS", "HTML5"],
      logo: "assets/images/web.jpg",
      logoAlt: "Full-stack web development",
    },

    wordpress: {
      id: "wordpress",
      name: "WordPress & WooCommerce",
      tag: "WEB SOLUTIONS",
      desc: "ننشئ مواقع احترافية وسريعة تساعد شركتك على الظهور بشكل قوي على الإنترنت، مع إمكانية إدارة المحتوى والمنتجات بسهولة دون تعقيد تقني.",
      useCases: [
        "مواقع الشركات والأعمال",
        "صفحات الهبوط والتعريف بالخدمات",
        "المتاجر الإلكترونية",
      ],
      poweredBy: [
        "WordPress",
        "WooCommerce",
        "Custom Themes",
        "Performance Optimization",
      ],
      logo: "assets/images/WordPress.webp",
      logoAlt: "WordPress and WooCommerce",
    },

    n8n: {
      id: "n8n",
      name: "n8n Workflow Automation",
      tag: "WORKFLOW AUTOMATION",
      desc: "نربط الأنظمة والخدمات ونؤتمت المهام المتكررة لتقليل العمل اليدوي، تسريع العمليات، وتقليل الأخطاء داخل شركتك.",
      useCases: [
        "تشغيل المهام المتكررة تلقائيًا",
        "ربط الأنظمة ونقل البيانات بينها",
        "تحديث البيانات وإرسال التنبيهات تلقائيًا",
      ],
      poweredBy: ["n8n", "Webhooks", "REST APIs", "Integrations"],
      logo: "assets/images/n8n.png",
      logoAlt: "n8n automation",
    },
  };

  // Group Order for Auto-Cycling
  const groupOrder = ["ai", "power-platform", "web-dev", "wordpress", "n8n"];

  // All Nodes on the Orbit (Distributed / Interspersed across the 3 rings)
  const techOrbitNodes = [
    // --- INNER RING (Fastest orbit speed: 1.35x) ---
    {
      id: "ai-parent",
      groupId: "ai",
      name: "AI & LLM Solutions",
      ring: "inner",
      baseAngle: 270,
      logo: "assets/images/Ai.png",
      logoAlt: "AI Solutions",
      isParent: true,
    },
    {
      id: "html5",
      groupId: "web-dev",
      name: "HTML5 & Web Standards",
      ring: "inner",
      baseAngle: 30,
      logo: "assets/images/tech/html5.svg",
      logoAlt: "HTML5",
      isParent: false,
    },
    {
      id: "power-bi",
      groupId: "power-platform",
      name: "Microsoft Power BI",
      ring: "inner",
      baseAngle: 150,
      logo: "assets/images/tech/power-bi.svg",
      logoAlt: "Power BI",
      isParent: false,
    },

    // --- MIDDLE RING (Standard orbit speed: 1.0x) ---
    {
      id: "power-parent",
      groupId: "power-platform",
      name: "Microsoft Power Platform",
      ring: "middle",
      baseAngle: 180,
      logo: "assets/images/PowerPlatform.webp",
      logoAlt: "Power Platform",
      isParent: true,
    },
    {
      id: "chatbot",
      groupId: "ai",
      name: "Smart Chatbots & AI",
      ring: "middle",
      baseAngle: 75,
      logo: "assets/images/tech/chatbot.svg",
      logoAlt: "Smart Chatbots and AI",
      isParent: false,
    },
    {
      id: "angular",
      groupId: "web-dev",
      name: "Angular Framework",
      ring: "middle",
      baseAngle: 340,
      logo: "assets/images/tech/angular.svg",
      logoAlt: "Angular",
      isParent: false,
    },
    {
      id: "power-apps",
      groupId: "power-platform",
      name: "Microsoft Power Apps",
      ring: "middle",
      baseAngle: 250,
      logo: "assets/images/tech/power-apps.svg",
      logoAlt: "Power Apps",
      isParent: false,
    },
    {
      id: "javascript",
      groupId: "web-dev",
      name: "JavaScript Modern Stack",
      ring: "middle",
      baseAngle: 120,
      logo: "assets/images/tech/javascript.svg",
      logoAlt: "JavaScript",
      isParent: false,
    },
    {
      id: "n8n",
      groupId: "n8n",
      name: "n8n Workflow Automation",
      ring: "middle",
      baseAngle: 15,
      logo: "assets/images/n8n.png",
      logoAlt: "n8n Automation",
      isParent: true,
    },

    // --- OUTER RING (Majestic slow orbit speed: 0.68x) ---
    {
      id: "web-parent",
      groupId: "web-dev",
      name: "Full-Stack Web Development",
      ring: "outer",
      baseAngle: 60,
      logo: "assets/images/web.jpg",
      logoAlt: "Full-Stack Web Development",
      isParent: true,
    },
    {
      id: "power-automate",
      groupId: "power-platform",
      name: "Microsoft Power Automate",
      ring: "outer",
      baseAngle: 140,
      logo: "assets/images/tech/power-automate.svg",
      logoAlt: "Power Automate",
      isParent: false,
    },
    {
      id: "tailwind",
      groupId: "web-dev",
      name: "Tailwind CSS",
      ring: "outer",
      baseAngle: 215,
      logo: "assets/images/tech/tailwind.svg",
      logoAlt: "Tailwind CSS",
      isParent: false,
    },
    {
      id: "sharepoint",
      groupId: "power-platform",
      name: "Microsoft SharePoint",
      ring: "outer",
      baseAngle: 295,
      logo: "assets/images/tech/sharepoint.svg",
      logoAlt: "SharePoint",
      isParent: false,
    },
    {
      id: "wordpress",
      groupId: "wordpress",
      name: "WordPress & WooCommerce",
      ring: "outer",
      baseAngle: 355,
      logo: "assets/images/tech/wordpress.svg",
      logoAlt: "WordPress",
      isParent: true,
    },
  ];

  let activeGroupId = "ai";
  let scrollProgress = 0;
  let idleRotation = 0;
  let isLocked = false;
  let lastTimestamp = 0;
  let autoCycleTimer = null;
  let animFrameId = null;

  function isReducedMotion() {
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function getHubDimensions() {
    const hub = document.getElementById("tech-orbit-hub");
    if (!hub)
      return {
        size: 540,
        cx: 270,
        cy: 270,
        rInner: 105,
        rMiddle: 165,
        rOuter: 235,
      };

    const width = hub.offsetWidth || 540;
    const cx = width / 2;
    const cy = width / 2;

    if (width < 400) {
      // Mobile
      return {
        size: width,
        cx,
        cy,
        rInner: width * 0.2,
        rMiddle: width * 0.31,
        rOuter: width * 0.43,
      };
    } else if (width < 520) {
      // Tablet
      return {
        size: width,
        cx,
        cy,
        rInner: width * 0.2,
        rMiddle: width * 0.31,
        rOuter: width * 0.44,
      };
    }
    // Desktop
    return { size: width, cx, cy, rInner: 105, rMiddle: 165, rOuter: 235 };
  }

  /* Create and inject interactive technology nodes */
  function buildOrbitNodes() {
    const hub = document.getElementById("tech-orbit-hub");
    if (!hub) return;

    // Clean existing nodes
    const existingNodes = hub.querySelectorAll(".tech-orbit-node");
    existingNodes.forEach((n) => n.remove());

    techOrbitNodes.forEach((nodeData, index) => {
      const node = document.createElement("button");
      node.type = "button";
      node.className = `tech-orbit-node ${nodeData.isParent ? "is-parent-node" : "is-sub-node"} ${nodeData.groupId === activeGroupId ? "is-group-active" : ""}`;
      node.setAttribute("data-node-id", nodeData.id);
      node.setAttribute("data-group", nodeData.groupId);
      node.setAttribute("data-index", index);
      node.setAttribute("title", nodeData.name);
      node.setAttribute("aria-label", `تقنية ${nodeData.name}`);
      node.tabIndex = 0;

      node.innerHTML = `
        <span class="tech-orbit-node-icon"><img src="${nodeData.logo}" alt="${nodeData.logoAlt}" /></span>
      `;

      // Hover, click, and keyboard listeners to activate the entire group
      node.addEventListener("mouseenter", () => {
        selectGroup(nodeData.groupId, false);
      });

      node.addEventListener("click", () => {
        isLocked = true;
        selectGroup(nodeData.groupId, true);
      });

      node.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          isLocked = true;
          selectGroup(nodeData.groupId, true);
        }
      });

      hub.appendChild(node);
    });

    selectGroup("ai", false);
  }

  /* Update 2D positions of nodes based on multi-speed layered rotation */
  function renderOrbitPositions() {
    const hub = document.getElementById("tech-orbit-hub");
    if (!hub) return;

    const { cx, cy, rInner, rMiddle, rOuter } = getHubDimensions();

    const nodes = hub.querySelectorAll(".tech-orbit-node");
    nodes.forEach((node) => {
      const index = parseInt(node.getAttribute("data-index"), 10);
      const nodeData = techOrbitNodes[index];
      if (!nodeData) return;

      // Layered speeds: Inner ring moves faster, Outer ring is calmer
      let r = rOuter;
      let speedMult = 0.68;
      let scrollMult = 0.8;

      if (nodeData.ring === "inner") {
        r = rInner;
        speedMult = 1.35;
        scrollMult = 1.25;
      } else if (nodeData.ring === "middle") {
        r = rMiddle;
        speedMult = 1.0;
        scrollMult = 1.0;
      }

      const totalRingRotation =
        idleRotation * speedMult + scrollProgress * 220 * scrollMult;
      const currentAngleDeg = (nodeData.baseAngle + totalRingRotation) % 360;
      const angleRad = (currentAngleDeg * Math.PI) / 180;

      const x = cx + r * Math.cos(angleRad);
      const y = cy + r * Math.sin(angleRad);

      const isGroupActive = node.classList.contains("is-group-active");
      const depthFactor = (Math.sin(angleRad) + 1) / 2; // 0 to 1
      const baseScale = nodeData.isParent ? 1.05 : 0.95;
      const scale = isGroupActive
        ? baseScale * 1.1
        : baseScale * (0.92 + depthFactor * 0.1);
      const opacity = isGroupActive ? 1 : 0.75 + depthFactor * 0.25;

      node.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate(-50%, -50%) scale(${scale.toFixed(2)})`;
      node.style.opacity = opacity.toFixed(2);
    });
  }

  /* Activate an entire Technology Family and update Left Detail Card */
  function selectGroup(groupId, manualLock = false) {
    activeGroupId = groupId;
    const groupData = techGroups[groupId];
    if (!groupData) return;

    // Highlight all nodes in this technology group simultaneously
    const allNodes = document.querySelectorAll(".tech-orbit-node");
    allNodes.forEach((n) => {
      const nodeGroup = n.getAttribute("data-group");
      if (nodeGroup === groupId) {
        n.classList.add("is-group-active");
      } else {
        n.classList.remove("is-group-active");
      }
    });

    // Animate details card with smooth slide + fade
    const cardContent = document.getElementById("tech-orbit-card-content");
    const tagEl = document.getElementById("tech-orbit-tag");
    const bigIconEl = document.getElementById("tech-orbit-big-icon");
    const titleEl = document.getElementById("tech-orbit-title");
    const descEl = document.getElementById("tech-orbit-desc");
    const keywordsEl = document.getElementById("tech-orbit-keywords");
    const poweredByEl = document.getElementById("tech-orbit-powered-by");

    if (!cardContent) return;

    if (typeof gsap !== "undefined" && !isReducedMotion()) {
      gsap.to(cardContent, {
        opacity: 0,
        x: -12,
        duration: 0.18,
        ease: "power2.in",
        onComplete: () => {
          if (tagEl) tagEl.textContent = groupData.tag;
          if (bigIconEl)
            bigIconEl.innerHTML = `<img src="${groupData.logo}" alt="${groupData.logoAlt}" />`;
          if (titleEl) titleEl.textContent = groupData.name;
          if (descEl) descEl.textContent = groupData.desc;
          if (keywordsEl) {
            keywordsEl.innerHTML = groupData.useCases
              .map((kw) => `<span class="tech-orbit-keyword-pill">${kw}</span>`)
              .join("");
          }
          if (poweredByEl) {
            poweredByEl.innerHTML = groupData.poweredBy
              .map(
                (item) =>
                  `<span class="tech-orbit-keyword-pill is-secondary">${item}</span>`,
              )
              .join("");
          }

          gsap.fromTo(
            cardContent,
            { opacity: 0, x: 12 },
            { opacity: 1, x: 0, duration: 0.32, ease: "power2.out" },
          );
        },
      });
    } else {
      if (tagEl) tagEl.textContent = groupData.tag;
      if (bigIconEl)
        bigIconEl.innerHTML = `<img src="${groupData.logo}" alt="${groupData.logoAlt}" />`;
      if (titleEl) titleEl.textContent = groupData.name;
      if (descEl) descEl.textContent = groupData.desc;
      if (keywordsEl) {
        keywordsEl.innerHTML = groupData.useCases
          .map((kw) => `<span class="tech-orbit-keyword-pill">${kw}</span>`)
          .join("");
      }
      if (poweredByEl) {
        poweredByEl.innerHTML = groupData.poweredBy
          .map(
            (item) =>
              `<span class="tech-orbit-keyword-pill is-secondary">${item}</span>`,
          )
          .join("");
      }
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
      // Base rotation rate (0.008 deg per ms)
      idleRotation = (idleRotation + delta * 0.008) % 360;
    }

    renderOrbitPositions();
    animFrameId = requestAnimationFrame(animationLoop);
  }

  /* Scroll-Driven Orbit Synchronization with GSAP ScrollTrigger */
  function initScrollDrivenOrbit() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined")
      return;
    if (isReducedMotion()) return;

    const section = document.getElementById("tech-orbit-section");
    if (!section) return;

    ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      scrub: 1.2,
      onUpdate: (self) => {
        scrollProgress = self.progress;
      },
    });
  }

  /* Animate subtle Traveling Particles along Concentric Rings */
  function initTravelingParticles() {
    if (isReducedMotion() || typeof gsap === "undefined") return;

    const rings = [
      { id: "tech-orbit-particle-outer", r: "rOuter", speed: 8 },
      { id: "tech-orbit-particle-middle", r: "rMiddle", speed: 6 },
      { id: "tech-orbit-particle-inner", r: "rInner", speed: 4.5 },
    ];

    rings.forEach((item, idx) => {
      const particle = document.getElementById(item.id);
      if (!particle) return;

      const tracker = { angle: idx * 120 };

      gsap.to(tracker, {
        angle: tracker.angle + 360,
        duration: item.speed + idx * 2,
        repeat: -1,
        ease: "none",
        onUpdate: () => {
          const dims = getHubDimensions();
          let r = dims.rOuter;
          if (item.r === "rMiddle") r = dims.rMiddle;
          if (item.r === "rInner") r = dims.rInner;

          const rad = (tracker.angle * Math.PI) / 180;
          const px = dims.cx + r * Math.cos(rad);
          const py = dims.cy + r * Math.sin(rad);

          particle.setAttribute("cx", px.toFixed(1));
          particle.setAttribute("cy", py.toFixed(1));
          particle.setAttribute("opacity", "0.75");
        },
      });
    });
  }

  /* Mouse Parallax on Desktop */
  function initMouseParallax() {
    if (
      window.innerWidth < 1024 ||
      isReducedMotion() ||
      typeof gsap === "undefined"
    )
      return;

    const section = document.getElementById("tech-orbit-section");
    const hub = document.getElementById("tech-orbit-hub");
    const glow = section ? section.querySelector(".tech-orbit-bg-glow") : null;

    if (!section || !hub) return;

    section.addEventListener("mousemove", (e) => {
      const rect = section.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(hub, {
        x: normX * 14,
        y: normY * 14,
        duration: 0.6,
        ease: "power1.out",
      });

      if (glow) {
        gsap.to(glow, {
          x: normX * -18,
          y: normY * -18,
          duration: 0.8,
          ease: "power1.out",
        });
      }
    });

    section.addEventListener("mouseleave", () => {
      gsap.to(hub, { x: 0, y: 0, duration: 0.8, ease: "power2.out" });
      if (glow)
        gsap.to(glow, { x: 0, y: 0, duration: 0.8, ease: "power2.out" });
    });
  }

  /* Auto Cycle across the 5 Main Technology Groups */
  function startAutoCycle() {
    if (autoCycleTimer) clearInterval(autoCycleTimer);
    autoCycleTimer = setInterval(() => {
      if (document.hidden || isLocked) return;
      const currentIdx = groupOrder.indexOf(activeGroupId);
      const nextIdx = (currentIdx + 1) % groupOrder.length;
      selectGroup(groupOrder[nextIdx], false);
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

    window.addEventListener("resize", handleResize, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTechOrbit);
  } else {
    initTechOrbit();
  }
})();
