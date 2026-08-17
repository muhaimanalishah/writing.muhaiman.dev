import Link from "next/link"
import { getAllPosts } from "@/lib/posts"
import { PostList } from "@/components/post-list"

export default function HomePage() {
  const recent = getAllPosts().slice(0, 5)

  return (
    <div className="pb-20">
      <section className="rise pt-14 sm:pt-20">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Hi, I&apos;m Muhaiman<span className="text-accent">.</span>
        </h1>
        <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted-foreground">
          I build software and write here about the work, the learning, and life around it.
        </p>
      </section>

      <section className="mt-16">
        <h2
          className="rise text-sm font-medium text-muted-foreground"
          style={{ ["--rise-delay" as string]: "100ms" }}
        >
          Recent writing
        </h2>

        <div className="mt-3">
          <PostList posts={recent} stagger={150} />
        </div>

        <p className="rise mt-6" style={{ ["--rise-delay" as string]: "400ms" }}>
          <Link
            href="/writing"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent"
          >
            All writing
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </p>
      </section>
    </div>
  )
}
