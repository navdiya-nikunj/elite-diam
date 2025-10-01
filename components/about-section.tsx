import { Card, CardContent } from "@/components/ui/card"
import { Globe, Users, Award, TrendingUp } from "lucide-react"

export function AboutSection() {
  const stats = [
    { icon: <Globe className="h-8 w-8 text-primary" />, value: "50+", label: "Countries Served" },
    { icon: <Users className="h-8 w-8 text-primary" />, value: "1000+", label: "Satisfied Clients" },
    { icon: <Award className="h-8 w-8 text-primary" />, value: "15+", label: "Years Experience" },
    { icon: <TrendingUp className="h-8 w-8 text-primary" />, value: "99%", label: "Client Satisfaction" },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              About <span className="text-primary">Elite Daim</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              Elite Daim has been at the forefront of diamond export industry for over 15 years. We specialize in
              sourcing, certifying, and exporting premium quality diamonds to clients worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Our commitment to excellence, ethical sourcing, and customer satisfaction has made us a trusted partner
              for jewelry manufacturers, retailers, and collectors across the globe.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-3">{stat.icon}</div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/professional-diamond-expert-examining-diamonds-wit.jpg"
              alt="Elite Daim diamond experts at work"
              className="w-full h-auto rounded-lg shadow-2xl float-animation"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
