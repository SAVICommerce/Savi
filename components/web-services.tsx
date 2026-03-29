"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Globe,
  ShoppingBag,
  Wrench,
  Palette,
  Zap,
  HeadphonesIcon,
  ArrowRight,
  Check,
} from "lucide-react"

const webServices = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description:
      "Professional, responsive websites tailored to your brand identity. From corporate sites to portfolio showcases, we build digital experiences that convert visitors into customers.",
    features: [
      "Responsive design for all devices",
      "SEO-optimized structure",
      "Fast loading performance",
      "Custom animations & interactions",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Shopify Store Development",
    description:
      "Launch your e-commerce business with a fully customized Shopify store. We handle everything from theme development to payment integration and product setup.",
    features: [
      "Custom Shopify theme design",
      "Product catalog setup",
      "Payment gateway integration",
      "Inventory management system",
    ],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Keep your online presence running smoothly with our ongoing maintenance services. Regular updates, security patches, and performance optimization included.",
    features: [
      "24/7 monitoring & support",
      "Regular security updates",
      "Performance optimization",
      "Content updates & management",
    ],
  },
]

const additionalFeatures = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that drives engagement and conversions",
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    description: "Lightning-fast load times for better user experience",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Expert assistance whenever you need it",
  },
]

export function WebServices() {
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
    <section
      id="web-services"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: "100ms" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-lg md:text-xl font-bold uppercase tracking-widest">
              <Globe className="w-5 h-5" />
              eCommerce Store
            </span>
          </div>
          <h2
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-balance"
            style={{ transitionDelay: "200ms" }}
          >
            Build Your Digital Presence with Expert Web Solutions
          </h2>
          <p
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-base text-muted-foreground"
            style={{ transitionDelay: "300ms" }}
          >
            From stunning websites to powerful Shopify stores, we deliver
            end-to-end web development solutions that help your business thrive
            online.
          </p>
        </div>

        {/* Main Services Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {webServices.map((service, index) => (
            <div
              key={service.title}
              className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="group h-full bg-card rounded-3xl border border-border p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 hover:border-primary/30">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Shopify Highlight Section */}
        <div
          className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
          style={{ transitionDelay: "700ms" }}
        >
          <div className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Left Content */}
              <div className="flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium w-fit mb-4">
                  <ShoppingBag className="w-4 h-4" />
                  Shopify Partner
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                  Launch Your E-Commerce Empire with Shopify
                </h3>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  As certified Shopify experts, we create high-converting online
                  stores that stand out from the competition. From initial setup
                  to ongoing optimization, we are your trusted partner in
                  e-commerce success.
                </p>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Custom Theme Development",
                    "App Integration & Setup",
                    "Migration from Other Platforms",
                    "Multi-Currency & Language",
                    "Shopify Plus Solutions",
                    "Analytics & Reporting",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white">
                      <Check className="w-5 h-5 text-white/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 w-fit group"
                  asChild
                >
                  <a href="#contact">
                    Start Your Shopify Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* Right Image */}
              <div className="relative h-64 lg:h-auto min-h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/shopify-store.jpg"
                  alt="Shopify e-commerce store development"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
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
