import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

/* Root-level 404 renders outside the (site) layout, so it carries
   its own copy of the frame. */
export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-6">
      <Navbar />
      <main className="flex-1 pt-14 pb-20 sm:pt-20">
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
      </main>
      <Footer />
    </div>
  )
}
