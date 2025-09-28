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
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-4">{currentLang === "cs" ? "Projekty" : "Projects"}</h1>
            <p className="text-muted-foreground text-lg">
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
