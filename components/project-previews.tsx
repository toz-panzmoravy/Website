import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function ProjectPreviews() {
  const featuredProjects = [
    {
      title: "TODO Professional App",
      description: "Comprehensive task management platform for professional teams",
      category: "Productivity",
      image: "/professional-todo-app-dashboard.jpg",
    },
    {
      title: "Trading Indicators Suite",
      description: "Advanced technical analysis platform with real-time indicators",
      category: "FinTech",
      image: "/trading-charts-and-indicators.jpg",
    },
    {
      title: "AOS Trading System",
      description: "Algorithmic Order System with automated trade execution",
      category: "Trading",
      image: "/algorithmic-trading-system-interface.jpg",
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Featured Projects</h2>
          <Link href="/projects">
            <Button variant="ghost" size="sm">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:bg-accent/30 transition-all duration-300"
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
                  <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
