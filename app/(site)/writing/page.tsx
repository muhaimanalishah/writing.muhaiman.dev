import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts, getAllTags } from "@/lib/posts"
import { PostList } from "@/components/post-list"

export const metadata: Metadata = {
  title: "Writing",
  description: "Everything published so far — software, learning, and life.",
}

export default function WritingPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  const byYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = new Date(post.date).getFullYear().toString()
    ;(acc[year] ??= []).push(post)
    return acc
  }, {})

  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a))

  return (
    <div className="pb-20">
      <header className="pt-14 sm:pt-20">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">Writing</h1>
      </header>

      {years.map((year) => (
        <section key={year} className="mt-10">
          <h2 className="text-sm font-medium text-muted-foreground">{year}</h2>
          <div className="mt-3">
            <PostList posts={byYear[year]} />
          </div>
        </section>
      ))}

      {tags.length > 0 && (
        <div className="mt-14 flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">Topics:</span>
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/topics/${tag}`}
              className="rounded-full bg-wash px-3 py-1 text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
