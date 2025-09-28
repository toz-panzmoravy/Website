"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, Award, TrendingUp } from "lucide-react"

export function ExperienceNew() {
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
      logo: "/company-techcorp.jpg",
      description:
        currentLang === "cs"
          ? "Vedení produktové strategie pro profesionální obchodní aplikace obsluhující více než 10 000 aktivních uživatelů. Spolupráce s multifunkčními týmy na dodávání inovativních řešení."
          : "Leading product strategy for professional trading applications serving 10,000+ active users. Collaborating with cross-functional teams to deliver innovative solutions.",
      keyMetrics: [
        {
          value: "65%",
          label: currentLang === "cs" ? "Zvýšení zapojení" : "Engagement Increase",
          icon: TrendingUp,
        },
        {
          value: "40%",
          label: currentLang === "cs" ? "Rychlejší uvedení" : "Faster Time-to-Market",
          icon: Award,
        },
      ],
      technologies: ["Product Strategy", "Agile", "User Research", "Analytics", "Roadmapping"],
      current: true,
    },
    {
      period: "2021 — 2023",
      role: currentLang === "cs" ? "Product Manager" : "Product Manager",
      company: "FinanceFlow",
      location: currentLang === "cs" ? "Brno, Česká republika" : "Brno, Czech Republic",
      logo: "/company-financeflow.jpg",
      description:
        currentLang === "cs"
          ? "Řízení vývoje algoritmických obchodních systémů a platforem pro správu objednávek. Spolupráce s kvantitativními analytiky a inženýry."
          : "Managed development of algorithmic trading systems and order management platforms. Worked with quantitative analysts and engineers.",
      keyMetrics: [
        {
          value: "99.9%",
          label: currentLang === "cs" ? "Dostupnost systému" : "System Uptime",
          icon: Award,
        },
        {
          value: "30%",
          label: currentLang === "cs" ? "Snížení nákladů" : "Cost Reduction",
          icon: TrendingUp,
        },
      ],
      technologies: ["Financial Systems", "API Design", "Risk Management", "Compliance"],
      current: false,
    },
    {
      period: "2019 — 2021",
      role: currentLang === "cs" ? "Technical Product Owner" : "Technical Product Owner",
      company: "StartupLab",
      location: currentLang === "cs" ? "Praha, Česká republika" : "Prague, Czech Republic",
      logo: "/company-startuplab.jpg",
      description:
        currentLang === "cs"
          ? "Vytváření a spouštění více produktivních aplikací od konceptu po trh. Zaměření na optimalizaci uživatelské zkušenosti."
          : "Built and launched multiple productivity applications from concept to market. Focused on user experience optimization.",
      keyMetrics: [
        {
          value: "5",
          label: currentLang === "cs" ? "Spuštěné produkty" : "Products Launched",
          icon: Award,
        },
        {
          value: "250%",
          label: currentLang === "cs" ? "Růst uživatelů" : "User Growth",
          icon: TrendingUp,
        },
      ],
      technologies: ["MVP Development", "User Testing", "Market Research", "Growth Metrics"],
      current: false,
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            {currentLang === "cs" ? "Profesionální zkušenosti" : "Professional Experience"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {currentLang === "cs"
              ? "Cesta produktového vlastníka s důrazem na inovace a výsledky"
              : "A product owner's journey focused on innovation and results"}
          </p>
        </div>

        <div className="relative">
          {/* Modern timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent h-full hidden lg:block"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:gap-16 gap-8`}
              >
                {/* Content Card */}
                <div
                  className={`flex-1 ${index % 2 === 0 ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8"} text-center lg:text-left`}
                >
                  <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    {/* Header */}
                    <div
                      className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"} justify-center`}
                    >
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <img
                          src={exp.logo || "/placeholder.svg?height=40&width=40&query=company logo"}
                          alt={`${exp.company} logo`}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className={`${index % 2 === 0 ? "lg:text-right" : "lg:text-left"} text-center lg:text-left`}>
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                        <div className="text-lg font-semibold text-primary">{exp.company}</div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 justify-center lg:justify-start">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                      {exp.current && (
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs ml-2">
                          {currentLang === "cs" ? "Současnost" : "Current"}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-8 text-lg">{exp.description}</p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {exp.keyMetrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center p-4 bg-muted/50 rounded-xl">
                          <div className="flex items-center justify-center mb-2">
                            <metric.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                          <div className="text-sm text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative flex-shrink-0 hidden lg:block">
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  {exp.current && <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse"></div>}
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
