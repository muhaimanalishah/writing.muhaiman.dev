import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllTags, getPostsByTag } from "@/lib/posts"
import { PostList } from "@/components/post-list"

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
    description: `Writing about ${tag}.`,
  }
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { tag } = await params
  const posts = getPostsByTag(tag)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="pb-20">
      <header className="pt-14 sm:pt-20">
        <p className="text-sm font-medium text-muted-foreground">Topic</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground">{tag}</h1>
      </header>

      <div className="mt-8">
        <PostList posts={posts} />
      </div>

      <p className="mt-8">
        <Link
          href="/writing"
          className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          ← All writing
        </Link>
      </p>
    </div>
  )
}
