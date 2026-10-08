import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'Bay of Quinte Sip & Sign Series | Exclusive ASL Pop-Ups',
  description:
    'Intimate, Deaf-led pop-ups blending cozy social hours, regional pairings, and interactive sign language across Belleville and the Bay of Quinte. Join the priority list.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: `${basePath}/icon-light-32x32.png`,
        media: '(prefers-color-scheme: light)',
      },
      {
        url: `${basePath}/icon-dark-32x32.png`,
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: `${basePath}/icon.svg`,
        type: 'image/svg+xml',
      },
    ],
    apple: `${basePath}/apple-icon.png`,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#4A1525',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
