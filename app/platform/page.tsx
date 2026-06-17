import { Header } from "@/components/header"
import { Features } from "@/components/features"
import { Footer } from "@/components/footer"

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-slate-950 overflow-x-hidden pt-20">
      <Header />
      <Features />
      <Footer />
    </main>
  )
}
