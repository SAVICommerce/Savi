"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Instagram, Phone, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/platform", label: "Platform" },
  { href: "/services", label: "Services" },
  
  { href: "/ecommerce-store", label: "eCommerce Store" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showTopBar, setShowTopBar] = useState(true)
  const lastScrollY = useRef(0)
  const pathname = usePathname()
  const logoSrc = "/images/savi-logo.png"
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 20 && currentScrollY > lastScrollY.current) {
        setShowTopBar(false)
      } else {
        setShowTopBar(true)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200"
    >
      {/* Top Contact/Social Bar */}
      <AnimatePresence>
        {showTopBar && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full bg-slate-950 border-b border-slate-800 py-1.5 px-4 lg:px-8 flex items-center justify-between overflow-hidden origin-top"
          >
            {/* Same Gradient as Hero Section */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_86%_78%,rgba(14,165,233,0.14),transparent_42%),linear-gradient(140deg,#020617_0%,#0b1120_45%,#111827_100%)]" />
            
            {/* Left Side: Social */}
            <div className="relative z-10 flex items-center gap-3">
              <span className="hidden sm:inline text-xs sm:text-sm text-slate-300 font-medium font-sans filter drop-shadow-sm">
                Follow Us:
              </span>
              <a
                href="https://www.instagram.com/savicommerce"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4 md:w-[1.125rem] md:h-[1.125rem] filter drop-shadow-sm" />
              </a>
            </div>

            {/* Right Side: Contact */}
            <div className="relative z-10 flex items-center gap-4 md:gap-6">
              <a 
                href="tel:+919953251186"
                className="group flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                aria-label="Call Us"
              >
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 filter drop-shadow-sm transition-transform group-hover:scale-110" />
                <span className="text-xs md:text-sm font-medium font-sans hidden sm:inline">+91 99532 51186</span>
              </a>
              <a 
                href="mailto:info@savicommerce.com"
                className="group flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                aria-label="Email Us"
              >
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 filter drop-shadow-sm transition-transform group-hover:scale-110" />
                <span className="text-xs md:text-sm font-medium font-sans hidden sm:inline">info@savicommerce.com</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between py-1">
          <div className="hidden lg:flex items-center flex-1 min-w-0">
            <Link href="/" className="relative flex items-center group shrink-0">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-[8.5rem] h-[4rem] md:w-[11rem] md:h-[5rem] flex items-center justify-center"
              >
                <Image
                  src={logoSrc}
                  alt="SAVI Global"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>

            <div className="ml-10 flex items-center gap-8 whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors duration-200 relative group font-sans",
                      isActive
                        ? "text-slate-900 font-semibold"
                        : "text-slate-700 hover:text-slate-900",
                      ""
                    )}
                  >
                    {link.label}
                    <motion.span
                      layoutId={isActive ? "nav-indicator" : undefined}
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 transition-all duration-300 bg-slate-900",
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 font-sans"
            >
              <a href="mailto:info@savicommerce.com">Email Us</a>
            </Button>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 font-sans"
            >
              <Link href="/request-demo">Request a demo</Link>
            </Button>
          </div>

          <Link href="/" className="flex lg:hidden items-center gap-3 group">
            <motion.div 
              whileTap={{ scale: 0.95 }}
              className="relative w-[7.5rem] h-[3.5rem] overflow-visible"
            >
              <Image
                src={logoSrc}
                alt="SAVI Global"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-full border transition-all duration-300 border-slate-300 bg-slate-100/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-900" />
            ) : (
              <Menu className="w-5 h-5 text-slate-900" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 bg-card/95 backdrop-blur-md rounded-2xl p-6 border border-border mb-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-base font-medium transition-colors font-sans",
                        isActive
                          ? "text-primary font-semibold"
                          : "text-muted-foreground hover:text-primary"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <div className="flex items-center justify-between gap-2 pt-2">
                  <Button
                    asChild
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-sans"
                  >
                    <a href="mailto:info@savicommerce.com">Email Us</a>
                  </Button>
                  <Button
                    asChild
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-sans"
                  >
                    <Link href="/request-demo">Request a demo</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
