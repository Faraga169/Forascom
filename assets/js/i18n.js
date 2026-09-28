/**
 * Forascom (فرصكم) - Core Internationalization (i18n) Engine
 * Supports Arabic (ar - default) and English (en)
 * Lightweight, zero-dependency, DOM-preserving
 */

(function () {
  "use strict";

  const STORAGE_KEY = "language";
  const DEFAULT_LANG = "ar";
  const SUPPORTED_LANGS = ["ar", "en"];

  // Initialize current language from localStorage or default
  let currentLang = DEFAULT_LANG;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGS.includes(saved)) {
      currentLang = saved;
    }
  } catch (e) {
    console.warn("Forascom i18n: localStorage not accessible", e);
  }

  /**
   * Helper to resolve nested key from translations dictionary
   * e.g., 'home.hero.title' -> dict.home.hero.title
   */
  function resolveKey(dict, path) {
    if (!dict || !path) return null;
    const parts = path.split(".");
    let current = dict;
    for (let i = 0; i < parts.length; i++) {
      if (current === undefined || current === null) return null;
      current = current[parts[i]];
    }
    return current;
  }

  /**
   * Get localized translation string by key with automatic fallback to Arabic
   */
  function t(key, fallback = "") {
    if (!key) return fallback;
    const translations = window.forascomTranslations || {};
    const langDict = translations[currentLang];
    const fallbackDict = translations[DEFAULT_LANG];

    let val = resolveKey(langDict, key);
    if (val === undefined || val === null) {
      val = resolveKey(fallbackDict, key);
    }
    return (val !== undefined && val !== null) ? val : fallback;
  }

  /**
   * Update direction, language attributes, and body classes
   */
  function updateDocumentDirection() {
    const isRtl = currentLang === "ar";
    document.documentElement.lang = currentLang;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";

    if (document.body) {
      document.body.classList.toggle("is-en", currentLang === "en");
      document.body.classList.toggle("is-ar", currentLang === "ar");
    }
  }

  /**
   * Update page metadata (title, meta description)
   */
  function updateMetadata() {
    const pageKey = getPageKey();
    const trans = window.forascomTranslations?.[currentLang];

    // Meta titles by page
    const titles = {
      index: {
        ar: "Forascom — فرصكم | حلول برمجية وتطوير تقني",
        en: "Forascom | Enterprise Software, AI & Digital Solutions"
      },
      about: {
        ar: "عن فرصكم | حلول برمجية وتطوير تقني متقدم",
        en: "About Us | Forascom Software Studio"
      },
      services: {
        ar: "خدماتنا | حلول البرمجيات والذكاء الاصطناعي — فرصكم",
        en: "Our Services | Enterprise Software & AI — Forascom"
      },
      portfolio: {
        ar: "معرض الأعمال | مشاريع ودراسات حالة — فرصكم",
        en: "Portfolio & Case Studies | Forascom"
      },
      "project-details": {
        ar: "تفاصيل المشروع | Forascom فرصكم",
        en: "Project Details | Forascom"
      },
      contact: {
        ar: "تواصل معنا | Forascom — ابدأ مشروعك التقني",
        en: "Contact Us | Start Your Project — Forascom"
      }
    };

    if (pageKey && titles[pageKey] && pageKey !== "project-details") {
      document.title = titles[pageKey][currentLang] || titles[pageKey].ar;
    }

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const descKey = currentLang === "en"
        ? "Software engineering and digital technology studio. We create business opportunities through sustainable web platforms, practical AI, and resilient automation."
        : "شركة حلول برمجية وتطوير تقني — نخلق الفرص للأعمال من خلال تقنيات الويب المستدامة، الذكاء الاصطناعي، وأتمتة العمليات بجودة هندسية راقية.";
      metaDesc.setAttribute("content", descKey);
    }
  }

  /**
   * Determine current page key from URL
   */
  function getPageKey() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes("about")) return "about";
    if (path.includes("services")) return "services";
    if (path.includes("portfolio")) return "portfolio";
    if (path.includes("project-details")) return "project-details";
    if (path.includes("contact")) return "contact";
    return "index";
  }

  /**
   * Translate all DOM elements marked with data-i18n attributes
   */
  function applyTranslations(scope = document) {
    // 1. Text Content
    const textEls = scope.querySelectorAll("[data-i18n]");
    textEls.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const translated = t(key, el.textContent);
      if (translated) {
        el.textContent = translated;
      }
    });

    // 2. HTML Content (for text with embedded markup / spans)
    const htmlEls = scope.querySelectorAll("[data-i18n-html]");
    htmlEls.forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      const translated = t(key, el.innerHTML);
      if (translated) {
        el.innerHTML = translated;
      }
    });

    // 3. Placeholders
    const placeholderEls = scope.querySelectorAll("[data-i18n-placeholder]");
    placeholderEls.forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (!key) return;
      const translated = t(key, el.placeholder);
      if (translated) {
        el.placeholder = translated;
      }
    });

    // 4. Aria Labels
    const ariaEls = scope.querySelectorAll("[data-i18n-aria]");
    ariaEls.forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (!key) return;
      const translated = t(key, el.getAttribute("aria-label"));
      if (translated) {
        el.setAttribute("aria-label", translated);
      }
    });

    // 5. Titles
    const titleEls = scope.querySelectorAll("[data-i18n-title]");
    titleEls.forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      if (!key) return;
      const translated = t(key, el.title);
      if (translated) {
        el.title = translated;
      }
    });

    // 6. Image Alts
    const altEls = scope.querySelectorAll("[data-i18n-alt]");
    altEls.forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (!key) return;
      const translated = t(key, el.alt);
      if (translated) {
        el.alt = translated;
      }
    });

    updateLanguageSwitcherUI();
  }

  /**
   * Update visual states of all language switchers in the DOM
   */
  function updateLanguageSwitcherUI() {
    // 1. Segmented pill switchers: buttons with data-lang-switch="ar|en"
    const switcherButtons = document.querySelectorAll("[data-lang-switch]");
    switcherButtons.forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang-switch");
      const isActive = btnLang === currentLang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");

      if (isActive) {
        btn.classList.add(
          "bg-cyan-500/20",
          "text-cyan-300",
          "font-extrabold",
          "shadow-[0_0_12px_rgba(6,182,212,0.25)]",
          "border",
          "border-cyan-500/40"
        );
        btn.classList.remove("text-slate-400", "border-transparent");
      } else {
        btn.classList.remove(
          "bg-cyan-500/20",
          "text-cyan-300",
          "font-extrabold",
          "shadow-[0_0_12px_rgba(6,182,212,0.25)]",
          "border",
          "border-cyan-500/40"
        );
        btn.classList.add("text-slate-400", "border-transparent");
      }
    });

    // 2. Simple toggle buttons with .lang-switcher-toggle
    const toggleButtons = document.querySelectorAll(".lang-switcher-toggle");
    toggleButtons.forEach((btn) => {
      const labelEl = btn.querySelector(".lang-toggle-text") || btn;
      // Show target language to switch to
      labelEl.textContent = currentLang === "ar" ? "EN" : "العربية";
      btn.setAttribute(
        "aria-label",
        currentLang === "ar" ? "Switch to English" : "التبديل إلى العربية"
      );
    });
  }

  /**
   * Set and persist active language
   */
  function setLanguage(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) {
      lang = DEFAULT_LANG;
    }

    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      console.warn("Forascom i18n: Failed to save to localStorage", e);
    }

    updateDocumentDirection();
    updateMetadata();
    applyTranslations();

    // Trigger page-specific re-renders if available
    try {
      // Re-render Portfolio page if active
      if (typeof window.reRenderPortfolioWithLanguage === "function") {
        window.reRenderPortfolioWithLanguage(currentLang);
      } else if (typeof window.renderProjectFilters === "function" && typeof window.renderProjectShowcase === "function") {
        const activeFilter = (typeof window.getCategoryFromUrl === "function") ? window.getCategoryFromUrl() : "all";
        window.renderProjectFilters(activeFilter);
        window.renderProjectShowcase(activeFilter);
      }

      // Re-render Project Details page if active
      if (typeof window.reRenderProjectDetailsWithLanguage === "function") {
        window.reRenderProjectDetailsWithLanguage(currentLang);
      }
    } catch (err) {
      console.warn("Forascom i18n: Dynamic component re-render notice", err);
    }

    // Dispatch global event for other listeners
    window.dispatchEvent(
      new CustomEvent("forascom:langchange", {
        detail: { language: currentLang, isRtl: currentLang === "ar" },
      })
    );
  }

  /**
   * Toggle between Arabic and English
   */
  function toggleLanguage() {
    setLanguage(currentLang === "ar" ? "en" : "ar");
  }

  /**
   * Attach event listeners to all language switcher triggers in DOM
   */
  function attachSwitcherListeners() {
    // Delegated click handler on document to capture static and dynamic switchers
    document.addEventListener("click", (e) => {
      const switchBtn = e.target.closest("[data-lang-switch]");
      if (switchBtn) {
        e.preventDefault();
        const targetLang = switchBtn.getAttribute("data-lang-switch");
        if (targetLang && targetLang !== currentLang) {
          setLanguage(targetLang);
        }
        return;
      }

      const toggleBtn = e.target.closest(".lang-switcher-toggle");
      if (toggleBtn) {
        e.preventDefault();
        toggleLanguage();
      }
    });
  }

  /**
   * Boot engine
   */
  function init() {
    updateDocumentDirection();
    updateMetadata();
    attachSwitcherListeners();
    applyTranslations();

    // In case translations loaded asynchronously or after DOM
    window.addEventListener("DOMContentLoaded", () => {
      updateDocumentDirection();
      updateMetadata();
      applyTranslations();
    });
  }

  // Execute immediate direction setup to prevent layout flash
  updateDocumentDirection();

  // Run init on script load
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose global API
  window.forascomI18n = {
    get currentLang() {
      return currentLang;
    },
    get isRtl() {
      return currentLang === "ar";
    },
    setLanguage,
    toggleLanguage,
    t,
    applyTranslations,
    updateDocumentDirection,
  };
})();
