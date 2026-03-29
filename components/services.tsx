"use client"

import { useEffect, useRef } from "react"
import {
  Rocket,
  FileText,
  Package,
  CreditCard,
  Megaphone,
  Shield,
} from "lucide-react"

const services = [
  {
    icon: Rocket,
    title: "Channel Setup & Expansion",
    subtitle: "Get seller accounts and catalogs ready",
    items: [
      "Seller account creation, compliance, and brand/storefront setup.",
      "Catalog onboarding, category mapping, and variant structures aligned with marketplace expectations.",
      "Daily inventory updates on channels to keep stock levels accurate.",
    ],
    featured: true,
  },
  {
    icon: FileText,
    title: "Content & Merchandising",
    subtitle: "Optimize Discoverability And Conversion",
    items: [
      "SEO-aligned titles, feature bullet points, and product descriptions.",
      "Image standards and enhanced content where supported by the marketplace.",
      "Attribute completion to improve search relevance and conversion.",
    ],
    featured: true,
  },
  {
    icon: Package,
    title: "Inventory & Order Operations",
    subtitle: "Stay on top of inventory and SLAs",
    items: [
      "Inventory sync rules, including safety stock and buffer logic.",
      "Order processing and routing for dropship/3P and 1P, where applicable.",
      "Shipment SLAs, tracking updates, and exception handling.",
    ],
    featured: false,
  },
  {
    icon: CreditCard,
    title: "Payments, Returns & Customer Care",
    subtitle: "Close the loop on every order",
    items: [
      "Payment tracking and oversight on chargebacks and adjustments.",
      "Return and replacement workflows aligned with marketplace policies.",
      "Customer message handling within the required response timelines.",
    ],
    featured: false,
  },
  {
    icon: Megaphone,
    title: "Promotions & Advertising",
    subtitle: "Plan campaigns and drive demand",
    items: [
      "Campaign planning for seasonal peaks and clearance needs.",
      "Marketplace advertising (for example, Sponsored Ads) and deal mechanics.",
      "Review programs and basic performance views to support decisions.",
    ],
    featured: false,
  },
  {
    icon: Shield,
    title: "Compliance & Performance Health",
    subtitle: "Protect your marketplace scorecards",
    items: [
      "Monitoring of key metrics like on-time shipping, cancellations, and defect rates.",
      "Policy adherence, documentation, and readiness for checks.",
      "Support in reducing risk around listing or account disruptions.",
    ],
    featured: false,
  },
]

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-transparent to-accent/30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-lg md:text-xl font-bold text-primary uppercase tracking-widest">
              Services
            </span>
          </div>
          <h2
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
            style={{ transitionDelay: "200ms" }}
          >
            End-To-End Marketplace Services
          </h2>
          <p
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-base text-muted-foreground"
            style={{ transitionDelay: "300ms" }}
          >
            Our work covers the practical areas needed to launch, operate, and
            grow your marketplace business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div
                className={`group h-full p-6 rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  service.featured
                    ? "bg-gradient-to-br from-primary/10 via-card to-card border-primary/20 shadow-xl"
                    : "bg-card border-border shadow-lg hover:border-primary/20"
                }`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      service.featured
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                    }`}
                  >
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium text-primary mt-1">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* List */}
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fade-up.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
