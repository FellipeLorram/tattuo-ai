import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Staatliches } from 'next/font/google'
import { Topbar } from '@/components/layout/topbar'

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tattuo',
  description: 'Uma ferramenta para todo tatuador',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-zinc-200 `} >
        {children}
      </body>
    </html>
  )
}
