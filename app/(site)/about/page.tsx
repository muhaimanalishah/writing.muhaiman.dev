import type { Metadata } from "next"
import { getAboutMetadata } from "@/lib/posts"
import AboutContent from "@/content/about.mdx"

export async function generateMetadata(): Promise<Metadata> {
  const metadata = getAboutMetadata()
  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: `${metadata.title} | Writings`,
      description: metadata.description,
    },
  }
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
      <article className="prose-content">
        <AboutContent />
      </article>
    </div>
  )
}
