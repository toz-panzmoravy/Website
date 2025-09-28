"use client"

import { useState, useEffect } from "react"
import { MapPin, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ExperienceClean() {
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
      location: currentLang === "cs" ? "Praha, Česká republika" : "Prague, Czech Republic",
      description:
        currentLang === "cs"
          ? "Vedení produktové strategie pro profesionální obchodní aplikace. Spolupráce s multifunkčními týmy na dodávání inovativních řešení pro více než 10 000 aktivních uživatelů."
          : "Leading product strategy for professional trading applications. Collaborating with cross-functional teams to deliver innovative solutions for 10,000+ active users.",
      achievements: [
        currentLang === "cs" ? "65% zvýšení zapojení uživatelů" : "65% increase in user engagement",
        currentLang === "cs" ? "40% rychlejší uvedení na trh" : "40% faster time-to-market",
        currentLang === "cs" ? "Spuštění 3 hlavních produktů" : "Launched 3 major product features",
      ],
      current: true,
    },
    {
      period: "2021 — 2023",
      role: currentLang === "cs" ? "Product Manager" : "Product Manager",
      company: "FinanceFlow",
      location: currentLang === "cs" ? "Brno, Česká republika" : "Brno, Czech Republic",
      description:
        currentLang === "cs"
          ? "Řízení vývoje algoritmických obchodních systémů a platforem pro správu objednávek. Spolupráce s kvantitativními analytiky a inženýry."
          : "Managed development of algorithmic trading systems and order management platforms. Worked with quantitative analysts and engineers.",
      achievements: [
        currentLang === "cs" ? "99.9% dostupnost systému" : "99.9% system uptime achieved",
        currentLang === "cs" ? "30% snížení provozních nákladů" : "30% reduction in operational costs",
        currentLang === "cs" ? "Implementace risk managementu" : "Implemented risk management system",
      ],
      current: false,
    },
    {
      period: "2019 — 2021",
      role: currentLang === "cs" ? "Technical Product Owner" : "Technical Product Owner",
      company: "StartupLab",
      location: currentLang === "cs" ? "Praha, Česká republika" : "Prague, Czech Republic",
      description:
        currentLang === "cs"
          ? "Vytváření a spouštění produktivních aplikací od konceptu po trh. Zaměření na optimalizaci uživatelské zkušenosti a růst uživatelské základny."
          : "Built and launched productivity applications from concept to market. Focused on user experience optimization and user base growth.",
      achievements: [
        currentLang === "cs" ? "5 produktů úspěšně spuštěno" : "5 products successfully launched",
        currentLang === "cs" ? "250% růst uživatelské základny" : "250% user base growth",
        currentLang === "cs" ? "Zavedení agile metodologie" : "Established agile methodology",
      ],
      current: false,
    },
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">
            {currentLang === "cs" ? "Profesionální zkušenosti" : "Professional Experience"}
          </h2>
          <p className="text-muted-foreground text-lg">
            {currentLang === "cs"
              ? "Přehled klíčových pozic a dosažených výsledků"
              : "Overview of key positions and achievements"}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-l-4 border-l-primary/20 hover:border-l-primary transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{exp.role}</h3>
                      {exp.current && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {currentLang === "cs" ? "Současnost" : "Current"}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-muted-foreground mb-4">
                      <span className="font-medium text-foreground">{exp.company}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {currentLang === "cs" ? "Klíčové úspěchy" : "Key Achievements"}
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground lg:flex-col lg:items-end lg:text-right">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono">{exp.period}</span>
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
