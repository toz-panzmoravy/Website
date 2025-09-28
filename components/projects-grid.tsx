"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  video?: string
  technologies: string[]
  category: string
  year: string
  features: string[]
  challenges: string[]
  results: string[]
}

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // TODO: Aktualizovat projekty podle skutečných projektů
  // Struktura pro budoucí projekty:
  // - Přidat skutečné projekty z vaší práce
  // - Aktualizovat obrázky, popisy a technologie
  // - Přidat skutečné výsledky a metriky
  const projects: Project[] = [
    {
      id: "todo-app",
      title: "TODO Professional App",
      description: "Comprehensive task management platform for professional teams",
      longDescription:
        "A sophisticated task management platform designed specifically for professional teams and organizations. The application features advanced project organization capabilities, real-time collaboration tools, comprehensive time tracking, and detailed analytics to help teams optimize their productivity and workflow efficiency.",
      image: "/professional-todo-app-dashboard.jpg",
      images: [
        "/professional-todo-app-dashboard.jpg",
        "/professional-todo-app-interface.jpg",
        "/todo-app-analytics.jpg",
      ],
      video: "/todo-app-demo.mp4",
      technologies: ["React", "Node.js", "PostgreSQL", "WebSocket", "Redis", "Docker"],
      category: "Productivity",
      year: "2024",
      features: [
        "Real-time collaboration and updates",
        "Advanced project organization with nested tasks",
        "Comprehensive time tracking and reporting",
        "Team performance analytics and insights",
        "Custom workflow automation",
        "Integration with popular development tools",
      ],
      challenges: [
        "Implementing real-time synchronization across multiple users",
        "Designing scalable database architecture for complex task hierarchies",
        "Creating intuitive UX for advanced project management features",
      ],
      results: [
        "Increased team productivity by 40% in pilot organizations",
        "Reduced project completion time by 25%",
        "Achieved 95% user satisfaction rating",
      ],
    },
    {
      id: "trading-indicators",
      title: "Trading Indicators Suite",
      description: "Advanced technical analysis platform with real-time market indicators",
      longDescription:
        "A comprehensive technical analysis platform that provides professional traders with advanced market indicators, custom charting tools, and algorithmic signal generation. The system processes real-time market data to deliver actionable insights and trading signals.",
      image: "/trading-charts-and-indicators.jpg",
      images: ["/trading-charts-and-indicators.jpg", "/trading-indicators-dashboard.jpg", "/market-analysis-tools.jpg"],
      technologies: ["Python", "React", "WebSocket", "Financial APIs", "Machine Learning", "Redis"],
      category: "FinTech",
      year: "2023",
      features: [
        "Real-time market data processing",
        "Custom technical indicators and overlays",
        "Algorithmic signal generation",
        "Multi-timeframe analysis",
        "Portfolio performance tracking",
        "Risk assessment tools",
      ],
      challenges: [
        "Processing high-frequency market data with minimal latency",
        "Implementing complex financial algorithms accurately",
        "Creating responsive charts for real-time data visualization",
      ],
      results: [
        "Processed over 1M data points per second",
        "Achieved sub-100ms latency for signal generation",
        "Used by 500+ professional traders",
      ],
    },
    {
      id: "aos-system",
      title: "AOS Trading System",
      description: "Algorithmic Order System with automated trade execution",
      longDescription:
        "An advanced Algorithmic Order System (AOS) that automates trade execution based on predefined strategies and market conditions. The system includes sophisticated risk management, portfolio optimization, and real-time monitoring capabilities.",
      image: "/algorithmic-trading-system-interface.jpg",
      images: [
        "/algorithmic-trading-system-interface.jpg",
        "/aos-risk-management.jpg",
        "/trading-execution-dashboard.jpg",
      ],
      technologies: ["C++", "Python", "Redis", "Market Data APIs", "Risk Engine", "Kubernetes"],
      category: "Trading",
      year: "2023",
      features: [
        "Automated trade execution with multiple strategies",
        "Real-time risk management and position monitoring",
        "Portfolio optimization algorithms",
        "Market impact analysis",
        "Compliance and audit trail",
        "High-frequency trading capabilities",
      ],
      challenges: [
        "Ensuring microsecond-level execution latency",
        "Implementing robust risk controls and circuit breakers",
        "Managing complex multi-asset portfolio optimization",
      ],
      results: [
        "Executed over $100M in trades with 99.9% uptime",
        "Reduced execution costs by 30%",
        "Maintained zero compliance violations",
      ],
    },
  ]

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="group overflow-hidden border-0 bg-card hover:bg-accent/30 transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <CardContent className="p-0">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg?height=300&width=400"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-7xl w-[95vw] max-h-[95vh] overflow-y-auto p-0 mx-4">
          {selectedProject && (
            <>
              <DialogHeader className="p-8 pb-4">
                <DialogTitle className="text-3xl font-bold">{selectedProject.title}</DialogTitle>
              </DialogHeader>

              <div className="px-6 md:px-12 pb-12 space-y-8 md:space-y-12">
                <div className="aspect-[16/9] overflow-hidden rounded-xl md:rounded-2xl bg-muted shadow-2xl">
                  <img
                    src={selectedProject.image || "/placeholder.svg?height=600&width=1200"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-16">
                  <div className="lg:col-span-1 xl:col-span-2 space-y-8 md:space-y-12">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg md:text-xl max-w-4xl">{selectedProject.longDescription}</p>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground">Key Features</h3>
                      <ul className="space-y-4 md:space-y-6">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="text-muted-foreground flex items-start group">
                            <span className="w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full mt-2 mr-4 md:mr-6 flex-shrink-0 group-hover:bg-primary/80 transition-colors"></span>
                            <span className="text-lg md:text-xl leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground">Results & Impact</h3>
                      <ul className="space-y-4 md:space-y-6">
                        {selectedProject.results.map((result, index) => (
                          <li key={index} className="text-muted-foreground flex items-start group">
                            <span className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full mt-2 mr-4 md:mr-6 flex-shrink-0 group-hover:bg-green-400 transition-colors"></span>
                            <span className="text-lg md:text-xl leading-relaxed">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-8 md:space-y-12">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground">Technology Stack</h3>
                      <div className="flex flex-wrap gap-3 md:gap-4">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="px-4 md:px-6 py-3 md:py-4 bg-muted text-muted-foreground text-base md:text-lg rounded-xl hover:bg-muted/80 transition-colors">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-foreground">Project Details</h3>
                      <div className="space-y-4 md:space-y-6 text-lg md:text-xl">
                        <div className="flex justify-between items-center p-3 md:p-4 bg-muted/50 rounded-xl">
                          <span className="text-muted-foreground">Category:</span>
                          <span className="font-semibold text-foreground">{selectedProject.category}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 md:p-4 bg-muted/50 rounded-xl">
                          <span className="text-muted-foreground">Year:</span>
                          <span className="font-semibold text-foreground">{selectedProject.year}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                      <Button size="lg" className="flex-1 text-base md:text-lg py-6 md:py-8 px-6 md:px-8 bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                        <ExternalLink className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
                        View Live
                      </Button>
                      <Button variant="outline" size="lg" className="flex-1 text-base md:text-lg py-6 md:py-8 px-6 md:px-8 bg-transparent hover:bg-muted transition-all duration-300 transform hover:scale-105">
                        <Github className="w-5 h-5 md:w-6 md:h-6 mr-3 md:mr-4" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
