'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TrustedByClient {
  name: string
  url: string
  domain: string
  logo: string
}

const clients: TrustedByClient[] = [
  {
    name: 'Southern Sky Home',
    url: 'https://southernskyhome.com',
    domain: 'southernskyhome.com',
    logo: '/images/southern-sky-home-logo.png',
  },
  {
    name: 'Liam and Lana',
    url: 'https://liamandlana.com',
    domain: 'liamandlana.com',
    logo: '/images/liam-lana-logo.png',
  },
  {
    name: 'America Arts',
    url: 'https://americaarts.com',
    domain: 'americaarts.com',
    logo: '/images/america-arts-logo.png',
  },
]

export function TrustedBy() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-lg md:text-xl font-bold font-heading text-primary uppercase tracking-widest mb-2 inline-block">
            Trusted By
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-foreground mt-4 text-balance">
            Leading Brands & Retailers Trust SAVI Global
          </h2>
          <p className="text-base font-sans text-muted-foreground mt-4 max-w-2xl mx-auto">
            We partner with innovative businesses across the furniture and home décor industries to maximize their marketplace presence and drive sustainable growth.
          </p>
        </motion.div>

        {/* Clients Animated Marquee */}
        <div className="relative group flex overflow-hidden max-w-5xl mx-auto border-y border-border/50 py-10">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className="flex gap-8 px-4 items-center shrink-0 pr-8"
          >
            {[...clients, ...clients, ...clients].map((client, i) => (
              <Link
                key={`${client.domain}-${i}`}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/client relative w-64 h-32 flex-shrink-0 rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-lg cursor-pointer mx-4 shadow-sm"
                title={`Visit ${client.name}`}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover/client:opacity-100 transition-opacity duration-300" />

                {/* Logo Container - Centered */}
                <div className="relative w-full h-full flex items-center justify-center px-8 bg-card transition-colors duration-300 group-hover/client:bg-transparent">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain px-6 transition-all duration-300 group-hover/client:scale-105"
                  />
                </div>

                {/* Top border accent on hover */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover/client:w-full" />
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-4"
        >
          <p className="text-center font-sans text-sm text-muted-foreground">
            Partner with us to bring your products to leading marketplaces and scale your furniture & home décor business globally.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
