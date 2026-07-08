"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  ShoppingCart, 
  Package, 
  Truck, 
  Check, 
  RefreshCw, 
  Layers, 
  Settings, 
  Users, 
  TrendingUp,
  AlertCircle
} from "lucide-react"

const SLIDER_WORDS = ["Listings", "Inventory", "Orders", "Shipments", "Returns", "Listings"]

export function Hero() {
  const [step, setStep] = useState(0)

  // Step-based state loop for the dashboard mockup
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 pb-24 overflow-hidden bg-slate-950 text-slate-100 flex items-center"
    >
      <style>{`
        @keyframes moveForever {
          0% { transform: translate3d(-90px, 0, 0); }
          100% { transform: translate3d(85px, 0, 0); }
        }
        .animate-wave-1 {
          animation: moveForever 22s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
        }
        .animate-wave-2 {
          animation: moveForever 15s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
        }
        .animate-wave-3 {
          animation: moveForever 10s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
        }
      `}</style>

      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(14,165,233,0.16),transparent_40%),linear-gradient(140deg,#020617_0%,#090d1a_45%,#0f172a_100%)]" />
      
      {/* Glowing Pulsing Blobs */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-sky-500/10 rounded-full blur-3xl" 
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content (Grid span 7) */}
          <div className="space-y-8 lg:col-span-7 pr-0 lg:pr-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold font-heading text-white leading-[1.15] filter drop-shadow-sm">
                Launch & Scale Your{" "}
                <span className="block md:inline-block relative overflow-hidden h-[1.2em] align-bottom text-cyan-400 min-w-[200px] md:min-w-[270px]">
                  <motion.span
                    className="absolute left-0 top-0 flex flex-col"
                    animate={{
                      y: ["0%", "-16.66%", "-33.33%", "-50%", "-66.66%", "-83.33%"]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: [0.76, 0, 0.24, 1],
                      times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                    }}
                  >
                    {SLIDER_WORDS.map((w, idx) => (
                      <span key={idx} className="h-[1.2em] flex items-center">{w}</span>
                    ))}
                  </motion.span>
                </span>
                <br />
                Across Top Marketplaces
              </h1>
              <p className="mt-6 text-base md:text-lg text-slate-300 font-sans font-medium leading-relaxed max-w-xl">
                We manage your entire online marketplace operation, functioning as your plug-in e-commerce team so you don&apos;t have to hire and manage an in-house department.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-white hover:bg-slate-100 text-slate-900 rounded-full px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group font-sans font-semibold text-base"
              >
                <Link href="contact">
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-700 hover:bg-slate-900/50 hover:text-white text-slate-200 rounded-full px-8 transition-all duration-300 hover:-translate-y-1 font-sans font-semibold text-base"
              >
                <Link href="request-demo">
                  Request a Demo
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="text-sm text-slate-300 border-l-4 border-cyan-400 pl-4 font-sans max-w-lg"
            >
              <span className="font-semibold text-cyan-300">Operations Hub:</span> We automate cataloging, live stock syncing, multi-channel order processing, shipping labels, and account health in real-time.
            </motion.div>
          </div>

          {/* Right Dashboard Mockup (Grid span 5) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
              className="w-full max-w-md md:max-w-lg lg:max-w-none"
            >
              <div className="relative bg-slate-900/60 rounded-3xl border border-slate-800/80 shadow-2xl overflow-hidden backdrop-blur-xl h-[380px] md:h-[420px] flex flex-col">
                
                {/* Browser/Mac App Top Bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800/80 bg-slate-950/40 select-none">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-4 py-0.5 rounded-full bg-slate-900/90 border border-slate-800 text-[10px] text-slate-400 font-mono tracking-wide w-48 text-center truncate">
                    savi-ops-hub.savi.commerce
                  </div>
                  <div className="flex gap-1.5 items-center text-[10px] font-mono text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    SYNCED
                  </div>
                </div>

                {/* Main Body */}
                <div className="flex-1 grid grid-cols-12 overflow-hidden relative">
                  
                  {/* Left Sidebar Icon Strip (col-span-2) */}
                  <div className="col-span-2 border-r border-slate-800/60 bg-slate-950/20 flex flex-col items-center py-4 gap-5 text-slate-500 select-none">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                      <Layers className="w-4 h-4" />
                    </div>
                    <ShoppingCart className="w-4 h-4 hover:text-slate-300 transition-colors cursor-pointer" />
                    <Package className="w-4 h-4 hover:text-slate-300 transition-colors cursor-pointer" />
                    <Truck className="w-4 h-4 hover:text-slate-300 transition-colors cursor-pointer" />
                    <Users className="w-4 h-4 hover:text-slate-300 transition-colors cursor-pointer" />
                    <TrendingUp className="w-4 h-4 hover:text-slate-300 transition-colors cursor-pointer" />
                    <Settings className="w-4 h-4 mt-auto hover:text-slate-300 transition-colors cursor-pointer" />
                  </div>

                  {/* Main Table Area (col-span-10) */}
                  <div className="col-span-10 p-5 flex flex-col gap-4 overflow-hidden relative text-left">
                    <div className="flex justify-between items-center select-none">
                      <div>
                        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Live Processing Queue</h4>
                        <p className="text-slate-500 text-[10px] mt-0.5">Automated synchronization queue</p>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/20">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        Live Feed
                      </div>
                    </div>

                    {/* Orders Rows */}
                    <div className="space-y-2.5 flex-1 overflow-hidden">
                      
                      {/* Row 1: Order 1045 (Simulating dynamic state changes) */}
                      <motion.div 
                        layout
                        className="p-3 rounded-xl border border-slate-800 bg-slate-950/40 flex items-center justify-between transition-colors hover:border-slate-700/60"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-bold text-cyan-400 text-xs shadow-inner">
                            #45
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-200">Order #1045</div>
                            <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              Amazon Store
                            </div>
                          </div>
                        </div>

                        {/* Status Badge based on Step state */}
                        <div className="text-right flex items-center gap-3">
                          <AnimatePresence mode="wait">
                            {step === 0 && (
                              <motion.span
                                key="new"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 inline-flex items-center gap-1"
                              >
                                <span className="w-1 h-1 rounded-full bg-amber-400 animate-ping" />
                                New Order
                              </motion.span>
                            )}
                            {step === 1 && (
                              <motion.span
                                key="sync"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 inline-flex items-center gap-1"
                              >
                                <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                                Synced
                              </motion.span>
                            )}
                            {step === 2 && (
                              <motion.span
                                key="pack"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 inline-flex items-center gap-1"
                              >
                                <Package className="w-2.5 h-2.5" />
                                Packed
                              </motion.span>
                            )}
                            {step === 3 && (
                              <motion.span
                                key="ship"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-1"
                              >
                                <Check className="w-2.5 h-2.5" />
                                Shipped
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>

                      {/* Row 2: Order 1044 */}
                      <motion.div 
                        layout
                        className="p-3 rounded-xl border border-slate-800/80 bg-slate-950/20 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center font-bold text-indigo-400 text-xs">
                            #44
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-200">Order #1044</div>
                            <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              Shopify India
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-1">
                            <Check className="w-2.5 h-2.5" />
                            Shipped
                          </span>
                        </div>
                      </motion.div>

                      {/* Row 3: Order 1043 */}
                      <motion.div 
                        layout
                        className="p-3 rounded-xl border border-slate-800/80 bg-slate-950/20 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center font-bold text-sky-400 text-xs">
                            #43
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-slate-200">Order #1043</div>
                            <div className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                              Flipkart Store
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-1">
                            <Check className="w-2.5 h-2.5" />
                            Shipped
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Step-by-Step Workflow Tracker Panel */}
                    <div className="mt-auto border-t border-slate-800/60 pt-4 grid grid-cols-3 gap-2 text-center select-none">
                      <div className="flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-semibold transition-all ${
                          step >= 0 ? "bg-cyan-500/20 border-cyan-400 text-cyan-300" : "border-slate-800 text-slate-600"
                        }`}>
                          {step >= 1 ? <Check className="w-3.5 h-3.5" /> : "1"}
                        </div>
                        <span className={`text-[9px] font-medium mt-1 transition-colors ${step >= 0 ? "text-slate-300" : "text-slate-600"}`}>Received</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-semibold transition-all ${
                          step >= 1 ? "bg-cyan-500/20 border-cyan-400 text-cyan-300" : "border-slate-800 text-slate-600"
                        }`}>
                          {step >= 2 ? <Check className="w-3.5 h-3.5" /> : "2"}
                        </div>
                        <span className={`text-[9px] font-medium mt-1 transition-colors ${step >= 1 ? "text-slate-300" : "text-slate-600"}`}>Synced</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center border text-[10px] font-semibold transition-all ${
                          step >= 3 ? "bg-cyan-500/20 border-cyan-400 text-cyan-300" : "border-slate-800 text-slate-600"
                        }`}>
                          {step >= 3 ? <Check className="w-3.5 h-3.5" /> : "3"}
                        </div>
                        <span className={`text-[9px] font-medium mt-1 transition-colors ${step >= 3 ? "text-slate-300" : "text-slate-600"}`}>Shipped</span>
                      </div>
                    </div>
                  </div>

                  {/* Slide-out Inventory Sync Overlay (Step 2 and 3) */}
                  <AnimatePresence>
                    {(step === 2 || step === 3) && (
                      <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="absolute top-0 right-0 bottom-0 w-52 bg-slate-900 border-l border-slate-850 p-4 flex flex-col gap-4 shadow-[-10px_0_30px_rgba(0,0,0,0.5)] z-20 text-left"
                      >
                        <div>
                          <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inventory Sync</h5>
                          <p className="text-[9px] text-slate-500">Real-time stock adjustment</p>
                        </div>

                        <div className="space-y-3 flex-1">
                          {/* Product details */}
                          <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800">
                            <span className="text-[8px] font-semibold text-slate-500 block uppercase">Product Item</span>
                            <div className="text-xs font-bold text-slate-200 mt-1 truncate">
                              Premium Leather Sofa
                            </div>
                            <span className="text-[8px] font-mono text-slate-500 block mt-0.5">SKU: SAVI-SOFA-001</span>
                          </div>

                          {/* Stock decrement animation */}
                          <div className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800">
                            <span className="text-[8px] font-semibold text-slate-500 block uppercase">Stock Count</span>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-slate-450 text-xs line-through">15 units</span>
                              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                              <motion.span 
                                initial={{ scale: 0.8 }}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ delay: 0.5 }}
                                className="text-emerald-405 text-xs font-bold"
                              >
                                14 units
                              </motion.span>
                            </div>
                          </div>

                          {/* Synced Channels Progress */}
                          <div className="space-y-1.5 pt-1">
                            <div className="flex justify-between text-[8px] font-semibold text-slate-500 uppercase">
                              <span>Syncing Channels</span>
                              <span className="text-cyan-400 font-bold">ACTIVE</span>
                            </div>
                            
                            <div className="space-y-1 font-mono text-[9px] text-slate-400">
                              <div className="flex justify-between items-center py-0.5 border-b border-slate-850/30">
                                <span className="text-slate-500">Amazon</span>
                                <span className="text-emerald-400 flex items-center gap-1">14 <Check className="w-2.5 h-2.5" /></span>
                              </div>
                              <div className="flex justify-between items-center py-0.5 border-b border-slate-850/30">
                                <span className="text-slate-500">Shopify</span>
                                <span className="text-emerald-400 flex items-center gap-1">14 <Check className="w-2.5 h-2.5" /></span>
                              </div>
                              <div className="flex justify-between items-center py-0.5">
                                <span className="text-slate-500">Walmart</span>
                                <span className="text-emerald-400 flex items-center gap-1">14 <Check className="w-2.5 h-2.5" /></span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Done status indicator */}
                        <div className="mt-auto pt-2.5 border-t border-slate-850 flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          </div>
                          <span className="text-[10px] font-medium text-slate-400">Stock Updated</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Flowy SVG Waves Animation at the bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden z-20 pointer-events-none">
        <svg className="relative w-full h-[50px] md:h-[90px] min-h-[30px] -mb-1"
             xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink"
             viewBox="0 24 150 28"
             preserveAspectRatio="none"
             shapeRendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="opacity-10 dark:opacity-20">
            <use href="#gentle-wave" x="48" y="0" fill="rgba(6, 182, 212, 0.15)" className="animate-wave-1" />
            <use href="#gentle-wave" x="48" y="3" fill="rgba(14, 165, 233, 0.2)" className="animate-wave-2" />
            <use href="#gentle-wave" x="48" y="5" fill="rgba(2, 6, 23, 1)" className="animate-wave-3" />
          </g>
        </svg>
      </div>
    </section>
  )
}
