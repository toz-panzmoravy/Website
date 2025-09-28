"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Language {
  code: string
  flag: string
  name: string
}

const languages: Language[] = [
  { code: "en", flag: "🇺🇸", name: "English" },
  { code: "cs", flag: "🇨🇿", name: "Čeština" },
]

export function Header() {
  const [isDark, setIsDark] = useState(false)
  const [currentLang, setCurrentLang] = useState("en")
  const pathname = usePathname()

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }

    const savedLang = localStorage.getItem("language") || "en"
    setCurrentLang(savedLang)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const switchLanguage = (langCode: string) => {
    setCurrentLang(langCode)
    localStorage.setItem("language", langCode)
    // Trigger a custom event to notify other components
    window.dispatchEvent(new CustomEvent("languageChange", { detail: langCode }))
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border/50 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-mono text-lg font-semibold group-hover:text-primary transition-colors">
              Panzmoravy
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm transition-colors ${
                pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {currentLang === "cs" ? "Domů" : "Home"}
            </Link>
            <Link
              href="/projects"
              className={`text-sm transition-colors ${
                pathname === "/projects" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {currentLang === "cs" ? "Projekty" : "Projects"}
            </Link>
            <a
              href="mailto:contact@panzmoravy.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {currentLang === "cs" ? "Kontakt" : "Contact"}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 mr-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLanguage(lang.code)}
                  className={`px-2 py-1 rounded text-sm transition-all ${
                    currentLang === lang.code
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title={lang.name}
                >
                  {lang.flag}
                </button>
              ))}
            </div>

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
