"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Store, 
  ShoppingCart, 
  Package, 
  Truck, 
  Layers, 
  ShoppingBag,
  Globe
} from "lucide-react"

const satellites = [
  { name: "Amazon", x: 80, y: 70, delay: 0, icon: ShoppingCart, color: "#f97316" },     // Orange
  { name: "Shopify", x: 420, y: 70, delay: 0.5, icon: Store, color: "#22c55e" },      // Green
  { name: "Walmart", x: 50, y: 200, delay: 1.2, icon: ShoppingBag, color: "#0ea5e9" }, // Walmart Blue
  { name: "WordPress", x: 450, y: 200, delay: 1.8, icon: Globe, color: "#21759b" },     // WordPress Blue
  { name: "eBay", x: 90, y: 330, delay: 0.8, icon: ShoppingCart, color: "#e53e3e" },   // eBay Red/Yellow
  { name: "Delhivery", x: 410, y: 330, delay: 1.4, icon: Truck, color: "#06b6d4" }    // Cyan
]

export function Marketplaces() {
  return (
    <section id="marketplaces" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      {/* Subtle Glow Behind the Network Animation */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[30rem] h-[30rem] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Text & Icon Legend */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8 text-left"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-sm md:text-base font-bold font-heading text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/30 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Integrations
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight filter drop-shadow-sm">
                Scale Across The <span className="text-cyan-400">Right Channels</span>
              </h2>
              <p className="mt-5 text-lg font-sans text-slate-300 leading-relaxed">
                We orchestrate and sync your products, inventory, orders, and logistics automatically across every sales platform and courier service.
              </p>
            </div>

            {/* Custom Interactive Legend */}
            <div className="space-y-4 pt-4 select-none">
              {satellites.map((item, i) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/50 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: item.color }} />
                    <item.icon className="w-5 h-5 transition-colors duration-300" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100 text-base group-hover:text-cyan-400 transition-colors">{item.name}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-sm font-sans font-medium text-slate-400 italic border-l-2 border-slate-800 pl-3"
            >
              + Over 20+ additional regional and courier channels connected automatically
            </motion.p>
          </motion.div>

          {/* Right Network Node Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="relative h-[400px] w-full bg-slate-900/30 backdrop-blur-2xl border border-slate-800/60 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80" />
            
            {/* SVG Pulsing Connections */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 500 400" 
              preserveAspectRatio="none"
            >
              {satellites.map((sat, idx) => (
                <React.Fragment key={idx}>
                  {/* Glowing Connection Line */}
                  <line 
                    x1={250} 
                    y1={200} 
                    x2={sat.x} 
                    y2={sat.y} 
                    stroke="rgba(6, 182, 212, 0.15)" 
                    strokeWidth="2" 
                    strokeDasharray="4 4"
                  />
                  <line 
                    x1={250} 
                    y1={200} 
                    x2={sat.x} 
                    y2={sat.y} 
                    stroke="rgba(255, 255, 255, 0.05)" 
                    strokeWidth="1" 
                  />
                  {/* Data Pulse Dot */}
                  <motion.circle
                    r="4"
                    fill={sat.color}
                    className="shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                    animate={{
                      cx: [250, sat.x],
                      cy: [200, sat.y],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: sat.delay
                    }}
                  />
                </React.Fragment>
              ))}
            </svg>

            {/* Central SAVI Node */}
            <motion.div
              style={{ left: "50%", top: "50%" }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-400 to-sky-600 rounded-3xl rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.45)] border border-cyan-300/30">
                <div className="rotate-[-45deg] font-heading font-black text-xl md:text-2xl text-white tracking-tighter flex items-center gap-0.5">
                  SAVI<span className="text-cyan-200 animate-pulse">.</span>
                </div>
              </div>
            </motion.div>

            {/* Satellite Nodes */}
            {satellites.map((sat, idx) => (
              <motion.div
                key={idx}
                style={{
                  position: "absolute",
                  left: `${(sat.x / 500) * 100}%`,
                  top: `${(sat.y / 400) * 100}%`
                }}
                className="-translate-x-1/2 -translate-y-1/2 z-10"
                animate={{
                  y: [0, -6, 0]
                }}
                transition={{
                  duration: 3 + idx * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.15 }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-slate-950/90 border border-slate-800 flex items-center justify-center shadow-lg hover:border-cyan-400/80 hover:shadow-cyan-500/20 hover:shadow-2xl transition-all duration-300 select-none">
                  <sat.icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: sat.color }} />
                </div>
                <div className="absolute top-[110%] left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-slate-950/90 border border-slate-800 text-[9px] md:text-[10px] font-semibold text-slate-300 whitespace-nowrap shadow-md select-none tracking-wide">
                  {sat.name}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
