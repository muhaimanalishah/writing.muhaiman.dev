"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const links = [
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-between py-8">
      <Link
        href="/"
        className="text-[0.9375rem] font-semibold tracking-tight text-foreground transition-opacity hover:opacity-70"
      >
        Muhaiman<span className="text-accent">.</span>
      </Link>

      <nav aria-label="Main" className="flex items-center gap-6 text-sm">
        {links.map(({ href, label }) => {
          const active = pathname === href || pathname.startsWith(`${href}/`)
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "transition-colors hover:text-foreground",
                active ? "font-medium text-foreground" : "text-muted-foreground"
              )}
            >
              {label}
            </Link>
          )
        })}
        <ThemeToggle />
      </nav>
    </header>
  )
}
