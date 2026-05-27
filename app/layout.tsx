import './globals.css'
import Navbar from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Payment Website',
  description:
    'A modern payment processing website built with Next.js and Tailwind CSS.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full flex flex-col">
        <Navbar />
        <Analytics />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}