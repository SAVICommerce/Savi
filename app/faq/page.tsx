import { Header } from "@/components/header"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "FAQ | Common Questions About SAVI Global",
  description: "Find answers to common questions about our marketplace services, eCommerce solutions, and how we can help your furniture brand grow.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <div className="h-24 md:h-32" /> {/* Offset for fixed header */}
      <FAQ />
      <Footer />
    </main>
  )
}
