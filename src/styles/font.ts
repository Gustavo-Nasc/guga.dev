import { Inter, Geist_Mono, JetBrains_Mono } from 'next/font/google'

export const primary = Inter({
  weight: ['700', '600', '400'],
  variable: '--font-primary',
  subsets: ['latin'],
})

export const secondary = Geist_Mono({
  weight: ['700', '500', '400'],
  variable: '--font-secondary',
  subsets: ['latin'],
})

export const code = JetBrains_Mono({
  weight: ['700', '600', '400'],
  variable: '--font-code',
  subsets: ['latin'],
})
