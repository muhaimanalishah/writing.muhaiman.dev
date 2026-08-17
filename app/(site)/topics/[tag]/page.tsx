import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllTags, getPostsByTag } from "@/lib/posts"
import { WritingIndex } from "@/components/writing-index"

interface TopicPageProps {
  params: Promise<{ tag: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { tag } = await params
  return {
    title: tag,
    description: `Writing filed under ${tag}.`,
  }
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { tag } = await params
  const posts = getPostsByTag(tag)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="pb-16">
      <header className="row pt-10 sm:pt-14">
        <p className="marginalia">topic</p>
        <div>
          <h1 className="font-serif text-3xl font-medium tracking-tight text-foreground">{tag}</h1>
          <p className="mt-2 font-mono text-xs text-muted-foreground">
            {posts.length} {posts.length === 1 ? "piece" : "pieces"} ·{" "}
            <Link href="/" className="transition-colors hover:text-accent">
              full index
            </Link>
          </p>
        </div>
      </header>

      <WritingIndex posts={posts} />
    </div>
  )
}
