import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL?.trim()
  const xUrl = process.env.NEXT_PUBLIC_X_URL?.trim()
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim()

  const socialLinks = [
    { label: "github", href: githubUrl },
    { label: "x", href: xUrl },
    { label: "linkedin", href: linkedinUrl },
  ].filter((item): item is { label: string; href: string } => Boolean(item.href))

  return (
    <footer className="flex items-baseline justify-between gap-6 border-t border-rule py-8 font-mono text-xs text-muted-foreground">
      <p>© {currentYear} Muhaiman</p>

      <div className="flex items-baseline gap-5">
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
        <Link href="/rss.xml" className="transition-colors hover:text-foreground">
          rss
        </Link>
      </div>
    </footer>
  )
}
