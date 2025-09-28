import { Bot, Palette, Github, Code2, Globe, Zap, Layers, BarChart3 } from "lucide-react"

export function TechStack() {
  const technologies = [
    { name: "ChatGPT", icon: Bot },
    { name: "MidJourney", icon: Palette },
    { name: "GitHub", icon: Github },
    { name: "Python", icon: Code2 },
    { name: "Next.js", icon: Zap },
    { name: "UX Design", icon: Layers },
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: Code2 },
    { name: "Node.js", icon: Globe },
    { name: "Analytics", icon: BarChart3 },
  ]

  return (
    <section className="py-16 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm text-muted-foreground mb-12 text-center font-mono uppercase tracking-wider">
          Technology Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon
            return (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
