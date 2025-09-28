"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ProjectPreviewsEnhanced() {
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
    setTimeout(() => setIsVisible(true), 200)
    
    return () => window.removeEventListener("languageChange", handleLanguageChange as EventListener)
  }, [])

  // TODO: Aktualizovat vybrané projekty podle skutečných projektů
  // Struktura pro budoucí projekty:
  // - Přidat skutečné projekty z vaší práce
  // - Aktualizovat obrázky, popisy a technologie
  // - Přidat skutečné výsledky a metriky
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
    <section className="relative py-32 px-6 bg-gradient-to-br from-muted/20 via-background to-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`flex items-center justify-between mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {currentLang === "cs" ? "Vybrané projekty" : "Featured Projects"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {currentLang === "cs"
                ? "Přehled klíčových projektů a aplikací, které demonstrují mé dovednosti"
                : "Overview of key projects and applications showcasing my expertise"}
            </p>
          </div>
          <Link href="/projects">
            <Button variant="outline" className="group bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg">
              {currentLang === "cs" ? "Všechny projekty" : "View All Projects"}
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 hover:bg-card/90 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg?height=300&width=400"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <Button size="sm" variant="secondary" className="h-10 w-10 p-0 bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/20">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-10 w-10 p-0 bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/20">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-primary-foreground text-sm px-4 py-2 rounded-full font-semibold shadow-lg">
                      {project.year}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="bg-green-500/90 text-white text-sm px-4 py-2 rounded-full font-medium backdrop-blur-sm">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground font-mono uppercase tracking-wider bg-muted/50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-sm bg-muted/70 text-muted-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
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
