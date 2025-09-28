"use client"

import { useState, useEffect } from "react"

export function Hero() {
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

  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance">Panzmoravy</h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
          {currentLang === "cs"
            ? "Transformuji nápady na inovativní řešení"
            : "Transforming ideas into innovative solutions"}
        </p>

        <div className="w-16 h-px bg-primary mx-auto"></div>
      </div>
    </section>
  )
}
