"use client"

import { useEffect, useRef } from "react"
import { Armchair, Sofa, Lamp } from "lucide-react"

const categories = [
  {
    icon: Armchair,
    title: "Furniture",
    description:
      "Focus on case goods, seating, tables, storage, and outdoor furniture where marketplace operations require detailed attributes and reliable logistics.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Sofa,
    title: "Upholstery",
    description:
      "Support for sofas, sectionals, accent chairs, ottomans, and similar upholstered products with attention to content, packaging details, and handling expectations.",
    gradient: "from-primary/10 to-transparent",
  },
  {
    icon: Lamp,
    title: "Accessories",
    description:
      "Experience with bags, lighting, pillows, throws, mirrors, and other décor accessories that complete the catalog around your furniture range.",
    gradient: "from-primary/15 to-primary/5",
  },
]

export function Categories() {
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
    <section id="categories" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-lg md:text-xl font-bold text-primary uppercase tracking-widest">
              Categories
            </span>
          </div>
          <h2
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
            style={{ transitionDelay: "200ms" }}
          >
            Purpose-Built For Furniture & Accessories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div
                className={`group h-full p-8 rounded-3xl border border-border bg-gradient-to-br ${category.gradient} backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30`}
              >
                <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center shadow-lg mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <category.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
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
