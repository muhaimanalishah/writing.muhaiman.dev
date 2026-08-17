import { ImageResponse } from "next/og"
import { getPostBySlug } from "@/lib/posts"

export const alt = "Muhaiman — personal site"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

const BG = "#faf9f7"
const FG = "#2b2a26"
const MUTED = "#807c74"
const ACCENT = "#5c7cab"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  const title = post?.title || "Muhaiman"
  const description = post?.description || ""
  const date = post?.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
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
          justifyContent: "space-between",
          backgroundColor: BG,
          color: FG,
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: "26px", fontWeight: 600 }}>
            <span>Muhaiman</span>
            <span style={{ color: ACCENT }}>.</span>
          </div>
          {date && <div style={{ fontSize: "22px", color: MUTED }}>{date}</div>}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: title.length > 40 ? "56px" : "70px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
          {description && (
            <div style={{ fontSize: "27px", color: MUTED, lineHeight: 1.45, maxWidth: "880px" }}>
              {description}
            </div>
          )}
        </div>

        <div style={{ fontSize: "22px", color: MUTED }}>writing.muhaiman.dev</div>
      </div>
    ),
    {
      ...size,
    }
  )
}
