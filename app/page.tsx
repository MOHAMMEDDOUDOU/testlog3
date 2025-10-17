"use client"

import Link from "next/link"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { EnhancedHero } from "@/components/enhanced-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { useLanguage } from "@/hooks/use-language"

export default function Portfolio() {
  const { language, t } = useLanguage()

  const handleWhatsAppClick = () => {
    const phoneNumber = "213542027172" // تم تحديث الرقم
    const message = encodeURIComponent(
      language === "ar"
        ? "مرحباً، أود التواصل معكم بخصوص خدماتكم"
        : "Hello, I would like to contact you about your services",
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* قسم البطل المحسن - محسن للجوال */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* خلفية متحركة محسنة */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob hover:scale-110 transition-transform duration-700 cursor-pointer"></div>
          <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 hover:scale-110 transition-transform duration-700 cursor-pointer"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/4 sm:left-1/3 w-48 sm:w-64 lg:w-72 h-48 sm:h-64 lg:h-72 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 hover:scale-110 transition-transform duration-700 cursor-pointer"></div>

          {/* شبكة نقاط متحركة */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse animation-delay-3000"></div>
          </div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-1 lg:order-1">
            {/* عنوان محسن مع تأثيرات */}
            <div className="space-y-4">
              <div className="flex justify-center lg:justify-start">
                <div className="relative px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 mb-4">
                  <span className="relative z-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    👋 {language === "ar" ? "مرحباً بكم" : "Welcome"}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                <span className="block text-white mb-2">{t("heroTitle")}</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                  Cod Atlas
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-[600px] leading-relaxed mx-auto lg:mx-0 px-4 sm:px-0">
              {t("heroSubtitle")}
            </p>

            {/* أزرار محسنة */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start px-4 sm:px-0">
              <Button
                onClick={scrollToProjects}
                className="relative overflow-hidden group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 border-0 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center">
                  {t("viewProjects")}{" "}
                  <ArrowRight
                    className={`${language === "ar" ? "mr-2 rotate-180" : "ml-2"} h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1`}
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

              <Button
                variant="outline"
                className="border-2 border-zinc-600 text-zinc-300 hover:text-white hover:border-blue-400 bg-transparent backdrop-blur-sm px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:bg-blue-500/10 w-full sm:w-auto"
                onClick={handleWhatsAppClick}
              >
                {t("contactMe")}
              </Button>
            </div>
          </div>

          {/* Canvas التفاعلي المحسن */}
          <div className="flex justify-center order-2 lg:order-2">
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <EnhancedHero />
            </div>
          </div>
        </div>

        {/* مؤشر التمرير المحسن */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 sm:w-6 h-8 sm:h-10 rounded-full border-2 border-gradient-to-r from-blue-400 to-purple-400 flex justify-center items-start p-1 bg-gradient-to-b from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* قسم نبذة عني - محسن للجوال */}
      <section id="about" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 hover:scale-110 transition-transform duration-700 cursor-pointer"></div>
          <div className="absolute bottom-1/3 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 hover:scale-110 transition-transform duration-700 cursor-pointer"></div>
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <SectionHeading title={t("aboutTitle")} subtitle={t("aboutSubtitle")} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-12 lg:mt-16">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-2 sm:-inset-4 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800 max-w-md mx-auto lg:max-w-none">
                <img
                  src="https://res.cloudinary.com/dj5xhlws3/image/upload/v1751839016/Capture_d_%C3%A9cran_2025-07-06_175053_uiuzgk.png"
                  alt="Cod Atlas Logo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium">{t("availableForWork")}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <GlassmorphicCard>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 text-center lg:text-left">
                  {t("aboutHeading")}
                </h3>
                <div className="space-y-4">
                  <h4 className="text-lg sm:text-xl font-semibold text-blue-400 text-center lg:text-left">
                    {t("aboutSubheading")}
                  </h4>
                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">{t("aboutText1")}</p>
                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">{t("aboutText2")}</p>
                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">{t("aboutText3")}</p>
                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">{t("aboutText4")}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="text-xs sm:text-sm text-zinc-500">{t("team")}</div>
                    <div className="font-medium">Cod Atlas</div>
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="text-xs sm:text-sm text-zinc-500">{t("specialty")}</div>
                    <div className="font-medium">{t("websiteDevelopment")}</div>
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="text-xs sm:text-sm text-zinc-500">{t("availability")}</div>
                    <div className="font-medium text-green-500">{t("openToProjects")}</div>
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="text-xs sm:text-sm text-zinc-500">{t("whatsapp")}</div>
                    <div className="font-medium">+213542027172</div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center lg:text-left">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-white w-full sm:w-auto" asChild>
                    <Link href="/profile">{t("downloadProfile")}</Link>
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* قسم المهارات - محسن للجوال */}
      <section id="skills" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 hover:scale-110 transition-transform duration-700 cursor-pointer"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 hover:scale-110 transition-transform duration-700 cursor-pointer"></div>
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <SectionHeading title={t("skillsTitle")} subtitle={t("skillsSubtitle")} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-12 lg:mt-16">
            <SkillBadge name="JavaScript" level={90} />
            <SkillBadge name="TypeScript" level={85} />
            <SkillBadge name="Next.js" level={90} />
            <SkillBadge name="Node.js" level={80} />
            <SkillBadge name="Tailwind CSS" level={90} />
          </div>
        </div>
      </section>

      {/* قسم المشاريع - تصميم احترافي محسن */}
      <section id="projects" className="py-20 sm:py-28 lg:py-36 relative px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* خلفية متحركة محسنة */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-600/10 to-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          {/* عنوان القسم المحسن */}
          <div className="text-center mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-6"
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-400">{t("projectsTitle")}</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              {t("projectsTitle")}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
            >
              {t("projectsSubtitle")}
            </motion.p>
          </div>

          {/* شبكة المشاريع المحسنة مع تأثيرات متقدمة */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={language === "ar" ? "NextWearDZ Store" : "NextWearDZ Store"}
                description={
                  language === "ar"
                    ? "متجر إلكتروني متطور للملابس والأزياء مع نظام دفع آمن وإدارة مخزون متقدمة"
                    : "Advanced e-commerce store for clothing and fashion with secure payment and advanced inventory management"
                }
                tags={["Next.js", "TypeScript", "Prisma", "Stripe"]}
                image="https://res.cloudinary.com/deh3ejeph/image/upload/v1754075202/Screenshot_2025-08-01_at_20.04.50_wzdhmy.png"
                demoUrl="https://nextweardz.store"
                repoUrl="https://github.com"
              />
            </motion.div>
            

            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={language === "ar" ? "Taskora Works" : "Taskora Works"}
                description={
                  language === "ar"
                    ? "منصة إدارة المشاريع والأعمال المتقدمة مع واجهة عربية احترافية"
                    : "Advanced project and business management platform with professional Arabic interface"
                }
                tags={["Next.js", "Tailwind CSS", "Arabic UI", "Responsive Design"]}
                image="https://res.cloudinary.com/deh3ejeph/image/upload/v1754075202/Screenshot_2025-08-01_at_20.05.09_chhqdf.png"
                demoUrl="https://www.taskoraworks.online"
                repoUrl="https://github.com"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={language === "ar" ? "Portfolio Website" : "Portfolio Website"}
                description={
                  language === "ar"
                    ? "موقع شخصي احترافي مع تصميم متجاوب وتأثيرات بصرية متقدمة"
                    : "Professional personal website with responsive design and advanced visual effects"
                }
                tags={["Vue.js", "Laravel", "MySQL", "Bootstrap"]}
                image="https://res.cloudinary.com/dj5xhlws3/image/upload/v1751839016/Capture_d_%C3%A9cran_2025-07-06_175053_uiuzgk.png"
                demoUrl="https://v0-portfolio5111.vercel.app"
                repoUrl="https://github.com"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={language === "ar" ? "Cosmibelle Cosmetique" : "Cosmibelle Cosmetique"}
                description={
                  language === "ar"
                    ? "متجر تجميل وعناية بالجمال مع أفضل المنتجات الأصلية والعلامات العالمية المختارة بعناية"
                    : "Beauty and cosmetics store with the best original products and carefully selected global brands"
                }
                tags={["React", "Netlify", "E-commerce", "Beauty Products"]}
                image="https://res.cloudinary.com/deh3ejeph/image/upload/v1754075202/Screenshot_2025-08-01_at_20.05.44_h0icir.png"
                demoUrl="https://cosmibelle.netlify.app/"
                repoUrl="https://github.com"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={language === "ar" ? "Chic Accessoires" : "Chic Accessoires"}
                description={
                  language === "ar"
                    ? "متجر الأناقة - وجهتك الأولى للإكسسوارات العصرية والأنيقة"
                    : "Elegance store - your first destination for modern and elegant accessories"
                }
                tags={["React", "Netlify", "Accessories", "Fashion"]}
                image="https://res.cloudinary.com/deh3ejeph/image/upload/v1754075202/Screenshot_2025-08-01_at_20.05.28_toykjk.png"
                demoUrl="https://chicaccessoires25.netlify.app/"
                repoUrl="https://github.com"
              />
            </motion.div>
          </motion.div>
          

        </div>
      </section>

      {/* قسم الخبرة - محسن للجوال */}
      <section id="experience" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 hover:scale-110 transition-transform duration-700 cursor-pointer"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 hover:scale-110 transition-transform duration-700 cursor-pointer"></div>
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto">
          <SectionHeading title={t("experienceTitle")} subtitle={t("experienceSubtitle")} />

          <div className="mt-12 lg:mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* قسم التواصل - محسن للجوال */}
      <section id="contact" className="py-16 sm:py-24 lg:py-32 relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 hover:scale-110 transition-transform duration-700 cursor-pointer"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 hover:scale-110 transition-transform duration-700 cursor-pointer"></div>
        </div>

        <div className="container relative z-10 max-w-4xl mx-auto">
          <SectionHeading title={t("contactTitle")} subtitle={t("contactSubtitle")} />

          <div className="mt-12 lg:mt-16">
            <GlassmorphicCard>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">{t("contactInfo")}</h3>
              <div className="flex justify-center">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                    <Phone className="h-4 sm:h-5 w-4 sm:w-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm text-zinc-500">{t("whatsapp")}</div>
                    <div className="font-medium text-sm sm:text-base">+213542027172</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-zinc-800 text-center">
                <h4 className="text-base sm:text-lg font-medium mb-4">{t("currentStatus")}</h4>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm sm:text-base">{t("availableForFreelance")}</span>
                </div>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white w-full sm:w-auto px-6 py-2.5"
                >
                  <MessageCircle className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                  {t("contactMe")}
                </Button>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>
    </div>
  )
}
