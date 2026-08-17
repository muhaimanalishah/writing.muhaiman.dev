import Link from "next/link"
import type { PostMetadata } from "@/lib/posts"

const dateFormatter = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" })

/* A quiet list of posts: title left, date right. */
export function PostList({ posts, stagger = 0 }: { posts: PostMetadata[]; stagger?: number }) {
  return (
    <ul>
      {posts.map((post, i) => (
        <li
          key={post.slug}
          className={stagger ? "rise" : undefined}
          style={stagger ? { ["--rise-delay" as string]: `${i * 50 + stagger}ms` } : undefined}
        >
          <Link
            href={`/writing/${post.slug}`}
            className="group -mx-3 flex items-baseline justify-between gap-6 rounded-lg px-3 py-2.5 transition-colors hover:bg-wash"
          >
            <span className="font-medium text-foreground transition-colors group-hover:text-accent">
              {post.title}
            </span>
            <time
              dateTime={post.date}
              className="shrink-0 text-sm text-muted-foreground tabular-nums"
            >
              {dateFormatter.format(new Date(post.date))}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  )
}
