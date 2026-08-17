import { ImageResponse } from "next/og"
import { getPostBySlug } from "@/lib/posts"

export const alt = "Muhaiman — personal writing"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

/* Satori can't read CSS custom properties, so the night-ink palette
   is mirrored here as literals. Keep in sync with globals.css. */
const PAPER = "#1a1e2c"
const INK = "#e7e2d7"
const FADED = "rgba(231, 226, 215, 0.6)"
const ACCENT = "#94a7e0"
const RULE = "rgba(231, 226, 215, 0.16)"

interface Props {
  params: Promise<{ slug: string }>
}

export default async function Image({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  const title = post?.title || "Muhaiman"
  const description = post?.description || ""
  const date = post?.date
    ? new Date(post.date).toLocaleDateString("en-GB", {
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
          justifyContent: "space-between",
          backgroundColor: PAPER,
          color: INK,
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "22px",
            color: FADED,
          }}
        >
          <span>writing.muhaiman.dev</span>
          {date && <span>{date}</span>}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div style={{ fontSize: "30px", letterSpacing: "16px", color: ACCENT }}>* * *</div>
          <div
            style={{
              fontSize: title.length > 40 ? "58px" : "72px",
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: INK,
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
          {description && (
            <div style={{ fontSize: "26px", color: FADED, lineHeight: 1.45, maxWidth: "880px" }}>
              {description}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${RULE}`,
            paddingTop: "28px",
            fontSize: "20px",
            color: FADED,
          }}
        >
          <span>Muhaiman</span>
          <span>Personal writing</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
