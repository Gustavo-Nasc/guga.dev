'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '../ui/button'
import { PanelLeft } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface Link {
  href: string
  label: string
}

export function SheetMobile() {
  const pathname = usePathname()

  const links: Link[] = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/about',
      label: 'About',
    },
    {
      href: '/projects',
      label: 'Projects',
    },
    {
      href: '/setup',
      label: 'Setup',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
  ]

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <PanelLeft />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] gap-2 sm:w-[350px] dark:border-none dark:shadow-sm shadow-white/20">
        <SheetHeader className="space-y-8">
          <SheetTitle className="sm:text-center">Menu</SheetTitle>
          <SheetDescription asChild>
            <nav className="font-secondary -ml-2 flex flex-col items-start gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm text-neutral-400 dark:text-neutral-500 w-full text-left',
                    pathname === link.href? 'font-medium text-black dark:text-white' : '',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
