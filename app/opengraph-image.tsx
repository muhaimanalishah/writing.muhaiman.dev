import { ImageResponse } from "next/og"

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

export default async function Image() {
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
        <div style={{ fontSize: "22px", color: FADED }}>writing.muhaiman.dev</div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ fontSize: "34px", letterSpacing: "18px", color: ACCENT }}>* * *</div>
          <div
            style={{
              fontSize: "108px",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: INK,
            }}
          >
            Muhaiman
          </div>
          <div style={{ fontSize: "28px", color: FADED, lineHeight: 1.45, maxWidth: "760px" }}>
            Essays and notes, on no particular subject.
          </div>
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
          <span>Personal writing</span>
          <span>rss available</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
