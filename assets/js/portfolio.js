/* ==========================================================================
   FORASCOM - PORTFOLIO & CASE STUDIES MODULE (FOCUSED TARGET STACK)
   1. Web Development (Custom Code)
   2. WordPress & Digital Experiences
   3. Power Platform & Enterprise Solutions
   4. AI & Machine Learning
   5. Workflow Automation & Integrations
   ========================================================================== */

/* ==========================================================================
   DYNAMIC PROJECT SHOWCASE
   ========================================================================== */

const PROJECT_CATEGORIES = {
  all: {
    label: "All",
  },
  "web-development": {
    label: "Web Development & AI",
  },
  wordpress: {
    label: "WordPress",
  },
  "Automation-BussinessSolution": {
    label: "Automation & Business Solutions",
  },
  // automation: {
  //   label: "الأتمتة وربط الأنظمة",
  // },
};

const PROJECT_FILTER_ACTIVE_CLASSES = [
  "px-6",
  "font-extrabold",
  "bg-tertiary",
  "text-[#00101D]",
  "shadow-[0_0_20px_rgba(0,196,238,0.4)]",
];

const PROJECT_FILTER_INACTIVE_CLASSES = [
  "px-5",
  "hover:bg-surface-container-high",
  "hover:text-white",
  "font-bold",
  "border",
  "border-transparent",
  "hover:border-tertiary/30",
  "bg-surface-container-high/60",
  "text-on-surface-variant",
];

function getProjects() {
  if (typeof projectsDetailsData === "undefined") return [];
  return Object.values(projectsDetailsData).filter(
    (project) =>
      project && project.id && (project.categoryKey || project.category),
  );
}

function projectMatchesCategory(project, categoryKey) {
  if (!project) return false;
  if (!categoryKey || categoryKey === "all") return true;

  if (project.categoryKey === categoryKey) return true;

  const tags = (project.tags || []).map((t) => t.toLowerCase());

  switch (categoryKey) {
    case "web-development":
      return (
        project.categoryKey === "web-development" ||
        tags.some((t) =>
          [
            "angular",
            "react",
            "next.js",
            ".net",
            "asp.net",
            "typescript",
            "bootstrap",
            "c#",
          ].includes(t),
        )
      );

    case "wordpress":
      return (
        project.categoryKey === "wordpress" ||
        tags.some((t) => t.includes("wordpress") || t.includes("elementor"))
      );

    case "Automation-BussinessSolution":
      return (
        project.categoryKey === "Automation-BussinessSolution" ||
        tags.some((t) =>
          [
            "power apps",
            "power automate",
            "power bi",
            "sharepoint",
            "copilot studio",
          ].includes(t),
        ) ||
        (project.categoryKey === "Automation-BussinessSolution" &&
          ["pizza", "skilling", "memo", "it", "hospital"].includes(project.id))
      );

    case "web-development":
      return (
        project.categoryKey === "web-development" ||
        tags.some((t) =>
          [
            "ai",
            "rag",
            "qdrant",
            "cohere",
            "copilot studio",
            "ai builder",
          ].includes(t),
        ) ||
        ["focuszone", "watchify", "it", "fishbowl"].includes(project.id)
      );

    case "Automation-BussinessSolution":
      return (
        project.categoryKey === "Automation-BussinessSolution" ||
        tags.some((t) =>
          [
            "power automate",
            "n8n",
            "slack api",
            "outlook api",
            "ai builder",
          ].includes(t),
        ) ||
        (project.categoryKey === "Automation-BussinessSolution" &&
          ["fishbowl", "memo", "skilling", "pizza", "hospital"].includes(
            project.id,
          ))
      );

    default:
      return project.categoryKey === categoryKey;
  }
}

function getCategoryCount(category) {
  if (category === "all") {
    return getProjects().length;
  }

  return getProjects().filter((project) =>
    projectMatchesCategory(project, category),
  ).length;
}

function getCategoryFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");
    if (
      categoryParam &&
      Object.prototype.hasOwnProperty.call(PROJECT_CATEGORIES, categoryParam)
    ) {
      return categoryParam;
    }
  } catch (e) {
    // Fallback if URL parsing fails
  }
  return "all";
}

function updateUrlQueryParam(filter) {
  try {
    const url = new URL(window.location.href);
    if (filter && filter !== "all") {
      url.searchParams.set("category", filter);
    } else {
      url.searchParams.delete("category");
    }
    window.history.pushState({ category: filter }, "", url.toString());
  } catch (e) {
    // Ignore history errors if any
  }
}

function renderProjectFilters(initialActiveFilter = "all") {
  const container = document.getElementById("category-filters");

  if (!container) return;

  container.innerHTML = Object.entries(PROJECT_CATEGORIES)
    .map(([key, category]) => {
      const isActive = key === initialActiveFilter;
      const count = getCategoryCount(key);

      return `
        <button
          type="button"
          class="filter-btn ${
            isActive
              ? PROJECT_FILTER_ACTIVE_CLASSES.join(" ")
              : PROJECT_FILTER_INACTIVE_CLASSES.join(" ")
          } py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer select-none"
          data-filter="${key}"
          aria-pressed="${isActive}"
        >
          <span>${category.label}</span>

          <span
            class="filter-counter px-2 py-0.5 rounded-full ${
              isActive ? "bg-[#00101D]/20 font-bold" : "bg-white/5"
            } text-[11px] sm:text-xs font-mono"
          >
            ${count}
          </span>
        </button>
      `;
    })
    .join("");

  if (!container.dataset.listenerAttached) {
    container.dataset.listenerAttached = "true";
    container.addEventListener("click", (event) => {
      const button = event.target.closest(".filter-btn");

      if (!button) return;

      const filter = button.dataset.filter || "all";

      setActiveProjectFilter(filter, true);
    });
  }
}

function renderProjectCard(project, index) {
  return `
    <a
      href="project-details.html?project=${encodeURIComponent(project.id)}"
      class="project-card cursor-pointer group block relative rounded-3xl bg-surface-container-low/90 border border-white/10 hover:border-tertiary/40 overflow-hidden shadow-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,196,238,0.12)] flex flex-col justify-between"
      data-project="${project.id}"
      data-category="${project.categoryKey}"
      aria-label="${project.title} project details"
    >
      <div class="absolute -top-24 -left-24 w-52 h-52 rounded-full bg-tertiary/[0.04] blur-2xl pointer-events-none group-hover:bg-tertiary/[0.1] transition-all duration-500"></div>

      <div>
        <div class="relative rounded-2xl overflow-hidden bg-[#00080F] aspect-video border border-white/10 mb-6 group/img">
          <div class="skeleton-loader absolute inset-0 bg-surface-container-high/70 animate-pulse transition-opacity duration-500 pointer-events-none z-10"></div>
          ${
            project.cardImage
              ? `
                <img
                  src="${project.cardImage}"
                  alt="${project.cardImageAlt || project.title}"
                  loading="lazy"
                  class="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  onload="this.style.opacity='1'; const s = this.parentElement.querySelector('.skeleton-loader'); if(s) s.style.opacity='0';"
                  style="opacity:0; transition: opacity 0.4s ease, transform 0.7s ease-out;"
                />
              `
              : `
                <div class="w-full h-full flex items-center justify-center">
                  <span class="text-4xl font-black text-tertiary/60">
                    ${project.title.charAt(0)}
                  </span>
                </div>
              `
          }

          <div class="absolute inset-0 bg-gradient-to-t from-[#00080F]/85 via-transparent to-transparent pointer-events-none z-10"></div>

          <!-- Hover Overlay Button -->
          <div class="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <span class="btn-smooth inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-tertiary text-[#00101D] font-bold text-xs shadow-[0_0_20px_rgba(0,196,238,0.4)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span>استكشف المشروع</span>
              <span class="material-symbols-outlined text-sm">arrow_back</span>
            </span>
          </div>
        </div>

        <div class="flex items-center justify-between gap-4 mb-3">
          <span class="text-xs font-bold uppercase tracking-wider text-tertiary font-mono">
            ${PROJECT_CATEGORIES[project.categoryKey]?.label || project.category}
          </span>
        </div>

        <h3 class="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-tertiary transition-colors">
          ${project.title}
        </h3>

        <p class="text-sm text-on-surface-variant leading-relaxed mb-5 line-clamp-2">
          ${project.subtitle || project.description || ""}
        </p>
      </div>
    </a>
  `;
}

function renderFeaturedProject(project) {
  const container = document.getElementById("featured-project-container");

  if (!container) return;

  if (!project) {
    container.innerHTML = "";
    container.classList.add("hidden");
    return;
  }

  container.classList.remove("hidden");

  container.innerHTML = `
    <a
      href="project-details.html?project=${encodeURIComponent(project.id)}"
      class="project-card cursor-pointer group block relative rounded-3xl bg-surface-container-low/90 backdrop-blur-xl border border-tertiary/30 hover:border-tertiary/60 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-500 overflow-hidden cyan-glow-box-subtle"
      data-project="${project.id}"
      data-category="${project.categoryKey}"
      aria-label="${project.title} project details"
    >
      <!-- Ambient corner glow -->
      <div class="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-tertiary/10 blur-3xl pointer-events-none group-hover:bg-tertiary/20 transition-all duration-700"></div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

        <!-- Large Visual / Hero treatment (7 cols) -->
        <div class="lg:col-span-7 relative rounded-2xl overflow-hidden bg-[#00080F] aspect-video border border-white/10 group/visual">
          <div class="skeleton-loader absolute inset-0 bg-surface-container-high/70 animate-pulse transition-opacity duration-500 pointer-events-none z-10"></div>
          <img
            src="${project.cardImage}"
            alt="${project.cardImageAlt || project.title}"
            loading="lazy"
            class="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/visual:scale-[1.03]"
            onload="this.style.opacity='1'; const s = this.parentElement.querySelector('.skeleton-loader'); if(s) s.style.opacity='0';"
            style="opacity:0; transition: opacity 0.4s ease, transform 0.7s ease-out;"
          />

          <!-- Gradient Overlays -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#00080F]/90 via-[#00080F]/20 to-transparent pointer-events-none z-10"></div>
          <div class="absolute inset-0 bg-gradient-to-tr from-tertiary/15 via-transparent to-transparent opacity-0 group-hover/visual:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>

          <!-- Center Hover Button -->
          <div class="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover/visual:opacity-100 transition-all duration-300 pointer-events-none">
            <span class="btn-smooth inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-tertiary text-[#00101D] font-extrabold text-sm shadow-[0_0_30px_rgba(0,196,238,0.5)] transform translate-y-3 group-hover/visual:translate-y-0 transition-transform duration-300">
              <span>استكشف المشروع</span>
              <span class="material-symbols-outlined text-base">arrow_back</span>
            </span>
          </div>
        </div>

        <!-- Content Column (5 cols) -->
        <div class="lg:col-span-5 flex flex-col justify-between gap-5">
          <div class="inline-flex items-center self-start gap-2 px-3 py-1 rounded-full bg-surface-container-high/90 text-tertiary text-xs font-mono font-medium border border-tertiary/20">
            <span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            <span>${PROJECT_CATEGORIES[project.categoryKey]?.label || project.category}</span>
          </div>

          <h3 class="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-[1.25] tracking-tight group-hover:text-tertiary transition-colors">
            ${project.title}
          </h3>

          <p class="text-sm sm:text-base text-on-surface-variant font-normal leading-relaxed">
            ${project.subtitle || project.description || ""}
          </p>
        </div>

      </div>
    </a>
  `;
}

function renderProjectShowcase(filter = "all") {
  const featuredContainer = document.getElementById(
    "featured-project-container",
  );
  const grid = document.getElementById("secondary-projects-grid");
  const emptyNotice = document.getElementById("empty-category-notice");

  if (!featuredContainer || !grid) return;

  const projects = getProjects();

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => projectMatchesCategory(project, filter));

  const featuredProject = filteredProjects.find((project) => project.featured);

  const secondaryProjects = filteredProjects.filter(
    (project) => project !== featuredProject,
  );

  renderFeaturedProject(featuredProject);

  grid.innerHTML = secondaryProjects
    .map((project, index) => renderProjectCard(project, index))
    .join("");

  if (emptyNotice) {
    emptyNotice.classList.toggle("hidden", filteredProjects.length > 0);
  }

  if (window.ScrollTrigger) {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }
}

function setActiveProjectFilter(filter, updateHistory = true) {
  const validFilter = Object.prototype.hasOwnProperty.call(
    PROJECT_CATEGORIES,
    filter,
  )
    ? filter
    : "all";

  const buttons = document.querySelectorAll("#category-filters .filter-btn");

  buttons.forEach((button) => {
    const isActive = button.dataset.filter === validFilter;

    button.classList.remove(
      ...PROJECT_FILTER_ACTIVE_CLASSES,
      ...PROJECT_FILTER_INACTIVE_CLASSES,
    );

    button.classList.add(
      ...(isActive
        ? PROJECT_FILTER_ACTIVE_CLASSES
        : PROJECT_FILTER_INACTIVE_CLASSES),
    );

    button.setAttribute("aria-pressed", String(isActive));

    const counter = button.querySelector(".filter-counter");

    if (counter) {
      counter.classList.remove("bg-[#00101D]/20", "font-bold", "bg-white/5");

      counter.classList.add(
        ...(isActive ? ["bg-[#00101D]/20", "font-bold"] : ["bg-white/5"]),
      );
    }
  });

  renderProjectShowcase(validFilter);

  if (updateHistory) {
    updateUrlQueryParam(validFilter);
  }
}

function initDynamicProjectShowcase() {
  if (!document.getElementById("category-filters")) return;

  const initialCategory = getCategoryFromUrl();

  renderProjectFilters(initialCategory);
  renderProjectShowcase(initialCategory);

  if (initialCategory !== "all") {
    setTimeout(() => {
      const showcaseSection = document.getElementById("projects-showcase");
      if (showcaseSection) {
        showcaseSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  }

  window.addEventListener("popstate", () => {
    const activeCategory = getCategoryFromUrl();
    setActiveProjectFilter(activeCategory, false);
  });
}

function initApp() {
  initDynamicProjectShowcase();
  renderHomeFeaturedProjects();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

const HOME_FEATURED_PROJECTS = ["focuszone", "pizza", "ainsgroup"];

function renderHomeFeaturedProjects() {
  const grid = document.getElementById("projects-grid");

  if (!grid || typeof projectsDetailsData === "undefined") return;

  grid.innerHTML = HOME_FEATURED_PROJECTS.map((projectId) => {
    const project = projectsDetailsData[projectId];

    if (!project) return "";

    return `
        <a
          href="project-details.html?project=${encodeURIComponent(project.id)}"
          class="project-card group block relative overflow-hidden rounded-3xl bg-surface-container-low/90 border border-white/10 hover:border-tertiary/40 shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
          <div class="relative aspect-video overflow-hidden bg-[#00080F]">
            ${
              project.cardImage
                ? `
                  <img
                    src="${project.cardImage}"
                    alt="${project.cardImageAlt || project.title}"
                    loading="lazy"
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                `
                : ""
            }

            <div class="absolute inset-0 bg-gradient-to-t from-[#00080F]/90 via-transparent to-transparent"></div>

            <div class="absolute top-4 right-4">
              <span class="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-bold text-white">
                ${
                  PROJECT_CATEGORIES[project.categoryKey]?.label ||
                  project.category
                }
              </span>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl sm:text-2xl font-black text-white group-hover:text-tertiary transition-colors">
              ${project.title}
            </h3>

            <p class="mt-3 text-sm text-on-surface-variant leading-relaxed line-clamp-2">
              ${project.subtitle || project.description || ""}
            </p>

            <div class="mt-5 flex items-center justify-between">
              <span class="text-sm font-bold text-tertiary">
                استكشف المشروع
              </span>

              <span class="material-symbols-outlined text-tertiary transition-transform duration-300 group-hover:-translate-x-1">
                arrow_back
              </span>
            </div>
          </div>
        </a>
      `;
  }).join("");
}
