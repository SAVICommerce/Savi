"use client"

import { motion } from "framer-motion"
import {
  Rocket,
  FileText,
  Package,
  CreditCard,
  Megaphone,
  Shield,
} from "lucide-react"

const services = [
  {
    icon: Rocket,
    title: "Channel Setup & Expansion",
    subtitle: "Get seller accounts and catalogs ready",
    items: [
      "Seller account creation, compliance, and brand/storefront setup.",
      "Catalog onboarding, category mapping, and variant structures aligned with marketplace expectations.",
      "Daily inventory updates on channels to keep stock levels accurate.",
    ],
    featured: true,
  },
  {
    icon: FileText,
    title: "Content & Merchandising",
    subtitle: "Optimize Discoverability And Conversion",
    items: [
      "SEO-aligned titles, feature bullet points, and product descriptions.",
      "Image standards and enhanced content where supported by the marketplace.",
      "Attribute completion to improve search relevance and conversion.",
    ],
    featured: true,
  },
  {
    icon: Package,
    title: "Inventory & Order Operations",
    subtitle: "Stay on top of inventory and SLAs",
    items: [
      "Inventory sync rules, including safety stock and buffer logic.",
      "Order processing and routing for dropship/3P and 1P, where applicable.",
      "Shipment SLAs, tracking updates, and exception handling.",
    ],
    featured: false,
  },
  {
    icon: CreditCard,
    title: "Payments, Returns & Customer Care",
    subtitle: "Close the loop on every order",
    items: [
      "Payment tracking and oversight on chargebacks and adjustments.",
      "Return and replacement workflows aligned with marketplace policies.",
      "Customer message handling within the required response timelines.",
    ],
    featured: false,
  },
  {
    icon: Megaphone,
    title: "Promotions & Advertising",
    subtitle: "Plan campaigns and drive demand",
    items: [
      "Campaign planning for seasonal peaks and clearance needs.",
      "Marketplace advertising (for example, Sponsored Ads) and deal mechanics.",
      "Review programs and basic performance views to support decisions.",
    ],
    featured: false,
  },
  {
    icon: Shield,
    title: "Compliance & Performance Health",
    subtitle: "Protect your marketplace scorecards",
    items: [
      "Monitoring of key metrics like on-time shipping, cancellations, and defect rates.",
      "Policy adherence, documentation, and readiness for checks.",
      "Support in reducing risk around listing or account disruptions.",
    ],
    featured: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-transparent to-accent/30" />

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
              Services
            </span>
          </div>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-foreground">
            End-To-End Marketplace Services
          </h2>
          <p className="mt-4 text-base font-sans text-muted-foreground">
            Our work covers the practical areas needed to launch, operate, and
            grow your marketplace business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <div
                className={`group h-full p-6 lg:p-8 rounded-3xl border transition-all duration-500 shadow-md hover:shadow-2xl ${
                  service.featured
                    ? "bg-gradient-to-br from-primary/10 via-card to-card border-primary/20 shadow-xl"
                    : "bg-card border-border hover:border-primary/20"
                }`}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      service.featured
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg"
                    }`}
                  >
                    <service.icon className="w-7 h-7" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm font-medium font-sans text-primary mt-1">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* List */}
                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_5px_rgba(var(--primary),0.5)]" />
                      <span className="text-muted-foreground font-sans leading-relaxed text-sm lg:text-base">
                        {item}
                      </span>
                    </motion.li>
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
