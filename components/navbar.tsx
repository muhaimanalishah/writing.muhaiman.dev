"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "index" },
  { href: "/about", label: "about" },
  { href: "/rss.xml", label: "rss" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="flex items-baseline justify-between py-6 sm:py-8">
      <Link
        href="/"
        className="font-serif text-xl font-medium italic tracking-tight text-foreground transition-colors hover:text-accent"
      >
        Muhaiman
      </Link>

      <nav aria-label="Main" className="flex items-baseline gap-5 font-mono text-[0.8125rem]">
        {links.map(({ href, label }) => {
          const active =
            href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "transition-colors hover:text-foreground",
                active ? "text-accent" : "text-muted-foreground"
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
