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
    <div className="pb-20">
      <header className="pt-14 sm:pt-20">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">About</h1>
      </header>

      <article className="mt-8">
        <AboutContent />
      </article>
    </div>
  )
}
