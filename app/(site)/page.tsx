import Link from "next/link"
import { getAllPosts, getAllTags } from "@/lib/posts"
import { WritingIndex } from "@/components/writing-index"

export default function HomePage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <div className="pb-16">
      <div className="row pt-10 sm:pt-14">
        <div aria-hidden className="hidden md:block" />
        <p className="max-w-[44ch] font-serif text-lg italic leading-relaxed text-muted-foreground">
          Essays and notes, on no particular subject.
        </p>
      </div>

      <WritingIndex posts={posts} />

      {tags.length > 0 && (
        <div className="row pt-14">
          <p className="marginalia">topics</p>
          <p className="font-mono text-xs leading-loose text-muted-foreground">
            {tags.map((tag, i) => (
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
    </div>
  )
}
