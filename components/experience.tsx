"use client"

import { useState, useEffect } from "react"

export function Experience() {
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

  const experiences = [
    {
      period: "2023 — Present",
      role: currentLang === "cs" ? "Senior Product Owner" : "Senior Product Owner",
      company: "TechCorp",
      logo: "/company-techcorp.jpg",
      description:
        currentLang === "cs"
          ? "Vedení produktové strategie pro profesionální obchodní aplikace obsluhující více než 10 000 aktivních uživatelů. Spolupráce s multifunkčními týmy na dodávání inovativních řešení, která zpracovávají více než 500 milionů USD denního obchodního objemu."
          : "Lead product strategy for professional trading applications serving 10,000+ active users. Collaborate with cross-functional teams to deliver innovative solutions that process $500M+ in daily trading volume.",
      technologies: ["Product Strategy", "Agile", "User Research", "Analytics", "Roadmapping"],
      achievements:
        currentLang === "cs"
          ? [
              "Zvýšení zapojení uživatelů o 65%",
              "Snížení času uvedení na trh o 40%",
              "Vedení týmu 12 vývojářů a designérů",
            ]
          : [
              "Increased user engagement by 65%",
              "Reduced time-to-market by 40%",
              "Led team of 12 developers and designers",
            ],
    },
    {
      period: "2021 — 2023",
      role: currentLang === "cs" ? "Product Manager" : "Product Manager",
      company: "FinanceFlow",
      logo: "/company-financeflow.jpg",
      description:
        currentLang === "cs"
          ? "Řízení vývoje algoritmických obchodních systémů a platforem pro správu objednávek. Spolupráce s kvantitativními analytiky a inženýry na převodu složitých finančních požadavků do uživatelsky přívětivých produktů."
          : "Managed development of algorithmic trading systems and order management platforms. Worked with quantitative analysts and engineers to translate complex financial requirements into user-friendly products.",
      technologies: ["Financial Systems", "API Design", "Risk Management", "Compliance", "Trading Algorithms"],
      achievements:
        currentLang === "cs"
          ? [
              "Spuštění 3 hlavních produktových funkcí",
              "Dosažení 99,9% dostupnosti systému",
              "Snížení provozních nákladů o 30%",
            ]
          : ["Launched 3 major product features", "Achieved 99.9% system uptime", "Reduced operational costs by 30%"],
    },
    {
      period: "2019 — 2021",
      role: currentLang === "cs" ? "Technical Product Owner" : "Technical Product Owner",
      company: "StartupLab",
      logo: "/company-startuplab.jpg",
      description:
        currentLang === "cs"
          ? "Vytváření a spouštění více produktivních aplikací od konceptu po trh. Zaměření na optimalizaci uživatelské zkušenosti a hodnocení technické proveditelnosti pro produkty v rané fázi."
          : "Built and launched multiple productivity applications from concept to market. Focused on user experience optimization and technical feasibility assessment for early-stage products.",
      technologies: ["MVP Development", "User Testing", "Market Research", "Technical Architecture", "Growth Metrics"],
      achievements:
        currentLang === "cs"
          ? ["Spuštění 5 úspěšných produktů", "Dosažení 250% růstu uživatelů", "Zajištění 2 milionů USD financování"]
          : ["Launched 5 successful products", "Achieved 250% user growth", "Secured $2M in funding"],
    },
  ]

  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm text-muted-foreground mb-16 font-mono uppercase tracking-wider text-center">
          {currentLang === "cs" ? "Profesionální zkušenosti" : "Professional Experience"}
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-8 group">
                {/* Timeline dot and company logo */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                    <img
                      src={exp.logo || "/placeholder.svg?height=40&width=40&query=company logo"}
                      alt={`${exp.company} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  {/* Timeline connector dot */}
                  <div className="absolute left-1/2 top-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                      <div className="text-lg text-primary font-medium">{exp.company}</div>
                    </div>
                    <div className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">{exp.period}</div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                      {currentLang === "cs" ? "Klíčové úspěchy" : "Key Achievements"}
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
