import { Header } from "@/components/header"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us | Get in Touch with SAVI Global",
  description: "Have questions about our services? Reach out to our team. We're here to help you scale your furniture business across marketplaces.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <div className="h-24 md:h-32" /> {/* Offset for fixed header */}
      <Contact />
      <Footer />
    </main>
  )
}
