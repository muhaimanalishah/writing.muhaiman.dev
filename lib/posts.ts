import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export interface PostMetadata {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
}

export interface Post extends PostMetadata {
  content: string
}

const postsDirectory = path.join(process.cwd(), "content/posts")
const aboutPath = path.join(process.cwd(), "content/about.mdx")

function estimateReadingTime(text: string): string {
  const wordsPerMinute = 200
  const cleanText = text.replace(/<[^>]*>/g, "").replace(/[#*`~_\[\]()]/g, "")
  const wordCount = cleanText.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute))
  return `${minutes} min read`
}

export function getAllPosts(): PostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date ? String(data.date) : new Date().toISOString().slice(0, 10),
        readingTime: estimateReadingTime(content),
      }
    })

  // Sort posts by date descending
  return posts.sort((a, b) => (new Date(b.date).getTime() > new Date(a.date).getTime() ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | null {
  const possibleExtensions = [".mdx", ".md"]
  for (const ext of possibleExtensions) {
    const fullPath = path.join(postsDirectory, `${slug}${ext}`)
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date ? String(data.date) : new Date().toISOString().slice(0, 10),
        readingTime: estimateReadingTime(content),
        content,
      }
    }
  }

  return null
}

export function getAboutMetadata(): { title: string; description: string } {
  if (fs.existsSync(aboutPath)) {
    const fileContents = fs.readFileSync(aboutPath, "utf8")
    const { data } = matter(fileContents)
    return {
      title: data.title || "About",
      description: data.description || "About this website",
    }
  }

  return {
    title: "About",
    description: "About this website",
  }
}
