import Link from "next/link"

export function NotFoundContent() {
  return (
    <div className="pt-14 pb-20 sm:pt-20">
      <p className="text-sm font-medium text-muted-foreground">404</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        The link may be old, or the post may have moved.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          ← Back home
        </Link>
      </p>
    </div>
  )
}
