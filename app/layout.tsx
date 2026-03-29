import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'SAVI Global | Smart eCommerce Operations',
  description: 'Smart eCommerce operations for furniture & home accessories brands. Launch and scale across Wayfair, Amazon, Houzz, Bed Bath & Beyond, and Walmart with one partner.',
  keywords: 'ecommerce, furniture, marketplace, wayfair, amazon, home accessories, dropship, inventory management',
  icons: {
    icon: [
      { url: '/images/savi-logo-old.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/savi-logo-old.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/images/savi-logo-old.png',
    apple: '/images/savi-logo-old.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
