"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ProjectPreviewsEnhanced() {
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

  const featuredProjects = [
    {
      title: "TODO Professional App",
      description:
        currentLang === "cs"
          ? "Komplexní platforma pro správu úkolů pro profesionální týmy s pokročilými funkcemi"
          : "Comprehensive task management platform for professional teams with advanced features",
      category: currentLang === "cs" ? "Produktivita" : "Productivity",
      image: "/professional-todo-app-dashboard.jpg",
      technologies: ["React", "Node.js", "PostgreSQL"],
      status: currentLang === "cs" ? "Aktivní" : "Active",
      year: "2023",
    },
    {
      title: "Trading Indicators Suite",
      description:
        currentLang === "cs"
          ? "Pokročilá platforma pro technickou analýzu s indikátory v reálném čase"
          : "Advanced technical analysis platform with real-time indicators",
      category: "FinTech",
      image: "/trading-charts-and-indicators.jpg",
      technologies: ["Python", "React", "WebSocket"],
      status: currentLang === "cs" ? "Aktivní" : "Active",
      year: "2023",
    },
    {
      title: "AOS Trading System",
      description:
        currentLang === "cs"
          ? "Algoritmický systém objednávek s automatizovaným prováděním obchodů"
          : "Algorithmic Order System with automated trade execution",
      category: currentLang === "cs" ? "Obchodování" : "Trading",
      image: "/algorithmic-trading-system-interface.jpg",
      technologies: ["Python", "Redis", "Machine Learning"],
      status: currentLang === "cs" ? "Aktivní" : "Active",
      year: "2023",
    },
  ]

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              {currentLang === "cs" ? "Vybrané projekty" : "Featured Projects"}
            </h2>
            <p className="text-muted-foreground">
              {currentLang === "cs"
                ? "Přehled klíčových projektů a aplikací"
                : "Overview of key projects and applications"}
            </p>
          </div>
          <Link href="/projects">
            <Button variant="outline" className="group bg-transparent">
              {currentLang === "cs" ? "Všechny projekty" : "View All Projects"}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg?height=300&width=400"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">{project.status}</span>
                  </div>

                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
