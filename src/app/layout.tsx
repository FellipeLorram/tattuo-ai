import { Toaster } from '@/components/ui/toaster';
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Providers } from '@/components/providers';

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
      <body className={`${montserrat.className} bg-gray-900 `} >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
