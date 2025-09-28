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
      period: "09.2024 — Present",
      role: currentLang === "cs" ? "Product Owner" : "Product Owner",
      company: "SledovaniTV",
      location: currentLang === "cs" ? "Brno, Česká republika" : "Brno, Czech Republic",
      description:
        currentLang === "cs"
          ? "Vedení produktové strategie pro platformu sledování televize. Spolupráce s vývojovými týmy na vytváření inovativních funkcí pro lepší uživatelskou zkušenost."
          : "Leading product strategy for TV tracking platform. Collaborating with development teams to create innovative features for better user experience.",
      achievements: [
        currentLang === "cs" ? "Zlepšení uživatelské zkušenosti" : "Improved user experience",
        currentLang === "cs" ? "Implementace nových funkcí" : "Implementation of new features",
        currentLang === "cs" ? "Optimalizace produktových procesů" : "Product process optimization",
      ],
      current: true,
    },
    {
      period: "02.2023 — 09.2024",
      role: currentLang === "cs" ? "Product Manager" : "Product Manager",
      company: "Legito",
      location: currentLang === "cs" ? "Brno, Česká republika" : "Brno, Czech Republic",
      description:
        currentLang === "cs"
          ? "Řízení produktového vývoje právních dokumentů a automatizace. Spolupráce s právníky a vývojáři na vytváření efektivních řešení."
          : "Managing product development of legal documents and automation. Collaborating with lawyers and developers to create efficient solutions.",
      achievements: [
        currentLang === "cs" ? "Automatizace právních procesů" : "Legal process automation",
        currentLang === "cs" ? "Zlepšení efektivity týmu" : "Team efficiency improvement",
        currentLang === "cs" ? "Rozšíření produktové nabídky" : "Product portfolio expansion",
      ],
      current: false,
    },
    {
      period: "11.2022 — 06.2024",
      role: currentLang === "cs" ? "Software Tester" : "Software Tester",
      company: "Legito",
      location: currentLang === "cs" ? "Brno, Česká republika" : "Brno, Czech Republic",
      description:
        currentLang === "cs"
          ? "Testování softwarových aplikací a zajištění kvality produktů. Spolupráce s vývojovými týmy na identifikaci a řešení problémů."
          : "Testing software applications and ensuring product quality. Collaborating with development teams to identify and resolve issues.",
      achievements: [
        currentLang === "cs" ? "Zlepšení kvality produktů" : "Product quality improvement",
        currentLang === "cs" ? "Implementace testovacích procesů" : "Testing process implementation",
        currentLang === "cs" ? "Snížení počtu chyb" : "Bug reduction",
      ],
      current: false,
    },
    {
      period: "07.2022 — 09.2024",
      role: currentLang === "cs" ? "UX Designer" : "UX Designer",
      company: currentLang === "cs" ? "Freelancer" : "Freelancer",
      location: currentLang === "cs" ? "Česká republika" : "Czech Republic",
      description:
        currentLang === "cs"
          ? "Návrh uživatelských rozhraní a optimalizace uživatelské zkušenosti pro různé klienty. Vytváření wireframů, prototypů a designových systémů."
          : "Designing user interfaces and optimizing user experience for various clients. Creating wireframes, prototypes and design systems.",
      achievements: [
        currentLang === "cs" ? "Zlepšení uživatelské zkušenosti" : "User experience improvement",
        currentLang === "cs" ? "Vytvoření designových systémů" : "Design system creation",
        currentLang === "cs" ? "Spokojenost klientů" : "Client satisfaction",
      ],
      current: false,
    },
    {
      period: "06.2021 — 01.2022",
      role: currentLang === "cs" ? "Bankovní Poradce" : "Banking Advisor",
      company: "Komerční Banka a.s.",
      location: currentLang === "cs" ? "Uherské Hradiště, Česká republika" : "Uherské Hradiště, Czech Republic",
      description:
        currentLang === "cs"
          ? "Poradenství klientům v oblasti bankovních produktů a služeb. Spolupráce s obchodními týmy na dosahování cílů."
          : "Advising clients on banking products and services. Collaborating with sales teams to achieve targets.",
      achievements: [
        currentLang === "cs" ? "Spokojenost klientů" : "Client satisfaction",
        currentLang === "cs" ? "Dosažení obchodních cílů" : "Sales target achievement",
        currentLang === "cs" ? "Rozvoj komunikačních dovedností" : "Communication skills development",
      ],
      current: false,
    },
    {
      period: "09.2020 — 04.2021",
      role: currentLang === "cs" ? "Voják z povolání" : "Professional Soldier",
      company: "ARMY CZ",
      location: currentLang === "cs" ? "Česká republika" : "Czech Republic",
      description:
        currentLang === "cs"
          ? "Služba v české armádě s důrazem na týmovou spolupráci, disciplínu a vedení. Účast na vojenských cvičeních a operacích."
          : "Service in Czech Army with focus on teamwork, discipline and leadership. Participation in military exercises and operations.",
      achievements: [
        currentLang === "cs" ? "Rozvoj vedení a týmové práce" : "Leadership and teamwork development",
        currentLang === "cs" ? "Disciplína a odpovědnost" : "Discipline and responsibility",
        currentLang === "cs" ? "Fyzická kondice" : "Physical fitness",
      ],
      current: false,
    },
    {
      period: "08.2017 — 04.2019",
      role: currentLang === "cs" ? "Osobní trenér, výživový poradce a sportovní diagnostik" : "Personal Trainer, Nutrition Advisor and Sports Diagnostician",
      company: currentLang === "cs" ? "Soukromá praxe" : "Private Practice",
      location: currentLang === "cs" ? "Česká republika" : "Czech Republic",
      description:
        currentLang === "cs"
          ? "Poskytování komplexních služeb v oblasti fitness, výživy a sportovní diagnostiky. Vytváření individuálních plánů pro klienty."
          : "Providing comprehensive services in fitness, nutrition and sports diagnostics. Creating individual plans for clients.",
      achievements: [
        currentLang === "cs" ? "Spokojenost klientů" : "Client satisfaction",
        currentLang === "cs" ? "Výsledky klientů" : "Client results",
        currentLang === "cs" ? "Rozvoj odborných znalostí" : "Professional knowledge development",
      ],
      current: false,
    },
  ]

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-muted/10 via-transparent to-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            {currentLang === "cs" ? "Profesionální zkušenosti" : "Professional Experience"}
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            {currentLang === "cs"
              ? "Přehled klíčových pozic a dosažených výsledků v mé kariéře"
              : "Overview of key positions and achievements throughout my career"}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-l-4 border-l-primary/20 hover:border-l-primary transition-all duration-300 group hover:shadow-lg bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{exp.role}</h3>
                      {exp.current && (
                        <span className="bg-green-500/10 text-green-600 text-sm px-3 py-1 rounded-full font-medium border border-green-500/20">
                          {currentLang === "cs" ? "Současnost" : "Current"}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-muted-foreground mb-4">
                      <span className="font-semibold text-foreground text-lg">{exp.company}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{exp.description}</p>

                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        {currentLang === "cs" ? "Klíčové úspěchy" : "Key Achievements"}
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground lg:flex-col lg:items-end lg:text-right">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono text-base">{exp.period}</span>
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
