"use client"

import { useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const [currentLang, setCurrentLang] = useState("en")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || "en"
    setCurrentLang(savedLang)

    const handleLanguageChange = (event: CustomEvent) => {
      setCurrentLang(event.detail)
    }

    window.addEventListener("languageChange", handleLanguageChange as EventListener)
    
    // Trigger animation after component mounts
    setTimeout(() => setIsVisible(true), 100)
    
    return () => window.removeEventListener("languageChange", handleLanguageChange as EventListener)
  }, [])

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-balance bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
            Panzmoravy
          </h1>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 font-light max-w-4xl mx-auto leading-relaxed">
            {currentLang === "cs"
              ? "Transformuji nápady na inovativní řešení"
              : "Transforming ideas into innovative solutions"}
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
          
          <div className="flex flex-col items-center space-y-4">
            <p className="text-lg text-muted-foreground/80">
              {currentLang === "cs" ? "Scrollujte dolů a objevte mé projekty" : "Scroll down to explore my projects"}
            </p>
            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
