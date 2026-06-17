"use client"

import { motion } from "framer-motion"
import { Plug, Brain, PenTool, Truck, Sparkles, CheckCircle2 } from "lucide-react"

const features = [
  {
    id: "omnichannel",
    title: "Omnichannel Management",
    subtitle: "Manage all your sales channels seamlessly from a single unified dashboard.",
    icon: Plug,
    className: "md:col-span-2 md:row-span-1 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950",
    iconColor: "text-indigo-400",
    bullets: [
      "Connect instantly with Shopify, Wayfair, Amazon, Walmart, Etsy, and more.",
      "Automatically keep your inventory synced across all platforms in real-time.",
      "Never worry about overselling with our built-in stock protection system."
    ]
  },
  {
    id: "ai-intelligence",
    title: "AI Inventory Intelligence",
    subtitle: "Let AI predict your demand and optimize your warehouse stock.",
    icon: Brain,
    className: "md:col-span-1 md:row-span-1 bg-gradient-to-b from-cyan-950 to-slate-900",
    iconColor: "text-cyan-400",
    bullets: [
      "Forecast future demand and get 30, 60, and 90-day stock-out alerts.",
      "Maintain the perfect safety stock levels automatically.",
      "Chat with your warehouse data using our natural language AI bot."
    ]
  },
  {
    id: "seo-geo",
    title: "Generative SEO Studio",
    subtitle: "Make your products discoverable by ChatGPT, Gemini, and modern AI engines.",
    icon: PenTool,
    className: "md:col-span-1 md:row-span-1 bg-gradient-to-tr from-purple-950 to-slate-900",
    iconColor: "text-purple-400",
    bullets: [
      "Automatically generate AI-friendly product FAQs.",
      "Inject smart data structures so search engines understand your products.",
      "Use AI to write high-converting product descriptions and image tags."
    ]
  },
  {
    id: "admin-ops",
    title: "Advanced Logistics",
    subtitle: "Simplify complex back-office procedures and save hours of manual work.",
    icon: Truck,
    className: "md:col-span-2 md:row-span-1 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900",
    iconColor: "text-emerald-400",
    bullets: [
      "Merge multiple Wayfair shipping documents into a single click.",
      "Manage all your cancellations from one unified screen.",
      "Track your revenue and manage customer service tickets effortlessly."
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950 text-slate-50 min-h-screen">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.4),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">
              Platform Features
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight text-white">
            Everything you need to scale
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-sans">
            We manage your inventory, optimize your SEO, and streamline your logistics so you can focus on growing your business.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`relative p-8 rounded-3xl border border-white/10 overflow-hidden shadow-2xl group ${feature.className}`}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner ${feature.iconColor}`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-slate-300 mb-6 text-base/relaxed font-sans font-medium">
                  {feature.subtitle}
                </p>

                <ul className="space-y-4">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${feature.iconColor}`} />
                      <span className="text-sm md:text-base text-slate-400 font-sans leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
