import type { Metadata } from 'next'
import { primary, secondary } from '@/styles/font'
import '@/styles/globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/lib/ThemeProvider'

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
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body
        className={cn(
          primary.variable,
          secondary.variable,
          'font-primary text-black antialiased dark:text-white',
          'bg-neutral-50 dark:bg-neutral-950',
          'scrollbar scrollbar-thumb-neutral-400 scrollbar-track-neutral-300 dark:scrollbar-thumb-neutral-500 dark:scrollbar-track-neutral-900 scrollbar-w-1.5 scrollbar-h-1.5 scrollbar-thumb-rounded-full scrollbar-corner-neutral-400 dark:scrollbar-corner-neutral-900 scroll-smooth',
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
