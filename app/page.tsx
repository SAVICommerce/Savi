import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Marketplaces } from "@/components/marketplaces"
import { Services } from "@/components/services"
import { TrustedBy } from "@/components/trusted-by"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <TrustedBy />
      <About />
      <Marketplaces />
      <Services />
      <Footer />
    </main>
  )
}
