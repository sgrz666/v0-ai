import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TechSoulSection } from "@/components/tech-soul-section"
import { PhysicalEmpathySection } from "@/components/physical-empathy-section"
import { ClinicalSection } from "@/components/clinical-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <TechSoulSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <PhysicalEmpathySection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <ClinicalSection />
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <EcosystemSection />
      <Footer />
    </main>
  )
}
