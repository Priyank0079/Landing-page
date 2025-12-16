import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechFlow - Modern Solutions for Your Business',
  description: 'Discover powerful tools and features designed to streamline your workflow and boost productivity. Get started today with our innovative platform.',
  keywords: 'technology, productivity, business solutions, software, innovation',
  authors: [{ name: 'TechFlow Team' }],
  openGraph: {
    title: 'TechFlow - Modern Solutions for Your Business',
    description: 'Discover powerful tools and features designed to streamline your workflow.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

