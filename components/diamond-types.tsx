import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gem, Sparkles, Award, Shield } from "lucide-react"

export function DiamondTypes() {
  const diamondTypes = [
    {
      title: "Natural Diamonds",
      description: "Earth-formed diamonds with billions of years of natural beauty",
      icon: <Gem className="h-8 w-8 text-primary" />,
      features: ["GIA Certified", "Conflict-Free", "Premium Quality", "Global Sourcing"],
      image: "/natural-diamond-close-up-with-brilliant-cut-and-sp.jpg",
    },
    {
      title: "Lab-Grown Diamonds",
      description: "Scientifically created diamonds with identical properties to natural ones",
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      features: ["CVD & HPHT", "Eco-Friendly", "Cost-Effective", "Same Brilliance"],
      image: "/lab-grown-diamond-in-modern-laboratory-setting-wit.jpg",
    },
    {
      title: "Certified Diamonds",
      description: "All our diamonds come with international certification",
      icon: <Award className="h-8 w-8 text-primary" />,
      features: ["IGI Certified", "GIA Certified","Detailed Reports", "Quality Assured", "Traceable Origin"],
      image: "/diamond-certification-documents-with-magnifying-gl.jpg",
    },
    {
      title: "Non-Certified Diamonds",
      description: "Purchase diamonds without certification for budget-friendly options",
      icon: <Award className="h-8 w-8 text-primary" />,
      features: ["Affordable Options", "Quality Checked", "Variety of Cuts", "Trusted Sources"],
      image: "/akhilesh-sharma-1Ar-qd7-uMA-unsplash.jpg",
    },
    {
      title: "Custom Solutions",
      description: "Tailored diamond solutions for your specific requirements",
      icon: <Shield className="h-8 w-8 text-primary" />,
      features: ["Bulk Orders", "Custom Cuts", "Flexible Terms", "Expert Consultation"],
      image: "/custom-diamond-cutting-process-with-precision-tool.jpg",
    },
  ]

  return (
    <section id="diamonds" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Our Diamond <span className="text-primary">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From natural earth-formed treasures to innovative lab-grown diamonds, we offer the finest selection with
            complete certification and quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {diamondTypes.map((type, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={type.image || "/placeholder.svg"}
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <div className="absolute bottom-4 left-4">{type.icon}</div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{type.title}</CardTitle>
                <CardDescription className="text-base">{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {type.features.map((feature, featureIndex) => (
                    <Badge key={featureIndex} variant="secondary" className="text-sm">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
