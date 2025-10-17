"use client"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface LanguageSwitcherProps {
  currentLanguage: "ar" | "en"
  onLanguageChange: (language: "ar" | "en") => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
        >
          <Globe className="h-5 w-5" />
          <span className="sr-only">تغيير اللغة</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-zinc-800 border-zinc-700">
        <DropdownMenuItem
          onClick={() => onLanguageChange("ar")}
          className={`cursor-pointer hover:bg-zinc-700 ${
            currentLanguage === "ar" ? "bg-zinc-700 text-blue-400" : "text-zinc-300"
          }`}
        >
          🇸🇦 العربية
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onLanguageChange("en")}
          className={`cursor-pointer hover:bg-zinc-700 ${
            currentLanguage === "en" ? "bg-zinc-700 text-blue-400" : "text-zinc-300"
          }`}
        >
          🇺🇸 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
