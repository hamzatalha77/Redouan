import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Rdoua.',
  description: 'A Protfolio of Rdoua, a Frontend Developer'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
