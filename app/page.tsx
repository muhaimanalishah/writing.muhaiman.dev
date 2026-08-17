import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  const posts = getAllPosts()
  const recentPosts = posts.slice(0, 3)

  return (
    <div className="min-h-screen lg:h-screen lg:overflow-hidden flex flex-col lg:flex-row w-full">
      {/* Left Column: Identity & Navigation (Inverted contrast) */}
      <div className="w-full lg:w-[62%] bg-foreground text-background flex flex-col justify-between p-8 sm:p-12 lg:p-16 xl:p-20 shrink-0">
        <div>
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-none text-background">
            Writings
          </h1>

          <nav aria-label="Main Navigation" className="flex flex-col gap-4 sm:gap-6 mt-12 sm:mt-16 lg:mt-20">
            <Link
              href="/posts"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-background hover:opacity-75 transition-opacity w-fit"
            >
              Posts
            </Link>
            <Link
              href="/about"
              className="font-heading text-2xl sm:text-3xl lg:text-4xl font-medium text-background hover:opacity-75 transition-opacity w-fit"
            >
              About
            </Link>
          </nav>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-0 pt-4">
          <ThemeToggle
            className="text-background hover:text-background hover:bg-background/15 size-10"
            iconClassName="size-5.5"
          />
        </div>
      </div>

      {/* Right Column: Latest Writings */}
      <div className="w-full lg:w-[38%] bg-background text-foreground flex flex-col p-8 sm:p-12 lg:p-14 xl:p-16 lg:overflow-y-auto justify-center">
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <h2 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-6 sm:mb-8 pb-3 border-b border-border">
            Latest writings
          </h2>

          <div className="flex flex-col gap-5">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group block focus-visible:outline-hidden"
              >
                <Card className="rounded-2xl border border-border bg-card p-5 sm:p-6 transition-all duration-200 hover:border-foreground/40 hover:shadow-xs">
                  <div className="text-xs font-mono text-muted-foreground mb-1.5">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground leading-snug group-hover:opacity-80 transition-opacity mb-2">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
