import Link from "next/link"
import type { PostMetadata } from "@/lib/posts"

const dayMonth = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" })

/* The index: entries grouped by year, dates in the margin,
   titles on the text column. Used by the homepage and topic pages. */
export function WritingIndex({ posts }: { posts: PostMetadata[] }) {
  const byYear = posts.reduce<Record<string, PostMetadata[]>>((acc, post) => {
    const year = new Date(post.date).getFullYear().toString()
    ;(acc[year] ??= []).push(post)
    return acc
  }, {})

  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a))
  let stagger = 0

  return (
    <>
      {years.map((year) => (
        <section key={year} aria-label={year}>
          <div className="row pt-10 pb-1">
            <p className="marginalia font-medium text-foreground/60">{year}</p>
          </div>

          <ol>
            {byYear[year].map((post) => {
              const delay = stagger++ * 60 + 80
              return (
                <li
                  key={post.slug}
                  className="rise"
                  style={{ ["--rise-delay" as string]: `${delay}ms` }}
                >
                  <article className="row group relative py-4 md:items-baseline">
                    <div className="marginalia">
                      <time
                        dateTime={post.date}
                        className="transition-colors group-hover:text-foreground"
                      >
                        {dayMonth.format(new Date(post.date))}
                      </time>
                    </div>

                    <div>
                      <h2 className="font-serif text-[1.3rem] leading-snug font-medium text-foreground">
                        <Link
                          href={`/posts/${post.slug}`}
                          className="transition-colors after:absolute after:inset-0 group-hover:text-accent"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      {post.description && (
                        <p className="mt-1 max-w-[58ch] text-[1.0625rem] leading-relaxed text-muted-foreground">
                          {post.description}
                        </p>
                      )}
                    </div>
                  </article>
                </li>
              )
            })}
          </ol>
        </section>
      ))}
    </>
  )
}
