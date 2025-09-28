import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Projects() {
  const projects = [
    {
      title: "TODO Professional App",
      description:
        "A comprehensive task management platform designed for professional teams. Features advanced project organization, time tracking, team collaboration, and detailed analytics.",
      image: "/professional-todo-app-dashboard.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "WebSocket", "Analytics"],
      category: "Productivity",
      year: "2024",
    },
    {
      title: "Trading Indicators Suite",
      description:
        "Advanced technical analysis platform providing real-time market indicators, custom charting tools, and algorithmic signal generation for professional traders.",
      image: "/trading-charts-and-indicators.jpg",
      technologies: ["Python", "React", "WebSocket", "Financial APIs", "Machine Learning"],
      category: "FinTech",
      year: "2023",
    },
    {
      title: "AOS Trading System",
      description:
        "Algorithmic Order System (AOS) that automates trade execution based on predefined strategies. Includes risk management, portfolio optimization, and real-time monitoring.",
      image: "/algorithmic-trading-system-interface.jpg",
      technologies: ["C++", "Python", "Redis", "Market Data APIs", "Risk Engine"],
      category: "Trading",
      year: "2023",
    },
    {
      title: "Portfolio Analytics Dashboard",
      description:
        "Real-time portfolio management tool with advanced analytics, performance tracking, and risk assessment capabilities for institutional investors.",
      image: "/portfolio-analytics-dashboard.jpg",
      technologies: ["TypeScript", "D3.js", "Node.js", "MongoDB", "Financial Modeling"],
      category: "Analytics",
      year: "2022",
    },
    {
      title: "Market Data Aggregator",
      description:
        "High-performance system for collecting, processing, and distributing real-time market data from multiple exchanges with sub-millisecond latency.",
      image: "/market-data-streaming-interface.jpg",
      technologies: ["Go", "Apache Kafka", "TimescaleDB", "gRPC", "Kubernetes"],
      category: "Infrastructure",
      year: "2022",
    },
    {
      title: "Risk Management Platform",
      description:
        "Comprehensive risk assessment and monitoring system for trading operations, featuring real-time position tracking and automated risk controls.",
      image: "/risk-management-dashboard.jpg",
      technologies: ["Java", "Spring Boot", "Apache Spark", "Elasticsearch", "Docker"],
      category: "Risk Management",
      year: "2021",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm text-muted-foreground mb-12 font-mono uppercase tracking-wider">Selected Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 bg-card hover:bg-accent/50 transition-colors">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" className="h-8 px-3">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      View Project
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-3">
                      <Github className="h-3 w-3 mr-2" />
                      Code
                    </Button>
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
