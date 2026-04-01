"use client"

import { motion } from "framer-motion"
import { Store, ShoppingCart, Home, Bed, Package } from "lucide-react"

const marketplaces = [
  { name: "Wayfair", icon: Home },
  { name: "Amazon", icon: ShoppingCart },
  { name: "Houzz", icon: Store },
  { name: "Bed Bath & Beyond", icon: Bed },
  { name: "Walmart", icon: Package },
]

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
    <section id="marketplaces" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div>
            <span className="text-lg md:text-xl font-bold font-heading text-primary uppercase tracking-widest">
              Marketplaces
            </span>
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-foreground">
            Scale Across The Right Channels
          </h2>
          <p className="mt-4 text-base font-sans text-muted-foreground">
            We work on leading marketplaces and add more channels carefully,
            based on your catalog and business goals.
          </p>
        </motion.div>

        {/* Marketplace Pills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4"
        >
          {marketplaces.map((marketplace) => (
            <motion.div
              key={marketplace.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative cursor-pointer"
            >
              <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border shadow-lg transition-colors duration-300 hover:border-primary/30">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <marketplace.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold font-sans text-foreground group-hover:text-primary transition-colors duration-300">
                  {marketplace.name}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Additional channels pill */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-accent border border-border/50"
          >
            <span className="text-muted-foreground font-sans font-medium">
              + Additional channels evaluated as needed
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
