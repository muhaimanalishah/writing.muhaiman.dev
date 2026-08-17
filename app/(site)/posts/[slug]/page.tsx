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
      title: "Post Not Found",
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

const fullDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
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
    <div className="pb-16">
      <header className="row pt-12 sm:pt-16">
        <div className="marginalia">
          <time dateTime={post.date}>{fullDate.format(new Date(post.date))}</time>
          <span>{post.readingTime}</span>
        </div>

        <div className="max-w-2xl">
          <h1 className="font-serif text-[clamp(1.875rem,4.5vw,2.625rem)] font-medium leading-[1.15] tracking-[-0.01em] text-foreground [text-wrap:balance]">
            {post.title}
          </h1>
          {post.description && (
            <p className="mt-4 font-serif text-xl italic leading-relaxed text-muted-foreground [text-wrap:pretty]">
              {post.description}
            </p>
          )}
        </div>
      </header>

      <div className="row mt-10">
        <div aria-hidden className="hidden md:block" />
        <article className="max-w-2xl">
          <PostContent />
        </article>
      </div>

      {post.tags.length > 0 && (
        <div className="row mt-14">
          <p className="marginalia">filed</p>
          <p className="font-mono text-xs text-muted-foreground">
            {post.tags.map((tag, i) => (
              <span key={tag}>
                {i > 0 && <span aria-hidden> · </span>}
                <Link href={`/topics/${tag}`} className="transition-colors hover:text-accent">
                  {tag}
                </Link>
              </span>
            ))}
          </p>
        </div>
      )}

      {/* Where to go next */}
      <nav aria-label="More writing" className="row mt-14">
        <p className="marginalia">next</p>
        <div className="grid max-w-2xl gap-6 sm:grid-cols-2">
          {older && (
            <Link href={`/posts/${older.slug}`} className="group block">
              <span className="font-mono text-xs text-muted-foreground">older</span>
              <span className="mt-1 block font-serif text-lg font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
                {older.title}
              </span>
            </Link>
          )}
          {newer && (
            <Link href={`/posts/${newer.slug}`} className="group block">
              <span className="font-mono text-xs text-muted-foreground">newer</span>
              <span className="mt-1 block font-serif text-lg font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
                {newer.title}
              </span>
            </Link>
          )}
          {!older && !newer && (
            <Link
              href="/"
              className="font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
            >
              back to the index
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}
