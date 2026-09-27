/* ==========================================================================
   FORASCOM - PROJECT DETAILS DATA & DYNAMIC CASE STUDY ENGINE
   ========================================================================== */

const projectsDetailsData = {
  pizza: {
    id: "pizza",
    title: "تحسين دورة الطلبات والكفاءة التشغيلية للمطاعم",
    subtitle: "حل رقمي لتسريع معالجة الطلبات، تقليل الأخطاء، وربط العمليات بين الواجهة الأمامية والمطبخ.",
    category: "Automation & Business Solutions",
    categoryKey: "Automation-BussinessSolution",
    featured: true,
    cardImage: "assets/images/Pizza.jpg",
    cardImageAlt: "مشروع بيتزا باراديزو للتحول الرقمي",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    description: "تواجه المطاعم تحديات في مزامنة الطلبات بين العملاء والمطبخ مما يؤدي إلى تأخير وأخطاء. يوفر هذا النظام حلاً متكاملاً يربط جميع الأطراف عبر سير عمل موحد، لتسريع وتيرة العمل وتحسين رضا العملاء، مع الاعتماد على أتمتة الإشعارات وإدارة الصلاحيات بدقة.",
    heroImage: "assets/images/Pizza.jpg",
    heroImageAlt: "Pizza Paradiso Digital Transformation",
    liveUrl: "",
    demoVideo: "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790352563/Pizza.mp4",
    businessChallenge: "الاعتماد على التوجيه اليدوي للطلبات أدى إلى بطء في الإنجاز وضعف في التنسيق بين الإدارة والمطبخ، مما يؤثر على كفاءة المطعم.",
    businessOutcome: "تسريع وتيرة تجهيز الطلبات، وتقليل الأخطاء التشغيلية من خلال متابعة دقيقة وموحدة لكل طلب.",
    metaTelemetry: {
      label: "RESTAURANT MANAGEMENT",
      status: "Completed",
      highlight: "تسريع معالجة الطلبات"
    },
    transformation: {
      title: "من الإدارة اليدوية المشتتة إلى عمليات رقمية منسقة",
      description: "إعادة هيكلة مسار الطلبات بالكامل لضمان سرعة الإنجاز وتقليل الاختناقات التشغيلية بين المطبخ ونقاط البيع.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "إدارة تشغيلية مجزأة",
        subtitle: "بطء في الاستجابة وتتبع الطلبات",
        points: [
          "تأخير في توجيه الطلبات للطهاة",
          "صعوبة في تتبع مراحل التجهيز بشكل لحظي",
          "غياب نظام واضح يحكم صلاحيات الموظفين"
        ]
      },
      after: {
        badge: "الحل المطبّق • SOLUTION",
        title: "نظام تشغيل موحد",
        subtitle: "سير عمل متكامل من استلام الطلب حتى التسليم",
        points: [
          "تتبع آلي لحالة الطلبات لضمان التدفق السلس للعمليات",
          "ربط فوري بين الإدارة والطهاة لتقليل أوقات الانتظار",
          "نظام صلاحيات متقدم (Role-Based Access Control) لإدارة الأدوار التشغيلية"
        ],
        footer: "توحيد العمليات لرفع الكفاءة التشغيلية وتحسين تجربة العملاء"
      }
    },
    ctaWhatsAppMessage: "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن حلول إدارة المطاعم وإمكانية تنفيذ حل مشابه."
  },

  skilling: {
    id: "skilling",
    title: "أتمتة إدارة التدريب وتطوير الكفاءات المؤسسية",
    subtitle: "بوابة موحدة لتبسيط تنظيم برامج التدريب، تقليل العبء الإداري، وتسريع دورة الموافقات.",
    category: "Automation & Business Solutions",
    categoryKey: "Automation-BussinessSolution",
    featured: false,
    cardImage: "assets/images/Skillingapp.jpg",
    cardImageAlt: "تطبيق المهارات المؤسسي",
    tags: ["Power Apps", "Power Automate", "Outlook API"],
    description: "تعاني المؤسسات من العبء الإداري المرتبط بجدولة الدورات التدريبية ومتابعة التسجيلات. تقدم البوابة حلاً مؤسسياً لمركزة وتيسير هذه العمليات، مما يوفر وقت فرق الموارد البشرية ويسرع من اعتماد البرامج التدريبية باستخدام أتمتة الجدولة والموافقات.",
    heroImage: "assets/images/Skillingapp.jpg",
    heroImageAlt: "Skilling App Corporate Management System",
    liveUrl: "",
    demoVideo: "",
    businessChallenge: "إهدار الوقت والجهد في الإدارة اليدوية للتسجيلات، الجدولة، والموافقات المتعلقة ببرامج التطوير المؤسسي.",
    businessOutcome: "تقليل الوقت الإداري المستغرق في تنسيق التدريب وتحسين معدلات مشاركة الموظفين من خلال مسار تسجيل سلس.",
    metaTelemetry: {
      label: "TRAINING PORTAL",
      status: "Completed",
      highlight: "تقليل العبء الإداري للتدريب"
    },
    transformation: {
      title: "من التنسيق اليدوي المعقد إلى إدارة تدريب انسيابية",
      description: "تحويل مهام إدارة التدريب اليومية إلى نظام مؤتمت يضمن دقة التنظيم وسرعة الإنجاز.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "إجراءات إدارية مستهلكة للوقت",
        subtitle: "تعدد خطوات التنسيق اليدوي",
        points: [
          "صعوبة حصر ومتابعة تسجيلات الموظفين",
          "الاعتماد على التنسيق اليدوي للمواعيد عبر البريد الإلكتروني",
          "بطء في مسارات الموافقة الإدارية على برامج التدريب"
        ]
      },
      after: {
        badge: "الحل المطبّق • SOLUTION",
        title: "بوابة مؤسسية مؤتمتة",
        subtitle: "سير عمل منسق يغطي كافة متطلبات التدريب",
        points: [
          "إدارة مركزية للتسجيلات وجلسات التدريب لسهولة الوصول",
          "أتمتة مسارات الموافقة لتسريع القرارات",
          "تكامل مع Outlook لجدولة تلقائية وتنسيق سلس للمواعيد"
        ],
        footer: "بوابة رقمية تدعم تطوير الكفاءات وترفع من إنتاجية فرق العمل"
      }
    },
    ctaWhatsAppMessage: "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن بوابة التدريب المؤسسي وإمكانية تنفيذ حل مشابه."
  },

  memo: {
    id: "memo",
    title: "رقمنة دورة الموافقات لتسريع اتخاذ القرارات المؤسسية",
    subtitle: "نظام مركزي لإدارة المذكرات والاعتمادات يقلل أوقات الانتظار ويضمن دقة التوثيق.",
    category: "Automation & Business Solutions",
    categoryKey: "Automation-BussinessSolution",
    featured: false,
    cardImage: "assets/images/Memo.jpg",
    cardImageAlt: "نظام أتمتة الموافقات المؤسسية",
    tags: ["Power Apps", "Power Automate", "SharePoint"],
    description: "يتسبب التداول الورقي للمذكرات في بطء الاعتمادات وفقدان الشفافية. يعالج هذا النظام تلك التحديات عبر توفير منصة رقمية تدير الموافقات متعددة المستويات بكفاءة، مما يسرع عملية اتخاذ القرار ويحفظ السجلات بشكل آمن وموثق.",
    heroImage: "assets/images/Memo.jpg",
    heroImageAlt: "Automated Memo Approval System",
    liveUrl: "",
    demoVideo: "",
    businessChallenge: "بطء دورة الاعتمادات نتيجة الاعتماد على المعاملات الورقية، مما يؤخر القرارات التشغيلية.",
    businessOutcome: "تسريع مسارات الموافقات، تحسين الشفافية في تتبع الطلبات، وضمان الحفظ المركزي الموثق للمستندات.",
    metaTelemetry: {
      label: "WORKFLOW AUTOMATION",
      status: "Completed",
      highlight: "تسريع الاعتمادات المؤسسية"
    },
    transformation: {
      title: "من المعاملات الورقية إلى حوكمة رقمية فعالة",
      description: "استبدال التداول اليدوي للمستندات بدورة عمل رقمية تضمن السرعة، المتابعة اللحظية، والتوثيق الآمن.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "دورة اعتمادات بطيئة",
        subtitle: "افتقار للشفافية وصعوبة التتبع",
        points: [
          "استغراق وقت طويل في نقل المستندات بين المستويات الإدارية",
          "عدم وضوح حالة الطلبات أو مسؤولية التأخير",
          "صعوبة في أرشفة واسترجاع المذكرات وقت الحاجة"
        ]
      },
      after: {
        badge: "الحل المطبّق • SOLUTION",
        title: "مسار موافقات رقمي موجه",
        subtitle: "اعتمادات سريعة وتوثيق مركزي",
        points: [
          "توجيه آلي للمذكرات وفق هيكل الاعتماد المؤسسي",
          "لوحات تحكم تتيح متابعة لحظية لحالة كل مذكرة",
          "حفظ وتوثيق المذكرات المعتمدة تلقائياً لضمان الامتثال"
        ],
        footer: "نظام يضمن انسيابية العمليات الإدارية وسرعة اتخاذ القرارات"
      }
    },
    ctaWhatsAppMessage: "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن نظام أتمتة المذكرات والموافقات وإمكانية تنفيذ حل مشابه."
  },

  fishbowl: {
    id: "fishbowl",
    title: "أتمتة المخزون وإدارة مخاطر الموردين بذكاء",
    subtitle: "حل سحابي لتبسيط معالجة بيانات المخزون وتوقع مخاطر التوريد لضمان استمرارية العمليات.",
    category: "Automation & Business Solutions",
    categoryKey: "Automation-BussinessSolution",
    featured: false,
    cardImage: "assets/images/Fishbowl.jpg",
    cardImageAlt: "أتمتة فيشبول وإدارة المخزون السحابية",
    tags: ["Power Automate", "AI Builder", "Slack API"],
    description: "يتطلب التعامل اليدوي مع بيانات المخزون والموردين جهداً كبيراً ويزيد من مخاطر نقص التوريد. يحول هذا الحل العمليات إلى مسار مؤتمت يحلل البيانات ويقيم الموردين استباقياً، لضمان استقرار سلاسل الإمداد وتقليل التدخل البشري.",
    heroImage: "assets/images/Fishbowl.jpg",
    heroImageAlt: "Fishbowl Inventory Automation and Cloud Migration",
    liveUrl: "",
    demoVideo: "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790352332/FishBowl.mp4",
    businessChallenge: "صعوبة متابعة التغيرات في المخزون بشكل يدوي وتأخر اكتشاف المخاطر المرتبطة بأداء الموردين.",
    businessOutcome: "تحسين استجابة سلسلة الإمداد، تقليل الأخطاء اليدوية، والحد من المخاطر التشغيلية عبر التنبيهات الاستباقية.",
    metaTelemetry: {
      label: "CLOUD AUTOMATION",
      status: "Completed",
      highlight: "استقرار سلاسل الإمداد"
    },
    transformation: {
      title: "من المراقبة اليدوية إلى تحليل استباقي مؤتمت",
      description: "استخدام الأتمتة لتحويل معالجة البيانات اليومية إلى نظام يقيم المخاطر ويوجّه التنبيهات في الوقت الفعلي.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "معالجة بيانات مستهلكة للوقت",
        subtitle: "تأخر في اتخاذ القرارات المرتبطة بالمخزون",
        points: [
          "جهد يدوي كبير في تحديث ومراجعة بيانات المخزون",
          "غياب رؤية واضحة حول أداء ومخاطر الموردين",
          "تأخر الاستجابة للحالات الحرجة التي تتطلب تدخلاً سريعاً"
        ]
      },
      after: {
        badge: "الحل المطبّق • SOLUTION",
        title: "نظام أتمتة مدعوم بالتحليل",
        subtitle: "معالجة فورية وتنبيهات استباقية",
        points: [
          "تدفق بيانات مؤتمت لمعالجة سجلات المخزون بدقة",
          "نظام تقييم (Risk Scoring) لمتابعة استقرار الموردين",
          "تنبيهات فورية لضمان الاستجابة السريعة للمخاطر المحتملة"
        ],
        footer: "حل ذكي يعزز من كفاءة إدارة المخزون ويحد من انقطاعات سلاسل الإمداد"
      }
    },
    ctaWhatsAppMessage: "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن حلول أتمتة المخزون وتقييم الموردين وإمكانية تنفيذ حل مشابه."
  },

  it: {
    id: "it",
    title: "مساعد دعم تقني لتقليل العبء التشغيلي",
    subtitle: "وكيل ذكاء اصطناعي لرفع كفاءة تلبية طلبات الدعم الفني وتسريع استجابة فرق تقنية المعلومات.",
    category: "Automation & Business Solutions",
    categoryKey: "Automation-BussinessSolution",
    featured: false,
    cardImage: "assets/images/ITsupport.jpg",
    cardImageAlt: "الوكيل الذكي لدعم تقنية المعلومات",
    tags: ["Copilot Studio", "Power Automate", "SharePoint", "Power BI"],
    description: "تعاني فرق تقنية المعلومات من تراكم الطلبات الروتينية التي تستهلك وقتهم. يقدم الوكيل الذكي حلاً تفاعلياً يعالج الطلبات الشائعة تلقائياً، يوجّه التذاكر بشكل صحيح، ويوفر لوحات بيانات تحليلية لتحسين مستوى الخدمة داخل المؤسسة.",
    heroImage: "assets/images/ITsupport.jpg",
    heroImageAlt: "Intelligent IT Support Agent",
    liveUrl: "",
    demoVideo: "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790352429/ItSupport.mp4",
    businessChallenge: "استهلاك وقت فرق الدعم الفني في معالجة طلبات متكررة، مما يؤخر حل المشكلات المعقدة.",
    businessOutcome: "تقليل وقت معالجة التذاكر، تحسين رضا الموظفين عبر الاستجابة الفورية، وزيادة كفاءة فريق الدعم.",
    metaTelemetry: {
      label: "AI AGENT",
      status: "Completed",
      highlight: "تسريع الاستجابة للطلبات"
    },
    transformation: {
      title: "من مركز دعم مثقل إلى خدمة تفاعلية وذاتية",
      description: "تخفيف العبء عن فرق الدعم عبر أتمتة المهام اليومية وتوفير قناة تواصل فعالة ومتاحة دائماً.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "إدارة طلبات تقليدية",
        subtitle: "تراكم التذاكر والمهام المتكررة",
        points: [
          "الاعتماد على التدخل البشري لإنشاء وتصنيف تذاكر الدعم",
          "إهدار الوقت في معالجة طلبات روتينية قابلة للأتمتة",
          "غياب مؤشرات واضحة لقياس أداء فرق الدعم وسرعة الاستجابة"
        ]
      },
      after: {
        badge: "الحل المطبّق • SOLUTION",
        title: "وكيل دعم استباقي",
        subtitle: "معالجة آلية وتوجيه ذكي للتذاكر",
        points: [
          "واجهة محادثة ذكية تمكّن الموظفين من تقديم الطلبات بسهولة",
          "ربط الطلبات بمسارات عمل مؤتمتة لمعالجة أسرع",
          "لوحات بيانات لمراقبة مستوى الخدمة وتحديد مجالات التحسين"
        ],
        footer: "رفع إنتاجية فريق التقنية عبر أتمتة المهام التشغيلية اليومية"
      }
    },
    ctaWhatsAppMessage: "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن حلول الوكيل الذكي للدعم الفني وإمكانية تنفيذ حل مشابه."
  },

  focuszone: {
    id: "focuszone",
    title: "تحسين مخرجات التعلم عبر بيئة دراسية مركزة",
    subtitle: "منصة تعليمية ذكية للحد من التشتت، قياس تطور المهارات بدقة، وتخصيص مسارات التعلم.",
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
    cardImage: "assets/images/ultra_premium_16_9_cinematic_project_showcase_thumbnail_for_focuszone_an_aicard.png",
    cardImageAlt: "FOCUSZONE — منظومة التعلّم الذكية",
    description: "يواجه المتعلمون تحديات في الحفاظ على التركيز وقياس العائد الفعلي من التعلم. تعالج هذه المنصة المشكلة عبر توفير بيئة خالية من المشتتات، وتقييمات مستمرة تعتمد على الأداء الفعلي، مما يضمن تطوير مهارات حقيقية قابلة للقياس تدعم المسار المهني.",
    heroImage: "assets/images/ultra_premium_16_9_cinematic_website_hero_key_visual_for_focuszone_hero.png",
    heroImageAlt: "FocusZone AI Learning Platform",
    liveUrl: "",
    demoVideo: "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790384011/Focuszone.mp4",
    businessChallenge: "ضعف العائد من برامج التعلم بسبب التشتت المستمر والافتقار لأدوات دقيقة لقياس تطور مهارات المتعلمين.",
    businessOutcome: "زيادة فعالية التحصيل العلمي، وتحسين القدرة على تتبع وتقييم المهارات المكتسبة لبناء مسارات تطور واضحة.",
    metaTelemetry: {
      label: "AI LEARNING ECOSYSTEM",
      status: "Completed",
      highlight: "قياس حقيقي لتطور المهارات"
    },
    transformation: {
      title: "من تعلم مشتت إلى بيئة تركز على النتائج",
      description: "تحويل تجربة التعلم من استهلاك غير موجه للمحتوى إلى مسار منظم يقيس الأداء ويعزز التركيز.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "تجربة تعلم غير منظمة",
        subtitle: "صعوبة قياس الأثر والافتقار للتركيز",
        points: [
          "تعدد المشتتات الرقمية التي تعوق التحصيل الفعال",
          "صعوبة الحصول على مساعدة فورية وموثوقة أثناء الدراسة",
          "الاعتماد على تقييمات عامة لا تعكس التطور الحقيقي للمهارات"
        ]
      },
      after: {
        badge: "الحل المطبّق • SOLUTION",
        title: "منظومة تعلم موجهة ومقاسة",
        subtitle: "بيئة معزولة وتقييمات مبنية على المهارات",
        points: [
          "أدوات لحجب المشتتات لضمان أقصى درجات التركيز (Focus Mode)",
          "مساعد ذكي يعزز الفهم ويجيب على الاستفسارات في سياق المادة",
          "نظام تقييم ديناميكي يربط الأداء بتطور المهارات المهنية"
        ],
        footer: "بيئة تعلم تدعم تحقيق نتائج ملموسة وتطوراً مستمراً"
      }
    },
    ctaWhatsAppMessage: "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن منظومة FocusZone التعليمية الذكية وإمكانية تنفيذ حل مشابه."
  },

  clinicms: {
    id: "clinicms",
    title: "إدارة متكاملة لرفع كفاءة العيادات وتجربة المرضى",
    subtitle: "نظام مركزي لتنظيم المواعيد، حماية السجلات الطبية، وتحسين العمليات اليومية في المرافق الصحية.",
    categoryKey: "web-development",
    featured: true,
    cardImage: "assets/images/ClinicManagmentSystem.jpg",
    cardImageAlt: "Clinic Management System",
    category: "Web Development",
    tags: [
      ".NET 8",
      "ASP.NET Core MVC",
      "Entity Framework Core",
      "ASP.NET Identity",
      "AutoMapper",
      "SQL Server"
    ],
    description: "يتسبب تشتت بيانات المرضى وسجلاتهم في ضعف الكفاءة التشغيلية للعيادات. يقدم هذا النظام بيئة موحدة تضمن تنظيم المواعيد بدقة، وتأمين السجلات الصحية، وتقديم واجهات مخصصة لكل من الأطباء والإدارة لتيسير سير العمل اليومي.",
    heroImage: "assets/images/ClinicManagmentSystem.jpg",
    heroImageAlt: "Clinic Management System UI",
    liveUrl: "",
    demoVideo: "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790352050/Clinic.mp4",
    businessChallenge: "فقدان الوقت والجهد في إدارة سجلات مبعثرة ومواعيد متعارضة، مما يؤثر على جودة الخدمة المقدمة للمرضى.",
    businessOutcome: "تحسين تنظيم سير العمل داخل العيادة، ضمان أمان البيانات، وتقديم تجربة سلسة تزيد من رضا المرضى.",
    metaTelemetry: {
      label: "CLINIC MANAGEMENT PLATFORM",
      status: "Completed",
      highlight: "تنظيم مركزي لعمليات العيادة"
    },
    transformation: {
      title: "من إدارة عشوائية إلى مركز طبي عالي التنظيم",
      description: "تحويل المهام الورقية والمبعثرة إلى منظومة رقمية تحمي البيانات وتسرع الوصول للمعلومات.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "عمليات تشغيلية غير متصلة",
        subtitle: "تداخل المواعيد وصعوبة إدارة الملفات",
        points: [
          "تعارض مستمر في جدولة المواعيد الخاصة بالأطباء",
          "صعوبة في تتبع واسترجاع التاريخ الطبي للمرضى",
          "مخاطر متعلقة بخصوصية البيانات لغياب ضوابط الصلاحيات"
        ]
      },
      after: {
        badge: "الحل المطبّق • SOLUTION",
        title: "إدارة شاملة ومؤمنة",
        subtitle: "تزامن كامل للبيانات وتخصيص الصلاحيات",
        points: [
          "توحيد إدارة المواعيد وملفات المرضى لمنع التعارض",
          "تأمين الوصول للمعلومات عبر نظام إدارة صلاحيات متقدم (RBAC)",
          "واجهات مستقلة تخدم الإدارة، الأطباء، والمرضى بكفاءة"
        ],
        footer: "حل تقني يحسن جودة الرعاية عبر تبسيط وتنظيم الإدارة الطبية"
      }
    },
    ctaWhatsAppMessage: "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن نظام إدارة العيادات وإمكانية تنفيذ حل مشابه."
  },

  watchify: {
    id: "watchify",
    title: "تعزيز التفاعل وتخصيص تجربة اكتشاف المحتوى",
    subtitle: "منصة ذكية تزيد من معدلات التفاعل عبر تقديم توصيات محتوى دقيقة تعتمد على فهم سياق المستخدم.",
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
    description: "يعاني المستخدمون من صعوبة العثور على محتوى يناسب تفضيلاتهم الدقيقة، مما يقلل من وقت بقائهم في المنصة. تعالج هذه المنصة التحدي بتقديم توصيات ذكية تعتمد على البحث الدلالي، لضمان تجربة شخصية تزيد من التفاعل ومعدلات الاحتفاظ بالمستخدمين.",
    heroImage: "assets/images/Watchify.png",
    heroImageAlt: "Watchify intelligent streaming platform interface",
    liveUrl: "",
    demoVideo: "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790353391/Watchify.mp4",
    businessChallenge: "انخفاض تفاعل المستخدمين بسبب الاعتماد على طرق بحث تقليدية لا تفهم السياق أو التفضيلات المعقدة.",
    businessOutcome: "زيادة معدلات اكتشاف المحتوى، تحسين تجربة المستخدم، ورفع احتمالية تحويلهم لمشتركين مدفوعين (Premium).",
    metaTelemetry: {
      label: "AI RECOMMENDATION PIPELINE",
      status: "Completed",
      highlight: "زيادة التفاعل عبر التخصيص"
    },
    transformation: {
      title: "من بحث جامد إلى استكشاف تفاعلي مخصص",
      description: "استخدام تقنيات التوصية الذكية لتحويل عملية البحث إلى تجربة سلسة تفهم احتياجات المستخدم بدقة.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "اكتشاف محتوى محدود الكفاءة",
        subtitle: "الاعتماد المفرط على الفلاتر التقليدية",
        points: [
          "نتائج بحث غير دقيقة تعتمد فقط على الكلمات المفتاحية",
          "صعوبة تلبية رغبات المستخدمين المبنية على سياق مركب",
          "تشتت المستخدم بين إدارة مفضلاته وسجل المشاهدات"
        ]
      },
      after: {
        badge: "الحل المطبّق • SOLUTION",
        title: "محرك توصيات يفهم السياق",
        subtitle: "توصيات دقيقة وتجربة مستخدم مركزية",
        points: [
          "تحليل لغة المستخدم الطبيعية لتقديم اقتراحات محتوى ملائمة",
          "ترتيب النتائج بذكاء لضمان ظهور أفضل الخيارات أولاً",
          "تجربة موحدة تجمع قوائم المشاهدة والاشتراكات في مكان واحد"
        ],
        footer: "رفع قيمة المنصة من خلال توفير تجربة مشاهدة شخصية ومتكاملة"
      }
    },
    ctaWhatsAppMessage: "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن منصات المحتوى والتوصيات الذكية وإمكانية تنفيذ حل مشابه."
  },

  freshcart: {
    id: "freshcart",
    title: "تطوير تجارة إلكترونية عالية الأداء لزيادة المبيعات",
    subtitle: "منصة تسوق محسنة لسرعة التحميل، وتدعم مرونة الدفع لضمان أعلى معدلات التحويل وتقليل التخلي عن السلة.",
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
    description: "تتأثر معدلات المبيعات سلباً ببطء أداء المتاجر الإلكترونية وتجارب الدفع المعقدة. توفر هذه المنصة حلاً سريع الاستجابة يدعم الظهور في محركات البحث (SEO) ويقدم خيارات دفع مرنة، مما يقلل من الاحتكاك أثناء رحلة العميل ويزيد من إتمام العمليات الشرائية.",
    heroImage: "assets/images/Ecommerce.png",
    heroImageAlt: "FreshCart E-Commerce Platform UI",
    cardImage: "assets/images/Ecommerce.png",
    cardImageAlt: "FreshCart E-Commerce Platform UI",
    liveUrl: "",
    demoVideo: "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790383891/Ecommerce.mp4",
    featured: false,
    businessChallenge: "فقدان العملاء المحتملين بسبب بطء تحميل الصفحات وتجربة المستخدم غير المتسقة في المتاجر الإلكترونية.",
    businessOutcome: "تحسين معدلات التحويل (Conversion Rates)، زيادة المبيعات، وتعزيز الظهور في محركات البحث لاكتساب عملاء جدد.",
    metaTelemetry: {
      label: "E-COMMERCE PLATFORM",
      status: "Completed",
      highlight: "تحسين الأداء لزيادة المبيعات"
    },
    transformation: {
      title: "من متجر بطيء إلى منصة بيع احترافية",
      description: "تصميم تجربة تسوق سلسة تعالج المعوقات التقنية لزيادة ثقة العملاء وإتمام الشراء.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "تجربة تسوق تعوق المبيعات",
        subtitle: "بطء في الأداء ومحدودية في الخيارات",
        points: [
          "أداء بطيء يؤثر على تصنيف المتجر في محركات البحث",
          "تحديث يدوي لبيانات السلة يربك رحلة العميل",
          "خيارات دفع محدودة تزيد من نسبة التخلي عن سلة التسوق",
          "افتقار لدعم حقيقي وسلس للغات المتعددة"
        ]
      },
      after: {
        badge: "الحل المطبّق • SOLUTION",
        title: "متجر سريع الاستجابة ومرن",
        subtitle: "رحلة شراء سلسة تزيد من المبيعات",
        points: [
          "تحميل فوري للصفحات (SSR) لدعم الأداء وتحسين الـ SEO",
          "تزامن تلقائي للسلة لضمان استمرارية تجربة العميل",
          "توفير خيارات دفع متعددة تناسب تفضيلات المستهلكين",
          "واجهة ثنائية اللغة متوافقة تماماً مع الاتجاهين"
        ],
        footer: "منصة تجارة إلكترونية مصممة خصيصاً لتعزيز النمو وتقليل فاقد المبيعات"
      }
    },
    ctaWhatsAppMessage: "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن حلول المتاجر الإلكترونية عالية الأداء وإمكانية تنفيذ حل مشابه."
  },

  hospital: {
    id: "hospital",
    title: "رقمنة خدمات المستشفيات لتحسين جودة الرعاية",
    subtitle: "تطبيق يربط رحلة المريض بالعمليات الطبية لتبسيط الحجوزات وضمان دقة المعلومات الصحية.",
    category: "Automation & Business Solutions",
    categoryKey: "Automation-BussinessSolution",
    featured: false,
    cardImage: "assets/images/HospitalManagment.jpg",
    cardImageAlt: "Hospital Appointment & Prescription Management App",
    tags: ["Power Apps"],
    description: "يؤدي انفصال أنظمة الحجز عن السجلات الطبية إلى تعقيد تجربة المريض وتشتت جهود الفريق الطبي. يعالج هذا التطبيق المشكلة عبر توحيد مسار الخدمة من لحظة حجز الموعد وحتى إصدار الوصفة الطبية، مما يعزز الكفاءة ويرفع جودة الرعاية المقدمة.",
    heroImage: "assets/images/HospitalManagment.jpg",
    heroImageAlt: "Hospital Appointment & Prescription Management Application",
    liveUrl: "",
    demoVideo: "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790351761/power_apps_studio_hospital_application_editing_and_3_more_pages.mp4",
    businessChallenge: "إدارة الحجوزات والسجلات الطبية عبر قنوات متفرقة يسبب ارتباكاً ويقلل من فعالية المتابعة الصحية.",
    businessOutcome: "تحسين تجربة المريض بشكل ملموس، تقليل الأخطاء الإدارية، ورفع إنتاجية الكادر الطبي.",
    metaTelemetry: {
      label: "HEALTHCARE BUSINESS APPLICATION",
      status: "Completed",
      highlight: "توحيد مسار الرعاية الصحية"
    },
    transformation: {
      title: "من خدمات متفرقة إلى رحلة علاجية مترابطة",
      description: "دمج خطوات الحجز، المتابعة، والتشخيص في نظام واحد يضمن سلاسة الخدمات وراحة المرضى.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "رحلة مريض مجزأة",
        subtitle: "صعوبة في ربط المواعيد بالتشخيص",
        points: [
          "تعدد خطوات الحجز وعدم وضوح المواعيد المتاحة",
          "فصل بين عملية تسجيل الزيارة وكتابة الوصفة الطبية",
          "صعوبة تتبع الأطباء لحالة مرضاهم بشكل مركزي"
        ]
      },
      after: {
        badge: "الحل المطبّق • SOLUTION",
        title: "مسار رقمي متكامل",
        subtitle: "إدارة شاملة لرحلة المريض من البداية للنهاية",
        points: [
          "تيسير الحجز وربطه مباشرة بجداول الأطباء",
          "توفير واجهة موحدة للطبيب لتشخيص ومتابعة الحالات",
          "توثيق وإصدار الوصفات الطبية بشكل رقمي دقيق"
        ],
        footer: "نظام يضمن تقديم رعاية صحية منظمة، سريعة، وذات جودة عالية"
      }
    },
    ctaWhatsAppMessage: "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن حلول إدارة المستشفيات وإمكانية تنفيذ حل مشابه."
  },

  clinicbot: {
    id: "clinicbot",
    title: "أتمتة الحجوزات والتواصل لتقليل غياب المرضى",
    subtitle: "مساعد ذكي يسهل عملية الحجز ويرسل التذكيرات تلقائياً لضمان التزام المرضى بالمواعيد وتخفيف العبء الإداري.",
    category: "Automation & Business Solutions",
    categoryKey: "Automation-BussinessSolution",
    featured: false,
    cardImage: "assets/images/ClinicAssitant.jpg",
    cardImageAlt: "Clinic Telegram AI Booking Bot",
    tags: ["n8n", "AI Agent", "Telegram Bot", "Automation"],
    description: "يتطلب إدارة حجوزات العيادات متابعة بشرية مستمرة، مما يزيد من احتمالية الأخطاء وغياب المرضى. يحول هذا البوت الذكي منصات المراسلة إلى قنوات فعالة للحجز التلقائي وإرسال التذكيرات، مما يضمن تنظيم الجدول الزمني وتقليل الجهد التشغيلي.",
    heroImage: "assets/images/ClinicAssitant.jpg",
    heroImageAlt: "Clinic Telegram AI Booking Bot",
    liveUrl: "",
    demoVideo: "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790352075/clinicreservation.mp4",
    businessChallenge: "استهلاك وقت موظفي الاستقبال في تنظيم المواعيد، وارتفاع معدلات التخلف عن الحضور لغياب التذكيرات المنتظمة.",
    businessOutcome: "خفض معدلات الغياب عن المواعيد، تحسين استغلال وقت الأطباء، وتقليل العبء الإداري على الموظفين.",
    metaTelemetry: {
      label: "AI AUTOMATION WORKFLOW",
      status: "Completed",
      highlight: "تقليل معدلات الغياب عن المواعيد"
    },
    transformation: {
      title: "من التنسيق اليدوي إلى حجز وتواصل مؤتمت",
      description: "استخدام قنوات التواصل الشائعة لتوفير خدمة حجز فورية ومتابعة دقيقة دون تدخل بشري.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "إدارة مواعيد تعتمد على العنصر البشري",
        subtitle: "تعارض محتمل وغياب المتابعة",
        points: [
          "تخصيص وقت طويل لتسجيل البيانات وتأكيد الحجوزات يدوياً",
          "مخاطر تداخل المواعيد عند ضغط العمل",
          "عدم وجود نظام فعال لتذكير المرضى بمواعيدهم"
        ]
      },
      after: {
        badge: "الحل المطبّق • SOLUTION",
        title: "مساعد حجز ذكي",
        subtitle: "إدارة جداول دقيقة وتذكيرات فورية",
        points: [
          "تنفيذ عمليات الحجز بالكامل عبر المحادثة وبشكل فوري",
          "مزامنة تلقائية تمنع أي تعارض في جداول الأطباء",
          "إرسال تنبيهات استباقية لضمان حضور المرضى في الوقت المحدد"
        ],
        footer: "أتمتة ذكية تضمن انتظام العمل في العيادات وتحسين راحة المرضى"
      }
    },
    ctaWhatsAppMessage: "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن حلول أتمتة حجز المواعيد عبر المحادثة وإمكانية تنفيذ حل مشابه."
  },

  ainsgroup: {
    id: "ainsgroup",
    title: "بناء واجهة مؤسسية احترافية لجذب فرص الأعمال",
    subtitle: "موقع إلكتروني يعكس حجم حلول الشركة التقنية ويسهل مسارات التواصل مع العملاء المحتملين.",
    categoryKey: "wordpress",
    category: "WordPress",
    featured: true,
    cardImage: "assets/images/Ansigroup.jpg",
    cardImageAlt: "AINS Group Corporate Website",
    tags: ["WordPress", "Elementor", "تصميم مؤسسي", "SEO"],
    description: "يعد الحضور الرقمي القوي أساساً لبناء الثقة مع الشركات وجذب الشراكات. يبرز هذا الموقع الهوية المؤسسية ويقدم خدمات الشركة في قطاعات حيوية بشكل منظم وواضح، مما يعزز المصداقية ويدعم جهود المبيعات عبر قنوات تواصل مباشرة.",
    heroImage: "assets/images/Ansigroup.jpg",
    heroImageAlt: "AINS Group Corporate Website UI",
    liveUrl: "https://ains-group.com/",
    demoVideo: "https://res.cloudinary.com/hhfm3zpe/video/upload/v1790384426/Ansigroup.mp4",
    businessChallenge: "عدم وجود واجهة رقمية تعكس تنوع وثقل الخدمات المقدمة، مما يضعف القدرة على استقطاب عملاء مؤسسيين جدد.",
    businessOutcome: "تعزيز المصداقية التجارية، تحسين الظهور أمام العملاء المستهدفين، وزيادة فرص التواصل والشراكات.",
    metaTelemetry: {
      label: "CORPORATE WEBSITE",
      status: "Live in Production",
      highlight: "تعزيز الثقة وجذب الفرص"
    },
    transformation: {
      title: "من حضور محدود إلى منصة استقطاب فعالة",
      description: "تصميم تجربة مستخدم تبرز قيمة الأعمال وتسهل على صانعي القرار فهم الحلول والتواصل مع الشركة.",
      before: {
        badge: "الوضع السابق • BEFORE",
        title: "حضور رقمي غير مؤثر",
        subtitle: "صعوبة في إبراز الخدمات المؤسسية",
        points: [
          "غياب منصة موحدة تعرض إمكانيات الشركة وحلولها",
          "صعوبة تنقل الزوار للتعرف على قطاعات العمل المختلفة",
          "الافتقار لقنوات واضحة لتحفيز الزوار على بدء النقاش"
        ]
      },
      after: {
        badge: "الحل المطبّق • SOLUTION",
        title: "واجهة أعمال احترافية",
        subtitle: "تنظيم للمحتوى يعزز مسار العميل المستهدف",
        points: [
          "هيكلة واضحة تبرز خبرات الشركة في مختلف القطاعات التقنية",
          "تصميم مؤسسي يتماشى مع توقعات العملاء في قطاع الأعمال",
          "توفير نماذج تواصل مبسطة لتوليد فرص بيعية مؤهلة"
        ],
        footer: "حضور رقمي يرسخ مكانة الشركة ويدعم أهدافها في النمو المؤسسي"
      }
    },
    ctaWhatsAppMessage: "مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن حلول بناء المواقع المؤسسية وإمكانية تنفيذ حل مشابه."
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
        `مرحبًا فريق فرصكم، أرغب في معرفة المزيد عن تنفيذ حل مشابه لمشروع ${project.title}.`,
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
