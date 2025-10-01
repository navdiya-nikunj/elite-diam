import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DiamondTypes } from "@/components/diamond-types"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <DiamondTypes />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
