'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-lg md:text-xl font-bold text-primary uppercase tracking-widest mb-2 inline-block">
            Trusted By
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-4 text-balance">
            Leading Brands & Retailers Trust SAVI Global
          </h2>
          <p className="text-base text-muted-foreground mt-4 max-w-2xl mx-auto">
            We partner with innovative businesses across the furniture and home décor industries to maximize their marketplace presence and drive sustainable growth.
          </p>
        </div>

        {/* Clients Grid - Full Width Responsive */}
        <div
          ref={containerRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 transition-all duration-700 ease-out w-full ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {clients.map((client, index) => (
            <Link
              key={client.domain}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-32 sm:h-40 lg:h-48 rounded-2xl lg:rounded-3xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/60 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
              title={`Visit ${client.name}`}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Logo Container - Centered */}
              <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-3">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-103"
                />
              </div>

              {/* Top border accent on hover */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <p className="text-center text-sm text-muted-foreground">
            Partner with us to bring your products to leading marketplaces and scale your furniture & home décor business globally.
          </p>
        </div>
      </div>
    </section>
  )
}
