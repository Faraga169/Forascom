/* ==========================================================================
   FORASCOM - MAIN APPLICATION LOGIC, WIZARD & SCROLL REVEAL
   ========================================================================== */

// Solution Estimator Logic
const estimatorStepsData = {
  serviceType: null,
  projectScale: null,
  timeline: null
};

function initSolutionEstimator() {
  const serviceOptions = document.querySelectorAll(".estimator-service-opt");
  const scaleOptions = document.querySelectorAll(".estimator-scale-opt");
  const step1Btn = document.getElementById("estimator-step1-next");
  const step2Btn = document.getElementById("estimator-step2-next");
  const resetBtn = document.getElementById("estimator-reset");

  serviceOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      serviceOptions.forEach(o => o.classList.remove("border-cyan-500", "bg-cyan-50/50", "ring-2", "ring-cyan-400"));
      opt.classList.add("border-cyan-500", "bg-cyan-50/50", "ring-2", "ring-cyan-400");
      estimatorStepsData.serviceType = opt.getAttribute("data-val");
      if (step1Btn) step1Btn.disabled = false;
    });
  });

  scaleOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      scaleOptions.forEach(o => o.classList.remove("border-cyan-500", "bg-cyan-50/50", "ring-2", "ring-cyan-400"));
      opt.classList.add("border-cyan-500", "bg-cyan-50/50", "ring-2", "ring-cyan-400");
      estimatorStepsData.projectScale = opt.getAttribute("data-val");
      if (step2Btn) step2Btn.disabled = false;
    });
  });

  if (step1Btn) {
    step1Btn.addEventListener("click", () => {
      transitionEstimatorStep("estimator-step-2", "estimator-step-1");
    });
  }

  if (step2Btn) {
    step2Btn.addEventListener("click", () => {
      calculateAndShowEstimate();
      transitionEstimatorStep("estimator-step-result", "estimator-step-2");
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      estimatorStepsData.serviceType = null;
      estimatorStepsData.projectScale = null;
      transitionEstimatorStep("estimator-step-1", "estimator-step-result");
      serviceOptions.forEach(o => o.classList.remove("border-cyan-500", "bg-cyan-50/50", "ring-2", "ring-cyan-400"));
      scaleOptions.forEach(o => o.classList.remove("border-cyan-500", "bg-cyan-50/50", "ring-2", "ring-cyan-400"));
      if (step1Btn) step1Btn.disabled = true;
      if (step2Btn) step2Btn.disabled = true;
    });
  }
}

/* Smooth slide transition between wizard steps */
function transitionEstimatorStep(showId, hideId) {
  const showEl = document.getElementById(showId);
  const hideEl = document.getElementById(hideId);

  if (hideEl) {
    hideEl.classList.add("hidden");
    hideEl.classList.remove("step-enter");
  }

  if (showEl) {
    showEl.classList.remove("hidden");
    showEl.classList.remove("step-enter");
    void showEl.offsetWidth; // restart animation
    showEl.classList.add("step-enter");
  }
}

function calculateAndShowEstimate() {
  const resultTitle = document.getElementById("estimate-rec-title");
  const resultDesc = document.getElementById("estimate-rec-desc");
  const resultTime = document.getElementById("estimate-rec-time");
  const resultStack = document.getElementById("estimate-rec-stack");

  const t = (key, fallback) => window.forascomI18n?.t(key, fallback) ?? fallback;
  const isEnglish = window.forascomI18n?.currentLang === "en";

  let title = t("home.estimator.optWeb", "تطوير موقع/تطبيق ويب (Web Development - Custom / WordPress)");
  let desc = t("home.estimator.optWebDesc", "بناء نظام سحابي موسع بقواعد بيانات مخصصة أو موقع WordPress فائق الأداء لخدمة أهداف نشاطك.");
  let time = isEnglish ? "2 - 4 weeks" : "2 - 4 أسابيع";
  let stack = ["React.js", "Node.js / WordPress", "PostgreSQL / WooCommerce", "Tailwind CSS"];

  if (estimatorStepsData.serviceType === "ai") {
    title = t("home.estimator.optAi", "منظومة ذكاء اصطناعي وأتمتة (AI & Intelligent Automation)");
    desc = t("home.estimator.optAiDesc", "بناء نماذج لغوية مخصصة، معالجة مستندات، أو رؤية حاسوبية مع دمج خوادم سريعة الاستجابة.");
    time = isEnglish ? "2 - 4 weeks" : "2 - 4 أسابيع";
    stack = ["OpenAI API", "Python / PyTorch", "LangChain", "Vector Database"];
  } else if (estimatorStepsData.serviceType === "powerplatform") {
    title = t("home.estimator.optPower", "أتمتة الأعمال وبوابات المهام (Power Platform & Low-Code)");
    desc = t("home.estimator.optPowerDesc", "تصميم سير عمل Power Automate وتطبيقات Power Apps لربط وتسهيل الموافقات الإدارية.");
    time = isEnglish ? "1 - 2 weeks" : "1 - 2 أسابيع";
    stack = ["Power Automate", "Power Apps", "Dataverse / SharePoint", "Microsoft Teams API"];
  }

  if (estimatorStepsData.projectScale === "enterprise") {
    time = isEnglish ? "5 - 8 weeks" : "5 - 8 أسابيع";
  }

  if (resultTitle) resultTitle.textContent = title;
  if (resultDesc) resultDesc.textContent = desc;
  if (resultTime) resultTime.textContent = time;
  if (resultStack) {
    resultStack.innerHTML = stack.map(s => `<span class="bg-cyan-100 text-cyan-800 text-xs font-bold px-3 py-1 rounded-md">${s}</span>`).join('');
  }
}

function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-btn");
  const menuContainer = document.getElementById("mobile-menu-container");

  if (toggleBtn && menuContainer) {
    toggleBtn.addEventListener("click", () => {
      const isHidden = menuContainer.classList.contains("hidden");
      if (isHidden) {
        menuContainer.classList.remove("hidden");
        menuContainer.classList.remove("drawer-enter");
        void menuContainer.offsetWidth; // restart animation
        menuContainer.classList.add("drawer-enter");
      } else {
        menuContainer.classList.add("hidden");
        menuContainer.classList.remove("drawer-enter");
      }
    });
  }
}

function toggleHeroVideoPlay() {
  const video = document.getElementById("hero-tech-video");
  if (video) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
}

let revealObserver = null;

function initScrollReveal() {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  // Expose a scanner so dynamically re-rendered elements (e.g. portfolio
  // grid after filtering) can be observed automatically.
  window.forascomRevealScan = function scanRevealElements() {
    if (!revealObserver) return;
    document.querySelectorAll(".reveal-on-scroll:not(.is-visible)").forEach(el => {
      revealObserver.observe(el);
    });
  };

  window.forascomRevealScan();
}

/* Scroll chrome: progress bar, scrolled nav state & back-to-top button */
function initScrollChrome() {
  const progressBar = document.getElementById("scroll-progress");
  const header = document.querySelector(".glass-nav");
  const backToTop = document.getElementById("back-to-top");

  const onScroll = () => {
    const y = window.scrollY || 0;
    const doc = document.documentElement;
    const maxScroll = doc.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(1, Math.max(0, y / maxScroll)) : 0;

    if (progressBar) progressBar.style.transform = `scaleX(${progress})`;
    if (header) header.classList.toggle("nav-scrolled", y > 30);
    if (backToTop) backToTop.classList.toggle("visible", y > 640);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

function bootForascom() {
  initSolutionEstimator();
  initMobileMenu();
  initScrollReveal();
  initScrollChrome();
  initClientJourneyTimeline();
}

/* ==========================================================================
   PREMIUM CLIENT JOURNEY TIMELINE INTERACTION
   ========================================================================== */
let currentJourneyStep = 3;
let journeyAccordionEnabled = false;

function selectJourneyStep(stepIndex) {
  const totalSteps = 6;
  const clampedStep = Math.max(1, Math.min(totalSteps, parseInt(stepIndex, 10)));
  currentJourneyStep = clampedStep;
  const accordionMode = isJourneyAccordion();
  const section = document.getElementById("how-we-work");

  // 1. Update Milestone Tabs
  const milestoneBtns = document.querySelectorAll(".journey-milestone-btn");
  milestoneBtns.forEach((btn) => {
    const idx = parseInt(btn.getAttribute("data-step-idx"), 10);
    btn.classList.remove("is-active", "is-completed");

    if (idx === clampedStep) {
      btn.classList.add("is-active");
      if (accordionMode) {
        btn.setAttribute("aria-expanded", idx === clampedStep ? "true" : "false");
      } else {
        btn.setAttribute("aria-selected", "true");
      }
      // Scroll into view on mobile horizontally if overflowing
      const wrapper = document.querySelector(".journey-timeline-wrapper");
      if (wrapper && wrapper.scrollWidth > wrapper.clientWidth) {
        btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    } else if (idx < clampedStep) {
      btn.classList.add("is-completed");
      if (accordionMode) {
        btn.setAttribute("aria-expanded", "false");
      } else {
        btn.setAttribute("aria-selected", "false");
      }
    } else {
      if (accordionMode) {
        btn.setAttribute("aria-expanded", "false");
      } else {
        btn.setAttribute("aria-selected", "false");
      }
    }

    if (accordionMode) {
      const accordionItem = btn.closest(".journey-accordion-item");
      const content = accordionItem?.querySelector(".journey-accordion-content");
      const isOpen = idx === clampedStep && clampedStep >= 3;
      accordionItem?.classList.toggle("is-open", isOpen);
      if (content) {
        content.classList.toggle("is-open", isOpen);
        content.setAttribute("aria-hidden", String(!isOpen));
        content.inert = !isOpen;
        content.style.maxHeight = "0px";
      }
    }
  });

  // 2. Update Timeline Track Progress Line
  const progressLine = document.getElementById("journey-timeline-progress");
  if (progressLine) {
    const progressPct = ((clampedStep - 1) / (totalSteps - 1)) * 100;
    progressLine.style.width = `${progressPct}%`;
  }

  // 3. Update Active Stage Detail Panels
  const panels = document.querySelectorAll(".journey-stage-panel");
  panels.forEach((panel) => {
    const pStep = parseInt(panel.getAttribute("data-step"), 10);
    const inAccordion = accordionMode && panel.closest(".journey-accordion-content");
    if (pStep === clampedStep) {
      panel.classList.add("is-active");
      panel.removeAttribute("hidden");
    } else {
      panel.classList.remove("is-active");
      if (inAccordion) {
        panel.removeAttribute("hidden");
      } else {
        panel.setAttribute("hidden", "true");
      }
    }
  });

  if (accordionMode && clampedStep >= 3) {
    const openContent = section?.querySelector(
      ".journey-accordion-content.is-open",
    );
    if (openContent) {
      void openContent.offsetHeight;
      openContent.style.maxHeight = `${openContent.scrollHeight}px`;
    }
  }

  section?.classList.toggle("has-accordion-panel", accordionMode && clampedStep >= 3);
}

function isJourneyAccordion() {
  return journeyAccordionEnabled
    && ["ar", "en"].includes(document.documentElement.lang)
    && window.matchMedia("(max-width: 1024px)").matches;
}

function handleJourneyMilestone(button) {
  const stepIndex = parseInt(button.getAttribute("data-step-idx"), 10);
  if (!isJourneyAccordion()) {
    selectJourneyStep(stepIndex);
    return;
  }

  if (button.getAttribute("aria-expanded") === "true") {
    button.setAttribute("aria-expanded", "false");
    button.classList.remove("is-active");
    const item = button.closest(".journey-accordion-item");
    const content = item?.querySelector(".journey-accordion-content");
    const panel = content?.querySelector(".journey-stage-panel");
    item?.classList.remove("is-open");
    content?.classList.remove("is-open");
    if (content) content.style.maxHeight = "0px";
    content?.setAttribute("aria-hidden", "true");
    if (content) content.inert = true;
    panel?.classList.remove("is-active");
    document.getElementById("how-we-work")?.classList.remove("has-accordion-panel");
    return;
  }

  selectJourneyStep(stepIndex);
}

function setJourneyAccordionMode(enable) {
  const section = document.getElementById("how-we-work");
  const milestones = section?.querySelector(".journey-milestones");
  const panelsContainer = section?.querySelector("#journey-panels-container");
  if (!section || !milestones || !panelsContainer || enable === journeyAccordionEnabled) return;

  const journeyButtons = [...milestones.querySelectorAll(".journey-milestone-btn[data-step-idx]")];
  const visibleButtons = journeyButtons.filter((button) => {
    const step = parseInt(button.getAttribute("data-step-idx"), 10);
    return step >= 3;
  });

  if (enable) {
    milestones.setAttribute("role", "list");
    visibleButtons.forEach((button) => {
      const step = parseInt(button.getAttribute("data-step-idx"), 10);
      const item = document.createElement("div");
      item.className = "journey-accordion-item";
      item.setAttribute("role", "listitem");
      const content = document.createElement("div");
      content.className = "journey-accordion-content";
      content.id = `journey-accordion-content-${step}`;
      content.setAttribute("aria-hidden", "true");
      content.inert = true;
      const inner = document.createElement("div");
      inner.className = "journey-accordion-content-inner";
      content.append(inner);

      button.before(item);
      item.append(button, content);
      button.removeAttribute("role");
      button.removeAttribute("aria-selected");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-controls", `panel-step-${step}`);
      const panel = panelsContainer.querySelector(`.journey-stage-panel[data-step="${step}"]`);
      if (panel) {
        panel.removeAttribute("hidden");
        inner.append(panel);
      }
    });
    journeyAccordionEnabled = true;
    selectJourneyStep(currentJourneyStep);
    return;
  }

  journeyAccordionEnabled = false;
  journeyButtons.forEach((button) => {
    const item = button.closest(".journey-accordion-item");
    if (!item) return;
    const panel = item.querySelector(".journey-stage-panel");
    if (panel) {
      const nextPanel = [...panelsContainer.querySelectorAll(".journey-stage-panel")]
        .find((candidate) => parseInt(candidate.dataset.step, 10) > parseInt(panel.dataset.step, 10));
      panelsContainer.insertBefore(panel, nextPanel || null);
    }
    item.before(button);
    item.remove();
    button.setAttribute("role", "tab");
    button.removeAttribute("aria-expanded");
    button.setAttribute("aria-controls", `panel-step-${button.dataset.stepIdx}`);
  });
  milestones.setAttribute("role", "tablist");
  section.classList.remove("has-accordion-panel");
  selectJourneyStep(currentJourneyStep);
}

function initClientJourneyTimeline() {
  const journeySection = document.getElementById("how-we-work");
  if (!journeySection) return;

  selectJourneyStep(3);
  setJourneyAccordionMode(
    ["ar", "en"].includes(document.documentElement.lang)
      && window.matchMedia("(max-width: 1024px)").matches
  );

  const updateAccordionMode = () => {
    const shouldEnable = ["ar", "en"].includes(document.documentElement.lang)
      && window.matchMedia("(max-width: 1024px)").matches;
    setJourneyAccordionMode(shouldEnable);
    if (shouldEnable) {
      journeySection.querySelectorAll(".journey-accordion-content.is-open").forEach((content) => {
        content.style.maxHeight = `${content.scrollHeight}px`;
      });
    }
  };
  window.addEventListener("resize", updateAccordionMode, { passive: true });
  window.addEventListener("forascom:langchange", updateAccordionMode);

  // Enable keyboard arrow navigation across timeline milestones
  document.addEventListener("keydown", (e) => {
    if (isJourneyAccordion()) return;

    const activeTab = document.querySelector(".journey-milestone-btn:focus");
    if (!activeTab) return;

    const currentIdx = parseInt(activeTab.getAttribute("data-step-idx"), 10);
    if (isNaN(currentIdx)) return;

    if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      // In RTL, ArrowLeft navigates to Next Step
      e.preventDefault();
      const nextIdx = currentIdx < 6 ? currentIdx + 1 : 1;
      selectJourneyStep(nextIdx);
      const targetBtn = document.querySelector(`.journey-milestone-btn[data-step-idx="${nextIdx}"]`);
      if (targetBtn) targetBtn.focus();
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      // In RTL, ArrowRight navigates to Prev Step
      e.preventDefault();
      const prevIdx = currentIdx > 1 ? currentIdx - 1 : 6;
      selectJourneyStep(prevIdx);
      const targetBtn = document.querySelector(`.journey-milestone-btn[data-step-idx="${prevIdx}"]`);
      if (targetBtn) targetBtn.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      selectJourneyStep(1);
      const firstBtn = document.querySelector('.journey-milestone-btn[data-step-idx="1"]');
      if (firstBtn) firstBtn.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      selectJourneyStep(6);
      const lastBtn = document.querySelector('.journey-milestone-btn[data-step-idx="6"]');
      if (lastBtn) lastBtn.focus();
    }
  });
}

document.addEventListener("DOMContentLoaded", bootForascom);
