"use client"

import React, { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Shield, Zap, Sparkles } from "lucide-react"

export function VideoWalkthrough() {
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
      ref={sectionRef} 
      id="product-video" 
      className="py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/85 text-slate-800"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Video Mockup (lg:col-span-6) */}
          <div className="lg:col-span-6 w-full order-2 lg:order-1">
            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4 }}
                className="relative bg-slate-900 rounded-2xl border border-slate-800 shadow-[0_15px_40px_rgba(15,23,42,0.12)] overflow-hidden flex flex-col w-full max-w-lg mx-auto lg:max-w-none"
              >
                {/* Top Window Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-slate-950/40 select-none">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-3 py-0.5 rounded-full bg-slate-900/90 border border-slate-800 text-[9px] text-slate-400 font-mono tracking-wide w-36 text-center truncate">
                    savi-walkthrough.mp4
                  </div>
                  <div className="flex gap-1 items-center text-[9px] font-mono text-cyan-400">
                    <Play className="w-2.5 h-2.5 fill-cyan-400/20" />
                    DEMO
                  </div>
                </div>

                {/* Video Element */}
                <div className="relative w-full overflow-hidden bg-slate-950">
                  <video
                    src="/Videos/SAVI Video.mp4"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: About Video Text & Features (lg:col-span-6) */}
          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out">
              <span className="inline-flex items-center gap-2 text-xs md:text-sm font-bold font-heading text-cyan-600 uppercase tracking-widest bg-cyan-50 px-4 py-2 rounded-full border border-cyan-100">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                Product Walkthrough
              </span>
            </div>
            
            <div className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 leading-tight">
                See How <span className="text-cyan-600">SAVI Works</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-sans max-w-xl">
                Watch our platform synchronize inventory, process orders, and orchestrate logistics across sales channels in real-time.
              </p>
            </div>

            {/* Checklist of Features */}
            <div className="space-y-5 pt-4">
              
              <div className="flex items-start gap-4 fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0 text-cyan-600">
                  <Zap className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 mb-0.5 font-heading">Instant Synchronizations</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans max-w-md">
                    Stock counts adjust dynamically across Amazon, Shopify, and Walmart within seconds of an order receipt.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-sky-600">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 mb-0.5 font-heading">Automated Operations</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans max-w-md">
                    Replaces manual import queues and custom scripting with a single secure dashboard to manifest shipping labels.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 mb-0.5 font-heading">Fulfillment Intelligence</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans max-w-md">
                    Monitors active logs, routes orders to optimal warehouses, and auto-generates tracking tags seamlessly.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
