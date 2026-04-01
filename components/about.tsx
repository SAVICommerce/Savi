"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Settings, Lightbulb } from "lucide-react"
import whoWeAreImage from "@/public/images/who-we-are.jpeg"

const aboutCards = [
  {
    icon: Users,
    title: "Who We Are",
    description:
      "SAVI Global is an eCommerce enablement partner dedicated to furniture and home accessories brands. We work with manufacturers, importers, and private labels that want structured marketplace operations without adding internal overhead.",
    image: whoWeAreImage,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Settings,
    title: "What We Do",
    description:
      "We manage the marketplace lifecycle end-to-end—from seller account setup and listings to inventory updates, order processing, returns, and performance health—so you can focus on products and long-term growth.",
    image: "/images/what-we-do.jpg",
    gradient: "from-primary/10 to-transparent",
  },
  {
    icon: Lightbulb,
    title: "Why We Started",
    description:
      "We started SAVI to solve a common problem: strong products and brands losing opportunities because of complex marketplace rules, integrations, and service levels. Our aim is to make these channels structured and manageable.",
    image: "/images/why-we-started.jpg",
    gradient: "from-primary/15 to-primary/5",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" as const, stiffness: 80 } },
}

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

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
              About SAVI
            </span>
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-foreground">
            Who We Are, What We Do & Why We Started
          </h2>
          <p className="mt-4 text-base font-sans text-muted-foreground">
            SAVI Global is focused on helping furniture and home
            accessories brands grow on marketplaces without needing to build
            their own complex eCommerce operations.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {aboutCards.map((card) => (
            <motion.div
              key={card.title}
              variants={itemVariants}
            >
              <div className="group h-full bg-card rounded-3xl border border-border overflow-hidden shadow-lg transition-transform duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${card.gradient}`}
                  />
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.6 }}
                    className="absolute bottom-4 left-4"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors duration-300">
                      <card.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground font-sans leading-relaxed text-sm md:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
