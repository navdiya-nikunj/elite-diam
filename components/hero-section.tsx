"use client"

import { Button } from "@/components/ui/button"
import { SparkleEffect } from "@/components/sparkle-effect"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-diamonds-on-black-velvet-background-with-dr.jpg"
          alt="Luxury diamonds background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/80" />
      </div>

      {/* Sparkle Effects */}
      <SparkleEffect />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="text-foreground">Elite</span> <span className="text-primary">Daim</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
          Premium Diamond Exporters Worldwide
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          Discover our exceptional collection of certified lab-grown and natural diamonds. We export the finest quality
          diamonds to clients across the globe with unmatched expertise and trust.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={scrollToContact} className="text-lg px-8 py-6">
            Explore Our Collection
          </Button>
          <Button size="lg" variant="outline" onClick={scrollToContact} className="text-lg px-8 py-6 bg-transparent">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
