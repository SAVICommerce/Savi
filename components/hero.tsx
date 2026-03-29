"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    const elements = heroRef.current?.querySelectorAll(".fade-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_86%_78%,rgba(14,165,233,0.14),transparent_42%),linear-gradient(140deg,#020617_0%,#0b1120_45%,#111827_100%)]" />
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: "200ms" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Launch & Scale Your Brand Across Top Marketplaces
            </h1>
            <p className="mt-6 text-lg text-slate-300 font-medium">
              We manage your entire online marketplace operation, so you don&apos;t have to build an in-house team.
            </p>
          </div>

          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-wrap gap-4"
            style={{ transitionDelay: "500ms" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-slate-100 text-slate-900 rounded-full px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <Link href="#contact">
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <p
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out text-sm text-slate-300 border-l-4 border-cyan-400 pl-4"
            style={{ transitionDelay: "600ms" }}
          >
            <span className="font-semibold text-cyan-300">Our role:</span> be
            your plug-in marketplace team so you don&apos;t need to build and manage
            a full in-house operation for every channel.
          </p>
        </div>

        {/* Right Panel */}
        <div
          className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
          style={{ transitionDelay: "400ms" }}
        >
          <div className="relative bg-slate-900/80 rounded-3xl border border-slate-700/70 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 backdrop-blur-md">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-300/20 to-transparent rounded-full blur-3xl" />

            {/* Image */}
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <Image
                src="/images/hero-furniture.jpeg"
                alt="Furniture marketplace operations"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-300/30">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-cyan-200 uppercase tracking-widest">
                  End-to-end marketplace lifecycle
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Listings", "Inventory", "Orders", "Returns", "Promotions"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-xs font-semibold rounded-full bg-cyan-300/10 text-cyan-200 border border-cyan-300/30 hover:bg-cyan-300/20 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <p className="text-slate-300 leading-relaxed">
                We handle the operational details that decide how your brand performs on each marketplace. From seller account setup to daily inventory updates and scorecard health, our team works as an extension of yours.
              </p>
            </div>
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
