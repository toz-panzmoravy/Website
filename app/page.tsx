import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TechStack } from "@/components/tech-stack"
import { ProjectPreviewsEnhanced } from "@/components/project-previews-enhanced"
import { ExperienceClean } from "@/components/experience-clean"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TechStack />
      <ProjectPreviewsEnhanced />
      <ExperienceClean />
      <Footer />
    </main>
  )
}
