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
    <footer className="flex items-center justify-between gap-6 border-t border-faint py-8 text-sm text-muted-foreground">
      <p>© {currentYear} Muhaiman</p>

      <div className="flex items-center gap-5">
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
          RSS
        </Link>
      </div>
    </footer>
  )
}
