import { Bot, Palette, Github, Code2, Globe, Zap, Layers, BarChart3, Settings, Users, Database, Terminal } from "lucide-react"

export function TechStack() {
  const technologies = [
    { name: "Jira", icon: Settings, category: "Project Management" },
    { name: "GitHub", icon: Github, category: "Development" },
    { name: "Python", icon: Code2, category: "Programming" },
    { name: "NextJS", icon: Zap, category: "Frontend" },
    { name: "UX Design", icon: Layers, category: "Design" },
    { name: "ChatGPT", icon: Bot, category: "AI Tools" },
    { name: "MidJourney", icon: Palette, category: "AI Tools" },
    { name: "React", icon: Code2, category: "Frontend" },
    { name: "TypeScript", icon: Terminal, category: "Programming" },
    { name: "Node.js", icon: Globe, category: "Backend" },
    { name: "Analytics", icon: BarChart3, category: "Data" },
    { name: "Database", icon: Database, category: "Backend" },
  ]

  return (
    <section className="py-20 px-6 border-t border-border/50 bg-gradient-to-br from-muted/10 via-transparent to-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologie a nástroje, které používám při práci na produktech
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <div key={index} className="flex flex-col items-center group p-4 rounded-xl hover:bg-card/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-3 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 transform group-hover:scale-110">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary/80 transition-colors" />
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors text-center">
                  {tech.name}
                </span>
                <span className="text-xs text-muted-foreground mt-1 text-center">
                  {tech.category}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
