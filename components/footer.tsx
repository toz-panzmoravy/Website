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
    <footer className="relative bg-gradient-to-br from-card via-background to-card border-t border-border/50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">P</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Panzmoravy</h3>
                <p className="text-muted-foreground font-medium">Product Owner & Innovator</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg text-lg">
              {currentLang === "cs"
                ? "Specializuji se na vytváření inovativních produktů, které řeší reálné problémy a přinášejí hodnotu uživatelům i firmám."
                : "Specializing in creating innovative products that solve real problems and deliver value to both users and businesses."}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-foreground">{currentLang === "cs" ? "Kontakt" : "Contact"}</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">hello@panzmoravy.com</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">+420 123 456 789</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg">{currentLang === "cs" ? "Praha, Česká republika" : "Prague, Czech Republic"}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 text-foreground">{currentLang === "cs" ? "Rychlé odkazy" : "Quick Links"}</h4>
            <div className="space-y-4">
              <a href="/" className="block text-muted-foreground hover:text-primary transition-all duration-300 text-lg hover:translate-x-2 transform">
                {currentLang === "cs" ? "Domů" : "Home"}
              </a>
              <a href="/projects" className="block text-muted-foreground hover:text-primary transition-all duration-300 text-lg hover:translate-x-2 transform">
                {currentLang === "cs" ? "Projekty" : "Projects"}
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-primary transition-all duration-300 text-lg hover:translate-x-2 transform">
                {currentLang === "cs" ? "Zkušenosti" : "Experience"}
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-all duration-300 text-lg hover:translate-x-2 transform">
                {currentLang === "cs" ? "Kontakt" : "Contact"}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-lg">
            © {currentYear} Panzmoravy. {currentLang === "cs" ? "Všechna práva vyhrazena." : "All rights reserved."}
          </p>
          <div className="flex gap-8 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-all duration-300 text-lg hover:scale-105 transform">
              {currentLang === "cs" ? "Ochrana soukromí" : "Privacy Policy"}
            </a>
            <a href="#" className="hover:text-primary transition-all duration-300 text-lg hover:scale-105 transform">
              {currentLang === "cs" ? "Podmínky použití" : "Terms of Service"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
