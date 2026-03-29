"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, ExternalLink } from "lucide-react"

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-up")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-lg md:text-xl font-bold text-primary uppercase tracking-widest">
              Contact
            </span>
          </div>
          <h2
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground"
            style={{ transitionDelay: "200ms" }}
          >
            Start A Conversation
          </h2>
          <p
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-base text-muted-foreground"
            style={{ transitionDelay: "300ms" }}
          >
            Share your catalog, current channels, and goals. We will review and
            respond with how we can support your marketplace operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out lg:col-span-3"
            style={{ transitionDelay: "400ms" }}
          >
            <div className="bg-card rounded-3xl border border-border shadow-2xl p-8">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="a7800e25-2a4b-45ea-b261-f1282f34770b"
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground"
                    >
                      Full name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="rounded-xl border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-foreground"
                    >
                      Company
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your company name"
                      className="rounded-xl border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground"
                    >
                      Work email <span className="text-destructive">*</span>
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                      className="rounded-xl border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Short summary"
                      className="rounded-xl border-border focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground"
                  >
                    How can SAVI help?{" "}
                    <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us a little about your catalog and marketplaces you are interested in."
                    required
                    className="min-h-32 rounded-xl border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Submit Inquiry
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full px-8 border-border hover:border-primary/50"
                  >
                    <a href="mailto:info@savicommerce.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Or email directly
                    </a>
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out lg:col-span-2"
            style={{ transitionDelay: "500ms" }}
          >
            <div className="bg-gradient-to-br from-primary/10 via-card to-card rounded-3xl border border-primary/20 shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                SAVI Global
              </h3>
              <p className="text-muted-foreground mb-8">
                We operate as your marketplace eCommerce partner for furniture
                and home accessories brands.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                    <a
                      href="tel:+919953251186"
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      +91 99532 51186
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:saviglobalsourcing@gmail.com"
                      className="text-foreground font-medium hover:text-primary transition-colors break-all"
                    >
                      info@savicommerce.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Address</p>
                    <p className="text-foreground font-medium">
                      ASHIANA UMANG PHASE-I, Jhai, Rajasthan 302042
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.4690970941147!2d75.65358112443775!3d26.825028263855096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4a65775f3d9f%3A0x44548f4ca650803e!2sASHIANA%20UMANG%20PHASE-I%2C%20Jhai%2C%20Rajasthan%20302042!5e0!3m2!1sen!2sin!4v1765534091494!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SAVI Global Location"
                />
              </div>

              <div className="mt-6 p-4 bg-card/50 rounded-2xl border border-border">
                <p className="text-sm text-muted-foreground">
                  Registered under the Government of India.
                </p>
                <p className="text-sm font-medium text-foreground mt-1">
                  GSTIN: <span className="text-primary">08AFNFS5654L1Z6</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fade-up.animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
