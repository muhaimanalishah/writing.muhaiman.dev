import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllPosts, getPostBySlug } from "@/lib/posts"

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Not found",
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Muhaiman"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

const fullDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
})

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  let PostContent: React.ComponentType
  try {
    const mdxModule = await import(`@/content/posts/${slug}.mdx`)
    PostContent = mdxModule.default
  } catch {
    notFound()
  }

  // Neighbouring posts, so a reader always has somewhere to go next.
  const posts = getAllPosts()
  const index = posts.findIndex((p) => p.slug === slug)
  const newer = index > 0 ? posts[index - 1] : null
  const older = index >= 0 && index < posts.length - 1 ? posts[index + 1] : null

  return (
    <div className="pb-20">
      <header className="pt-14 sm:pt-16">
        <h1 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-foreground [text-wrap:balance] sm:text-[2rem]">
          {post.title}
        </h1>

        <p className="mt-3 text-sm text-muted-foreground">
          <time dateTime={post.date}>{fullDate.format(new Date(post.date))}</time>
          <span aria-hidden> · </span>
          {post.readingTime} read
        </p>

        {post.description && (
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground [text-wrap:pretty]">
            {post.description}
          </p>
        )}
      </header>

      <article className="mt-10">
        <PostContent />
      </article>

      {post.tags.length > 0 && (
        <div className="mt-12 flex flex-wrap items-center gap-2">
          {post.tags.map((tag) => (
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

      {/* Where to go next */}
      {(older || newer) && (
        <nav
          aria-label="More writing"
          className="mt-12 grid gap-6 border-t border-faint pt-8 sm:grid-cols-2"
        >
          {older ? (
            <Link href={`/writing/${older.slug}`} className="group block">
              <span className="text-sm text-muted-foreground">Older</span>
              <span className="mt-1 block font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
                {older.title}
              </span>
            </Link>
          ) : (
            <span aria-hidden className="hidden sm:block" />
          )}
          {newer && (
            <Link href={`/writing/${newer.slug}`} className="group block sm:text-right">
              <span className="text-sm text-muted-foreground">Newer</span>
              <span className="mt-1 block font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
                {newer.title}
              </span>
            </Link>
          )}
        </nav>
      )}
    </div>
  )
}
