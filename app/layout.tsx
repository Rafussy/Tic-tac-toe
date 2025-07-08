import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tic-Tac-Toe Game',
  description: 'A classic two-player Tic-Tac-Toe game built with modern web technologies',
  keywords: ['tic-tac-toe', 'game', 'two-player', 'classic', 'react', 'nextjs'],
  authors: [{ name: 'Tic-Tac-Toe Game' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`}>
        <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20">
          {children}
        </div>
      </body>
    </html>
  )
} 