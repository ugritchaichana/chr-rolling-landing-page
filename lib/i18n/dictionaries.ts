export type Locale = "en" | "th";

export interface Dictionary {
  nav: {
    home: string;
    capabilities: string;
    process: string;
    industries: string;
    about: string;
    references: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    headlineControl: string;
    headlineIndustrial: string;
    subtitle: string;
    highlights: string[];
    ctaPrimary: string;
    ctaSecondary: string;
    yearsValue: string;
    yearsLabel: string;
    stats: {
      experience: { value: string; label: string };
      projects: { value: string; label: string };
      clients: { value: string; label: string };
    };
  };
  trustBar: {
    items: { value: string; label: string }[];
  };
  capabilities: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: {
      title: string;
      description: string;
      image: string;
      imageAlt: string;
    }[];
    cta: string;
  };
  process: {
    eyebrow: string;
    heading: string;
    subheading: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  industries: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: string[];
  };
  about: {
    eyebrow: string;
    heading: string;
    description: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  certifications: {
    heading: string;
    items: {
      code: string;
      label: string;
    }[];
  };
  specs: {
    heading: string;
    subheading: string;
    tableHeaders: { item: string; value: string };
    rows: { label: string; value: string }[];
  };
  inlineCta: {
    heading: string;
    subheading: string;
    cta: string;
  };
  references: {
    heading: string;
    subheading: string;
    filterAll: string;
    filterB2G: string;
    filterB2B: string;
    segmentLabelB2G: string;
    segmentLabelB2B: string;
    yearLabel: string;
    projects: {
      name: string;
      segment: "b2g" | "b2b";
      work: string;
      year: string;
    }[];
  };
  rfqForm: {
    eyebrow: string;
    heading: string;
    description: string;
    contactPhone: string;
    contactPhoneLabel: string;
    contactEmail: string;
    contactEmailLabel: string;
    contactLocation: string;
    contactLocationLabel: string;
    fields: {
      name: { label: string; placeholder: string };
      company: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      service: {
        label: string;
        placeholder: string;
        options: string[];
      };
      details: { label: string; placeholder: string };
      file: { label: string };
    };
    submit: string;
    submitting: string;
    privacy: string;
    success: {
      heading: string;
      message: string;
      another: string;
    };
    error: string;
  };
  footer: {
    description: string;
    capabilitiesHeading: string;
    capabilitiesLinks: string[];
    companyHeading: string;
    companyLinks: { label: string; href: string }[];
    contactHeading: string;
    contactLinks: { label: string; href: string }[];
    copyright: string;
    tagline: string;
  };
  customRollingTools: {
    eyebrow: string;
    heading: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  machineConstruction: {
    eyebrow: string;
    heading: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  maintenanceOverhaul: {
    eyebrow: string;
    heading: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  businessOffice: {
    eyebrow: string;
    heading: string;
    description1: string;
    description2: string;
    contactInfo: {
      address: string;
      phone: string;
      email: string;
      addressValue: string;
      phoneValue: string;
      emailValue: string;
    };
    googleMap: string;
  };
}

export const en: Dictionary = {
  nav: {
    home: "Home",
    capabilities: "Capabilities",
    process: "Process",
    industries: "Industries",
    about: "About",
    references: "Projects",
    contact: "Contact",
    cta: "Request a Quote",
  },
  hero: {
    badge: "Custom Roll Forming & Tooling Experts",
    headlineControl: "Custom Roll Forming Tooling & Tube Mill Rolls",
    headlineIndustrial: "Precision rolling tools built to your drawings",
    subtitle:
      "Expert engineering, CNC machining, and overhaul services for precision roll forming tooling and tube mill machinery. Built to your exact drawings and tolerances, from a single custom roller to complete production lines.",
    highlights: [
      "Reverse Engineering & Custom Tooling",
      "Precision CNC Machining & Overhaul",
      "Complete Tube Mills & Roll Forming Lines",
    ],
    ctaPrimary: "Request a Quote",
    ctaSecondary: "Explore Capabilities",
    yearsValue: "25+",
    yearsLabel: "Years of Proven Expertise",
    stats: {
      experience: { value: "15+", label: "Years of Experience" },
      projects: { value: "500+", label: "Projects Delivered" },
      clients: { value: "50+", label: "Government & Private Clients" },
    },
  },
  trustBar: {
    items: [
      { value: "100%", label: "Custom made-to-order" },
      { value: "+/-0.01mm", label: "Machining tolerance" },
      { value: "48h", label: "Quote turnaround" },
      { value: "ISO", label: "Quality processes" },
    ],
  },
  capabilities: {
    eyebrow: "What we do",
    heading: "Engineering capabilities, built around your drawings",
    subheading:
      "Three core services that take your project from <strong>concept</strong> to a <strong>running production line</strong>.",
    items: [
      {
        title: "Custom Rolling Tools",
        description:
          "Precision-machined rollers, dies, and forming tools cut to your profile and material, finished to mirror tolerance for tube and pipe mills.",
        image: "/images/rolling-tools.webp",
        imageAlt:
          "Stacked polished stainless steel custom rolling tools and forming rollers on a workshop pallet",
      },
      {
        title: "Machine Construction",
        description:
          "Complete roll-forming and tube mill machinery built from the ground up -- stands, drives, and tooling integrated into a ready-to-run line.",
        image: "/images/rolling-mill.webp",
        imageAlt:
          "Blue CHP roll-forming machine line with stainless steel rollers under assembly",
      },
      {
        title: "Modification & Overhaul",
        description:
          "Re-machining, refurbishment, and upgrades that restore worn tooling and ageing lines to original spec -- extending the life of your equipment.",
        image: "/images/machined-dies.webp",
        imageAlt:
          "Array of machined steel rolling dies and bearing rings ready for overhaul",
      },
    ],
    cta: "Discuss your project",
  },
  process: {
    eyebrow: "How it works",
    heading: "A clear path from drawing to delivery",
    subheading:
      "A <strong>transparent</strong>, <strong>engineer-led</strong> workflow that keeps procurement teams informed <strong>at every stage</strong>.",
    steps: [
      {
        title: "Submit drawings",
        description:
          "Send blueprints, samples, or a worn part. Our engineers review feasibility and confirm materials.",
      },
      {
        title: "Design & quote",
        description:
          "We reverse-engineer or design from scratch, then return a detailed quote within 48 hours.",
      },
      {
        title: "CNC manufacturing",
        description:
          "In-house turning, milling, grinding, and finishing on calibrated CNC machinery to tight tolerance.",
      },
      {
        title: "Inspect & deliver",
        description:
          "Every piece is dimensionally inspected and finish-checked before packing and dispatch.",
      },
    ],
  },
  industries: {
    eyebrow: "Industries served",
    heading: "Trusted by manufacturers who form steel every day",
    subheading:
      "Wherever metal is rolled, formed, or shaped, our tooling keeps the <strong>line running</strong>. We supply <strong>OEMs</strong> and production facilities across a broad range of sectors.",
    items: [
      "Steel tube & pipe mills",
      "Roll-forming & profile lines",
      "Stainless steel fabrication",
      "Furniture & frame tubing",
      "Automotive components",
      "Construction & scaffolding",
      "HVAC & ducting",
      "Agricultural equipment",
    ],
  },
  about: {
    eyebrow: "About CHP",
    heading: "CHP Rolling Engineering Limited Partnership",
    description:
      "We are a specialist rolling engineering workshop dedicated to <strong>custom</strong>, <strong>made-to-order</strong> solutions. Our team combines decades of hands-on forming experience with <strong>modern CNC</strong> manufacturing to build tooling and machinery that performs <strong>exactly as designed</strong>.",
    points: [
      {
        title: "Engineer-led quality",
        description:
          "Documented inspection on every part, with materials and tolerances verified to your specification.",
      },
      {
        title: "Precision finishing",
        description:
          "Mirror-finished, dimensionally accurate tooling that runs cleaner and lasts longer on the line.",
      },
      {
        title: "Partnership approach",
        description:
          "We work directly with your procurement and engineering teams from first drawing to final delivery.",
      },
    ],
  },
  certifications: {
    heading: "Standards & Certifications",
    items: [
      { code: "TIS / TISI", label: "Thai Industrial Standards Institute" },
      { code: "ISO 9001:2015", label: "Quality Management System" },
      { code: "ISO 14001:2015", label: "Environmental Management System" },
    ],
  },
  specs: {
    heading: "Technical Specifications",
    subheading:
      "Technical data for industrial rollers and machine parts. Every piece is quality inspected to standards.",
    tableHeaders: { item: "Specification", value: "Value / Range" },
    rows: [
      { label: "Diameter", value: "50 - 1,200 mm" },
      { label: "Maximum Length", value: "6,000 mm" },
      { label: "Materials", value: "SCM440, S45C, SUS304, SUS316" },
      { label: "Hardness", value: "HRC 45-62" },
      { label: "Surface Roughness (Ra)", value: "0.4 - 3.2 um" },
      { label: "Tolerance", value: "+/- 0.01 mm" },
      { label: "Production Capacity", value: "500+ pcs/month" },
      { label: "Lead Time", value: "7-30 business days" },
    ],
  },
  inlineCta: {
    heading: "Ready to Start Your Project?",
    subheading:
      "Our engineering team is ready to consult and provide a quote within 24 hours.",
    cta: "Get a Quote",
  },
  references: {
    heading: "Project References",
    subheading: "Trusted by leading government and private organizations.",
    filterAll: "All",
    filterB2G: "Government (B2G)",
    filterB2B: "Private Sector (B2B)",
    segmentLabelB2G: "Government",
    segmentLabelB2B: "Private",
    yearLabel: "Project Year",
    projects: [
      {
        name: "Electricity Generating Authority of Thailand (EGAT)",
        segment: "b2g",
        work: "Coal conveyor belt rollers",
        year: "2024",
      },
      {
        name: "Provincial Waterworks Authority",
        segment: "b2g",
        work: "Stainless steel SUS316 pump shafts",
        year: "2023",
      },
      {
        name: "Siam Cement Group (SCG)",
        segment: "b2b",
        work: "Cement kiln rollers",
        year: "2024",
      },
      {
        name: "Thai Union Group PCL.",
        segment: "b2b",
        work: "Stainless steel SUS304 food production line parts",
        year: "2022",
      },
      {
        name: "Royal Irrigation Department",
        segment: "b2g",
        work: "Sluice gate shafts and gears",
        year: "2023",
      },
      {
        name: "Sahaviriya Steel Industries PCL.",
        segment: "b2b",
        work: "SCM440 steel rolling rollers",
        year: "2024",
      },
    ],
  },
  rfqForm: {
    eyebrow: "Request a quote",
    heading: "Send us your drawings -- get a quote in 48 hours",
    description:
      "Share your blueprints, specifications, or a sample part. Our engineering team will review your requirements and respond with a detailed, made-to-order proposal.",
    contactPhoneLabel: "Call us",
    contactPhone: "088-229-9088",
    contactEmailLabel: "Email",
    contactEmail: "cholla_chat@hotmail.com",
    contactLocationLabel: "Workshop",
    contactLocation: "Samut Prakan, Thailand",
    fields: {
      name: { label: "Full name", placeholder: "Jane Engineer" },
      company: { label: "Company", placeholder: "Acme Steel Co." },
      email: { label: "Work email", placeholder: "jane@acmesteel.com" },
      phone: { label: "Phone", placeholder: "+66 ..." },
      service: {
        label: "Service needed",
        placeholder: "Select a service",
        options: [
          "Custom Rolling Tools",
          "Machine Construction",
          "Modification & Overhaul",
          "Other / Not sure",
        ],
      },
      details: {
        label: "Project details",
        placeholder:
          "Describe the part, quantity, material, dimensions, and any reference drawings.",
      },
      file: {
        label: "Attach blueprints or drawings (PDF, DWG, STEP)",
      },
    },
    submit: "Submit request",
    submitting: "Submitting...",
    privacy:
      "We respect your confidentiality. Drawings are used only to prepare your quote.",
    success: {
      heading: "Thank you",
      message:
        "Your request has been received. Our engineering team will get back to you within two business days.",
      another: "Submit another request",
    },
    error: "An error occurred. Please try again.",
  },
  footer: {
    description:
      "CHP Rolling Engineering Limited Partnership — 100% custom, made-to-order rolling tools, machinery, and overhaul services for steel forming lines.",
    capabilitiesHeading: "Capabilities",
    capabilitiesLinks: [
      "Custom Rolling Tools",
      "Machine Construction",
      "Modification & Overhaul",
    ],
    companyHeading: "Company",
    companyLinks: [
      { label: "About CHP", href: "#about" },
      { label: "Process", href: "#process" },
      { label: "Industries", href: "#industries" },
    ],
    contactHeading: "Contact",
    contactLinks: [
      { label: "Request a Quote", href: "#rfq" },
      { label: "cholla_chat@hotmail.com", href: "mailto:cholla_chat@hotmail.com" },
      { label: "088-229-9088", href: "tel:+66882299088" },
    ],
    copyright:
      "CHP Rolling Engineering Limited Partnership. All rights reserved.",
    tagline: "Made-to-order industrial solutions",
  },
  customRollingTools: {
    eyebrow: "OFFER 1",
    heading: "Custom-Made Pipe & Tube Roll Forming Tooling",
    description: "We deliver engineered solutions to solve problems caused by off-spec imported rollers and machinery limitations. By utilizing high-quality Japanese <strong>JIS SKD11</strong> Tool Steel, processed with high-pressure <strong>hardening</strong> and high-precision <strong>CNC grinding</strong>, we achieve the <strong>tightest tolerances</strong>. This guarantees extended tooling lifespan and long-term reduction in <strong>maintenance costs</strong>.",
    items: [
      {
        title: "Pipe Forming Roller",
        description: "Design, CNC turn, and form rollers for round and square tubes. We maintain exact profile geometries with micron-level precision to ensure smooth forming of steel and stainless steel, minimizing surface scratches."
      },
      {
        title: "Roll Forming Dies",
        description: "Support complex structural geometries. High-resolution surface grinding ensures stable and consistent cross-sectional dimensions across your entire production line, virtually eliminating dimensional deviations."
      },
      {
        title: "Multi-Stage Rollers",
        description: "We calculate and engineer comprehensive rolling stages designed to integrate seamlessly with your existing machinery. This systematic approach ensures optimal metal forming without deformation."
      }
    ]
  },
  machineConstruction: {
    eyebrow: "OFFER 2",
    heading: "Hybrid Tube Mill Machinery: 2, 3, and 4-Roll Systems",
    description: "Elevate your heavy industry production efficiency with our <strong>Hybrid Squeeze Stand</strong> technology. Engineered and manufactured to accommodate variable forming directions, it allows seamless switching between <strong>2-Roll, 3-Roll, and 4-Roll</strong> Squeeze Systems within a single structure. This innovation significantly reduces Capital Expenditure (<strong>CapEx</strong>) and maximizes floor space. Built with heavy-duty structural steel, it is custom-ready for integration into <strong>premium tube and pipe</strong> production lines.",
    items: [
      {
        title: "Multi-Configuration Machine Stands",
        description: "Heavy-duty machine stands constructed with thick structural steel. Advanced mechanical design ensures symmetrical roller positioning, guaranteeing perfectly squared and highly accurate pipe dimensions."
      },
      {
        title: "Heavy Duty Gear Transmission",
        description: "High-torque multi-stage gear transmission systems designed to withstand heavy-load compression. Integrates seamlessly with advanced PLC logic controllers for reliable continuous operation."
      },
      {
        title: "Proven Modular Parts",
        description: "Proven in full-scale on-site commissioning. The shaft support, bearings, and shaft axis feature a modular design for easy assembly and disassembly, engineered to handle extreme mechanical stress and torque."
      }
    ]
  },
  maintenanceOverhaul: {
    eyebrow: "OFFER 3",
    heading: "Comprehensive Overhaul & Maintenance for Roll Forming Machinery",
    description: "Minimize risk and financial loss from machinery <strong>downtime</strong> and parts scarcity. Our expert engineering team provides rigorous <strong>on-site</strong> mechanical and hydraulic system diagnostics. We design and manufacture <strong>Custom Parts</strong> to replace worn components. We specialize in maintenance, capability expansion (<strong>Modification</strong>), and complete system restoration (<strong>Overhaul</strong>) for all production lines—including proprietary systems and imported machinery (China, Taiwan, Europe)—restoring them to <strong>peak operational performance</strong>.",
    items: [
      {
        title: "Urgent On-Site Diagnostics",
        description: "Immediate diagnostic services for tolerance deviation. We conduct in-depth analysis of roller shafts and drive systems to precisely and rapidly resolve tube deformation issues."
      },
      {
        title: "Modification & Upgrades",
        description: "Modify and upgrade existing machinery or production lines to accommodate new roller sizes and adjustable clearances, expanding your manufacturing capabilities without the need for new capital equipment."
      },
      {
        title: "Complete System Overhaul",
        description: "Comprehensive dismantling, bearing replacement, and restoration of worn shafts. We re-grind all support stands to completely overhaul your production line, restoring micron-level operational accuracy."
      }
    ]
  },
  businessOffice: {
    eyebrow: "OFFER 4",
    heading: "Business Office & Deep Engineering Coordination Center",
    description1: "Because specialized engineering and <strong>custom-made</strong> manufacturing require <strong>absolute precision</strong>, CHP Rolling Engineering has established a dedicated <strong>Business Office</strong> for seamless coordination with our partners' procurement and engineering teams. This space is designed for intensive meetings, <strong>mechanical drawing</strong> analysis, and meticulous material specification reviews, ensuring <strong>100% alignment</strong> and accuracy before entering actual production.",
    description2: "We are committed to delivering precise engineering solutions that maximize the return on every investment you make.",
    contactInfo: {
      address: "Address",
      phone: "Phone",
      email: "Email",
      addressValue: "790/77 Moo 2, Soi Pracha Uthit 90, Pracha Uthit Rd., Ban Khlong Suan, Phra Samut Chedi, Samut Prakan 10290",
      phoneValue: "088-229-9088",
      emailValue: "cholla_chat@hotmail.com"
    },
    googleMap: "Google Map Navigation"
  }
};

export const th: Dictionary = {
  nav: {
    home: "หน้าแรก",
    capabilities: "บริการ",
    process: "กระบวนการ",
    industries: "อุตสาหกรรม",
    about: "เกี่ยวกับเรา",
    references: "ผลงาน",
    contact: "ติดต่อเรา",
    cta: "ขอใบเสนอราคา",
  },
  hero: {
    badge: "โรงงานผลิตและซ่อมบำรุงลูกรีดอุตสาหกรรม",
    headlineControl:
      "รับผลิตลูกรีดเหล็กและเครื่องจักรขึ้นรูปโลหะ",
    headlineIndustrial:
      "เครื่องมือรีดขึ้นรูปความแม่นยำสูง ผลิตตามแบบของคุณ",
    subtitle:
      "ผู้เชี่ยวชาญด้านการออกแบบ ผลิต กลึง CNC และซ่อมบำรุง (Overhaul) ลูกรีดขึ้นรูปเหล็ก (Roll Forming) และเครื่องรีดท่อ งานคุณภาพสูง พิกัดความเผื่อต่ำ สั่งทำตามแบบ Drawing ของคุณ 100%",
    highlights: [
      "รับถอดแบบและสั่งผลิตลูกรีดตามสเปค (Custom Rollers)",
      "กลึง CNC เจียร และชุบแข็งครบจบในโรงงานเดียว",
      "รับสร้างเครื่องรีดท่อและเครื่องจักรขึ้นรูปโลหะครบวงจร",
    ],
    ctaPrimary: "ขอใบเสนอราคา",
    ctaSecondary: "ดูบริการของเรา",
    yearsValue: "25+",
    yearsLabel: "ปีการันตีความเชี่ยวชาญ",
    stats: {
      experience: { value: "15+", label: "ปีประสบการณ์" },
      projects: { value: "500+", label: "โครงการที่ส่งมอบ" },
      clients: { value: "50+", label: "ลูกค้าภาครัฐและเอกชน" },
    },
  },
  trustBar: {
    items: [
      { value: "100%", label: "ผลิตตามสั่ง 100%" },
      { value: "+/-0.01mm", label: "พิกัดความเผื่อ (Tolerance)" },
      { value: "48h", label: "จัดทำใบเสนอราคาใน" },
      { value: "ISO", label: "มาตรฐานควบคุมคุณภาพ" },
    ],
  },
  capabilities: {
    eyebrow: "บริการของเรา",
    heading: "ศักยภาพทางวิศวกรรม ตอบโจทย์ทุกแบบร่างของคุณ",
    subheading:
      "สามบริการหลักที่นำโครงการของคุณจาก <strong>แนวคิด</strong> สู่ <strong>สายการผลิตจริง</strong>",
    items: [
      {
        title: "ลูกกลิ้งและอุปกรณ์รีดขึ้นรูปตามสั่ง",
        description:
          "ลูกรีด (Rollers) แม่พิมพ์ และเครื่องมือขึ้นรูปที่กลึงด้วยความแม่นยำสูง ตัดตามโปรไฟล์และวัสดุของคุณ ขัดผิวระดับกระจกสำหรับโรงงานผลิตท่อและเหล็กรูปพรรณ",
        image: "/images/rolling-tools.webp",
        imageAlt:
          "เครื่องมือรีดขึ้นรูปสแตนเลสเรียงซ้อนบนพาเลทในโรงงาน",
      },
      {
        title: "สร้างเครื่องจักรรีดขึ้นรูป",
        description:
          "สร้างเครื่องจักรขึ้นรูปและโรงงานผลิตท่อเหล็กแบบครบวงจร ประกอบตั้งแต่แท่นรีด (Stands) ระบบขับเคลื่อน และเครื่องมือ พร้อมเดินสายการผลิต",
        image: "/images/rolling-mill.webp",
        imageAlt:
          "เครื่องจักรขึ้นรูป CHP สีน้ำเงินกำลังประกอบ",
      },
      {
        title: "ซ่อมบำรุงและดัดแปลง (Overhaul)",
        description:
          "งานกลึงซ่อม ปรับปรุง และอัปเกรดเพื่อฟื้นฟูอุปกรณ์ที่สึกหรอและสายการผลิตเก่าให้กลับมาทำงานได้ตามสเปคเดิม",
        image: "/images/machined-dies.webp",
        imageAlt:
          "แม่พิมพ์เหล็กกลึงและแหวนรองรีดเตรียมซ่อมบำรุง",
      },
    ],
    cta: "ปรึกษาโครงการของคุณ",
  },
  process: {
    eyebrow: "กระบวนการทำงาน",
    heading: "เส้นทางชัดเจนจากแบบสู่การส่งมอบ",
    subheading:
      "กระบวนการทำงานที่ <strong>โปร่งใส</strong> นำโดย <strong>วิศวกร</strong> อัปเดตทีมจัดซื้อ <strong>ทุกขั้นตอน</strong>",
    steps: [
      {
        title: "ส่งแบบ",
        description:
          "ส่งแบบพิมพ์เขียว ตัวอย่าง หรือชิ้นงานเก่า วิศวกรตรวจสอบความเป็นไปได้และยืนยันวัสดุ",
      },
      {
        title: "ออกแบบและเสนอราคา",
        description:
          "เราถอดแบบ (Reverse-engineer) หรือออกแบบใหม่ แล้วส่งใบเสนอราคาอย่างละเอียดภายใน 48 ชั่วโมง",
      },
      {
        title: "ผลิตด้วยเครื่อง CNC",
        description:
          "งานกลึง กัด เจียร และเก็บรายละเอียดภายในโรงงาน ด้วยเครื่อง CNC ที่สอบเทียบค่าความเที่ยงตรงสูง",
      },
      {
        title: "ตรวจสอบและส่งมอบ",
        description:
          "ทุกชิ้นงานผ่านการตรวจสอบมิติและผิวสำเร็จก่อนบรรจุภัณฑ์และจัดส่ง",
      },
    ],
  },
  industries: {
    eyebrow: "อุตสาหกรรมที่ให้บริการ",
    heading: "ได้รับความไว้วางใจจากผู้ผลิตที่ขึ้นรูปเหล็กทุกวัน",
    subheading:
      "ไม่ว่าโลหะจะถูกรีดหรือขึ้นรูปด้วยวิธีใด อุปกรณ์ของเราช่วยให้สายการผลิต <strong>เดินเครื่องได้อย่างต่อเนื่อง</strong> เราส่งมอบอุปกรณ์ให้ <strong>OEM</strong> และโรงงานผลิตในหลากหลายอุตสาหกรรม",
    items: [
      "โรงงานผลิตท่อเหล็กและท่อกลม",
      "สายการรีดขึ้นรูปเหล็กรูปพรรณ (Roll-forming)",
      "งานแปรรูปสแตนเลส",
      "ท่อเหล็กสำหรับเฟอร์นิเจอร์และโครงสร้าง",
      "ชิ้นส่วนยานยนต์",
      "อุตสาหกรรมก่อสร้างและนั่งร้าน",
      "ระบบปรับอากาศ (HVAC) และท่อลม",
      "อุปกรณ์การเกษตร",
    ],
  },
  about: {
    eyebrow: "เกี่ยวกับ CHP",
    heading: "ห้างหุ้นส่วนจำกัด ซีเอชพี โรลลิ่ง เอ็นจิเนียริ่ง",
    description:
      "เราเป็นโรงงานวิศวกรรมที่เชี่ยวชาญด้านการผลิตลูกกลิ้งอุตสาหกรรมและ <strong>งานสั่งผลิตตามแบบ</strong> ทีมของเรารวมประสบการณ์การขึ้นรูปโลหะหลายสิบปีเข้ากับการผลิตด้วย <strong>เครื่อง CNC</strong> สมัยใหม่ เพื่อสร้างเครื่องมือและเครื่องจักรที่ <strong>ทำงานได้ตรงตามเป้าหมาย</strong>",
    points: [
      {
        title: "ควบคุมคุณภาพโดยวิศวกร",
        description:
          "ตรวจสอบและบันทึกข้อมูลทุกชิ้นงาน ยืนยันวัสดุและค่าพิกัดความเผื่อให้ตรงตามสเปคของคุณ",
      },
      {
        title: "งานผิวสำเร็จระดับพรีเมียม",
        description:
          "เครื่องมือที่เก็บผิวระดับกระจก มีมิติแม่นยำ ช่วยให้เดินเครื่องได้ราบรื่นและยืดอายุการใช้งาน",
      },
      {
        title: "ทำงานแบบพันธมิตร",
        description:
          "เราทำงานร่วมกับทีมจัดซื้อและวิศวกรของคุณอย่างใกล้ชิด ตั้งแต่แบบร่างแรกจนถึงการส่งมอบ",
      },
    ],
  },
  certifications: {
    heading: "มาตรฐานและใบรับรอง",
    items: [
      { code: "TIS / มอก.", label: "มาตรฐานผลิตภัณฑ์อุตสาหกรรม" },
      { code: "ISO 9001:2015", label: "ระบบบริหารคุณภาพ" },
      { code: "ISO 14001:2015", label: "ระบบจัดการสิ่งแวดล้อม" },
    ],
  },
  specs: {
    heading: "สเปคทางเทคนิค",
    subheading:
      "ข้อมูลทางเทคนิคของลูกกลิ้งอุตสาหกรรมและชิ้นส่วนเครื่องจักร ทุกชิ้นงานผ่านการตรวจสอบคุณภาพตามมาตรฐาน",
    tableHeaders: { item: "รายการ", value: "ค่า / ช่วง" },
    rows: [
      { label: "เส้นผ่านศูนย์กลาง", value: "50 - 1,200 mm" },
      { label: "ความยาวสูงสุด", value: "6,000 mm" },
      { label: "วัสดุ", value: "SCM440, S45C, SUS304, SUS316" },
      { label: "ความแข็ง", value: "HRC 45-62" },
      { label: "ค่าความเรียบผิว (Ra)", value: "0.4 - 3.2 um" },
      { label: "พิกัดความเผื่อ (Tolerance)", value: "+/- 0.01 mm" },
      { label: "กำลังการผลิต", value: "500+ ชิ้น/เดือน" },
      { label: "ระยะเวลาส่งมอบ", value: "7-30 วันทำการ" },
    ],
  },
  inlineCta: {
    heading: "พร้อมเริ่มโครงการ?",
    subheading:
      "ทีมวิศวกรของเราพร้อมให้คำปรึกษาและประเมินราคาภายใน 24 ชั่วโมง",
    cta: "ขอใบเสนอราคา",
  },
  references: {
    heading: "ผลงานอ้างอิง",
    subheading: "ความไว้วางใจจากองค์กรชั้นนำทั้งภาครัฐและเอกชน",
    filterAll: "ทั้งหมด",
    filterB2G: "ภาครัฐ (B2G)",
    filterB2B: "ภาคเอกชน (B2B)",
    segmentLabelB2G: "ภาครัฐ",
    segmentLabelB2B: "ภาคเอกชน",
    yearLabel: "ปีโครงการ",
    projects: [
      {
        name: "การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย (กฟผ.)",
        segment: "b2g",
        work: "ลูกกลิ้งสายพานลำเลียงถ่านหิน",
        year: "2567",
      },
      {
        name: "การประปาส่วนภูมิภาค",
        segment: "b2g",
        work: "เพลาปั๊มน้ำสแตนเลส SUS316",
        year: "2566",
      },
      {
        name: "บริษัท ปูนซิเมนต์ไทย จำกัด (มหาชน)",
        segment: "b2b",
        work: "ลูกกลิ้งเตาเผาปูนซีเมนต์",
        year: "2567",
      },
      {
        name: "Thai Union Group PCL.",
        segment: "b2b",
        work: "ชิ้นส่วนสายการผลิตอาหาร สแตนเลส SUS304",
        year: "2565",
      },
      {
        name: "กรมชลประทาน",
        segment: "b2g",
        work: "เพลาและเฟืองประตูระบายน้ำ",
        year: "2566",
      },
      {
        name: "บริษัท สหวิริยาสตีลอินดัสตรี จำกัด (มหาชน)",
        segment: "b2b",
        work: "ลูกกลิ้งรีดเหล็ก SCM440",
        year: "2567",
      },
    ],
  },
  rfqForm: {
    eyebrow: "ขอใบเสนอราคา",
    heading: "ส่งแบบให้เรา รับใบเสนอราคาภายใน 48 ชม.",
    description:
      "แชร์แบบพิมพ์เขียว สเปค หรือชิ้นงานตัวอย่าง ทีมวิศวกรจะตรวจสอบความต้องการของคุณและตอบกลับด้วยข้อเสนอสั่งผลิตตามแบบโดยละเอียด",
    contactPhoneLabel: "โทรหาเรา",
    contactPhone: "088-229-9088",
    contactEmailLabel: "อีเมล",
    contactEmail: "cholla_chat@hotmail.com",
    contactLocationLabel: "โรงงาน",
    contactLocation: "สมุทรปราการ, ประเทศไทย",
    fields: {
      name: { label: "ชื่อ-นามสกุล", placeholder: "คุณสมชาย วิศวกร" },
      company: { label: "บริษัท", placeholder: "บริษัท เหล็กไทย จำกัด" },
      email: {
        label: "อีเมลบริษัท",
        placeholder: "somchai@thaisteelco.com",
      },
      phone: { label: "เบอร์โทร", placeholder: "+66 ..." },
      service: {
        label: "บริการที่ต้องการ",
        placeholder: "เลือกบริการ",
        options: [
          "ลูกกลิ้งและอุปกรณ์รีดขึ้นรูปตามสั่ง",
          "สร้างเครื่องจักรรีดขึ้นรูป",
          "ซ่อมบำรุงและดัดแปลง (Overhaul)",
          "อื่น ๆ / ไม่แน่ใจ",
        ],
      },
      details: {
        label: "รายละเอียดโครงการ",
        placeholder:
          "อธิบายชิ้นงาน จำนวน วัสดุ มิติ และแบบอ้างอิง",
      },
      file: {
        label: "แนบแบบพิมพ์เขียวหรือ Drawing (PDF, DWG, STEP)",
      },
    },
    submit: "ส่งคำขอ",
    submitting: "กำลังส่ง...",
    privacy:
      "เราเคารพความลับของคุณ แบบ Drawing ใช้เพื่อจัดทำใบเสนอราคาเท่านั้น",
    success: {
      heading: "ขอบคุณ",
      message:
        "คำขอของคุณได้รับแล้ว ทีมวิศวกรจะติดต่อกลับภายในสองวันทำการ",
      another: "ส่งคำขอเพิ่ม",
    },
    error: "เกิดข้อผิดพลาด กรุณาลองอีกครั้ง",
  },
  footer: {
    description:
      "ห้างหุ้นส่วนจำกัด ซีเอชพี โรลลิ่ง เอ็นจิเนียริ่ง (CHP Rolling Engineering) — ผู้เชี่ยวชาญด้านลูกรีด เครื่องจักร และบริการซ่อมบำรุงสั่งผลิต 100% สำหรับสายการผลิตเหล็ก",
    capabilitiesHeading: "บริการ",
    capabilitiesLinks: [
      "ลูกกลิ้งและอุปกรณ์รีดขึ้นรูปตามสั่ง",
      "สร้างเครื่องจักรรีดขึ้นรูป",
      "ซ่อมบำรุงและดัดแปลง (Overhaul)",
    ],
    companyHeading: "บริษัท",
    companyLinks: [
      { label: "เกี่ยวกับ CHP", href: "#about" },
      { label: "กระบวนการ", href: "#process" },
      { label: "อุตสาหกรรม", href: "#industries" },
    ],
    contactHeading: "ติดต่อ",
    contactLinks: [
      { label: "ขอใบเสนอราคา", href: "#rfq" },
      { label: "cholla_chat@hotmail.com", href: "mailto:cholla_chat@hotmail.com" },
      { label: "088-229-9088", href: "tel:+66882299088" },
    ],
    copyright:
      "CHP Rolling Engineering Limited Partnership. All rights reserved.",
    tagline: "โซลูชันอุตสาหกรรมสั่งผลิตตามแบบ",
  },
  customRollingTools: {
    eyebrow: "OFFER 1",
    heading: "ลูกกลิ้งรีดท่อและรีดเหล็กโครงสร้าง ออกแบบและผลิตตามความต้องการเฉพาะ (Custom-Made) อย่างครบวงจร",
    description: "เราส่งมอบโซลูชันเพื่อแก้ปัญหาลูกกลิ้งรีดที่ไม่ตรงตามสเปกและข้อจำกัดของเครื่องจักรนำเข้า ด้วยการคัดเลือกวัสดุเหล็กกล้าเครื่องมือคุณภาพสูง เกรด <strong>SKD11 มาตรฐานจากประเทศญี่ปุ่น</strong> ผ่านกระบวนการชุบแข็ง (<strong>Hardening</strong>) ที่ทนต่อแรงบีบอัดระดับสูง พร้อมการขึ้นรูปและเจียรนัยด้วยเทคโนโลยีเครื่องจักรที่มีความแม่นยำสูง (<strong>High Precision</strong>) เพื่อควบคุมพิกัดความเผื่อ (<strong>Tolerance</strong>) ให้น้อยที่สุด ซึ่งจะช่วยยืดอายุการใช้งานและลดต้นทุนการซ่อมบำรุงในระยะยาว",
    items: [
      {
        title: "ลูกกลิ้งรีดท่อเหล็กและสแตนเลส (Pipe Forming Roller)",
        description: "ออกแบบ กลึง และขึ้นรูปหัวลูกกลิ้งสำหรับรีดท่อกลมและท่อเหลี่ยม ควบคุมองศาหน้าสัมผัส (Profile) ได้อย่างเที่ยงตรงด้วยกระบวนการระดับไมครอน เพื่อการบีบอัดแผ่นเหล็กและสแตนเลสที่ราบรื่น ลดอัตราการเกิดรอยขีดข่วนบนพื้นผิวชิ้นงาน"
      },
      {
        title: "ลูกกลิ้งรีดเหล็กโครงสร้างเฉพาะทาง (Roll Forming Dies)",
        description: "รองรับการคำนวณโครงสร้างมิติหน้าตัดซับซ้อน (Complex Geometry) ผ่านการเจียรผิวที่มีความละเอียดสูง เพื่อมิติที่เสถียรและสม่ำเสมอในทุกกระบวนการผลิต ลดความคลาดเคลื่อนได้อย่างสมบูรณ์แบบ"
      },
      {
        title: "ชุดลูกกลิ้งรีดสเปกพิเศษหลายสเตจ (Multi-Stage Rollers)",
        description: "บริการคำนวณและออกแบบลำดับสเตจการรีด (Rolling Stages) เพื่อประสานการทำงานร่วมกับเครื่องจักรเดิมของลูกค้า ช่วยให้การขึ้นรูปเนื้อเหล็กเป็นไปอย่างเป็นระบบและป้องกันการเสียรูปทรง"
      }
    ]
  },
  machineConstruction: {
    eyebrow: "OFFER 2",
    heading: "นวัตกรรมเครื่องจักรรีดท่อระบบ Hybrid ปรับสลับ 2, 3, 4-Roll ได้ในเครื่องเดียว",
    description: "ยกระดับประสิทธิภาพการผลิตของภาคอุตสาหกรรมหนักด้วยเทคโนโลยี <strong>Hybrid Squeeze Stand</strong> ซึ่งถูกออกแบบและผลิตขึ้นเพื่อรองรับการปรับเปลี่ยนทิศทางการบีบอัด สามารถสลับการทำงานระหว่าง <strong>2-Roll, 3-Roll และ 4-Roll</strong> ได้อย่างสมบูรณ์แบบภายในโครงสร้างเดียว นวัตกรรมนี้ช่วยลดงบประมาณรายจ่ายด้านทุน (<strong>CapEx</strong>) และเพิ่มพื้นที่ใช้สอยในโรงงาน โครงสร้างเหล็กมีความแข็งแรงทนทานสูง พร้อมรองรับการสั่งผลิตเฉพาะเพื่อบูรณาการเข้ากับสายการผลิต <strong>ท่อเหล็กและสแตนเลสระดับพรีเมียม</strong>",
    items: [
      {
        title: "เครื่องจักรรีดท่อระบบ Multi-Configuration",
        description: "โครงสร้างชุดแท่นเครื่องจักรผลิตด้วยเหล็กหนาพิเศษ เสริมด้วยการออกแบบเชิงวิศวกรรมทางกล (Mechanical Design) เพื่อควบคุมตำแหน่งการจัดวางลูกกลิ้งให้มีความสมมาตร ช่วยให้ผลลัพธ์หน้าตัดท่อมีความแม่นยำและได้ฉากที่สมบูรณ์แบบ"
      },
      {
        title: "ระบบส่งกำลัง Multi-Stage แบบ Heavy Duty",
        description: "ระบบเกียร์ทดและเพลาส่งกำลังดีไซน์พิเศษสำหรับรับแรงบีบอัดมหาศาล (Heavy Duty Transmission) พร้อมระบบควบคุมด้วยตู้คอนโทรล PLC Logic แม่นยำ เดินเครื่องรันต่อเนื่องได้ไม่มีสะดุด"
      },
      {
        title: "ผลงานการรันระบบจริง และชิ้นส่วน Modular Parts",
        description: "พิสูจน์แล้วจากการส่งมอบและทำ Commissioning อย่างเต็มรูปแบบ ณ สถานที่ปฏิบัติงาน โครงสร้างชุดประคองเพลา แบริ่ง และแกนเพลา ถูกออกแบบในระบบ Modular ที่ถอดประกอบง่ายและสามารถรองรับแรงบิดและแรงเค้นทางกลได้เต็มประสิทธิภาพ"
      }
    ]
  },
  maintenanceOverhaul: {
    eyebrow: "OFFER 3",
    heading: "บริการฟื้นฟูสมรรถนะ (Overhaul) และซ่อมบำรุงเครื่องจักรรีดท่อทุกประเภท",
    description: "ลดความเสี่ยงและความสูญเสียจากปัญหาเครื่องจักรหยุดชะงัก (<strong>Downtime</strong>) และข้อจำกัดในการหาอะไหล่ทดแทนสำหรับเครื่องจักรนำเข้า ทีมวิศวกรผู้เชี่ยวชาญจาก หจก. ซีเอชพี พร้อมลงพื้นที่ตรวจสอบระบบทางกลและระบบไฮดรอลิกอย่างละเอียด เราให้บริการออกแบบและผลิตชิ้นส่วนอะไหล่เฉพาะ (<strong>Custom Parts</strong>) เพื่อทดแทนชิ้นส่วนเดิมที่สึกหรอ พร้อมรองรับงานซ่อมบำรุง ดัดแปลงเพื่อเพิ่มประสิทธิภาพ (<strong>Modification</strong>) และงานฟื้นฟูสมรรถนะ (<strong>Overhaul</strong>) สำหรับสายการผลิตทุกรูปแบบ ไม่ว่าจะเป็นเครื่องจักรของเราเอง หรือเครื่องจักรนำเข้าจากต่างประเทศ (จีน, ไต้หวัน, ยุโรป) เพื่อให้เครื่องจักรของคุณกลับมาทำงานด้วยประสิทธิภาพสูงสุดเทียบเท่า <strong>เครื่องจักรใหม่</strong>",
    items: [
      {
        title: "ตรวจสอบและวิเคราะห์การชำรุดด่วนหน้างาน",
        description: "บริการตรวจสอบพิกัดความเผื่อ (Tolerance) ที่คลาดเคลื่อน พร้อมวิเคราะห์ปัญหาเชิงลึกของระบบเพลารีดและชุดขับเคลื่อน เพื่อแก้ไขปัญหาท่อรีดเสียรูปทรงได้อย่างแม่นยำและทันท่วงที"
      },
      {
        title: "ปรับปรุงและขยายขีดความสามารถ (Modification)",
        description: "ดัดแปลงและยกระดับประสิทธิภาพสายการผลิตหรือเครื่องจักรเดิม ให้สามารถปรับเปลี่ยนระยะและรองรับลูกกลิ้ง (Roller) ขนาดใหม่ เพื่อตอบสนองความต้องการการผลิตที่หลากหลายโดยไม่ต้องลงทุนซื้อเครื่องจักรใหม่"
      },
      {
        title: "ฟื้นฟูสมรรถนะระบบทางกล (Overhaul)",
        description: "บริการรื้อถอน ถอดประกอบ เปลี่ยนตลับลูกปืน (Bearing) แกนเพลาที่เสื่อมสภาพ และเจียรผิวแท่นประคองใหม่ทั้งหมด เพื่อฟื้นฟูสายการผลิตให้กลับมาทำงานด้วยความแม่นยำระดับไมครอนอีกครั้ง"
      }
    ]
  },
  businessOffice: {
    eyebrow: "OFFER 4",
    heading: "🏢 สำนักงานนัดหมายเจรจาธุรกิจ และศูนย์ประสานงานวิศวกรรมเชิงลึก",
    description1: "เนื่องจากงานวิศวกรรมเฉพาะทางและการผลิตชิ้นส่วนสั่งทำพิเศษ (<strong>Custom-Made</strong>) เป็นกระบวนการที่ต้องการ <strong>ความแม่นยำสูง</strong> หจก. ซีเอชพี โรลลิ่ง วิศวกรรม จึงได้จัดเตรียมสำนักงานส่วนหน้า (<strong>Business Office</strong>) เพื่อรองรับการประสานงานกับฝ่ายจัดซื้อและทีมวิศวกรของคู่ค้า พื้นที่นี้ออกแบบมาสำหรับการประชุมหารือ วิเคราะห์แบบ <strong>Drawing เชิงกล</strong> และตรวจสอบสเปกวัสดุร่วมกันอย่างละเอียด เพื่อสร้างความเข้าใจที่ตรงกันและรับประกันความแม่นยำ <strong>100%</strong> ก่อนส่งมอบแผนงานเข้าสู่กระบวนการผลิตจริง",
    description2: "เรามุ่งมั่นนำเสนอโซลูชันทางวิศวกรรมที่แม่นยำ เพื่อให้ทุกการลงทุนของคุณเกิดความคุ้มค่าสูงสุด",
    contactInfo: {
      address: "ที่ตั้งสำนักงาน",
      phone: "เบอร์โทรศัพท์",
      email: "อีเมล",
      addressValue: "790/77 หมู่ที่ 2 ซอยประชาอุทิศ 90 ถนนประชาอุทิศ ต.บ้านคลองสวน อ.พระสมุทรเจดีย์ จ.สมุทรปราการ 10290",
      phoneValue: "088-229-9088",
      emailValue: "cholla_chat@hotmail.com"
    },
    googleMap: "แผนที่นำทาง (Google Map)"
  }
};

export const dictionaries: Record<Locale, Dictionary> = { en, th };
