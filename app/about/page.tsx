import { Header } from "@/components/header"
import { About } from "@/components/about"
import { HowWeWork } from "@/components/how-we-work"
import { Differentiators } from "@/components/differentiators"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About SAVI Global | Who We Are & Our Mission",
  description: "Learn about SAVI Global, our mission to revolutionize furniture eCommerce, and how we help brands scale across multiple marketplaces.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <div className="h-24 md:h-32" /> {/* Offset for fixed header */}
      <About />
      <HowWeWork />
      <Differentiators />
      <Footer />
    </main>
  )
}
