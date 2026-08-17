import Link from "next/link"
import { getAllPosts } from "@/lib/posts"

export default function HomePage() {
  const posts = getAllPosts()
  const recentPosts = posts.slice(0, 3)

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-16">
      {/* Intro section */}
      <section className="mb-14 sm:mb-16">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
          Writings & Reflections
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          Thoughts on software engineering, thoughtful interface design, digital gardens, and the craft of clear thinking.
        </p>
      </section>

      {/* Latest Writings */}
      <section>
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-border/40">
          <h2 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
            Latest Writings
          </h2>
          <Link
            href="/posts"
            className="text-sm sm:text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            All posts &rarr;
          </Link>
        </div>

        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group block transition-transform focus-visible:outline-hidden"
            >
              <article className="rounded-2xl border border-border/40 p-6 sm:p-7 transition-all duration-200 hover:border-border hover:bg-muted/20">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-medium tracking-tight text-foreground group-hover:text-foreground/80">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground shrink-0 font-mono">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed line-clamp-2">
                  {post.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
