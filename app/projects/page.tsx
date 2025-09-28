"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { ProjectsGrid } from "@/components/projects-grid"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
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
    <main className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Header />
      <div className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {currentLang === "cs" ? "Projekty" : "Projects"}
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl leading-relaxed">
              {currentLang === "cs"
                ? "Kolekce profesionálních aplikací a systémů, které jsem vytvořil jako Product Owner."
                : "A collection of professional applications and systems I've built as a Product Owner."}
            </p>
          </div>
          <ProjectsGrid />
        </div>
      </div>
      <Footer />
    </main>
  )
}
