import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllPosts, getPostBySlug } from "@/lib/posts"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

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

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="mx-auto max-w-3xl px-6 py-10 sm:px-8 sm:py-16">
      {/* Breadcrumb Navigation */}
      <div className="mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/posts" />}>Posts</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="truncate max-w-[200px] sm:max-w-none">
                {post.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Post Header */}
      <header className="mb-10 border-b border-border/40 pb-8">
        <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground mb-4">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-4">
          {post.title}
        </h1>

        {post.description && (
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        )}
      </header>

      {/* Article Content */}
      <article className="prose-content">
        <PostContent />
      </article>

      {/* Post Footer Navigation */}
      <div className="mt-14 border-t border-border/40 pt-8 flex items-center justify-between">
        <Link
          href="/posts"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          &larr; Back to all posts
        </Link>
        <a
          href="#top"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Back to top &uarr;
        </a>
      </div>
    </div>
  )
}
