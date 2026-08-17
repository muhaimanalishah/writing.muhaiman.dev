import { ImageResponse } from "next/og"
import { getPostBySlug } from "@/lib/posts"

export const alt = "Writings Post"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  const title = post?.title || "Writings"
  const description = post?.description || "A thoughtful piece of writing."
  const date = post?.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : ""

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0f1115",
          color: "#f3f4f6",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#e5e7eb",
              fontWeight: 600,
            }}
          >
            Writings
          </div>
          {date && (
            <div
              style={{
                fontSize: "18px",
                color: "#9ca3af",
              }}
            >
              • {date}
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: title.length > 40 ? "50px" : "60px",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                fontSize: "24px",
                color: "#9ca3af",
                lineHeight: 1.4,
                maxWidth: "960px",
              }}
            >
              {description}
            </div>
          )}
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "#6b7280",
          }}
        >
          writing.muhaiman.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
