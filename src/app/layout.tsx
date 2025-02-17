import type { Metadata } from 'next'
import { primary, secondary } from '@/styles/font'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'guga.dev',
  description:
    "Hey whats up? My name is Gustavo, but you can call me Guga! I'm a Full-Stack developer. Ready to serve, work and innovate",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className="scrollbar-thumb-neutral-700 scrollbar-track-neutral-950"
    >
      <body
        className={cn(primary.variable, secondary.variable, 'scrollbar-thin')}
      >
        {children}
      </body>
    </html>
  )
}
