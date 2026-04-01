import type { Metadata } from 'next'
import { Outfit, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fontSans = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-sans'
});
const fontHeading = Outfit({
  subsets: ["latin"],
  variable: '--font-heading'
});

export const metadata: Metadata = {
  title: 'SAVI Global | Smart eCommerce Operations',
  description: 'Smart eCommerce operations for furniture & home accessories brands. Launch and scale across Wayfair, Amazon, Houzz, Bed Bath & Beyond, and Walmart with one partner.',
  keywords: 'ecommerce, furniture, marketplace, wayfair, amazon, home accessories, dropship, inventory management',
  icons: {
    icon: [
      { url: '/images/savi-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/savi-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/savi-logo.png',
    apple: '/images/savi-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontHeading.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
