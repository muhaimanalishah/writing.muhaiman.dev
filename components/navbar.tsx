import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <header className="w-full border-b border-border/40 bg-background/80 backdrop-blur-xs">
      <div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="font-heading text-lg sm:text-xl font-medium tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          Writings
        </Link>

        <nav aria-label="Main Navigation" className="flex items-center gap-6 sm:gap-8">
          <Link
            href="/"
            className="text-sm sm:text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="text-sm sm:text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            Posts
          </Link>
          <Link
            href="/about"
            className="text-sm sm:text-base text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
