"use client"

import Link from "next/link"
import { ArrowLeft, Download, Phone, Globe, Code, Users, Award, Calendar, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"

export default function ProfilePage() {
  const { t, language } = useLanguage()

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

  const services = [
    {
      title: language === "ar" ? "تطوير المواقع الإلكترونية" : "Website Development",
      description:
        language === "ar"
          ? "تطوير مواقع احترافية متجاوبة باستخدام أحدث التقنيات"
          : "Professional responsive website development using latest technologies",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: language === "ar" ? "المتاجر الإلكترونية" : "E-commerce Solutions",
      description:
        language === "ar"
          ? "بناء متاجر إلكترونية متكاملة مع أنظمة دفع آمنة"
          : "Complete e-commerce stores with secure payment systems",
      technologies: ["Stripe", "PayPal", "WooCommerce", "Shopify"],
    },
    {
      title: language === "ar" ? "تطبيقات الذكاء الاصطناعي" : "AI Applications",
      description:
        language === "ar"
          ? "تطوير تطبيقات ذكية باستخدام تقنيات الذكاء الاصطناعي"
          : "Smart applications using artificial intelligence technologies",
      technologies: ["OpenAI", "Machine Learning", "ChatGPT", "AI APIs"],
    },
    {
      title: language === "ar" ? "تطبيقات الموبايل" : "Mobile Applications",
      description:
        language === "ar"
          ? "تطوير تطبيقات الهاتف المحمول لنظامي iOS و Android"
          : "Mobile app development for iOS and Android platforms",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
  ]

  const projects = [
    {
      name: language === "ar" ? "منصة التجارة الإلكترونية المتقدمة" : "Advanced E-commerce Platform",
      client: language === "ar" ? "شركة التجارة الرقمية" : "Digital Commerce Co.",
      duration: language === "ar" ? "3 أشهر" : "3 months",
      description:
        language === "ar"
          ? "منصة تجارة إلكترونية شاملة مع نظام إدارة المخزون والدفع الآمن"
          : "Comprehensive e-commerce platform with inventory management and secure payment",
    },
    {
      name: language === "ar" ? "تطبيق إدارة المشاريع" : "Project Management App",
      client: language === "ar" ? "شركة الإدارة الذكية" : "Smart Management Inc.",
      duration: language === "ar" ? "2 أشهر" : "2 months",
      description:
        language === "ar"
          ? "تطبيق ويب لإدارة المشاريع والفرق مع تحديثات فورية"
          : "Web application for project and team management with real-time updates",
    },
    {
      name: language === "ar" ? "موقع الشركة المؤسسية" : "Corporate Website",
      client: language === "ar" ? "مجموعة الأعمال المتقدمة" : "Advanced Business Group",
      duration: language === "ar" ? "1 شهر" : "1 month",
      description:
        language === "ar"
          ? "موقع شركة احترافي مع نظام إدارة المحتوى"
          : "Professional corporate website with content management system",
    },
  ]

  const achievements = [
    {
      title: language === "ar" ? "مشاريع مكتملة" : "Completed Projects",
      count: "50+",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: language === "ar" ? "عملاء راضون" : "Satisfied Clients",
      count: "30+",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: language === "ar" ? "سنوات الخبرة" : "Years Experience",
      count: "2+",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: language === "ar" ? "تقييم العملاء" : "Client Rating",
      count: "4.9/5",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Header */}
      <div className="border-b border-zinc-800">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
                  <ArrowLeft className={`h-5 w-5 ${language === "ar" ? "rotate-180" : ""}`} />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">Cod</span>
                  <span className="text-white">Atlas</span>
                </h1>
                <p className="text-zinc-400 text-sm">{language === "ar" ? "ملف الشركة" : "Company Profile"}</p>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500">
              <Download className="h-4 w-4 mr-2" />
              {language === "ar" ? "تحميل PDF" : "Download PDF"}
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-12 space-y-12">
        {/* Company Overview */}
        <Card className="bg-zinc-800/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">
              {language === "ar" ? "نظرة عامة على الشركة" : "Company Overview"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{language === "ar" ? "من نحن" : "Who We Are"}</h3>
                <p className="text-zinc-300 leading-relaxed">
                  {language === "ar"
                    ? "نحن Cod Atlas، فريق متخصص في البرمجة الاحترافية باستخدام أحدث أدوات وتقنيات الذكاء الاصطناعي. نبتكر حلولاً رقمية متقدمة تساعد الشركات والأفراد على بناء حضور قوي وفعال في العالم الرقمي."
                    : "We are Cod Atlas, a team specialized in professional programming using the latest AI tools and technologies. We create advanced digital solutions that help companies and individuals build a strong and effective presence in the digital world."}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{language === "ar" ? "رؤيتنا" : "Our Vision"}</h3>
                <p className="text-zinc-300 leading-relaxed">
                  {language === "ar"
                    ? "نسعى لأن نكون الخيار الأول للشركات التي تبحث عن حلول تقنية مبتكرة ومتطورة، ونهدف إلى تحويل الأفكار إلى واقع رقمي يحقق النجاح والنمو المستدام."
                    : "We strive to be the first choice for companies looking for innovative and advanced technical solutions, and we aim to transform ideas into digital reality that achieves success and sustainable growth."}
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-zinc-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">{language === "ar" ? "واتساب" : "WhatsApp"}</p>
                  <p className="font-medium">+213542027172</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500">{language === "ar" ? "الموقع" : "Website"}</p>
                  <p className="font-medium">codatlas.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="bg-zinc-800/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">
              {language === "ar" ? "إنجازاتنا" : "Our Achievements"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold text-white">{achievement.count}</div>
                  <div className="text-sm text-zinc-400">{achievement.title}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Services */}
        <Card className="bg-zinc-800/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">{language === "ar" ? "خدماتنا" : "Our Services"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-700/50">
                  <h3 className="text-lg font-semibold mb-3 text-cyan-400">{service.title}</h3>
                  <p className="text-zinc-300 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-zinc-700/50 text-zinc-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Projects */}
        <Card className="bg-zinc-800/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">
              {language === "ar" ? "المشاريع الحديثة" : "Recent Projects"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="p-6 rounded-lg bg-zinc-900/50 border border-zinc-700/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-lg font-semibold text-cyan-400">{project.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-zinc-400">
                      <span>{project.client}</span>
                      <span>•</span>
                      <span>{project.duration}</span>
                    </div>
                  </div>
                  <p className="text-zinc-300">{project.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className="bg-zinc-800/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-400">
              {language === "ar" ? "التقنيات المستخدمة" : "Technologies We Use"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                  {language === "ar" ? "الواجهات الأمامية" : "Frontend"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-blue-500/30 text-blue-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                  {language === "ar" ? "الخلفية" : "Backend"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Python", "PHP", "MongoDB", "PostgreSQL", "Firebase"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-green-500/30 text-green-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">
                  {language === "ar" ? "الذكاء الاصطناعي" : "AI & Tools"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["OpenAI", "ChatGPT", "Machine Learning", "TensorFlow", "Docker", "AWS"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-purple-500/30 text-purple-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/30">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">
              {language === "ar" ? "هل أنت مستعد لبدء مشروعك؟" : "Ready to Start Your Project?"}
            </h2>
            <p className="text-xl text-zinc-300 mb-8">
              {language === "ar"
                ? "تواصل معنا اليوم ودعنا نحول فكرتك إلى واقع رقمي"
                : "Contact us today and let us turn your idea into digital reality"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {language === "ar" ? "تواصل معنا" : "Contact Us"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
