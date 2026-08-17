import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Posts",
  description: "Browse all essays, notes, and writings.",
  openGraph: {
    title: "All Posts | Writings",
    description: "Browse all essays, notes, and writings.",
  },
}

export default function PostsPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-16">
      {/* Header */}
      <div className="mb-10 sm:mb-12 border-b border-border/40 pb-6">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
          All Posts
        </h1>
        <p className="text-lg text-muted-foreground">
          An archive of essays, technical notes, and reflections.
        </p>
      </div>

      {/* Responsive Card Grid: max 3 cards per row on large screens */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="group flex flex-col focus-visible:outline-hidden"
          >
            <Card className="flex h-full flex-col justify-between transition-all duration-200 hover:border-border hover:shadow-lg hover:bg-muted/10 group-hover:border-foreground/20">
              <CardHeader className="gap-2">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span>{post.readingTime}</span>
                </div>
                <CardTitle className="font-heading text-lg sm:text-xl font-semibold leading-snug group-hover:text-foreground/80 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="pt-0 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Read article &rarr;
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
