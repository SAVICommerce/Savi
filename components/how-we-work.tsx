"use client"

import { useEffect, useRef } from "react"
import { Search, Rocket, Settings, TrendingUp } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Assess",
    description:
      "Review your catalog, current operations, and marketplace fit so we are clear on where to start and which channels make sense.",
  },
  {
    number: 2,
    icon: Rocket,
    title: "Launch",
    description:
      "Set up accounts, listings, pricing, basic policies, and SLAs so your presence on the chosen marketplaces is structured from day one.",
  },
  {
    number: 3,
    icon: Settings,
    title: "Operate",
    description:
      "Run daily operations for inventory, orders, returns, and customer messages, keeping a close eye on scorecards and compliance.",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Grow",
    description:
      "Optimize content, promotions, and ad activity based on results, and consider new channels once the base is stable.",
  },
]

export function HowWeWork() {
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
    <section id="how-we-work" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-lg md:text-xl font-bold text-primary uppercase tracking-widest">
              How We Work
            </span>
          </div>
          <h2
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
            style={{ transitionDelay: "200ms" }}
          >
            A Clear, Performance-Driven Lifecycle
          </h2>
          <p
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-base text-muted-foreground"
            style={{ transitionDelay: "300ms" }}
          >
            We prefer a simple, structured approach—from understanding your
            catalog to managing operations and then improving performance over
            time.
          </p>
        </div>

        {/* Steps */}
        <div
          className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
          style={{ transitionDelay: "400ms" }}
        >
          <div className="max-w-4xl mx-auto bg-card rounded-3xl border border-border shadow-2xl p-8 lg:p-12">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div key={step.number} className="group relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-7 top-20 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-primary/10" />
                  )}

                  <div className="flex items-start gap-6 py-6">
                    {/* Step Number */}
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 border-2 border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg">
                        <step.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-lg">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < steps.length - 1 && (
                    <div className="ml-20 border-t border-dashed border-border" />
                  )}
                </div>
              ))}
            </div>
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
