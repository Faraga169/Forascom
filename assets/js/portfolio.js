/* ==========================================================================
   FORASCOM - PORTFOLIO & CASE STUDIES MODULE (FOCUSED TARGET STACK)
   1. Web Development (Custom Code or WordPress)
   2. AI & RAG Chatbots (Document Search & AI Assistants)
   3. Process Automation (n8n & Power Platform)
   ========================================================================== */

const projectsData = [
  {
    id: "ains-group",
    title: "AINS GROUP",
    category: "webdev",
    categoryName: "Web Development",
    summary: "موقع الشركة الرقمية يبرز حلول التكنولوجيا والبنية التحتية، مراكز البيانات، الأمن المادي، وبرامج إدارة الشبكات في تجربة شركة مؤسسية احترافية.",
    problem: "كانت الشركة بحاجة إلى موقع يعكس قدراتها التقنية المتعددة ويوضح خدماتها بوضوح في مجالات البنية التحتية، الشبكات، الأمن، والدعم الفني.",
    solution: "تم تصميم وبناء موقع احترافي يركز على عرض خدمات الشركة في هيكل واضح، مع تجربة متجاوبة ومحتوى مؤسسي عالي الوضوح لعملاء المشاريع التقنية.",
    role: "Corporate Website Design, Information Architecture, Frontend Development, Conversion UX",
    metrics: "عرض احترافي جاهز لعرض الخدمات التقنية والأنظمة المؤسسية عبر موقع مصمم خصيصاً",
    techStack: ["Web Development", "UI/UX", "Corporate Website", "Responsive Design"],
    location: "Digital Technology & Infrastructure",
    url: "https://ains-group.com/",
    accentBg: "from-cyan-600 to-blue-600"
  },
  {
    id: "ai-document-rag-chatbot",
    title: "شات بوت RAG ذكي لاستخراج واستعلام العقود والمستندات",
    category: "ai",
    categoryName: "AI & RAG Chatbots",
    summary: "نظام شات بوت تفاعلي يستند إلى تقنية RAG وقواعد بيانات Vector لقراءة وفهم مستندات وعقود الشركات وتوفير إجابات موثقة.",
    problem: "استغراق الفريق القانوني والمالي ساعات طويلة يومياً للبحث والتأكد من شروط وبنود مئات العقود والمستندات الورقية.",
    solution: "قمنا بإنشاء RAG AI Chatbot مدعوم بـ OpenAI GPT-4 وقاعدة بيانات Vector لتمكين الموظفين من التحدث المباشر مع مستنداتهم واستخراج المعلومات فوراً.",
    role: "RAG Pipeline Setup, Vector Database Architecture, Chat Interface & Integration",
    metrics: "تسريع استخراج بنود العقود بنسبة 90% والإجابة المباشرة في أقل من ثانيتين",
    techStack: ["OpenAI GPT-4", "LangChain", "Vector Database", "Python FastAPI", "React Chat UI"],
    location: "الرياض، المملكة العربية السعودية",
    accentBg: "from-teal-600 to-emerald-500"
  },
  {
    id: "power-automate-workflow",
    title: "أتمتة الموافقات والدورة المستندية بـ Power Automate",
    category: "automation",
    categoryName: "Process Automation (Power Platform)",
    summary: "نظام أتمتة دورة الموافقات المالية والإدارية عبر Power Automate و Power Apps وتكامل Teams.",
    problem: "بطء إجراءات الدورة المستندية والموافقات المالية بين الأقسام بسبب اعتمادها على الإيميلات والورقيات.",
    solution: "تطوير تطبيق Power Apps مع سير عمل Power Automate ينقل طلبات Approval تلقائياً للمسؤول على Teams والإيميل.",
    role: "Power Apps Portal, Power Automate Design, Microsoft Teams Integration",
    metrics: "اختصار زمن الدورة المستندية من 3 أيام إلى 15 دقيقة فقط",
    techStack: ["Power Automate", "Power Apps", "Microsoft Teams API", "SharePoint"],
    location: "الكويت",
    accentBg: "from-amber-500 to-orange-600"
  }
];

function renderPortfolioGrid(filter = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filteredProjects = filter === "all"
    ? projectsData
    : projectsData.filter(p => (filter === "powerplatform" ? p.category === "automation" : p.category === filter));

  const isFirstRender = !container.dataset.rendered;

  container.innerHTML = filteredProjects.map((project, idx) => {
    const normalizedCategory = project.category === "automation" ? "powerplatform" : project.category;
    const tagLabel = normalizedCategory === "ai"
      ? "AI & RAG"
      : normalizedCategory === "webdev"
        ? "WEB"
        : "POWER";

    const previewMarkup = project.url
      ? `
        <div class="project-browser" aria-label="${project.title} preview">
          <div class="project-browser-header">
            <div class="project-browser-dots">
              <span class="project-browser-dot red"></span>
              <span class="project-browser-dot yellow"></span>
              <span class="project-browser-dot green"></span>
            </div>
            <span class="project-browser-url">${new URL(project.url).hostname.replace('www.', '')}</span>
          </div>
          <div class="project-browser-viewport">
            <iframe src="${project.url}" title="${project.title}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>
          </div>
        </div>
      `
      : `
        <div class="portfolio-media-visual">
          <div class="visual-ai-panel">
            <span class="visual-bubble bubble-a">التوثيق</span>
            <span class="visual-bubble bubble-b">Vector Search</span>
            <span class="visual-bubble bubble-c">RAG</span>
            <span class="visual-core">AI</span>
          </div>
        </div>
      `;

    return `
      <article class="portfolio-card ${isFirstRender ? "reveal-on-scroll" : "portfolio-card-enter"}" data-category="${normalizedCategory}" data-index="${idx}" aria-label="${project.title}">
        <div class="portfolio-card-shell">
          <div class="portfolio-card-media">
            <span class="portfolio-card-badge">${project.categoryName}</span>
            ${previewMarkup}
          </div>

          <div class="portfolio-card-body">
            <div class="portfolio-card-meta">
              <span>${String(idx + 1).padStart(2, "0")}</span>
              <span>${tagLabel}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            <div class="portfolio-tag-list">
              ${project.techStack.map(t => `<span>${t}</span>`).join('')}
            </div>
            <div class="portfolio-card-footer">
              <span class="portfolio-metric-pill">${project.metrics}</span>
              <a class="portfolio-live-link" href="${project.url}" target="_blank" rel="noreferrer noopener">VIEW LIVE PROJECT ↗</a>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  container.dataset.rendered = "1";
  attachPortfolioTilt();
  initPortfolioRevealMotion();
  initPortfolioCounters();

  if (window.forascomRevealScan) window.forascomRevealScan();
}

function attachPortfolioTilt() {
  const cards = document.querySelectorAll("#portfolio .portfolio-card");
  cards.forEach(card => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const rotateY = ((x / rect.width) - 0.5) * 6;
      const rotateX = (0.5 - (y / rect.height)) * 6;

      card.style.setProperty("--rotate-x", `${rotateX}deg`);
      card.style.setProperty("--rotate-y", `${rotateY}deg`);
      card.style.setProperty("--pointer-x", `${(x / rect.width) * 100}%`);
      card.style.setProperty("--pointer-y", `${(y / rect.height) * 100}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--rotate-x", "0deg");
      card.style.setProperty("--rotate-y", "0deg");
    });
  });
}

let portfolioRevealTweens = [];

function initPortfolioRevealMotion() {
  if (!window.gsap || !window.ScrollTrigger) return;

  portfolioRevealTweens.forEach(tween => {
    if (tween && tween.kill) tween.kill();
  });
  portfolioRevealTweens = [];

  const cards = document.querySelectorAll("#portfolio .portfolio-card");
  cards.forEach((card, index) => {
    const tween = gsap.fromTo(card,
      {
        opacity: 0,
        y: 52,
        scale: 0.97,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power2.out",
        delay: index * 0.12,
        scrollTrigger: {
          trigger: card,
          start: "top 84%",
          end: "top 34%",
          scrub: 1.1,
          invalidateOnRefresh: true
        }
      }
    );

    portfolioRevealTweens.push(tween);
  });
}

function initPortfolioCounters() {
  if (!window.gsap || !window.ScrollTrigger) return;

  const counters = document.querySelectorAll("#portfolio .portfolio-stat-value");
  counters.forEach(counter => {
    const raw = Number(counter.dataset.value || 0);
    const suffix = counter.dataset.suffix || "";
    const isDecimal = raw % 1 !== 0;

    const tween = gsap.fromTo(
      { value: 0 },
      {
        value: raw,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: function () {
          const current = this.targets()[0].value;
          const display = suffix.includes("%")
            ? `${isDecimal ? current.toFixed(1) : current.toFixed(0)}%`
            : suffix.includes("دقيقة")
              ? `${current.toFixed(0)} دقيقة`
              : `${current.toFixed(0)}%`;
          counter.textContent = display;
        }
      }
    );

    ScrollTrigger.create({
      trigger: counter,
      start: "top 90%",
      end: "top 50%",
      scrub: 0.5,
      animation: tween,
      invalidateOnRefresh: true
    });
  });
}

function initPortfolioTabs() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("is-active");
      });
      tab.classList.add("is-active");

      const filter = tab.getAttribute("data-filter");
      renderPortfolioGrid(filter);
    });
  });
}

function openProjectModal(projectId, updateHash = true) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content-container");

  if (!modal || !modalContent) return;

  if (updateHash) {
    history.pushState(null, null, `#project-${project.id}`);
  }

  const shareableUrl = `${window.location.origin}${window.location.pathname}#project-${project.id}`;

  modalContent.innerHTML = `
    <div class="p-8">
      <div class="flex items-center justify-between mb-4">
        <span class="bg-cyan-100 text-cyan-800 text-xs font-bold px-3 py-1 rounded-full">${project.categoryName}</span>
        <button onclick="closeProjectModal()" class="text-slate-400 hover:text-slate-600 p-1">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      <h2 class="text-2xl sm:text-3xl font-black text-navy mb-4">${project.title}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-red-50/70 p-4 rounded-xl border border-red-100">
          <h4 class="font-bold text-red-900 text-sm mb-1 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            التحدي والمشكلة:
          </h4>
          <p class="text-slate-700 text-sm leading-relaxed">${project.problem}</p>
        </div>

        <div class="bg-emerald-50/70 p-4 rounded-xl border border-emerald-100">
          <h4 class="font-bold text-emerald-900 text-sm mb-1 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            حل Forascom الهندسي:
          </h4>
          <p class="text-slate-700 text-sm leading-relaxed">${project.solution}</p>
        </div>
      </div>

      <div class="bg-slate-50 p-4 rounded-xl mb-6">
        <h4 class="font-bold text-navy text-sm mb-1">دور فريق Forascom:</h4>
        <p class="text-slate-600 text-sm">${project.role}</p>
      </div>

      <div class="bg-cyan-50 p-4 rounded-xl border border-cyan-200 mb-6">
        <h4 class="font-bold text-cyan-900 text-sm mb-1">النتيجة والأثر المباشر:</h4>
        <p class="text-cyan-800 text-sm font-semibold">${project.metrics}</p>
      </div>

      <div class="mb-6">
        <h4 class="font-bold text-navy text-sm mb-2">التقنيات المستخدمة:</h4>
        <div class="flex flex-wrap gap-2">
          ${project.techStack.map(t => `<span class="bg-navy text-white text-xs font-semibold px-3 py-1 rounded-lg">${t}</span>`).join('')}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
        <button onclick="copyProjectLink('${shareableUrl}')" class="text-xs font-bold text-slate-600 hover:text-cyan border border-slate-200 bg-slate-50 px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
          <span id="copy-btn-text">نسخ رابط المشروع المباشر 🔗</span>
        </button>
        <a href="#contact" onclick="closeProjectModal()" class="btn-cyan text-xs font-bold px-5 py-2.5 rounded-xl">اطلب مشروعاً مشابهاً ←</a>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  modal.classList.remove("modal-open");
  void modal.offsetWidth; // restart entrance animation
  modal.classList.add("modal-open");

  const contentBox = document.getElementById("modal-content-container");
  if (contentBox) {
    contentBox.classList.remove("modal-panel");
    void contentBox.offsetWidth;
    contentBox.classList.add("modal-panel");
  }
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    if (window.location.hash.startsWith("#project-")) {
      history.pushState(null, null, "#portfolio");
    }
  }
}

function copyProjectLink(url) {
  navigator.clipboard.writeText(url).then(() => {
    const textSpan = document.getElementById("copy-btn-text");
    if (textSpan) {
      textSpan.textContent = "تم نسخ الرابط بنجاح! 📋";
      setTimeout(() => {
        textSpan.textContent = "نسخ رابط المشروع المباشر 🔗";
      }, 2500);
    }
  });
}

function checkDeepLinkOnLoad() {
  const hash = window.location.hash;
  if (hash && hash.startsWith("#project-")) {
    const projectId = hash.replace("#project-", "");
    setTimeout(() => {
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth" });
      }
      openProjectModal(projectId, false);
    }, 400);
  }
}

/* ==========================================================================
   PORTFOLIO PAGE (portfolio.html) DYNAMIC CATEGORY FILTER SYSTEM
   ========================================================================== */

const PORTFOLIO_ACTIVE_BTN_CLASSES = [
  "px-6",
  "font-extrabold",
  "bg-tertiary",
  "text-[#00101D]",
  "shadow-[0_0_20px_rgba(0,196,238,0.4)]"
];

const PORTFOLIO_INACTIVE_BTN_CLASSES = [
  "px-5",
  "hover:bg-surface-container-high",
  "hover:text-white",
  "font-bold",
  "border",
  "border-transparent",
  "hover:border-tertiary/30",
  "bg-surface-container-high/60",
  "text-on-surface-variant"
];

const PORTFOLIO_ACTIVE_COUNTER_CLASSES = ["bg-[#00101D]/20", "font-bold"];
const PORTFOLIO_INACTIVE_COUNTER_CLASSES = ["bg-white/5"];

function doesPortfolioCardMatchFilter(card, filter) {
  if (!filter || filter === "all") return true;
  const rawCategory = card.getAttribute("data-category") || "";
  const tokens = rawCategory.toLowerCase().trim().split(/\s+/);
  return tokens.includes(filter.toLowerCase().trim());
}

function initPortfolioPageFilters() {
  const filterContainer = document.getElementById("category-filters");
  if (!filterContainer) return;

  const filterButtons = filterContainer.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll("#projects-container .project-card");
  const activeStudiesBadge = document.getElementById("active-studies-badge");
  const emptyNotice = document.getElementById("empty-category-notice");

  if (!filterButtons.length || !projectCards.length) return;

  function setButtonVisualState(btn, isActive) {
    const counter = btn.querySelector(".filter-counter");
    if (isActive) {
      btn.classList.remove(...PORTFOLIO_INACTIVE_BTN_CLASSES);
      btn.classList.add(...PORTFOLIO_ACTIVE_BTN_CLASSES);
      btn.setAttribute("aria-pressed", "true");
      if (counter) {
        counter.classList.remove(...PORTFOLIO_INACTIVE_COUNTER_CLASSES);
        counter.classList.add(...PORTFOLIO_ACTIVE_COUNTER_CLASSES);
      }
    } else {
      btn.classList.remove(...PORTFOLIO_ACTIVE_BTN_CLASSES);
      btn.classList.add(...PORTFOLIO_INACTIVE_BTN_CLASSES);
      btn.setAttribute("aria-pressed", "false");
      if (counter) {
        counter.classList.remove(...PORTFOLIO_ACTIVE_COUNTER_CLASSES);
        counter.classList.add(...PORTFOLIO_INACTIVE_COUNTER_CLASSES);
      }
    }
  }

  function updateFilterCounters() {
    filterButtons.forEach(btn => {
      const filter = btn.getAttribute("data-filter") || "all";
      let matchCount = 0;
      projectCards.forEach(card => {
        if (doesPortfolioCardMatchFilter(card, filter)) {
          matchCount++;
        }
      });
      const counter = btn.querySelector(".filter-counter");
      if (counter) {
        counter.textContent = String(matchCount);
      }
    });
  }

  function applyFilter(selectedFilter) {
    let visibleCount = 0;

    projectCards.forEach(card => {
      const matches = doesPortfolioCardMatchFilter(card, selectedFilter);
      if (matches) {
        card.classList.remove("filter-hidden");
        visibleCount++;
      } else {
        card.classList.add("filter-hidden");
      }
    });

    // Update active studies badge (e.g. "3 دراسات تشغيلية نشطة")
    if (activeStudiesBadge) {
      activeStudiesBadge.textContent = `${visibleCount} دراسات تشغيلية نشطة`;
    }

    // Toggle empty category notice
    if (emptyNotice) {
      if (visibleCount === 0) {
        emptyNotice.classList.remove("hidden");
      } else {
        emptyNotice.classList.add("hidden");
      }
    }

    // Update active/inactive styling on filter buttons
    filterButtons.forEach(btn => {
      const filterVal = btn.getAttribute("data-filter") || "all";
      setButtonVisualState(btn, filterVal === selectedFilter);
    });

    // Refresh ScrollTrigger positions if library is available
    if (window.ScrollTrigger && typeof window.ScrollTrigger.refresh === "function") {
      window.ScrollTrigger.refresh();
    }
  }

  // Attach click listeners to filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = btn.getAttribute("data-filter") || "all";
      applyFilter(filter);
    });
  });

  // Calculate and display dynamic counters for each category
  updateFilterCounters();

  // Initialize with 'all' selected
  applyFilter("all");
}

function initApp() {
  renderPortfolioGrid();
  initPortfolioTabs();
  initPortfolioPageFilters();
  checkDeepLinkOnLoad();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

window.addEventListener("hashchange", checkDeepLinkOnLoad);
