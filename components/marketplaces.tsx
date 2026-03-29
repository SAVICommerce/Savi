"use client"

import { useEffect, useRef } from "react"
import { Store, ShoppingCart, Home, Bed, Package } from "lucide-react"

const marketplaces = [
  { name: "Wayfair", icon: Home },
  { name: "Amazon", icon: ShoppingCart },
  { name: "Houzz", icon: Store },
  { name: "Bed Bath & Beyond", icon: Bed },
  { name: "Walmart", icon: Package },
]

export function Marketplaces() {
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
    <section id="marketplaces" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-lg md:text-xl font-bold text-primary uppercase tracking-widest">
              Marketplaces
            </span>
          </div>
          <h2
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
            style={{ transitionDelay: "200ms" }}
          >
            Scale Across The Right Channels
          </h2>
          <p
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-base text-muted-foreground"
            style={{ transitionDelay: "300ms" }}
          >
            We work on leading marketplaces and add more channels carefully,
            based on your catalog and business goals.
          </p>
        </div>

        {/* Marketplace Pills */}
        <div
          className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-wrap justify-center gap-4"
          style={{ transitionDelay: "400ms" }}
        >
          {marketplaces.map((marketplace, index) => (
            <div
              key={marketplace.name}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <marketplace.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {marketplace.name}
                </span>
              </div>
            </div>
          ))}

          {/* Additional channels pill */}
          <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-accent border border-border/50">
            <span className="text-muted-foreground font-medium">
              + Additional channels evaluated as needed
            </span>
          </div>
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
