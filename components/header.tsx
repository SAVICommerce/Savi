"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ecommerce-store", label: "eCommerce Store" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const logoSrc = "/images/savi-logo.png"

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between py-1.5">
          <div className="hidden lg:flex items-center flex-1 min-w-0">
            <Link href="/" className="relative flex items-center group shrink-0">
              <div className="relative w-[7.25rem] h-[3.5rem] md:w-[8.5rem] md:h-[4rem] overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={logoSrc}
                  alt="SAVI Global"
                  fill
                  className="object-contain scale-[1.05] transition-all duration-300"
                  priority
                />
              </div>
            </Link>

            <div className="ml-10 flex items-center gap-8 whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors duration-200 relative group",
                      isActive
                        ? "text-slate-900 font-semibold"
                        : "text-slate-700 hover:text-slate-900"
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 transition-all duration-300",
                        "bg-slate-900",
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="mailto:info@savicommerce.com">Email Us</a>
            </Button>
          </div>

          <Link href="/" className="flex lg:hidden items-center gap-3 group">
            <div className="relative w-[5.3rem] h-[3rem] overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <Image
                src={logoSrc}
                alt="SAVI Global"
                fill
                className="object-contain scale-[1.2] transition-all duration-300"
                priority
              />
            </div>
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
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 bg-card/95 backdrop-blur-md rounded-2xl p-6 border border-border">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base font-medium transition-colors",
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
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                <a href="mailto:saviglobalsourcing@gmail.com">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
