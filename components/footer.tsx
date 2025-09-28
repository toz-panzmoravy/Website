"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const [currentLang, setCurrentLang] = useState("en")

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en"
    setCurrentLang(savedLang)

    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLang(event.detail)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    return () => window.removeEventListener("languageChange", handleLanguageChange as EventListener)
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Panzmoravy Logo" className="w-10 h-10 object-contain" />
              <div>
                <h3 className="text-2xl font-bold">Panzmoravy</h3>
                <p className="text-sm text-muted-foreground">Product Owner</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              {currentLang === "cs"
                ? "Specializuji se na vytváření inovativních produktů, které řeší reálné problémy a přinášejí hodnotu uživatelům i firmám."
                : "Specializing in creating innovative products that solve real problems and deliver value to both users and businesses."}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{currentLang === "cs" ? "Kontakt" : "Contact"}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@panzmoravy.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+420 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{currentLang === "cs" ? "Praha, Česká republika" : "Prague, Czech Republic"}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{currentLang === "cs" ? "Rychlé odkazy" : "Quick Links"}</h4>
            <div className="space-y-3">
              <a href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                {currentLang === "cs" ? "Domů" : "Home"}
              </a>
              <a href="/projects" className="block text-muted-foreground hover:text-primary transition-colors">
                {currentLang === "cs" ? "Projekty" : "Projects"}
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-primary transition-colors">
                {currentLang === "cs" ? "Zkušenosti" : "Experience"}
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                {currentLang === "cs" ? "Kontakt" : "Contact"}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Panzmoravy. {currentLang === "cs" ? "Všechna práva vyhrazena." : "All rights reserved."}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              {currentLang === "cs" ? "Ochrana soukromí" : "Privacy Policy"}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {currentLang === "cs" ? "Podmínky použití" : "Terms of Service"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
