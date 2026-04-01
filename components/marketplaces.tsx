"use client"

import { motion } from "framer-motion"
import { Store, ShoppingCart, Home, Bed, Package } from "lucide-react"
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts"

const chartData = [
  { name: "Bed Bath & Beyond", volume: 30, fill: "#bae6fd", icon: Bed },
  { name: "Houzz", volume: 45, fill: "#7dd3fc", icon: Store },
  { name: "Walmart", volume: 60, fill: "#38bdf8", icon: Package },
  { name: "Wayfair", volume: 80, fill: "#0ea5e9", icon: Home },
  { name: "Amazon", volume: 100, fill: "#0284c7", icon: ShoppingCart },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const Icon = data.icon;
    return (
      <div className="bg-card/95 backdrop-blur-md border border-border p-3 rounded-2xl shadow-xl flex items-center gap-3 pointer-events-none">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-900 shadow-inner">
           <Icon className="w-5 h-5" style={{ color: data.fill }} />
        </div>
        <div className="pr-2 text-left">
          <p className="font-bold text-foreground text-sm leading-tight">{data.name}</p>
          <p className="text-xs text-muted-foreground mt-0.5">Marketplace Scale</p>
        </div>
      </div>
    );
  }
  return null;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
}

export function Marketplaces() {
  return (
    <section id="marketplaces" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      {/* Subtle Glow Behind Chart */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[30rem] h-[30rem] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Text & Icon Legend */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-sm md:text-base font-bold font-heading text-cyan-400 uppercase tracking-widest bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/30">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Marketplaces
              </span>
              <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight filter drop-shadow-sm">
                Scale Across The <span className="text-cyan-400">Right Channels</span>
              </h2>
              <p className="mt-5 text-lg font-sans text-slate-300 leading-relaxed">
                We manage operations on the specific marketplace platforms that offer the most volume for your catalog. See our primary footprint below.
              </p>
            </div>

            {/* Custom Interactive Legend */}
            <div className="space-y-4 pt-4">
              {chartData.slice().reverse().map((item, i) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 shadow-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/50 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ backgroundColor: item.fill }} />
                    <item.icon className="w-5 h-5 transition-colors duration-300" style={{ color: item.fill }} />
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
              + Additional regional and niche channels evaluated as needed
            </motion.p>
          </motion.div>

          {/* Right Chart Display - Concentric Rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            className="relative h-[400px] md:h-[500px] w-full bg-slate-900/30 backdrop-blur-2xl border border-slate-800/60 pb-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80" />
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart 
                cx="50%" 
                cy="50%" 
                innerRadius="30%" 
                outerRadius="90%" 
                barSize={20} 
                data={chartData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  minAngle={15}
                  background={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                  clockWise
                  dataKey="volume"
                  cornerRadius={10}
                  animationDuration={2500}
                />
                <RechartsTooltip content={<CustomTooltip />} cursor={false} />
              </RadialBarChart>
            </ResponsiveContainer>
            
            {/* Center Node Label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none drop-shadow-lg">
              <span className="block text-3xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                5+
              </span>
              <span className="block text-[10px] md:text-xs text-cyan-400 uppercase tracking-widest font-semibold mt-1">
                Channels
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
