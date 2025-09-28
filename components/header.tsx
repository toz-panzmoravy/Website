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
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border/30 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <span className="font-mono text-xl font-bold group-hover:text-primary transition-all duration-300 transform group-hover:scale-105">
                Panzmoravy
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className={`relative text-base font-medium transition-all duration-300 hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {currentLang === "cs" ? "Domů" : "Home"}
              {pathname === "/" && (
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded-full"></div>
              )}
            </Link>
            <Link
              href="/projects"
              className={`relative text-base font-medium transition-all duration-300 hover:text-primary ${
                pathname === "/projects" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {currentLang === "cs" ? "Projekty" : "Projects"}
              {pathname === "/projects" && (
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary rounded-full"></div>
              )}
            </Link>
            <a
              href="mailto:contact@panzmoravy.com"
              className="text-base font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
            >
              {currentLang === "cs" ? "Kontakt" : "Contact"}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 mr-3 bg-muted/50 rounded-lg p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLanguage(lang.code)}
                  className={`px-3 py-2 rounded-md text-sm transition-all duration-300 transform hover:scale-105 ${
                    currentLang === lang.code
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  title={lang.name}
                >
                  {lang.flag}
                </button>
              ))}
            </div>

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="h-10 w-10 hover:bg-primary/10 hover:text-primary transition-all duration-300 transform hover:scale-110"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
