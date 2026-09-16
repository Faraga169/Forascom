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

  let title = "تطوير موقع/تطبيق ويب (Web Development - Custom / WordPress)";
  let desc = "بناء نظام سحابي موسع بقواعد بيانات مخصصة أو موقع WordPress فائق الأداء لخدمة أهداف نشاطك.";
  let time = "2 - 4 أسابيع";
  let stack = ["React.js", "Node.js / WordPress", "PostgreSQL / WooCommerce", "Tailwind CSS"];

  if (estimatorStepsData.serviceType === "ai") {
    title = "منظومة ذكاء اصطناعي وأتمتة (AI & Intelligent Automation)";
    desc = "بناء نماذج لغوية مخصصة، معالجة مستندات، أو رؤية حاسوبية مع دمج خوادم سريعة الاستجابة.";
    time = "2 - 4 أسابيع";
    stack = ["OpenAI API", "Python / PyTorch", "LangChain", "Vector Database"];
  } else if (estimatorStepsData.serviceType === "powerplatform") {
    title = "أتمتة الأعمال وبوابات المهام (Power Platform & Low-Code)";
    desc = "تصميم سير عمل Power Automate وتطبيقات Power Apps لربط وتسهيل الموافقات الإدارية.";
    time = "1 - 2 أسابيع";
    stack = ["Power Automate", "Power Apps", "Dataverse / SharePoint", "Microsoft Teams API"];
  }

  if (estimatorStepsData.projectScale === "enterprise") {
    time = "5 - 8 أسابيع";
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
function selectJourneyStep(stepIndex) {
  const totalSteps = 6;
  const clampedStep = Math.max(1, Math.min(totalSteps, parseInt(stepIndex, 10)));
  
  // 1. Update Milestone Tabs
  const milestoneBtns = document.querySelectorAll(".journey-milestone-btn");
  milestoneBtns.forEach((btn) => {
    const idx = parseInt(btn.getAttribute("data-step-idx"), 10);
    btn.classList.remove("is-active", "is-completed");
    
    if (idx === clampedStep) {
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      // Scroll into view on mobile horizontally if overflowing
      const wrapper = document.querySelector(".journey-timeline-wrapper");
      if (wrapper && wrapper.scrollWidth > wrapper.clientWidth) {
        btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    } else if (idx < clampedStep) {
      btn.classList.add("is-completed");
      btn.setAttribute("aria-selected", "false");
    } else {
      btn.setAttribute("aria-selected", "false");
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
    if (pStep === clampedStep) {
      panel.classList.add("is-active");
      panel.removeAttribute("hidden");
    } else {
      panel.classList.remove("is-active");
      panel.setAttribute("hidden", "true");
    }
  });
}

function initClientJourneyTimeline() {
  const journeySection = document.getElementById("how-we-work");
  if (!journeySection) return;

  selectJourneyStep(1);

  // Enable keyboard arrow navigation across timeline milestones
  document.addEventListener("keydown", (e) => {
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

