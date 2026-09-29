/* ==========================================================================
   FORASCOM - PROJECT DETAILS DATA & DYNAMIC CASE STUDY ENGINE
   ========================================================================== */

const projectsDetailsData = {
  pizza: {
    id: "pizza",
    title: "إدارة طلبات المطعم وربط العمل بين الإدارة والمطبخ",
    subtitle: "مسار رقمي لمتابعة الطلبات من الاستلام إلى التجهيز والتسليم.",
    category: "Automation & Business Solutions",
    categoryKey: "Automation-BussinessSolution",
    featured: true,
    cardImage: "assets/images/Pizza.jpg",
    cardImageAlt: "مشروع بيتزا باراديزو للتحول الرقمي",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    description:
      "حل رقمي ينظم دورة الطلب داخل المطعم، بدءًا من استلامه وتحديث حالته وحتى تجهيزه وتسليمه. يربط الإدارة والمطبخ ضمن مسار موحد، بحيث يتمكن الفريق من متابعة حالة كل طلب والتعامل معه وفق مراحل التشغيل المحددة.",
    heroImage: "assets/images/Pizza.jpg",
    heroImageAlt: "Pizza Paradiso Digital Transformation",
    liveUrl: "",
    demoVideo:
      "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790352563/Pizza.mp4",
    businessChallenge:
      "الحاجة إلى تنسيق أوضح بين استقبال الطلبات وتجهيزها ومتابعة حالتها عبر الإدارة والمطبخ.",
    businessOutcome:
      "توحيد متابعة الطلبات وربط مراحل التجهيز والتسليم ضمن مسار رقمي واحد.",
    metaTelemetry: {
      label: "RESTAURANT MANAGEMENT",
      status: "Completed",
      highlight: "تنسيق ومتابعة الطلبات"
    },
    transformation: {
      title: "من متابعة متفرقة للطلبات إلى مسار تشغيلي موحد",
      description:
        "ينظم الحل دورة الطلب من تسجيله وتحديث حالته إلى تجهيزه وتسليمه، مع تنظيم الوصول إلى الوظائف وفق أدوار المستخدمين.",
      before: {
        badge: "التحدي • BEFORE",
        title: "الحاجة إلى تنسيق أوضح للطلبات",
        subtitle: "متابعة الطلبات بين الإدارة والمطبخ",
        points: [
          "تنسيق الطلبات ومراحل تجهيزها بين الإدارة والمطبخ",
          "متابعة حالة كل طلب أثناء مراحل التجهيز",
          "تنظيم صلاحيات الموظفين بحسب أدوارهم"
        ]
      },
      after: {
        badge: "الحل • SOLUTION",
        title: "متابعة موحدة لدورة الطلب",
        subtitle: "مسار رقمي يربط الطلب بالتجهيز والتسليم",
        points: [
          "متابعة حالة الطلب خلال مراحل التجهيز",
          "ربط تحديثات الطلب بين الإدارة والمطبخ",
          "التحكم في الوصول حسب الأدوار (RBAC)"
        ],
        footer:
          "مسار موحد يساعد فريق المطعم على متابعة الطلبات وتنسيق تجهيزها وتسليمها."
      }
    },
    ctaWhatsAppMessage:
      "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن حلول إدارة المطاعم وإمكانية تنفيذ حل مشابه."
  },

  skilling: {
    id: "skilling",
    title: "إدارة التسجيلات والموافقات على برامج التدريب",
    subtitle: "بوابة تجمع التسجيل والجدولة والموافقات في مسار تدريبي واحد.",
    category: "Automation & Business Solutions",
    categoryKey: "Automation-BussinessSolution",
    featured: false,
    cardImage: "assets/images/Skillingapp.jpg",
    cardImageAlt: "تطبيق إدارة برامج التدريب المؤسسي",
    tags: ["Power Apps", "Power Automate", "Outlook API"],
    description:
      "بوابة مؤسسية تساعد فرق الموارد البشرية على إدارة تسجيل المشاركين في البرامج التدريبية وجدولة الدورات ومتابعة مسارات الموافقة من خلال مكان واحد. تجمع العمليات الأساسية للبرنامج التدريبي في مسار منظم يسهل متابعته.",
    heroImage: "assets/images/Skillingapp.jpg",
    heroImageAlt: "Skilling App Corporate Management System",
    liveUrl: "",
    demoVideo: "",
    businessChallenge:
      "الحاجة إلى تنظيم تسجيل المشاركين وجداول الدورات وموافقات برامج التدريب ضمن مسار واضح.",
    businessOutcome:
      "مركزة التسجيلات والجداول والموافقات في بوابة واحدة لتسهيل تنسيق البرامج ومتابعة المشاركين.",
    metaTelemetry: {
      label: "TRAINING PORTAL",
      status: "Completed",
      highlight: "تنظيم برامج التدريب"
    },
    transformation: {
      title: "من تعدد خطوات التنسيق إلى بوابة تدريب موحدة",
      description:
        "تجمع البوابة التسجيلات والجدولة والموافقات في مسار منظم يساعد فرق التدريب والموارد البشرية على إدارة البرامج ومتابعتها.",
      before: {
        badge: "التحدي • BEFORE",
        title: "تنسيق متفرق لبرامج التدريب",
        subtitle: "تسجيلات وجداول وموافقات متعددة الخطوات",
        points: [
          "متابعة تسجيلات الموظفين عبر خطوات متعددة",
          "تنسيق مواعيد الدورات وجلسات التدريب",
          "متابعة الموافقات الإدارية على البرامج التدريبية"
        ]
      },
      after: {
        badge: "الحل • SOLUTION",
        title: "بوابة مؤسسية لإدارة التدريب",
        subtitle: "تسجيل وجدولة وموافقات ضمن مسار موحد",
        points: [
          "إدارة تسجيلات المشاركين وجلسات التدريب من مكان واحد",
          "تنظيم مسارات الموافقة على البرامج التدريبية",
          "التكامل مع Outlook لجدولة المواعيد وتنسيقها"
        ],
        footer:
          "بوابة موحدة تسهّل تنسيق البرامج ومتابعة المشاركين والمواعيد والموافقات."
      }
    },
    ctaWhatsAppMessage:
      "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن بوابة التدريب المؤسسي وإمكانية تنفيذ حل مشابه."
  },

  memo: {
    id: "memo",
    title: "أتمتة المذكرات ومسارات الموافقات المؤسسية",
    subtitle: "نظام مركزي لإنشاء المذكرات وتوجيهها ومتابعة اعتمادها وأرشفتها.",
    category: "Automation & Business Solutions",
    categoryKey: "Automation-BussinessSolution",
    featured: false,
    cardImage: "assets/images/Memo.jpg",
    cardImageAlt: "نظام أتمتة المذكرات والموافقات المؤسسية",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    description:
      "نظام رقمي يدير دورة المذكرات المؤسسية من تقديم المعاملة وتوجيهها إلى الجهات المعنية، مرورًا بمراحل المراجعة والاعتماد، وصولًا إلى حفظ المستندات المعتمدة في سجل مركزي. يساعد النظام على تحويل دورة المذكرة إلى خطوات واضحة يمكن متابعتها من مكان واحد.",
    heroImage: "assets/images/Memo.jpg",
    heroImageAlt: "Automated Memo Approval System",
    liveUrl: "",
    demoVideo: "",
    businessChallenge:
      "تعدد خطوات تداول المذكرات وصعوبة متابعة الاعتمادات بين المستويات الإدارية.",
    businessOutcome:
      "تحويل دورة المذكرات إلى مسار رقمي واضح مع متابعة مركزية للحالة والاعتمادات والمستندات.",
    metaTelemetry: {
      label: "WORKFLOW AUTOMATION",
      status: "Completed",
      highlight: "أتمتة مسارات الموافقة"
    },
    transformation: {
      title: "من تداول متفرق للمذكرات إلى دورة موافقات رقمية",
      description:
        "ينظم النظام دورة المذكرة من الإنشاء والتوجيه إلى المراجعة والاعتماد، مع حفظ المستندات ضمن سجل مركزي يمكن الرجوع إليه.",
      before: {
        badge: "التحدي • BEFORE",
        title: "تعدد خطوات تداول المذكرات",
        subtitle: "صعوبة متابعة حالة الاعتماد عبر المستويات",
        points: [
          "تداول المذكرات بين المستويات والجهات الإدارية",
          "الحاجة إلى متابعة حالة المعاملات والاعتمادات",
          "الحاجة إلى تنظيم أرشفة المذكرات واسترجاعها"
        ]
      },
      after: {
        badge: "الحل • SOLUTION",
        title: "مسار رقمي للمذكرات والاعتمادات",
        subtitle: "توجيه واضح ومتابعة مركزية للمعاملات",
        points: [
          "توجيه المذكرات وفق مسارات الاعتماد المؤسسية",
          "متابعة حالة كل مذكرة عبر لوحات التحكم",
          "حفظ المذكرات المعتمدة وأرشفتها رقميًا"
        ],
        footer:
          "دورة عمل رقمية تدعم متابعة المذكرات والاعتمادات والقرارات الإدارية."
      }
    },
    ctaWhatsAppMessage:
      "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن نظام أتمتة المذكرات والموافقات وإمكانية تنفيذ حل مشابه."
  },

  fishbowl: {
    id: "fishbowl",
    title: "أتمتة متابعة المخزون والموردين",
    subtitle: "مسار موحد لمعالجة بيانات المخزون ومتابعة مؤشرات الموردين.",
    category: "Automation & Business Solutions",
    categoryKey: "Automation-BussinessSolution",
    featured: false,
    cardImage: "assets/images/Fishbowl.jpg",
    cardImageAlt: "حل أتمتة المخزون ومتابعة الموردين",
    tags: ["Power Automate", "AI Builder", "Slack API"],
    description:
      "حل رقمي ينظم معالجة بيانات المخزون ومتابعة مؤشرات الموردين ضمن سير عمل مؤتمت. يساعد الفرق على رصد التغيرات والحالات التي تحتاج إلى مراجعة من خلال التقييمات والتنبيهات المرتبطة ببيانات المخزون والتوريد.",
    heroImage: "assets/images/Fishbowl.jpg",
    heroImageAlt: "Fishbowl Inventory Automation and Cloud Migration",
    liveUrl: "",
    demoVideo:
      "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790352332/FishBowl.mp4",
    businessChallenge:
      "الحاجة إلى متابعة تغيرات المخزون ومعلومات الموردين ورصد مؤشرات التوريد بشكل أكثر انتظامًا.",
    businessOutcome:
      "أتمتة معالجة بيانات المخزون وإظهار مؤشرات الموردين والتنبيهات المرتبطة بالحالات التي تحتاج إلى متابعة.",
    metaTelemetry: {
      label: "CLOUD AUTOMATION",
      status: "Completed",
      highlight: "متابعة المخزون والموردين"
    },
    transformation: {
      title: "من مراجعة بيانات متفرقة إلى متابعة مؤتمتة للمخزون",
      description:
        "يعالج النظام سجلات المخزون ويتابع مؤشرات الموردين ويرسل التنبيهات ضمن سير عمل واحد يساعد الفرق على متابعة الحالات المهمة.",
      before: {
        badge: "التحدي • BEFORE",
        title: "الحاجة إلى متابعة بيانات التوريد",
        subtitle: "تحديث المخزون ومراجعة مؤشرات الموردين",
        points: [
          "تحديث ومراجعة سجلات المخزون",
          "متابعة مؤشرات أداء الموردين ومخاطر التوريد",
          "تحديد الحالات التي تحتاج إلى مراجعة أو متابعة"
        ]
      },
      after: {
        badge: "الحل • SOLUTION",
        title: "مسار مؤتمت للمخزون والموردين",
        subtitle: "معالجة السجلات وتقييم المؤشرات وإرسال التنبيهات",
        points: [
          "معالجة سجلات المخزون ضمن تدفق بيانات مؤتمت",
          "تقييم مؤشرات الموردين (Risk Scoring)",
          "إرسال تنبيهات للحالات المرتبطة بالمخزون والتوريد"
        ],
        footer:
          "متابعة موحدة تساعد الفرق على رصد بيانات المخزون ومؤشرات الموردين والتعامل مع الحالات التي تحتاج إلى مراجعة."
      }
    },
    ctaWhatsAppMessage:
      "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن حلول أتمتة المخزون وتقييم الموردين وإمكانية تنفيذ حل مشابه."
  },

  it: {
    id: "it",
    title: "وكيل ذكي لأتمتة طلبات الدعم الفني",
    subtitle:
      "مساعد رقمي لمعالجة الطلبات الشائعة وتوجيه التذاكر ومتابعة مؤشرات الخدمة.",
    category: "Automation & Business Solutions",
    categoryKey: "Automation-BussinessSolution",
    featured: false,
    cardImage: "assets/images/ITsupport.jpg",
    cardImageAlt: "الوكيل الذكي لأتمتة دعم تقنية المعلومات",
    tags: ["Copilot Studio", "Power Automate", "SharePoint", "Power BI"],
    description:
      "وكيل رقمي يساعد الموظفين على تقديم طلبات الدعم الفني، ويربط الطلبات الشائعة بمسارات عمل مؤتمتة ويوجه التذاكر إلى الفريق المعني. كما يوفر وسيلة لمتابعة الطلبات ومؤشرات الخدمة من خلال لوحات البيانات.",
    heroImage: "assets/images/ITsupport.jpg",
    heroImageAlt: "Intelligent IT Support Agent",
    liveUrl: "",
    demoVideo:
      "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790352429/ItSupport.mp4",
    businessChallenge:
      "تكرار طلبات الدعم الأساسية واستهلاكها وقت فريق تقنية المعلومات، إلى جانب الحاجة إلى تنظيم تسجيل الطلبات ومتابعتها.",
    businessOutcome:
      "توفير قناة موحدة لتقديم الطلبات الشائعة وتوجيهها آليًا، مع متابعة الطلبات ومؤشرات الخدمة.",
    metaTelemetry: {
      label: "AI AGENT",
      status: "Completed",
      highlight: "أتمتة طلبات الدعم الفني"
    },
    transformation: {
      title: "من معالجة متكررة إلى مسار دعم منظم",
      description:
        "يوفر الوكيل قناة محادثة لتقديم الطلبات، ويربط الحالات الشائعة بمسارات عمل مؤتمتة ويوجه التذاكر إلى الفريق المختص.",
      before: {
        badge: "التحدي • BEFORE",
        title: "طلبات دعم متكررة ومتعددة الخطوات",
        subtitle: "حاجة الموظفين إلى تسجيل الطلبات ومتابعتها",
        points: [
          "تسجيل وتصنيف طلبات الدعم الفني",
          "معالجة الطلبات المتكررة من خلال فريق الدعم",
          "الحاجة إلى متابعة الطلبات ومؤشرات الخدمة"
        ]
      },
      after: {
        badge: "الحل • SOLUTION",
        title: "وكيل رقمي لطلبات الدعم",
        subtitle: "تقديم الطلبات وتوجيهها ومتابعة سيرها",
        points: [
          "واجهة محادثة لتقديم طلبات الدعم",
          "ربط الطلبات الشائعة بمسارات عمل مؤتمتة",
          "توجيه التذاكر ومتابعة مؤشرات الخدمة عبر لوحات البيانات"
        ],
        footer:
          "مسار موحد يساعد الموظفين على تقديم طلبات الدعم وتنظيم توجيهها ومتابعة حالتها."
      }
    },
    ctaWhatsAppMessage:
      "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن حلول الوكيل الذكي للدعم الفني وإمكانية تنفيذ حل مشابه."
  },

  focuszone: {
    id: "focuszone",
    title: "FocusZone — منصة متكاملة للتركيز والتعلّم وتطوير المهارات",
    subtitle:
      "بيئة تعليمية تجمع مصادر التعلم والمساعدة الذكية والتقييم وتتبع التقدم وأدوات التركيز.",
    category: "Web Development & AI",
    tags: [
      "Angular",
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "AI",
      "RAG",
      "Qdrant",
      "Browser Extension"
    ],
    categoryKey: "web-development",
    featured: true,
    cardImage:
      "assets/images/ultra_premium_16_9_cinematic_project_showcase_thumbnail_for_focuszone_an_aicard.png",
    cardImageAlt: "FOCUSZONE — منظومة التعلّم الذكية",
    description:
      "منصة تعليمية متكاملة تجمع مصادر التعلم وجلسات التركيز والمساعد الذكي والتقييمات وتتبع التقدم في تجربة واحدة. تساعد المتعلم على الوصول إلى المحتوى، الحصول على المساعدة في سياقه، التدرب من خلال التقييمات، ومتابعة تطور مهاراته.",
    heroImage:
      "assets/images/ultra_premium_16_9_cinematic_website_hero_key_visual_for_focuszone_hero.png",
    heroImageAlt: "FocusZone AI Learning Platform",
    liveUrl: "",
    demoVideo:
      "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790384011/Focuszone.mp4",
    businessChallenge:
      "الحاجة إلى تجربة تعلم أكثر تنظيمًا تساعد المتعلم على التركيز والوصول إلى المساعدة المناسبة وقياس تطور مهاراته.",
    businessOutcome:
      "جمع الدراسة والمساعدة الذكية والتقييم وتتبع المهارات وأدوات التركيز ضمن منظومة تعليمية واحدة.",
    metaTelemetry: {
      label: "AI LEARNING ECOSYSTEM",
      status: "Completed",
      highlight: "تعلم ذكي ومتابعة المهارات"
    },
    transformation: {
      title: "من مصادر تعلم وأدوات متفرقة إلى بيئة دراسة متكاملة",
      description:
        "تجمع المنصة مصادر الدراسة وجلسات التركيز والمساعدة الذكية والتقييم وتتبع التقدم ضمن تجربة واحدة تدعم رحلة المتعلم.",
      before: {
        badge: "التحدي • BEFORE",
        title: "تعدد مصادر الدراسة والمشتتات",
        subtitle: "الحاجة إلى تركيز ومتابعة أوضح للتقدم",
        points: [
          "التنقل بين مصادر وأدوات مختلفة أثناء الدراسة",
          "الحاجة إلى مساعدة مرتبطة بمحتوى المادة التعليمية",
          "صعوبة متابعة مستوى المهارات والتقدم عبر أدوات منفصلة"
        ]
      },
      after: {
        badge: "الحل • SOLUTION",
        title: "منظومة متكاملة للتعلم والتركيز",
        subtitle:
          "مصادر تعلم ومساعدة ذكية وتقييم وتتبع للمهارات في تجربة واحدة",
        points: [
          "وضع التركيز (Focus Mode) للحد من الوصول إلى المواقع المشتتة",
          "مساعد ذكي يجيب عن الأسئلة في سياق المادة التعليمية باستخدام RAG",
          "تقييمات ديناميكية تساعد على متابعة تطور المهارات حسب الموضوع",
          "متابعة تقدم المتعلم وتنظيم رحلة التعلم داخل المنصة"
        ],
        footer:
          "تجربة موحدة تساعد المتعلم على الدراسة والتركيز وفهم المحتوى ومتابعة تطور مهاراته."
      }
    },
    ctaWhatsAppMessage:
      "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن منظومة FocusZone التعليمية الذكية وإمكانية تنفيذ حل مشابه."
  },

  clinicms: {
    id: "clinicms",
    title: "إدارة مواعيد العيادات وسجلات المرضى حسب الأدوار",
    subtitle:
      "نظام مركزي بواجهات مخصصة للإدارة والأطباء والمرضى والزوار.",
    categoryKey: "web-development",
    featured: true,
    cardImage: "assets/images/ClinicManagmentSystem.jpg",
    cardImageAlt: "نظام إدارة العيادات",
    category: "Web Development",
    tags: [
      ".NET 8",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "ASP.NET Identity",
      "AutoMapper",
      "SQL Server"
    ],
    description:
      "نظام لإدارة مواعيد العيادات وسجلات المرضى من خلال واجهات مخصصة للإدارة والأطباء والمرضى والزوار. يجمع العمليات الأساسية في منصة واحدة وينظم الوصول إلى الوظائف والبيانات وفق دور المستخدم.",
    heroImage: "assets/images/ClinicManagmentSystem.jpg",
    heroImageAlt: "Clinic Management System UI",
    liveUrl: "",
    demoVideo:
      "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790352050/Clinic.mp4",
    businessChallenge:
      "الحاجة إلى تنسيق المواعيد وتنظيم الوصول إلى سجلات المرضى والوظائف المختلفة بحسب دور المستخدم.",
    businessOutcome:
      "مركزة إدارة المواعيد والسجلات ضمن منصة واحدة مع واجهات وصلاحيات مخصصة للأدوار المختلفة.",
    metaTelemetry: {
      label: "CLINIC MANAGEMENT PLATFORM",
      status: "Completed",
      highlight: "تنظيم المواعيد والسجلات"
    },
    transformation: {
      title: "من إجراءات متفرقة إلى منصة موحدة لإدارة العيادة",
      description:
        "يجمع النظام إدارة المواعيد وملفات المرضى ضمن منصة ذات واجهات وصلاحيات مخصصة لكل دور.",
      before: {
        badge: "التحدي • BEFORE",
        title: "الحاجة إلى تنسيق المواعيد والسجلات",
        subtitle: "تنظيم جداول الأطباء والوصول إلى معلومات المرضى",
        points: [
          "تنظيم جداول الأطباء ومواعيد المرضى",
          "الوصول إلى ملفات المرضى ومتابعة الزيارات",
          "تحديد صلاحيات الوصول بحسب أدوار المستخدمين"
        ]
      },
      after: {
        badge: "الحل • SOLUTION",
        title: "منصة موحدة لإدارة العيادة",
        subtitle: "مواعيد وسجلات وواجهات مخصصة للأدوار المختلفة",
        points: [
          "إدارة المواعيد وملفات المرضى من منصة واحدة",
          "واجهات مخصصة للإدارة والأطباء والمرضى والزوار",
          "إدارة المستخدمين والصلاحيات عبر ASP.NET Identity وRBAC"
        ],
        footer:
          "منصة مركزية تنظم المواعيد والسجلات وتوفر تجربة مناسبة لكل دور داخل العيادة."
      }
    },
    ctaWhatsAppMessage:
      "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن نظام إدارة العيادات وإمكانية تنفيذ حل مشابه."
  },

  watchify: {
    id: "watchify",
    title: "Watchify — اكتشاف المحتوى وتنظيم تجربة المشاهدة",
    subtitle:
      "منصة توصيات تفهم سياق المستخدم وتجمع اكتشاف المحتوى وقوائم المشاهدة والاشتراكات.",
    category: "Web Development & AI",
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
      "TMDB API"
    ],
    description:
      "منصة لاكتشاف الأفلام والمسلسلات باستخدام البحث الدلالي والتوصيات التي تراعي سياق طلب المستخدم وتفضيلاته. تجمع كذلك إدارة المفضلة والمشاهدة لاحقًا وسجل المشاهدة والاشتراكات ضمن تجربة واحدة.",
    heroImage: "assets/images/Watchify.png",
    heroImageAlt: "Watchify intelligent streaming platform interface",
    liveUrl: "",
    demoVideo:
      "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790353391/Watchify.mp4",
    businessChallenge:
      "الحاجة إلى مساعدة المستخدم على العثور على محتوى يناسب طلبه وتفضيلاته، مع إدارة تجربة المشاهدة من مكان واحد.",
    businessOutcome:
      "توفير بحث وتوصيات تراعي سياق المستخدم، مع أدوات موحدة لإدارة المحتوى والمشاهدة والاشتراكات.",
    metaTelemetry: {
      label: "AI RECOMMENDATION PIPELINE",
      status: "Completed",
      highlight: "اكتشاف محتوى بحسب السياق"
    },
    transformation: {
      title: "من البحث بالكلمات إلى اكتشاف محتوى يراعي السياق",
      description:
        "تفهم المنصة استعلام المستخدم باللغة الطبيعية، وتستخدم البحث الدلالي لاسترجاع المحتوى الأقرب ثم إعادة ترتيب النتائج بحسب الصلة، مع توفير أدوات متكاملة لإدارة المشاهدة.",
      before: {
        badge: "التحدي • BEFORE",
        title: "بحث يعتمد على الكلمات والفلاتر",
        subtitle: "صعوبة التعبير عن تفضيلات وسياق مشاهدة مركب",
        points: [
          "الاعتماد على الكلمات المفتاحية والفلاتر للعثور على المحتوى",
          "صعوبة التعبير عن تفضيلات مشاهدة متعددة في استعلام واحد",
          "إدارة قوائم المشاهدة والسجل والاشتراكات عبر أدوات منفصلة"
        ]
      },
      after: {
        badge: "الحل • SOLUTION",
        title: "اكتشاف محتوى مدعوم بالبحث الدلالي",
        subtitle:
          "فهم سياق المستخدم وإعادة ترتيب النتائج وإدارة المشاهدة من مكان واحد",
        points: [
          "فهم استعلام المستخدم باللغة الطبيعية",
          "استرجاع المحتوى دلاليًا باستخدام Qdrant وإعادة ترتيبه بحسب الصلة باستخدام Cohere",
          "إدارة المفضلة والمشاهدة لاحقًا وسجل المشاهدة والاشتراكات المميزة"
        ],
        footer:
          "منصة موحدة تجمع اكتشاف المحتوى الذكي وإدارة تجربة المشاهدة والاشتراكات."
      }
    },
    ctaWhatsAppMessage:
      "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن منصات المحتوى والتوصيات الذكية وإمكانية تنفيذ حل مشابه."
  },

  freshcart: {
    id: "freshcart",
    title: "FreshCart — تجربة تجارة إلكترونية ثنائية اللغة",
    subtitle:
      "منصة تجمع اكتشاف المنتجات والسلة والمفضلة والدفع ضمن رحلة شراء واحدة.",
    category: "Web Development",
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
      "JWT"
    ],
    description:
      "منصة تجارة إلكترونية تتيح للمستخدمين اكتشاف المنتجات والبحث عنها وإدارة السلة والمفضلة وإتمام الطلب. تدعم الحسابات والدفع عبر Stripe أو عند الاستلام، إلى جانب تجربة عربية وإنجليزية وتصيير الصفحات من جهة الخادم (SSR).",
    heroImage: "assets/images/Ecommerce.png",
    heroImageAlt: "FreshCart E-Commerce Platform UI",
    cardImage: "assets/images/Ecommerce.png",
    cardImageAlt: "FreshCart E-Commerce Platform UI",
    liveUrl: "",
    demoVideo:
      "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790383891/Ecommerce.mp4",
    featured: false,
    businessChallenge:
      "الحاجة إلى تجربة تسوق متسقة وسريعة تدعم لغتين وخيارات دفع متعددة، مع صفحات قابلة للفهرسة وتحسين ظهور المحتوى في محركات البحث.",
    businessOutcome:
      "جمع اكتشاف المنتجات والسلة والمفضلة والدفع ضمن رحلة شراء واحدة تدعم العربية والإنجليزية وخيارات دفع متنوعة.",
    metaTelemetry: {
      label: "E-COMMERCE PLATFORM",
      status: "Completed",
      highlight: "تجربة تسوق ثنائية اللغة"
    },
    transformation: {
      title: "من خطوات تسوق منفصلة إلى رحلة شراء موحدة",
      description:
        "تجمع المنصة اكتشاف المنتجات والسلة والمفضلة وإتمام الدفع ضمن تجربة تجارة إلكترونية ثنائية اللغة ومهيأة للأداء والفهرسة.",
      before: {
        badge: "التحدي • BEFORE",
        title: "الحاجة إلى تجربة تسوق متسقة",
        subtitle:
          "تصفح وإدارة سلة ودفع تدعم احتياجات المستخدمين المختلفة",
        points: [
          "الحاجة إلى صفحات قابلة للفهرسة وتحسين ظهور المحتوى في محركات البحث",
          "الحفاظ على بيانات السلة والمفضلة أثناء التنقل بين صفحات المتجر",
          "توفير الدفع الإلكتروني والدفع عند الاستلام",
          "دعم التسوق بالعربية والإنجليزية واتجاهي RTL وLTR"
        ]
      },
      after: {
        badge: "الحل • SOLUTION",
        title: "منصة تسوق موحدة ومتعددة اللغات",
        subtitle:
          "اكتشاف المنتجات والسلة والدفع ضمن رحلة شراء متكاملة",
        points: [
          "تقديم الصفحات من الخادم (SSR) ودعم متطلبات SEO",
          "مزامنة السلة والمفضلة عبر صفحات المتجر",
          "الدفع عبر Stripe أو عند الاستلام",
          "واجهة عربية وإنجليزية تدعم اتجاهي RTL وLTR"
        ],
        footer:
          "تجربة تسوق متكاملة تجمع اكتشاف المنتجات وإدارة السلة وإتمام الطلب ضمن رحلة واحدة."
      }
    },
    ctaWhatsAppMessage:
      "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن حلول المتاجر الإلكترونية عالية الأداء وإمكانية تنفيذ حل مشابه."
  },

  hospital: {
    id: "hospital",
    title: "ربط حجز المواعيد والمتابعة الطبية في رحلة واحدة",
    subtitle:
      "تطبيق ينظم المواعيد والزيارات والوصفات الطبية ضمن مسار مترابط.",
    category: "Automation & Business Solutions",
    categoryKey: "Automation-BussinessSolution",
    featured: false,
    cardImage: "assets/images/HospitalManagment.jpg",
    cardImageAlt: "تطبيق إدارة المواعيد والوصفات الطبية",
    tags: ["Power Apps"],
    description:
      "تطبيق يربط حجز المواعيد بجداول الأطباء ومتابعة الزيارة وتوثيق الوصفات الطبية. يجمع خطوات الخدمة في مسار واحد يساعد الفريق الطبي على الوصول إلى معلومات المريض ومتابعة الزيارة من خلال تجربة موحدة.",
    heroImage: "assets/images/HospitalManagment.jpg",
    heroImageAlt:
      "Hospital Appointment & Prescription Management Application",
    liveUrl: "",
    demoVideo:
      "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790351761/power_apps_studio_hospital_application_editing_and_3_more_pages.mp4",
    businessChallenge:
      "الحاجة إلى ربط الحجز بالزيارة والوصفة الطبية ضمن مسار واضح لتنسيق المتابعة الصحية.",
    businessOutcome:
      "تنظيم مراحل الحجز والزيارة وتوثيق الوصفة الطبية ضمن تطبيق واحد.",
    metaTelemetry: {
      label: "HEALTHCARE BUSINESS APPLICATION",
      status: "Completed",
      highlight: "ربط الحجز بالمتابعة الطبية"
    },
    transformation: {
      title: "من خطوات خدمة منفصلة إلى مسار رقمي مترابط",
      description:
        "يربط التطبيق حجز الموعد ومتابعة الزيارة وتوثيق الوصفة الطبية ضمن رحلة خدمة واحدة.",
      before: {
        badge: "التحدي • BEFORE",
        title: "الحاجة إلى ربط خطوات الزيارة",
        subtitle: "تنسيق المواعيد والزيارات والوصفات الطبية",
        points: [
          "تنظيم المواعيد المتاحة وربطها بجداول الأطباء",
          "تسجيل الزيارة وتوثيق الوصفة الطبية ضمن مسار العمل",
          "متابعة معلومات المرضى عبر مراحل الخدمة"
        ]
      },
      after: {
        badge: "الحل • SOLUTION",
        title: "مسار رقمي لخدمات الرعاية الصحية",
        subtitle:
          "من حجز الموعد إلى متابعة الزيارة وتوثيق الوصفة",
        points: [
          "ربط الحجوزات بجداول الأطباء",
          "واجهة للطبيب لمتابعة الزيارات والحالات",
          "توثيق الوصفات الطبية رقميًا"
        ],
        footer:
          "تطبيق يجمع خطوات الحجز والمتابعة الطبية وتوثيق الوصفات ضمن مسار واحد."
      }
    },
    ctaWhatsAppMessage:
      "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن حلول إدارة خدمات الرعاية الصحية وإمكانية تنفيذ حل مشابه."
  },

  clinicbot: {
    id: "clinicbot",
    title: "أتمتة حجوزات العيادات والتذكير بالمواعيد",
    subtitle:
      "مساعد محادثة للحجز ومزامنة المواعيد وإرسال التذكيرات تلقائيًا.",
    category: "Automation & Business Solutions",
    categoryKey: "Automation-BussinessSolution",
    featured: false,
    cardImage: "assets/images/ClinicAssitant.jpg",
    cardImageAlt: "مساعد Telegram الذكي لحجوزات العيادات",
    tags: ["n8n", "AI Agent", "Telegram Bot", "Automation"],
    description:
      "مساعد محادثة عبر Telegram يتيح للمرضى طلب المواعيد، ويربط الحجوزات بجداول الأطباء ويرسل التذكيرات تلقائيًا. يوفر مسارًا منظمًا لاستقبال الحجز وتأكيده ومتابعته مع أتمتة الخطوات المتكررة.",
    heroImage: "assets/images/ClinicAssitant.jpg",
    heroImageAlt: "Clinic Telegram AI Booking Bot",
    liveUrl: "",
    demoVideo:
      "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790352075/clinicreservation.mp4",
    businessChallenge:
      "تنسيق المواعيد والتذكيرات يتطلب متابعة متكررة من موظفي الاستقبال والتواصل المستمر مع المرضى.",
    businessOutcome:
      "إتاحة طلب الحجز عبر المحادثة ومزامنة المواعيد وإرسال التذكيرات آليًا.",
    metaTelemetry: {
      label: "AI AUTOMATION WORKFLOW",
      status: "Completed",
      highlight: "أتمتة الحجز والتذكيرات"
    },
    transformation: {
      title: "من تنسيق المواعيد يدويًا إلى مسار حجز مؤتمت",
      description:
        "يستقبل المساعد طلبات الحجز عبر المحادثة، ويربطها بجداول الأطباء ويرسل التذكيرات تلقائيًا للمرضى.",
      before: {
        badge: "التحدي • BEFORE",
        title: "تنسيق المواعيد والتذكيرات يدويًا",
        subtitle: "متابعة طلبات الحجز والتواصل مع المرضى",
        points: [
          "تسجيل بيانات الحجز وتأكيد الموعد",
          "مزامنة المواعيد مع جداول الأطباء",
          "إرسال تذكيرات منتظمة للمرضى"
        ]
      },
      after: {
        badge: "الحل • SOLUTION",
        title: "مساعد محادثة لحجوزات العيادات",
        subtitle:
          "طلب موعد ومزامنة الجدول وإرسال التذكير تلقائيًا",
        points: [
          "استقبال طلبات المواعيد عبر Telegram",
          "مزامنة الحجوزات مع جداول الأطباء",
          "إرسال تذكيرات آلية للمرضى"
        ],
        footer:
          "مسار محادثة موحد يساعد على استقبال الحجوزات ومزامنتها ومتابعة المواعيد."
      }
    },
    ctaWhatsAppMessage:
      "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن حلول أتمتة حجز المواعيد عبر المحادثة وإمكانية تنفيذ حل مشابه."
  },

  ainsgroup: {
    id: "ainsgroup",
    title: "AINS Group — موقع مؤسسي لعرض الخدمات ودعم التواصل التجاري",
    subtitle:
      "موقع ينظم عرض الخدمات والقطاعات ويوفر مسارات واضحة للتواصل والاستفسار.",
    categoryKey: "wordpress",
    category: "WordPress",
    featured: true,
    cardImage: "assets/images/Ansigroup.jpg",
    cardImageAlt: "موقع AINS Group المؤسسي",
    tags: ["WordPress", "Elementor", "SEO"],
    description:
      "موقع مؤسسي يعرض خدمات AINS Group وقطاعات عملها ضمن بنية واضحة وسهلة التصفح. يساعد الزوار على استكشاف المعلومات وفهم نطاق الخدمات والوصول إلى قنوات التواصل مع الشركة.",
    heroImage: "assets/images/Ansigroup.jpg",
    heroImageAlt: "AINS Group Corporate Website UI",
    liveUrl: "https://ains-group.com/",
    demoVideo:
      "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790384426/Ansigroup.mp4",
    businessChallenge:
      "الحاجة إلى عرض خدمات الشركة وقطاعاتها بوضوح وتنظيم المعلومات ضمن تجربة مؤسسية تسهّل الوصول إلى قنوات التواصل.",
    businessOutcome:
      "تنظيم عرض الخدمات والقطاعات وتوفير مسارات واضحة للزوار لاستكشاف المعلومات والتواصل مع الشركة.",
    metaTelemetry: {
      label: "CORPORATE WEBSITE",
      status: "Live in Production",
      highlight: "عرض الخدمات والتواصل التجاري"
    },
    transformation: {
      title: "من معلومات متفرقة إلى موقع مؤسسي منظم",
      description:
        "ينظم الموقع خدمات الشركة وقطاعاتها ومسارات التصفح والتواصل ضمن تجربة رقمية متسقة تعكس طبيعة النشاط المؤسسي.",
      before: {
        badge: "التحدي • BEFORE",
        title: "الحاجة إلى عرض مؤسسي واضح",
        subtitle:
          "تنظيم معلومات الخدمات والقطاعات وقنوات التواصل",
        points: [
          "عرض خدمات الشركة وإمكاناتها ضمن واجهة واحدة",
          "تنظيم التنقل بين قطاعات العمل المختلفة",
          "توفير مسارات واضحة للتواصل والاستفسار"
        ]
      },
      after: {
        badge: "الحل • SOLUTION",
        title: "موقع مؤسسي منظم",
        subtitle:
          "محتوى واضح ومسارات مباشرة لاستكشاف الخدمات والتواصل",
        points: [
          "تنظيم المحتوى بحسب خدمات الشركة وقطاعاتها",
          "تقديم تجربة تصميم مؤسسية متسقة مع طبيعة خدمات الأعمال",
          "توفير نماذج وقنوات واضحة للتواصل مع الشركة"
        ],
        footer:
          "واجهة رقمية منظمة تساعد الزوار على استكشاف الخدمات والوصول إلى قنوات التواصل."
      }
    },
    ctaWhatsAppMessage:
      "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن حلول بناء المواقع المؤسسية وإمكانية تنفيذ حل مشابه."
  }
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

function getLocalizedProject(project) {
  const language = window.forascomI18n?.currentLang || "ar";
  const localized = window.forascomTranslations?.[language]?.projectDetails?.projects?.[project.id];
  if (!localized) return project;

  const merge = (source, translated) => {
    const result = { ...source };
    Object.entries(translated).forEach(([key, value]) => {
      result[key] = value && typeof value === "object" && !Array.isArray(value)
        ? merge(source[key] || {}, value)
        : value;
    });
    return result;
  };

  return merge(project, localized);
}

/**
 * Render the project details into the DOM
 */
function renderProjectDetails(projectKey) {
  const resolvedKey = projectAliases[projectKey] || projectKey;
  const sourceProject =
    projectsDetailsData[resolvedKey] || projectsDetailsData["focuszone"];
  if (!sourceProject) return;
  const project = getLocalizedProject(sourceProject);
  const language = window.forascomI18n?.currentLang || "ar";

  // Update page title
  document.title = language === "en"
    ? `${project.title} | Forascom`
    : `${project.title} | Forascom فرصكم`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.content = project.description;

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

  const heroConsultBtn = document.getElementById("hero-consult-btn");
  if (heroConsultBtn) {
    const message = window.forascomI18n?.t(
      "projectDetails.actions.consultWhatsAppMessage",
      "مرحبًا فريق فرصكم، أرغب في مناقشة الحلول الهندسية المناسبة لمشروعي.",
    );
    heroConsultBtn.href = `https://wa.me/201501795004?text=${encodeURIComponent(message)}`;
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
      ? window.forascomI18n?.t("projectDetails.actions.productDemo", "PRODUCT DEMO")
      : window.forascomI18n?.t("projectDetails.actions.projectPreview", "PROJECT PREVIEW");
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
  if (outcomeBeforeBadge) {
    outcomeBeforeBadge.textContent =
      window.forascomI18n?.t(
        "projectDetails.sections.beforeBadge",
        trans.before?.badge || "",
      ) || trans.before?.badge || "";
  }
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
  if (outcomeAfterBadge) {
    outcomeAfterBadge.textContent =
      window.forascomI18n?.t(
        "projectDetails.sections.afterBadge",
        trans.after?.badge || "",
      ) || trans.after?.badge || "";
  }
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
      window.forascomI18n?.t(
        "projectDetails.actions.defaultWhatsAppMessage",
        `مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن تنفيذ حل مشابه لمشروع ${project.title}.`,
      ),
    );

    ctaPrimaryBtn.href = `https://wa.me/201501795004?text=${encodedMsg}`;
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

window.reRenderProjectDetailsWithLanguage = function () {
  if (!document.getElementById("project-hero")) return;
  renderProjectDetails(getActiveProjectKey());
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(initProjectDetailsPage, 0);
  }, { once: true });
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
