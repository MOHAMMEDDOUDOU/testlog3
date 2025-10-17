"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import { useLanguage } from "@/hooks/use-language"

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t("about"), href: "#about" },
    { name: t("skills"), href: "#skills" },
    { name: t("projects"), href: "#projects" },
    { name: t("experience"), href: "#experience" },
    { name: t("contact"), href: "#contact" },
  ]

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false)
    }
  }

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar")
  }

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

  return (
    <>
      <motion.div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative px-4 py-3 rounded-full bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur opacity-50"></div>

          {isMobile ? (
            <div className="relative flex items-center justify-between">
              <Link href="/" className="font-bold text-lg">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">Cod</span>
                <span className="text-white">Atlas</span>
              </Link>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-full"
                  onClick={toggleLanguage}
                >
                  <Globe className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative flex items-center gap-1">
              <Link href="/" className="font-bold text-lg mr-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">Cod</span>
                <span className="text-white">Atlas</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  onClick={handleNavClick}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                size="sm"
                className="ml-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 border-0"
                asChild
              >
                <Link href="/profile">{t("resume")}</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-full"
                onClick={toggleLanguage}
              >
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-8 py-4 text-2xl font-medium text-white hover:text-blue-400 transition-colors"
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 border-0"
              asChild
            >
              <Link href="/profile">{t("resume")}</Link>
            </Button>
          </div>
        </motion.div>
      )}
    </>
  )
}
