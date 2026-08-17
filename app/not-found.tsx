import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

/* Root-level 404 renders outside the (site) layout, so it carries
   its own copy of the frame. */
export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-5 sm:px-8">
      <Navbar />
      <main className="leaf flex-1 border-t border-rule">
        <div className="row pt-16 pb-24 sm:pt-24">
          <p className="marginalia">404</p>
          <div className="max-w-2xl">
            <h1 className="font-serif text-3xl font-medium tracking-tight text-foreground">
              There&apos;s no page here.
            </h1>
            <p className="mt-4 font-serif text-lg italic leading-relaxed text-muted-foreground">
              The link may be stale, or the piece may have moved.
            </p>
            <p className="mt-8">
              <Link
                href="/"
                className="font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
              >
                back to the index
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
