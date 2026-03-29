import { Header } from "@/components/header"
import { WebServices } from "@/components/web-services"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "eCommerce Store Solutions | Shopify & Web Development",
  description: "Build and scale your eCommerce presence with our Shopify store development and web solutions. Custom design, integration, and ongoing maintenance services.",
}

export default function eCommerceStorePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <div className="h-24 md:h-32" /> {/* Offset for fixed header */}
      <WebServices />
      <Footer />
    </main>
  )
}
