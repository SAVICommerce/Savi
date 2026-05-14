import { Header } from "@/components/header"
import { DemoHub } from "@/components/demo-hub"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Request Demo | SAVI Commerce Inventory Hub",
  description: "Request a demo of SAVI Commerce Inventory Hub. Watch video tutorials and learn how to manage your inventory across all marketplaces with our platform.",
}

export default function RequestDemoPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <div className="h-16 md:h-20" /> {/* Reduced offset for fixed header */}
      <DemoHub />
      <Footer />
    </main>
  )
}
