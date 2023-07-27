import { Topbar } from '@/components/layout/topbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='w-full flex items-center max-w-[1640] mx-auto flex-col min-h-screen'>
      <Topbar />
      {children}
    </main>
  )
}
