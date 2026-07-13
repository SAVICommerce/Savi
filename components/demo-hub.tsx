"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle2 } from "lucide-react"

export function DemoHub() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [returnUrl, setReturnUrl] = useState("/request-demo?submitted=1")
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success">("idle")

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

  useEffect(() => {
    setReturnUrl(`${window.location.origin}/request-demo?submitted=1`)
    const submitted = new URLSearchParams(window.location.search).get("submitted")
    if (submitted === "1") {
      setSubmitState("success")
    }
  }, [])

  const handleFormSubmit = () => {
    setSubmitState("submitting")
  }

  return (
    <section ref={sectionRef} className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-transparent to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: "100ms" }}
          >
            <span className="text-sm md:text-base font-semibold text-primary uppercase tracking-[0.3em]">
              Demo & Access
            </span>
          </div>
          <h2
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-2xl md:text-3xl lg:text-[2.7rem] font-bold text-foreground tracking-tight"
            style={{ transitionDelay: "200ms" }}
          >
            See SAVI Commerce in Action
          </h2>
          <p
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto"
            style={{ transitionDelay: "300ms" }}
          >
            Watch how SAVI Commerce Inventory Hub transforms your marketplace operations
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
          {/* Overview Section */}
          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out lg:col-span-3"
            style={{ transitionDelay: "400ms" }}
          >
            <div className="bg-card rounded-3xl border border-border shadow-xl p-6 md:p-8 space-y-6 lg:min-h-[760px]">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                  ERP Overview
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground tracking-tight">
                  How to Use SAVI Commerce ERP
                </h3>
                <p className="text-sm md:text-base leading-7 text-muted-foreground max-w-xl">
                  A guided setup for login, onboarding, channel sync, stock import, AI reordering, procurement, and order fulfillment.
                </p>
              </div>

              <div className="relative aspect-video w-full overflow-hidden rounded-[1.75rem] border border-border bg-slate-950 shadow-[0_24px_60px_rgba(15,23,42,0.22)]">
                <video
                  src="/Videos/SAVI Video.mp4"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  Steps
                </div>
                <div className="space-y-3">
                  {[
                    {
                      step: "01",
                      title: "Obtain Credentials & Login",
                      description: "Contact your system administrator to receive your unique username and password, then log in to enter the dashboard."
                    },
                    {
                      step: "02",
                      title: "Onboarding & Profile Setup",
                      description: "Confirm your company details, address, contact information, logo, and signature under Settings."
                    },
                    {
                      step: "03",
                      title: "Link Your Sales Channels",
                      description: "Add your Shopify, Wayfair, Etsy, and WooCommerce credentials so stock can sync across channels."
                    },
                    {
                      step: "04",
                      title: "Populate Inventory",
                      description: "Upload stock through CSV and initialize tracking so inventory changes update everywhere instantly."
                    },
                    {
                      step: "05",
                      title: "Monitor the Dashboard",
                      description: "Review revenue trends, inventory status, performance categories, and AI-driven reorder insights."
                    },
                  ].map((item) => (
                    <div key={item.step} className="rounded-2xl border border-border bg-card p-4 md:p-5 shadow-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                          {item.step}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-base md:text-lg font-semibold text-foreground">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Demo Request Form */}
          <div
            className="fade-up opacity-0 translate-y-8 transition-all duration-700 ease-out lg:col-span-2"
            style={{ transitionDelay: "500ms" }}
          >
            <div className="sticky top-24 bg-card rounded-3xl border border-border shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Request Demo</h3>
              <form
                method="POST"
                action="https://bigin.zoho.com/crm/WebToContactForm"
                acceptCharset="UTF-8"
                encType="multipart/form-data"
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="xnQsjsdp"
                  defaultValue="8b020178e3ab449cc63203366e275dc19e0513009596d6098ad929110c4d5c20"
                />
                <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
                <input
                  type="hidden"
                  name="xmIwtLD"
                  defaultValue="b27c37e2468a5e05c5ff8b7b532d8fb7165390faf69575c436efe34a04fcbb5bcb07d8e7cee462d5f6fb0636174185b6"
                />
                <input type="hidden" name="actionType" defaultValue="Q29udGFjdHM=" />
                <input type="hidden" name="rmsg" id="rmsg" defaultValue="true" />
                <input type="hidden" name="returnURL" value={returnUrl} readOnly />

                <div className="space-y-2">
                  <label
                    htmlFor="demo-name"
                    className="text-sm font-medium text-foreground"
                  >
                    Full name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="text"
                    id="demo-name"
                    name="Last Name"
                    placeholder="Enter your name"
                    required
                    className="rounded-xl border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="demo-email"
                    className="text-sm font-medium text-foreground"
                  >
                    Work email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="email"
                    id="demo-email"
                    name="Email"
                    placeholder="you@company.com"
                    required
                    className="rounded-xl border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="demo-company"
                    className="text-sm font-medium text-foreground"
                  >
                    Company name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="text"
                    id="demo-company"
                    name="Accounts.Account Name"
                    placeholder="Your company name"
                    required
                    className="rounded-xl border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="demo-phone"
                    className="text-sm font-medium text-foreground"
                  >
                    Phone number <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="tel"
                    id="demo-phone"
                    name="Phone"
                    placeholder="+1 (555) 000-0000"
                    required
                    className="rounded-xl border-border focus:border-primary focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="demo-message"
                    className="text-sm font-medium text-foreground"
                  >
                    Additional details
                  </label>
                  <Textarea
                    id="demo-message"
                    name="Accounts.Description"
                    placeholder="Tell us about your marketplace needs..."
                    rows={4}
                    className="rounded-xl border-border focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitState === "submitting"}
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300 hover:-translate-y-1 group"
                >
                  <Send className="mr-2 w-4 h-4" />
                  {submitState === "submitting" ? "Submitting..." : "Request Demo"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  {submitState === "success"
                    ? "Thanks! Your request has been submitted successfully."
                    : "We'll respond to your request within 24 hours"}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
