"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "ar" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  ar: {
    // Navigation
    about: "نبذة عنا",
    skills: "المهارات",
    projects: "المشاريع",
    experience: "الخبرة",
    contact: "تواصل معنا",
    resume: "ملف الشركة",

    // Hero Section
    heroTitle: "مرحباً نحن",
    heroSubtitle: "شركة تطوير مواقع ومتاجر الكترونية احترافية بأحدث تقنيات الذكاء الاصطناعي",
    viewProjects: "عرض المشاريع",
    contactMe: "تواصل معنا",

    // About Section
    aboutTitle: "نبذة عنا",
    aboutSubtitle: "خلفيتنا ورحلتنا",
    aboutHeading: "نحن Cod Atlas 🧠",
    aboutSubheading: "Cod Atlas – من نحن؟",
    aboutText1:
      "نحن Cod Atlas، شركة متخصصة في البرمجة الاحترافية باستخدام أحدث أدوات وتقنيات الذكاء الاصطناعي. نبتكر حلولاً رقمية متقدمة تساعد الشركات والأفراد على بناء حضور قوي وفعال في العالم الرقمي.",
    aboutText2:
      "نتميز بخبرة في تطوير واجهات المستخدم الحديثة باستخدام React وNext.js، مع قدرة عالية على التعامل مع الأنظمة الخلفية وتكامل الذكاء الاصطناعي لتقديم خدمات أكثر ذكاءً وكفاءة.",
    aboutText3:
      "بدأت رحلتنا بإيمان راسخ بأن التقنية يمكن أن تصنع الفارق، واليوم نعمل مع عملاء من مختلف المجالات لإنشاء تجارب رقمية متطورة وسلسة، تجمع بين الأداء العالي والتصميم المبتكر.",
    aboutText4:
      "نحن لا نكتفي بالبرمجة، بل نبحث دائمًا عن طرق جديدة لتطوير الحلول. نُسهم في مشاريع مفتوحة المصدر، ونواكب باستمرار أحدث التوجهات في مجالات البرمجة والذكاء الاصطناعي.",
    team: "الفريق",
    email: "البريد الإلكتروني",
    specialty: "التخصص",
    availability: "التوفر",
    websiteDevelopment: "تطوير المواقع والمتاجر",
    openToProjects: "مفتوحون للمشاريع",
    downloadProfile: "تحميل ملف الشركة",
    availableForWork: "متاحون للعمل",

    // Skills Section
    skillsTitle: "مهاراتنا",
    skillsSubtitle: "التقنيات التي نعمل بها",

    // Projects Section
    projectsTitle: "المشاريع المميزة",
    projectsSubtitle: "بعض من أعمالنا الحديثة",
    ecommerceTitle: "منصة التجارة الإلكترونية",
    ecommerceDesc: "منصة تجارة إلكترونية متكاملة مبنية بـ Next.js و Stripe و Prisma.",
    taskManagerTitle: "تطبيق إدارة المهام",
    taskManagerDesc: "تطبيق إدارة مهام تعاوني مع تحديثات فورية.",
    aiContentTitle: "مولد المحتوى بالذكاء الاصطناعي",
    aiContentDesc: "أداة توليد محتوى مدعومة بالذكاء الاصطناعي باستخدام نماذج GPT من OpenAI.",
    portfolioTitle: "موقع المحفظة الشخصية",
    portfolioDesc: "موقع المحفظة هذا مبني بـ Next.js و Tailwind CSS.",
    taskoraTitle: "موقع تاسكورا ووركس",
    taskoraDesc: "منصة رقمية متطورة لإدارة المشاريع والأعمال مع واجهة عربية احترافية",
    viewDemo: "عرض مباشر",
    viewCode: "الكود",

    // Experience Section
    experienceTitle: "الخبرة العملية",
    experienceSubtitle: "رحلتنا المهنية",
    frontendEngineer: "مهندس واجهات أمامية",
    frontendDeveloper: "مطور واجهات أمامية",
    webDeveloper: "مطور ويب ومتاجر إلكترونية",
    webDesigner: "مصمم مواقع",
    experienceDesc1: "تطوير مواقع ومتاجر إلكترونية احترافية باستخدام أحدث التقنيات والذكاء الاصطناعي.",
    experienceDesc2: "العمل على تطوير واجهات المستخدم التفاعلية والمتجاوبة للمواقع والتطبيقات.",
    experienceDesc3: "بناء وتطوير المواقع والمتاجر الإلكترونية مع التركيز على تجربة المستخدم والأداء.",
    experienceDesc4: "تصميم مواقع إلكترونية احترافية بأحدث تقنيات الذكاء الاصطناعي.",

    // Contact Section
    contactTitle: "تواصل معنا",
    contactSubtitle: "لنعمل معاً",
    contactInfo: "معلومات التواصل",
    whatsapp: "واتساب",
    whatsappNumber: "+213542027172",
    currentStatus: "الحالة الحالية",
    availableForFreelance: "متاحون للعمل الحر والفرص الوظيفية بدوام كامل",
    sendMessage: "أرسلوا لنا رسالة",
    yourName: "اسمك",
    yourEmail: "بريدك الإلكتروني",
    subject: "الموضوع",
    yourMessage: "رسالتك",
    sendMessageBtn: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    messageSent: "تم إرسال الرسالة!",
    messageSuccess: "شكراً لتواصلكم معنا. سنجيب عليكم قريباً.",

    // Footer
    allRightsReserved: "جميع الحقوق محفوظة.",
  },
  en: {
    // Navigation
    about: "About Us",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact Us",
    resume: "Company Profile",

    // Hero Section
    heroTitle: "Hello, We are",
    heroSubtitle: "Professional website and e-commerce development company using the latest AI technologies",
    viewProjects: "View Projects",
    contactMe: "Contact Us",

    // About Section
    aboutTitle: "About Us",
    aboutSubtitle: "Our background and journey",
    aboutHeading: "We are Cod Atlas 🧠",
    aboutSubheading: "Cod Atlas – Who are we?",
    aboutText1:
      "We are Cod Atlas, a company specialized in professional programming using the latest AI tools and technologies. We create advanced digital solutions that help companies and individuals build a strong and effective presence in the digital world.",
    aboutText2:
      "We excel in developing modern user interfaces using React and Next.js, with high capability in dealing with backend systems and AI integration to provide smarter and more efficient services.",
    aboutText3:
      "Our journey began with a firm belief that technology can make a difference, and today we work with clients from various fields to create advanced and seamless digital experiences that combine high performance with innovative design.",
    aboutText4:
      "We don't just code, we always look for new ways to develop solutions. We contribute to open source projects and constantly keep up with the latest trends in programming and artificial intelligence.",
    team: "Team",
    email: "Email",
    specialty: "Specialty",
    availability: "Availability",
    websiteDevelopment: "Website & E-commerce Development",
    openToProjects: "Open to Projects",
    downloadProfile: "Download Company Profile",
    availableForWork: "Available for Work",

    // Skills Section
    skillsTitle: "Our Skills",
    skillsSubtitle: "Technologies we work with",

    // Projects Section
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Some of our recent work",
    ecommerceTitle: "E-commerce Platform",
    ecommerceDesc: "A complete e-commerce platform built with Next.js, Stripe, and Prisma.",
    taskManagerTitle: "Task Management App",
    taskManagerDesc: "A collaborative task management application with real-time updates.",
    aiContentTitle: "AI Content Generator",
    aiContentDesc: "An AI-powered content generation tool using OpenAI's GPT models.",
    portfolioTitle: "Portfolio Website",
    portfolioDesc: "This portfolio website built with Next.js and Tailwind CSS.",
    taskoraTitle: "Taskora Works Website",
    taskoraDesc: "Advanced digital platform for project and business management with professional Arabic interface",
    viewDemo: "Live Demo",
    viewCode: "Code",

    // Experience Section
    experienceTitle: "Work Experience",
    experienceSubtitle: "Our professional journey",
    frontendEngineer: "Frontend Engineer",
    frontendDeveloper: "Frontend Developer",
    webDeveloper: "Web & E-commerce Developer",
    webDesigner: "Web Designer",
    experienceDesc1:
      "Developing professional websites and e-commerce stores using the latest technologies and artificial intelligence.",
    experienceDesc2: "Working on developing interactive and responsive user interfaces for websites and applications.",
    experienceDesc3:
      "Building and developing websites and e-commerce stores with a focus on user experience and performance.",
    experienceDesc4: "Designing professional websites using the latest artificial intelligence technologies.",

    // Contact Section
    contactTitle: "Get In Touch",
    contactSubtitle: "Let's work together",
    contactInfo: "Contact Information",
    whatsapp: "WhatsApp",
    whatsappNumber: "+213542027172",
    currentStatus: "Current Status",
    availableForFreelance: "Available for freelance work and full-time opportunities",
    sendMessage: "Send Us a Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    subject: "Subject",
    yourMessage: "Your Message",
    sendMessageBtn: "Send Message",
    sending: "Sending...",
    messageSent: "Message sent!",
    messageSuccess: "Thanks for reaching out. We'll get back to you soon.",

    // Footer
    allRightsReserved: "All rights reserved.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["ar"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
