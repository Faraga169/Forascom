/* ==========================================================================
   FORASCOM - PROJECT DETAILS DATA & DYNAMIC CASE STUDY ENGINE
   ========================================================================== */

const projectsDetailsData = {
  focuszone: {
    id: "focuszone",
    title: "FOCUSZONE — منظومة التعلّم الذكية",
    subtitle:
      "منظومة تعلّم مدعومة بالذكاء الاصطناعي تجمع بين جلسات التركيز الآمنة، المساعدة الذكية، التقييمات التكيفية، وتتبع تطور المهارات.",

    category: "Web Development",

    tags: [
      "Angular",
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "AI",
      "RAG",
      "Qdrant",
      "Browser Extension",
    ],

    categoryKey: "web-development",
    featured: true,

    cardImage:
      "assets/images/ultra_premium_16_9_cinematic_project_showcase_thumbnail_for_focuszone_an_aicard.png",
    cardImageAlt: "FOCUSZONE — منظومة التعلّم الذكية",

    description:
      "منصة تعلم متكاملة مدعومة بالذكاء الاصطناعي تتيح للطلاب الدراسة من ملفات PDF وفيديوهات YouTube ومقالات الويب داخل بيئة تركيز آمنة. تجمع FocusZone بين AI Learning Assistant وRAG والتقييمات المولدة بالذكاء الاصطناعي وتحليل المهارات، مع Browser Extension يوفر AI Jail Mode لمنع المواقع المشتتة ومواقع الذكاء الاصطناعي أثناء جلسات الدراسة.",

    heroImage:
      "assets/images/ultra_premium_16_9_cinematic_website_hero_key_visual_for_focuszone_hero.png",

    heroImageAlt: "FocusZone AI Learning Platform",

    liveUrl: "",
    demoVideo: "assets/videos/Demo.mp4",

    metaTelemetry: {
      label: "AI LEARNING ECOSYSTEM",
      status: "Active Platform",
      highlight: "تعلم تكيفي مدعوم بالذكاء الاصطناعي",
    },

    transformation: {
      title: "من تجربة تعلم مشتتة إلى منظومة تعلم ذكية ومحمية",
      description:
        "مقارنة تشغيلية توضح الأثر الفعلي لمنظومة FocusZone في الجمع بين التعلم بالذكاء الاصطناعي، التركيز الآمن، التقييم المستمر، وتتبع تطور المهارات.",

      before: {
        badge: "الوضع السابق • BEFORE",
        title: "تعلم مشتت وتقييم محدود",
        subtitle: "مصادر متعددة بدون بيئة تركيز أو قياس مستمر للمهارات",
        points: [
          "الانتقال بين مصادر وأدوات تعليمية متعددة أثناء الدراسة",
          "إمكانية الوصول إلى المواقع المشتتة وأدوات الذكاء الاصطناعي أثناء جلسات التعلم",
          "الاعتماد على نتائج الاختبارات العامة بدون تحليل تفصيلي لمستوى المهارات حسب الموضوع",
        ],
      },

      after: {
        badge: "بعد حل فرصكم • AFTER",
        title: "منظومة تعلم ذكية ومتكاملة",
        subtitle: "تعلم مركز وتقييم قائم على المهارات وتحليل مستمر للتقدم",
        points: [
          "AI Jail Mode وDynamic Website Whitelisting لإنشاء بيئة دراسة خالية من التشتت",
          "AI Learning Assistant يفهم محتوى المصدر التعليمي ويدعم الشرح والإجابة عن الأسئلة",
          "AI-Generated Assessments تقيس أداء الطالب حسب الموضوع وتحدّث مستويات المهارات تلقائيًا",
          "تحليلات متكاملة للجلسات والاختبارات مع AI CV Generator وPersonalized Learning Roadmap",
        ],

        footer:
          "منظومة تعلم متكاملة تربط بين التركيز والتعلم والتقييم والتطور المهاري",
      },
    },

    ctaWhatsAppMessage:
      "مرحباً فريق فرصكم، حابب أستفسر عن دراسة حالة منظومة FocusZone وحلول التعلم الذكية.",
  },

  clinicms: {
    id: "clinicms",
    title: "CLINIC MANAGEMENT SYSTEM — نظام إدارة العيادات",
    categoryKey: "web-development",
    featured: true,
    cardImage: "assets/images/ClinicManagmentSystem.jpg",
    subtitle:
      "نظام إدارة عيادات متكامل مبني بـ .NET 8، بمعمارية طبقية احترافية تدير سير عمل الرعاية الصحية عبر واجهات مخصصة للإدارة والأطباء والمرضى والزوار.",
    category: "أنظمة مؤسسية • Enterprise Systems",
    tags: [
      ".NET 8",
      "ASP.NET Core MVC",
      "Layered Architecture",
      "Specification Pattern",
      "ASP.NET Identity",
    ],
    description:
      "نظام إدارة عيادات بمستوى مؤسسي (Enterprise-Grade) مبني باستخدام ASP.NET Core MVC ومعمارية طبقية صارمة (BLL, DAL, PL) لضمان قابلية الصيانة والتوسع. يعتمد على Dependency Injection وGeneric Repository وUnit of Work وSpecification Pattern لفصل منطق الأعمال عن الوصول للبيانات وإدارة الاستعلامات المعقدة بشكل منظم وقابل لإعادة الاستخدام. كما يستخدم ASP.NET Identity ونظام Role-Based Access Control مع Areas مستقلة للإدارة والطبيب والمريض والزائر لتوفير تجربة آمنة ومخصصة لكل نوع من المستخدمين.",
    heroImage: "assets/images/ClinicManagmentSystem.jpg",
    heroImageAlt: "Clinic Management System UI",
    liveUrl: "",
    demoVideo: "",
    metaTelemetry: {
      label: "LAYERED ARCHITECTURE PIPELINE",
      status: "Active Pipeline",
      highlight: "فصل صارم بين طبقات العرض والأعمال والوصول للبيانات",
    },

    transformation: {
      title: "من نظام متشابك إلى منصة عيادات منظمة وقابلة للتوسع",
      description:
        "مقارنة تشغيلية توضح كيف ساهمت المعمارية الطبقية وأنماط التصميم في تنظيم إدارة العيادات وفصل المسؤوليات وتحسين قابلية التوسع والصيانة.",

      before: {
        badge: "الوضع السابق • BEFORE",
        title: "منطق أعمال واستعلامات مترابطة",
        subtitle: "صعوبة الصيانة والتوسع مع تداخل المسؤوليات",
        points: [
          "تداخل منطق الأعمال مع تفاصيل الوصول إلى قاعدة البيانات، مما يزيد صعوبة الصيانة والاختبار",
          "غياب فصل واضح بين تجارب وصلاحيات الإدارة والأطباء والمرضى والزوار",
          "تكرار منطق الاستعلام والفلترة عند التعامل مع البيانات والعمليات المختلفة",
        ],
      },

      after: {
        badge: "بعد الحل • AFTER",
        title: "معمارية طبقية احترافية قابلة للتوسع",
        subtitle: "فصل واضح للمسؤوليات وأمان قائم على الأدوار",
        points: [
          "فصل طبقات BLL وDAL وPL لعزل منطق الأعمال عن الوصول إلى البيانات وواجهة المستخدم",
          "Areas مستقلة للإدارة والطبيب والمريض والزائر مع Role-Based Access Control",
          "Specification Pattern وGeneric Repository لتنظيم وإعادة استخدام منطق الاستعلامات المعقدة",
          "ASP.NET Identity لإدارة المصادقة والصلاحيات بشكل مركزي وآمن",
        ],
        footer: "نظام مصمم وفق مبادئ Clean Code وقابلية الصيانة والتوسع",
      },
    },

    ctaWhatsAppMessage:
      "مرحباً فريق فرصكم، حابب أستفسر عن دراسة حالة نظام إدارة العيادات وحلول الأنظمة المؤسسية.",
  },

  watchify: {
    id: "watchify",
    title: "WATCHIFY — منصة المشاهدة الذكية",
    subtitle:
      "منصة ويب ذكية تساعد المستخدمين على اكتشاف الأفلام والمسلسلات المناسبة لهم من خلال البحث الدلالي والتوصيات المدعومة بالذكاء الاصطناعي.",
    category: "Web Development",
    categoryKey: "web-development",
    featured: false,

    cardImage: "assets/images/Watchify.png",
    cardImageAlt: "WATCHIFY — منصة المشاهدة الذكية",
    tags: [
      "Angular",
      "TypeScript",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "Stripe",
      "Qdrant",
      "Cohere",
      "Firebase",
      "TMDB API",
    ],
    description:
      "منصة مشاهدة متكاملة تجمع بين اكتشاف المحتوى، التوصيات الذكية، إدارة قوائم المشاهدة، والاشتراكات المدفوعة. يستخدم نظام التوصيات محادثة المستخدم وسياقها لإنشاء استعلام دلالي، ثم يحوله إلى embedding ويبحث في Qdrant عن أقرب المحتويات قبل إعادة ترتيب النتائج باستخدام Cohere Rerank.",
    heroImage: "assets/images/Watchify.png",
    heroImageAlt: "Watchify intelligent streaming platform interface",
    liveUrl: "",
    demoVideo: "",
    metaTelemetry: {
      label: "AI RECOMMENDATION PIPELINE",
      status: "Active Pipeline",
      highlight: "Semantic Search → Vector Retrieval → AI Reranking",
    },
    transformation: {
      title: "من البحث التقليدي إلى اكتشاف المحتوى المدعوم بالذكاء الاصطناعي",
      description:
        "تحويل تجربة اكتشاف الأفلام والمسلسلات من البحث بالكلمات المفتاحية إلى تجربة شخصية تعتمد على فهم سياق المستخدم وتفضيلاته.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "اكتشاف محتوى تقليدي",
        subtitle: "بحث مباشر يعتمد على الكلمات والفلترة",
        points: [
          "صعوبة التعبير عن الحالة المزاجية أو التفضيلات المعقدة من خلال البحث التقليدي",
          "الاعتماد على الفلاتر والكلمات المفتاحية للوصول إلى المحتوى",
          "الحاجة إلى أدوات منفصلة لإدارة المفضلة والمشاهدة لاحقاً وسجل المشاهدة",
        ],
      },
      after: {
        badge: "بعد حل Watchify • AFTER",
        title: "اكتشاف محتوى ذكي وشخصي",
        subtitle: "تجربة توصيات تعتمد على البحث الدلالي والذكاء الاصطناعي",
        points: [
          "محادثة طبيعية مع AI لفهم ما يريد المستخدم مشاهدته",
          "استرجاع أفضل 10 نتائج دلالية من Qdrant ثم إعادة ترتيبها إلى أفضل 5 توصيات باستخدام Cohere",
          "منصة موحدة لإدارة Favorites وWatch Later وWatch History مع اشتراكات Premium عبر Stripe",
        ],
        footer:
          "تجربة موحدة تجمع اكتشاف المحتوى والتوصيات الذكية وإدارة المشاهدة والاشتراك",
      },
    },
    ctaWhatsAppMessage:
      "مرحباً فريق فرصكم، حابب أستفسر عن دراسة حالة منصة Watchify وتجارب التوصيات الذكية.",
  },

  sanad: {
    id: "sanad",
    title: "سَنَد — محرك أتمتة سلاسل الإمداد",
    subtitle:
      "أتمتة متكاملة لدورات الشحن وتوليد البوالص لحظيًا ومزامنة المستودعات من غير تدخل بشري.",
    category: "Business Automation",
    categoryKey: "business-automation",
    featured: false,

    cardImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtn7W6eqglCjePtAQhBikhDa2l0O5hxnBoaE94vIlaxNOUm27AL6VpJHRq1H6Zf6vPWcgLWPR-s4787z5YzQOix1A32bbSIZoa1IX7zS3imNH-sQyDReQtnMxANfTD5d782O2otbMC0SNVjTMm7LIFnBECcV0h63eJOwZDzbnvlD3pEvLiTYcln7_jkZcaJygH1znPsQl87pgs5iSGo7dy2DJLl4K1Y1ioWFjLPD3r0oQwmVh9kfAc",
    cardImageAlt: "سَنَد — محرك أتمتة سلاسل الإمداد",
    tags: [
      "Automation",
      "API Integration",
      "Supply Chain",
      "Workflow Automation",
    ],
    description:
      "محرك أتمتة مؤسسي بيربط أنظمة الطلبات والمستودعات وشركات الشحن لحظيًا لمعالجة الطلبات وتوجيهها وإصدار بوالص الشحن تلقائيًا من غير تدخل بشري.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBtn7W6eqglCjePtAQhBikhDa2l0O5hxnBoaE94vIlaxNOUm27AL6VpJHRq1H6Zf6vPWcgLWPR-s4787z5YzQOix1A32bbSIZoa1IX7zS3imNH-sQyDReQtnMxANfTD5d782O2otbMC0SNVjTMm7LIFnBECcV0h63eJOwZDzbnvlD3pEvLiTYcln7_jkZcaJygH1znPsQl87pgs5iSGo7dy2DJLl4K1Y1ioWFjLPD3r0oQwmVh9kfAc",
    heroImageAlt: "Sanad Supply Chain Dispatch Engine",
    liveUrl: "",
    demoVideo: "",
    metaTelemetry: {
      label: "DISPATCH BOT • ACTIVE",
      status: "API Realtime Mesh",
      highlight: "معالجة فورية للبوالص",
    },
    transformation: {
      title: "من الإدخال اليدوي إلى أتمتة سلاسل الإمداد",
      description:
        "مقارنة تشغيلية توضح الأثر الفعلي لمحرك سَنَد على كفاءة الشحن وإصدار البوالص.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "عمليات شحن يدوية بطيئة",
        subtitle: "عمليات شحن وإدخال يدوية بطيئة",
        points: [
          "استغراق ساعات طويلة لتجهيز وإصدار البوالص",
          "أخطاء بشرية متكررة في العناوين والبيانات",
          "تضارب بين بيانات المخزون وشركات الشحن",
        ],
      },
      after: {
        badge: "بعد حل فرصكم • AFTER",
        title: "محرك أتمتة لوجستي متكامل",
        subtitle: "محرك أتمتة كامل وسلس",
        points: [
          "إصدار فوري للبوالص في غضون دقائق من الطلب",
          "انعدام أخطاء العناوين عبر التحقق الآلي",
          "مزامنة كاملة ولحظية مع المستودعات والناقلين",
        ],
        footer: "نتائج تشغيلية محققة في بيئة إنتاج فعلية",
      },
    },
    ctaWhatsAppMessage:
      "مرحباً فريق فرصكم، حابب أستفسر عن دراسة حالة نظام سند لأتمتة سلاسل الإمداد.",
  },

  freshcart: {
    id: "freshcart",

    title: "FRESHCART — منصة تجارة إلكترونية متكاملة",

    subtitle:
      "منصة تسوق إلكتروني عالية الأداء، ثنائية اللغة (عربي/إنجليزي)، تجمع بين سرعة العرض من جهة الخادم (SSR) وتجربة دفع مرنة بخيارين، مصممة لتقديم تجربة شراء سلسة بأقل احتكاك ممكن.",

    category: "تجارة إلكترونية • E-Commerce",
    categoryKey: "web-development",

    tags: [
      "Angular",
      "TypeScript",
      "Bootstrap",
      "SCSS",
      "RxJS",
      "Angular Signals",
      "Angular SSR",
      "Express.js",
      "Stripe",
      "JWT",
    ],

    description:
      "تطبيق تجارة إلكترونية متكامل (End-to-End) يغطي رحلة العميل بالكامل: من اكتشاف المنتجات والتصنيفات، مرورًا بالبحث اللحظي وإدارة السلة والمفضلة، وصولًا إلى نظام مصادقة آمن متعدد الخطوات، وخروج آمن (Checkout) بخيارين للدفع: أونلاين عبر Stripe أو الدفع عند الاستلام. مبني بالكامل على Angular مع تصيير من جهة الخادم (SSR) لتحسين الأداء والتحميل الأولي ودعم SEO.",

    heroImage: "assets/images/Ecommerce.png",
    heroImageAlt: "FreshCart E-Commerce Platform UI",

    cardImage: "assets/images/Ecommerce.png",
    cardImageAlt: "FreshCart E-Commerce Platform UI",

    liveUrl: "",
    demoVideo: "",

    featured: false,

    metaTelemetry: {
      label: "SSR RENDERING PIPELINE",
      status: "Active Pipeline",
      highlight: "Server-Side Rendering لتحسين الأداء وSEO",
    },

    transformation: {
      title: "من متجر بطيء ومجزأ إلى منصة تسوق متكاملة وسريعة",

      description:
        "مقارنة تشغيلية توضح الأثر الفعلي لمنصة FreshCart على تجربة التسوق والأداء التقني.",

      before: {
        badge: "الوضع السابق • BEFORE",

        title: "واجهات تقليدية بطيئة الظهور",

        subtitle: "تجربة تسوق مجزأة وغير متسقة",

        points: [
          "صفحات فارغة عند التحميل الأول تضعف الظهور في محركات البحث (SEO)",
          "عدادات السلة والمفضلة غير متزامنة وتحتاج تحديثًا يدويًا للصفحة",
          "خيار دفع واحد جامد بدون بديل مرن عند الاستلام",
          "واجهة أحادية اللغة بدون دعم حقيقي للعربية واتجاه RTL",
        ],
      },

      after: {
        badge: "بعد حل فرصكم • AFTER",

        title: "منصة تسوق متكاملة وسريعة الاستجابة",

        subtitle: "تجربة موحدة وتفاعلية من البداية للنهاية",

        points: [
          "تصيير من جهة الخادم (SSR) لتحسين التحميل الأولي ودعم SEO",
          "مزامنة لحظية لعدادات السلة والمفضلة عبر كل الصفحات فور أي تغيير",
          "نظام دفع مزدوج مرن: بوابة Stripe الآمنة أو الدفع عند الاستلام",
          "دعم كامل وتلقائي للعربية والإنجليزية مع تبديل اتجاه الواجهة RTL/LTR",
        ],

        footer: "نتائج تشغيلية محققة في بيئة إنتاج فعلية",
      },
    },

    ctaWhatsAppMessage:
      "مرحباً فريق فرصكم، حابب أستفسر عن دراسة حالة منصة FreshCart وحلول التجارة الإلكترونية المتكاملة.",
  },

  ofok: {
    id: "ofok",
    title: "أُفُق — إدارة موارد المؤسسة والموافقات",
    subtitle:
      "حوكمة مرنة ومؤتمتة لسلاسل الاعتمادات والموافقات الإدارية وفق اتفاقيات مستوى الخدمة (SLA).",
    category: "Business Automation",
    tags: ["Power Platform", "Power Automate", "Power Apps", "Dataverse"],
    categoryKey: "business-automation",
    featured: false,

    cardImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiqf0V3RJL6X0V25bYwacfDxS7OtsJiIsY_eg2VdKww12GHSLqKWQPDAzHAPd_hsULsaMoT6qnNiaAzl0iJf30b5JVEOxFY5QQrBqEKmV8wIeIEqbS58Amxq8ksDeYmXuGIDTNBYfQdJBRv6B1mTe5jo2JP9TT0KHQcXagJHH62k71bsKXt6z91D4nnquypffyt_b8nAh6jiDyLWF3UF8O9wuMyStWo8w3K1x9YhAT7CMsD3dLt-ma",
    cardImageAlt: "أُفُق — إدارة موارد المؤسسة والموافقات",
    description:
      "نظام حوكمة وأتمتة مؤسسي مبني على تقنيات Power Platform لرقمنة مسارات اتخاذ القرار والاعتمادات المالية والإدارية بدقة وشفافية كاملة.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiqf0V3RJL6X0V25bYwacfDxS7OtsJiIsY_eg2VdKww12GHSLqKWQPDAzHAPd_hsULsaMoT6qnNiaAzl0iJf30b5JVEOxFY5QQrBqEKmV8wIeIEqbS58Amxq8ksDeYmXuGIDTNBYfQdJBRv6B1mTe5jo2JP9TT0KHQcXagJHH62k71bsKXt6z91D4nnquypffyt_b8nAh6jiDyLWF3UF8O9wuMyStWo8w3K1x9YhAT7CMsD3dLt-ma",
    heroImageAlt: "Ofuq Workflow Governance Platform",
    liveUrl: "",
    demoVideo: "",
    metaTelemetry: {
      label: "POWER AUTOMATE",
      status: "Cloud Native Governance",
      highlight: "حوكمة سلاسل الاعتمادات",
    },
    transformation: {
      title: "من الفوضى الورقية إلى حوكمة رقمية شفافة",
      description:
        "مقارنة تشغيلية توضح الأثر الفعلي لمنظومة أُفُق على سرعة الموافقات والشفافية المؤسسية.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "دورة مستندية يدوية",
        subtitle: "دورة مستندية بطيئة ومشتتة",
        points: [
          "متابعة يدوية عبر الإيميلات والاتصالات المتكررة",
          "غموض في تحديد المسؤول عن توقف المعاملة",
          "تأخر حسم الطلبات لأيام وأسابيع",
        ],
      },
      after: {
        badge: "بعد حل فرصكم • AFTER",
        title: "حوكمة رقمية مؤتمتة",
        subtitle: "حوكمة رقمية متكاملة وسريعة",
        points: [
          "اعتماد بنقرة واحدة من الموبايل أو Teams",
          "شفافية كاملة وتتبع لحظي لمسار المعاملة",
          "تنبيهات استباقية للطلبات المتأخرة",
        ],
        footer: "منظومة مؤتمتة لإدارة مسارات الموافقات والاعتمادات",
      },
    },
    ctaWhatsAppMessage:
      "مرحباً فريق فرصكم، حابب أستفسر عن دراسة حالة أفق لإدارة Power Platform وحوكمة الموافقات.",
  },

  nabd: {
    id: "nabd",
    title: "نبض — التحليل التنبؤي والعمليات الذكية",
    subtitle:
      "منظومة استشرافية تعتمد نماذج تعلّم متطورة للتنبؤ بانحرافات التشغيل ودعم القرارات الاستباقية.",
    category: "Business Automation",
    categoryKey: "business-automation",
    featured: false,

    cardImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoQGBpnR5YOtx63m0ayiRLrEPzGeEGwJpeMf8aOkTrWiiC1RuM2DXWLbQC278Qf4cmQNAgUjNF1ubMzZHKRleulvpj0pJZE3LU4fisX_6zKqKedCwMOiq9hU-3Tb2F7Mm2lN2ss5norSsEj0EYs2bGqm-hezL62_YHMq7FDilW3G2HzqtmepKo-3DkVVh1C7hfPrdr-cPUIX48M44X1m_V95n545Ujsfc3nAjjMW-7j-bNj5mHREaS",
    cardImageAlt: "نبض — التحليل التنبؤي والعمليات الذكية",
    tags: [
      "Machine Learning",
      "Predictive Analytics",
      "Data Analytics",
      "Automation",
    ],
    description:
      "منصة تحليل استشرافي مبنية على نماذج Machine Learning لجمع وتحليل تدفقات بيانات التشغيل والتنبؤ بالأعطال والاختناقات مسبقاً لدعم قرارات الصيانة والتشغيل الاستباقية.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoQGBpnR5YOtx63m0ayiRLrEPzGeEGwJpeMf8aOkTrWiiC1RuM2DXWLbQC278Qf4cmQNAgUjNF1ubMzZHKRleulvpj0pJZE3LU4fisX_6zKqKedCwMOiq9hU-3Tb2F7Mm2lN2ss5norSsEj0EYs2bGqm-hezL62_YHMq7FDilW3G2HzqtmepKo-3DkVVh1C7hfPrdr-cPUIX48M44X1m_V95n545Ujsfc3nAjjMW-7j-bNj5mHREaS",
    heroImageAlt: "Nabd Predictive AI Operations Engine",
    liveUrl: "",
    demoVideo: "",
    metaTelemetry: {
      label: "PREDICTIVE MESH",
      status: "ML Pipeline",
      highlight: "استشراف ذكي للأعطال",
    },
    transformation: {
      title: "من الصيانة الطارئة إلى الاستشراف الذكي",
      description:
        "مقارنة تشغيلية توضح الأثر الفعلي لمنظومة نبض على كفاءة العمليات والحد من التوقفات غير المخططة.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "صيانة استجابية تقليدية",
        subtitle: "صيانة استجابية بعد وقوع الأعطال",
        points: [
          "توقفات عمل مفاجئة وخسائر تشغيلية غير متوقعة",
          "بيانات قياس مهملة في خوادم التخزين",
          "صيانة دورية عشوائية تهدر الموارد",
        ],
      },
      after: {
        badge: "بعد حل فرصكم • AFTER",
        title: "إدارة تشغيلية استباقية ذكية",
        subtitle: "إدارة تشغيلية استباقية وذكية",
        points: [
          "تنبؤ مبكر بالانحرافات قبل وقوع التوقفات",
          "استغلال البيانات في توليد رؤى تشغيلية",
          "توجيه الصيانة للمعدات الأكثر عرضة للتعطل",
        ],
        footer: "منظومة تحليلية لدعم قرارات التشغيل والصيانة الاستباقية",
      },
    },
    ctaWhatsAppMessage:
      "مرحباً فريق فرصكم، حابب أستفسر عن دراسة حالة نبض للتحليل التنبؤي والعمليات الذكية.",
  },
};

// Aliases mapping for alternate spellings or case variations (without mutating projectsDetailsData)
const projectAliases = {
  "focus-zone": "focuszone",
  ofuque: "ofok",
  ofuk: "ofok",
  ofuq: "ofok",
};

/**
 * Extract active project ID from query string (?project=...) or hash fallback
 */
function getActiveProjectKey() {
  const urlParams = new URLSearchParams(window.location.search);
  const param = urlParams.get("project");
  if (param) {
    const cleanParam = param.toLowerCase().trim();
    if (projectsDetailsData[cleanParam]) return cleanParam;
    if (projectAliases[cleanParam]) return projectAliases[cleanParam];
  }

  const hash = window.location.hash.replace("#", "").toLowerCase().trim();
  if (hash) {
    if (projectsDetailsData[hash]) return hash;
    if (projectAliases[hash]) return projectAliases[hash];
  }

  return "focuszone";
}

/**
 * Render the project details into the DOM
 */
function renderProjectDetails(projectKey) {
  const resolvedKey = projectAliases[projectKey] || projectKey;
  const project =
    projectsDetailsData[resolvedKey] || projectsDetailsData["focuszone"];
  if (!project) return;

  // Update page title
  document.title = `${project.title} | Forascom فرصكم`;

  // 1. HERO SECTION
  const categoryBadge = document.getElementById("project-category-badge");
  if (categoryBadge) {
    categoryBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span><span>${project.category}</span>`;
  }

  const titleEl = document.getElementById("project-title");
  if (titleEl) titleEl.textContent = project.title;

  const descEl = document.getElementById("project-desc");
  if (descEl) descEl.textContent = project.description;

  const tagsContainer = document.getElementById("project-tags");
  if (tagsContainer) {
    tagsContainer.innerHTML = project.tags
      .map(
        (tag) =>
          `<span class="px-3 py-1 rounded-lg bg-surface-container-high/90 text-xs font-mono font-medium text-slate-200 border border-white/10 hover:border-tertiary/30 transition-colors">${tag}</span>`,
      )
      .join("");
  }

  const heroImage = document.getElementById("project-hero-image");
  if (heroImage) {
    heroImage.src = project.heroImage;
    heroImage.alt = project.heroImageAlt || project.title;
    heroImage.classList.remove("hidden");
  }

  const telemetryContainer = document.getElementById(
    "hero-telemetry-container",
  );
  const telemetryHighlight = document.getElementById(
    "hero-telemetry-highlight",
  );
  if (telemetryContainer) {
    if (project.metaTelemetry && project.metaTelemetry.highlight) {
      if (telemetryHighlight)
        telemetryHighlight.textContent = project.metaTelemetry.highlight;
      telemetryContainer.classList.remove("hidden");
      telemetryContainer.classList.add("flex");
    } else {
      telemetryContainer.classList.add("hidden");
      telemetryContainer.classList.remove("flex");
    }
  }

  // Live URL Button control in Hero
  const heroLiveBtn = document.getElementById("hero-live-btn");
  if (heroLiveBtn) {
    if (project.liveUrl && project.liveUrl.trim() !== "") {
      heroLiveBtn.href = project.liveUrl;
      heroLiveBtn.classList.remove("hidden");
      heroLiveBtn.classList.add("inline-flex");
    } else {
      heroLiveBtn.classList.add("hidden");
      heroLiveBtn.classList.remove("inline-flex");
    }
  }

  // Demo Video & Play Interaction Control
  const heroDemoBtn = document.getElementById("hero-demo-btn");
  const playMediaBtn = document.getElementById("hero-play-media-btn");
  const demoBadgeText = document.getElementById("hero-demo-badge-text");
  const mediaViewport = document.getElementById("hero-media-viewport");
  const mediaOverlay = document.getElementById("hero-media-overlay");

  const hasDemoVideo = Boolean(
    project.demoVideo && project.demoVideo.trim() !== "",
  );

  // Cleanup any active video player when project changes
  const existingVideo = document.getElementById("project-hero-video");
  if (existingVideo) {
    existingVideo.remove();
  }
  if (mediaOverlay) mediaOverlay.classList.remove("hidden");

  if (demoBadgeText) {
    demoBadgeText.textContent = hasDemoVideo
      ? "PRODUCT DEMO"
      : "PROJECT PREVIEW";
  }

  function triggerDemoVideoPlayback() {
    if (!hasDemoVideo || !mediaViewport) return;

    let videoEl = document.getElementById("project-hero-video");

    if (!videoEl) {
      videoEl = document.createElement("video");

      videoEl.id = "project-hero-video";
      videoEl.controls = true;
      videoEl.playsInline = true;
      videoEl.preload = "metadata";

      videoEl.className =
        "absolute inset-0 w-full h-full object-cover z-20 rounded-2xl bg-black";

      mediaViewport.appendChild(videoEl);
    }

    // Set source
    videoEl.src = project.demoVideo;
    videoEl.load();

    // Hide preview UI
    if (heroImage) heroImage.classList.add("hidden");
    if (playMediaBtn) playMediaBtn.classList.add("hidden");
    if (mediaOverlay) mediaOverlay.classList.add("hidden");

    // Play after user interaction
    videoEl.play().catch((error) => {
      console.error("Video playback failed:", error);
    });
  }

  if (heroDemoBtn) {
    if (hasDemoVideo) {
      heroDemoBtn.href = "#project-hero";
      heroDemoBtn.classList.remove("hidden");
      heroDemoBtn.classList.add("inline-flex");
      heroDemoBtn.onclick = (e) => {
        e.preventDefault();
        triggerDemoVideoPlayback();
      };
    } else {
      heroDemoBtn.classList.add("hidden");
      heroDemoBtn.classList.remove("inline-flex");
      heroDemoBtn.onclick = null;
    }
  }

  if (playMediaBtn) {
    if (hasDemoVideo) {
      playMediaBtn.classList.remove("hidden");
      playMediaBtn.onclick = (e) => {
        e.preventDefault();
        triggerDemoVideoPlayback();
      };
    } else {
      playMediaBtn.classList.add("hidden");
      playMediaBtn.onclick = null;
    }
  }

  // 4. OUTCOME (BEFORE -> AFTER) SECTION (Refactored)
  const trans = project.transformation || {};
  // Header title and description
  const outcomeTitle = document.getElementById("outcome-title");
  if (outcomeTitle && trans.title) outcomeTitle.textContent = trans.title;
  const outcomeDesc = document.getElementById("outcome-description");
  if (outcomeDesc && trans.description)
    outcomeDesc.textContent = trans.description;

  // BEFORE CARD
  const outcomeBeforeBadge = document.getElementById("outcome-before-badge");
  if (outcomeBeforeBadge && trans.before?.badge)
    outcomeBeforeBadge.textContent = trans.before.badge;
  const outcomeBeforeTitle = document.getElementById("outcome-before-title");
  if (outcomeBeforeTitle && trans.before?.title)
    outcomeBeforeTitle.textContent = trans.before.title;
  const outcomeBeforeSubtitle = document.getElementById(
    "outcome-before-subtitle",
  );
  if (outcomeBeforeSubtitle && trans.before?.subtitle)
    outcomeBeforeSubtitle.textContent = trans.before.subtitle;
  const outcomeBeforePoints = document.getElementById("outcome-before-points");
  if (outcomeBeforePoints && trans.before?.points) {
    outcomeBeforePoints.innerHTML = trans.before.points
      .map(
        (pt) =>
          `<li class="flex items-start gap-2.5 text-sm text-on-surface-variant leading-relaxed"><span class="material-symbols-outlined text-error text-base shrink-0 mt-0.5">close</span><span>${pt}</span></li>`,
      )
      .join("");
  }

  // AFTER CARD
  const outcomeAfterBadge = document.getElementById("outcome-after-badge");
  if (outcomeAfterBadge && trans.after?.badge)
    outcomeAfterBadge.textContent = trans.after.badge;
  const outcomeAfterTitle = document.getElementById("outcome-after-title");
  if (outcomeAfterTitle && trans.after?.title)
    outcomeAfterTitle.textContent = trans.after.title;
  const outcomeAfterSubtitle = document.getElementById(
    "outcome-after-subtitle",
  );
  if (outcomeAfterSubtitle && trans.after?.subtitle)
    outcomeAfterSubtitle.textContent = trans.after.subtitle;
  const outcomeAfterPoints = document.getElementById("outcome-after-points");
  if (outcomeAfterPoints && trans.after?.points) {
    outcomeAfterPoints.innerHTML = trans.after.points
      .map(
        (pt) =>
          `<li class="flex items-start gap-2.5 text-sm text-white font-medium leading-relaxed"><span class="material-symbols-outlined text-tertiary text-base shrink-0 mt-0.5">check_circle</span><span>${pt}</span></li>`,
      )
      .join("");
  }
  const outcomeAfterFooter = document.getElementById("outcome-after-footer");
  if (outcomeAfterFooter && trans.after?.footer)
    outcomeAfterFooter.textContent = trans.after.footer;

  // 5. FINAL CTA
  const ctaPrimaryBtn = document.getElementById("cta-primary-btn");
  if (ctaPrimaryBtn) {
    const encodedMsg = encodeURIComponent(
      project.ctaWhatsAppMessage ||
        `مرحباً فريق فرصكم، حابب أستفسر عن تنفيذ مشروع مشابه لـ ${project.title}`,
    );
    ctaPrimaryBtn.href = `https://wa.me/201090000000?text=${encodedMsg}`;
  }
}

/**
 * Initialize GSAP animations for Project Details Page
 */
function initProjectDetailsMotion() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReducedMotion || typeof gsap === "undefined") {
    document
      .querySelectorAll(
        ".reveal-motion, #project-hero-card, .challenge-card, .solution-feature-card",
      )
      .forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    return;
  }

  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 1. Hero Entrance Timeline
  const heroTl = gsap.timeline({
    defaults: { ease: "power2.out" },
  });

  heroTl
    .fromTo(
      "#hero-back-link",
      { opacity: 0, x: 15 },
      { opacity: 1, x: 0, duration: 0.45 },
    )
    .fromTo(
      "#project-category-badge",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.4 },
      "-=0.25",
    )
    .fromTo(
      "#project-title",
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.55 },
      "-=0.2",
    )
    .fromTo(
      "#project-tags",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4 },
      "-=0.3",
    )
    .fromTo(
      "#project-desc",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45 },
      "-=0.25",
    )
    .fromTo(
      "#hero-actions-container",
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45 },
      "-=0.25",
    )
    .fromTo(
      "#project-hero-card",
      { opacity: 0, scale: 0.96, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.7 },
      "-=0.45",
    );

  // Subtle floating ambient motion for the hero visual (only if motion is allowed)
  if (!prefersReducedMotion && typeof gsap !== "undefined") {
    gsap.to("#project-hero-card", {
      y: -6,
      duration: 4.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }

  // 2. Transformation Reveal
  if (typeof ScrollTrigger !== "undefined") {
    gsap.fromTo(
      "#outcome-before-card",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#project-outcome",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      "#outcome-arrow-connector",
      { opacity: 0, scale: 0.85 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        delay: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#project-outcome",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.fromTo(
      "#outcome-after-card",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        delay: 0.25,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#project-outcome",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  }

  // 3. Final CTA Reveal
  if (typeof ScrollTrigger !== "undefined") {
    gsap.fromTo(
      "#project-cta .cta-inner-card",
      { opacity: 0, y: 25, scale: 0.98 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.65,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#project-cta",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );
  }
}

/**
 * Initialize page on DOM ready
 */
function initProjectDetailsPage() {
  if (!document.getElementById("project-hero")) return;
  const activeKey = getActiveProjectKey();
  renderProjectDetails(activeKey);
  initProjectDetailsMotion();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProjectDetailsPage);
} else {
  initProjectDetailsPage();
}

// Support browser back/forward or hash transitions
window.addEventListener("popstate", () => {
  if (!document.getElementById("project-hero")) return;
  const activeKey = getActiveProjectKey();
  renderProjectDetails(activeKey);
  if (window.ScrollTrigger && window.ScrollTrigger.refresh) {
    window.ScrollTrigger.refresh();
  }
});
