import { ImageResponse } from "next/og"

export const alt = "Muhaiman — personal site"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

/* Satori can't read CSS custom properties, so the palette is
   mirrored here as literals. Keep in sync with globals.css. */
const BG = "#faf9f7"
const FG = "#2b2a26"
const MUTED = "#807c74"
const ACCENT = "#5c7cab"

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
          backgroundColor: BG,
          color: FG,
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: "26px", fontWeight: 600 }}>
          <span>Muhaiman</span>
          <span style={{ color: ACCENT }}>.</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "88px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              display: "flex",
            }}
          >
            <span>
              Hi, I&apos;m Muhaiman<span style={{ color: ACCENT }}>.</span>
            </span>
          </div>
          <div style={{ fontSize: "30px", color: MUTED, lineHeight: 1.45, maxWidth: "820px" }}>
            Writing about software, learning, and life.
          </div>
        </div>

        <div style={{ fontSize: "22px", color: MUTED }}>writing.muhaiman.dev</div>
      </div>
    ),
    {
      ...size,
    }
  )
}
