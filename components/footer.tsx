import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Globe } from "lucide-react"

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#faqs", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-54 h-21 md:w-60 md:h-24">
                <Image
                  src="/images/savi-logo.png"
                  alt="SAVI Global"
                  fill
                  className="object-contain transition-all duration-300"
                />
              </div>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Smart marketplace operations for furniture and home accessories
              brands, with a focus on furniture, upholstery, and accessories
              including bags, lighting, pillows, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919953251186"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 99532 51186
                </a>
              </li>
              <li>
                <a
                  href="mailto:saviglobalsourcing@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@savicommerce.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-muted-foreground">
                  <Globe className="w-4 h-4" />
                  savicommerce.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 SAVI Global. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>
              GST No: <span className="text-primary font-medium">08AFNFS5654L1Z6</span>
            </span>
            <span>Marketplace enablement for furniture & home accessories</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
