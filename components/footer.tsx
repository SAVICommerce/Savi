"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Globe, MapPin, Instagram } from "lucide-react"
import { motion } from "framer-motion"

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#faqs", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-54 h-21 md:w-60 md:h-24"
              >
                <Image
                  src="/images/savi-logo.png"
                  alt="SAVI Global"
                  fill
                  className="object-contain transition-all duration-300"
                />
              </motion.div>
            </Link>
            <p className="text-muted-foreground font-sans max-w-md leading-relaxed">
              Smart marketplace operations for furniture and home accessories
              brands, with a focus on furniture, upholstery, and accessories
              including bags, lighting, pillows, and more.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold font-heading text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-sans"
                  >
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold font-heading text-foreground mb-6">
              Our Offices
            </h4>
            <div className="space-y-5">
              <div>
                <p className="text-sm font-bold text-foreground font-sans mb-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  India Office
                </p>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed pl-6">
                  ASHIANA UMANG PHASE-I,<br />
                  Jhai, Rajasthan 302042
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground font-sans mb-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  U.S Office
                </p>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed pl-6">
                  250 Arnold Mill Road,<br />
                  Woodstock, GA 30188
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold font-heading text-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-4">

              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="mailto:info@savicommerce.com"
                  className="flex items-center gap-3 text-muted-foreground font-sans hover:text-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-primary shrink-0">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  info@savicommerce.com
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <span className="flex items-center gap-3 text-muted-foreground font-sans">
                  <Globe className="w-4 h-4 text-primary" />
                  savicommerce.com
                </span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <a
                  href="https://www.instagram.com/savicommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground font-sans hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4 text-primary" />
                  @savicommerce
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm font-sans text-muted-foreground">
            © 2026 SAVI Global. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm font-sans text-muted-foreground">
            <span>
              GST No: <span className="text-primary font-medium">08AFNFS5654L1Z6</span>
            </span>
            <span className="hidden md:inline">Marketplace enablement for furniture & home accessories</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
