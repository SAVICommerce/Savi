import { Header } from "@/components/header"
import { Services } from "@/components/services"
import { Categories } from "@/components/categories"
import { Marketplaces } from "@/components/marketplaces"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Our Services | Marketplace Management & Operations",
  description: "End-to-end marketplace services for furniture brands. From Wayfair to Amazon, we handle listing optimization, inventory management, order fulfillment, and more.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <div className="h-24 md:h-32" /> {/* Offset for fixed header */}
      <Services />
      <Marketplaces />
      <Categories />
      <Footer />
    </main>
  )
}
