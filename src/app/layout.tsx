import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next & Tailwindcss',
  description: 'Aplicação feita com Next e Tailwind para praticar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid-cols-app grid min-h-screen">
          <aside className="border-r border-zinc-200 bg-red-600 px-4 py-8">
            <p>Sidebar</p>
          </aside>
          <main className="bg-blue-600 px-8 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
