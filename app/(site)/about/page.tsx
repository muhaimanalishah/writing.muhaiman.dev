import type { Metadata } from "next"
import { getAboutMetadata } from "@/lib/posts"
import AboutContent from "@/content/about.mdx"

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getAboutMetadata()
  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: `${metadata.title} · Muhaiman`,
      description: metadata.description,
    },
  }
}

export default function AboutPage() {
  return (
    <div className="pb-16">
      <header className="row pt-12 sm:pt-16">
        <p className="marginalia">about</p>
        <h1 className="font-serif text-3xl font-medium tracking-tight text-foreground">
          Muhaiman
        </h1>
      </header>

      <div className="row mt-8">
        <div aria-hidden className="hidden md:block" />
        <article className="max-w-2xl">
          <AboutContent />
        </article>
      </div>
    </div>
  )
}
