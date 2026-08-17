import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL?.trim()
  const xUrl = process.env.NEXT_PUBLIC_X_URL?.trim()
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim()

  const socialLinks = [
    { label: "GitHub", href: githubUrl },
    { label: "X", href: xUrl },
    { label: "LinkedIn", href: linkedinUrl },
  ].filter((item): item is { label: string; href: string } => Boolean(item.href))

  return (
    <footer className="mt-auto w-full border-t border-border/40 py-10 sm:py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-8 text-sm text-muted-foreground">
        <p className="order-2 sm:order-1">
          © {currentYear} Writings. All thoughts and reflections.
        </p>

        <div className="order-1 flex items-center gap-5 sm:order-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
          <Link
            href="/rss.xml"
            className="transition-colors hover:text-foreground"
            title="Subscribe to RSS Feed"
          >
            RSS
          </Link>
        </div>
      </div>
    </footer>
  )
}
