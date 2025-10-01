import { Gem, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Gem className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Elite Daim</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Premium diamond exporters specializing in natural and lab-grown diamonds with worldwide shipping and
              certification.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#diamonds" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Diamonds
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Natural Diamonds</li>
              <li className="text-muted-foreground">Lab-Grown Diamonds</li>
              <li className="text-muted-foreground">Diamond Certification</li>
              <li className="text-muted-foreground">Custom Solutions</li>
              <li className="text-muted-foreground">Worldwide Export</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">elitediam76@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+919023351659</span>
              </div>
              
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Elite Daim. All rights reserved. | Premium Diamond Exporters Worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
