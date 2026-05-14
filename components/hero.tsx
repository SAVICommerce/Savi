"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 pb-20 overflow-hidden bg-slate-950 text-slate-100"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_86%_78%,rgba(14,165,233,0.14),transparent_42%),linear-gradient(140deg,#020617_0%,#0b1120_45%,#111827_100%)]" />
      <div className="absolute inset-0 opacity-50">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight filter drop-shadow-sm">
                Launch & Scale Your Brand Across Top Marketplaces
              </h1>
              <p className="mt-6 text-lg text-slate-300 font-sans font-medium">
                We manage your entire online marketplace operation, so you don&apos;t have to build an in-house team.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-slate-100 text-slate-900 rounded-full px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group font-sans"
              >
                <Link href="contact">
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent text-white border border-white/20 rounded-full px-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group font-sans"
              >
                <Link
                  href="request-demo"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200 hover:bg-white hover:text-slate-900"
                >
                  Request a Demo
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="text-sm text-slate-300 border-l-4 border-cyan-400 pl-4 font-sans"
            >
              <span className="font-semibold text-cyan-300">Our role:</span> be
              your plug-in marketplace team so you don&apos;t need to build and manage
              a full in-house operation for every channel.
            </motion.p>
          </div>

          {/* Right Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
          >
            <div className="relative bg-slate-900/80 rounded-3xl border border-slate-700/70 shadow-2xl overflow-hidden group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-2 backdrop-blur-md">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-300/20 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Image */}
              <div className="relative h-64 lg:h-80 w-full overflow-hidden">
                <Image
                  src="/images/hero-furniture.jpeg"
                  alt="Furniture marketplace operations"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 space-y-5">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-300/30 font-sans"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse" />
                  <span className="text-xs font-semibold text-cyan-200 uppercase tracking-widest">
                    End-to-end marketplace lifecycle
                  </span>
                </motion.div>

                <div className="flex flex-wrap gap-2 font-sans">
                  {["Listings", "Inventory", "Orders", "Returns", "Promotions"].map(
                    (tag, i) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="px-4 py-2 text-xs font-semibold rounded-full bg-cyan-300/10 text-cyan-200 border border-cyan-300/30 hover:bg-cyan-300/20 transition-colors duration-200"
                      >
                        {tag}
                      </motion.span>
                    )
                  )}
                </div>

                <p className="text-slate-300 leading-relaxed font-sans">
                  We handle the operational details that decide how your brand performs on each marketplace. From seller account setup to daily inventory updates and scorecard health, our team works as an extension of yours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
