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

              <div className="relative min-h-[470px] overflow-hidden rounded-[1.75rem] border border-border bg-slate-950 shadow-[0_24px_60px_rgba(15,23,42,0.22)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.12),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(2,6,23,0.99))]" />
                <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />

                <div className="relative z-10 flex h-full flex-col p-5 md:p-6 text-slate-100">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky-300/90">
                        SAVICOMMERCE ERP
                      </p>
                      <h4 className="mt-1 text-lg md:text-xl font-semibold text-white">
                        Dashboard preview
                      </h4>
                    </div>
                    <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold text-emerald-200">
                      Admin access only
                    </div>
                  </div>

                  <div className="mt-5 grid flex-1 gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-200">Operational Health</span>
                        <span className="text-xs text-slate-400">Live</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          ["Revenue", "$128.4K"],
                          ["Inventory", "98% synced"],
                          ["Orders", "1,248"],
                          ["Critical", "12 items"],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
                            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">{label}</p>
                            <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-sky-300">Workflow</p>
                        <div className="mt-3 space-y-3">
                          {[
                            "Login and onboarding",
                            "Channel integration",
                            "Inventory import",
                            "Predictive reordering",
                          ].map((item, index) => (
                            <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-400/15 text-[11px] font-semibold text-sky-200">
                                {index + 1}
                              </span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                      <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-sky-300">Key access notes</p>
                        <div className="mt-3 space-y-3 text-sm text-slate-300">
                          {[
                            "Private infrastructure - admin issued credentials only",
                            "Company details, logo, and signature setup",
                            "Shopify, Wayfair, Etsy, and WooCommerce links",
                            "Dashboard, predictor, procurement, invoicing",
                          ].map((item) => (
                            <div key={item} className="flex gap-3">
                              <CheckCircle2 className="mt-0.5 w-4 h-4 text-sky-300 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sky-400/15 to-emerald-400/10 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-200">Support</p>
                        <p className="mt-2 text-sm leading-6 text-slate-200">
                          Login issues or credential resets should go through the admin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
