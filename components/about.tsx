"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Users, Settings, Lightbulb } from "lucide-react"
import whoWeAreImage from "@/public/images/who-we-are.jpeg"

const aboutCards = [
  {
    icon: Users,
    title: "Who We Are",
    description:
      "SAVI Global is an eCommerce enablement partner dedicated to furniture and home accessories brands. We work with manufacturers, importers, and private labels that want structured marketplace operations without adding internal overhead.",
    image: whoWeAreImage,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Settings,
    title: "What We Do",
    description:
      "We manage the marketplace lifecycle end-to-end—from seller account setup and listings to inventory updates, order processing, returns, and performance health—so you can focus on products and long-term growth.",
    image: "/images/what-we-do.jpg",
    gradient: "from-primary/10 to-transparent",
  },
  {
    icon: Lightbulb,
    title: "Why We Started",
    description:
      "We started SAVI to solve a common problem: strong products and brands losing opportunities because of complex marketplace rules, integrations, and service levels. Our aim is to make these channels structured and manageable.",
    image: "/images/why-we-started.jpg",
    gradient: "from-primary/15 to-primary/5",
  },
]

export function About() {
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
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-lg md:text-xl font-bold text-primary uppercase tracking-widest">
              About SAVI
            </span>
          </div>
          <h2
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
            style={{ transitionDelay: "200ms" }}
          >
            Who We Are, What We Do & Why We Started
          </h2>
          <p
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-base text-muted-foreground"
            style={{ transitionDelay: "300ms" }}
          >
            SAVI Global is focused on helping furniture and home
            accessories brands grow on marketplaces without needing to build
            their own complex eCommerce operations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <div
              key={card.title}
              className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="group h-full bg-card rounded-3xl border border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${card.gradient}`}
                  />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-2xl bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
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
