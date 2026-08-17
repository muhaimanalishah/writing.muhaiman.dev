import { getAllPosts } from "@/lib/posts"

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://writing.muhaiman.dev"
  const posts = getAllPosts()

  const itemsXml = posts
    .map((post) => {
      const postUrl = `${baseUrl}/posts/${post.slug}`
      const pubDate = new Date(post.date).toUTCString()
      // Escape XML special characters
      const escapeXml = (unsafe: string) =>
        unsafe
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&apos;")

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${pubDate}</pubDate>
    </item>`
    })
    .join("")

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Muhaiman</title>
    <link>${baseUrl}</link>
    <description>Personal writing by Muhaiman — essays and notes, on no particular subject.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`

  return new Response(rssXml.trim(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  })
}
