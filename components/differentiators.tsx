"use client"

import { useEffect, useRef } from "react"
import { Layers, Target, Eye } from "lucide-react"

const differentiators = [
  {
    icon: Layers,
    title: "Category depth",
    description:
      "Built around furniture and home accessories, with attention to large parcel requirements, product attributes, and the expectations that come with these categories.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Target,
    title: "Operational focus",
    description:
      "Clear SLAs, practical workflows, and regular tracking of key metrics keep operations grounded and predictable.",
    gradient: "from-primary/10 to-transparent",
  },
  {
    icon: Eye,
    title: "Structured & transparent",
    description:
      "Start with one marketplace and expand as performance and readiness improve, supported by straightforward views into what is happening on the channels we manage.",
    gradient: "from-primary/15 to-primary/5",
  },
]

export function Differentiators() {
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
    <section id="differentiators" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-lg md:text-xl font-bold text-primary uppercase tracking-widest">
              What Sets Us Apart
            </span>
          </div>
          <h2
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
            style={{ transitionDelay: "200ms" }}
          >
            Aligned With Furniture Marketplace Realities
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div
                className={`group h-full p-8 rounded-3xl border border-border bg-gradient-to-br ${item.gradient} backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30`}
              >
                <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center shadow-lg mb-6 group-hover:bg-primary transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
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
