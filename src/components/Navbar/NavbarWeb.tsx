'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ToggleTheme } from "./ToggleTheme"

interface Link {
  href: string
  label: string
}

export function NavbarWeb() {
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
    <div className="hidden w-full items-center justify-between md:flex">
      <nav className="font-secondary -ml-2 flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'text-sm text-neutral-400 dark:text-neutral-500',
              pathname === link.href? 'font-medium text-black dark:text-white' : '',
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <ToggleTheme />
    </div>
  )
}
