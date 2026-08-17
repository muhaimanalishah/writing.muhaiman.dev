import { ImageResponse } from "next/og"

export const alt = "Writings"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
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
            fontSize: "22px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#9ca3af",
            fontWeight: 600,
          }}
        >
          Writings
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
              fontSize: "60px",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            A Minimal Writing Space
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#9ca3af",
              lineHeight: 1.4,
              maxWidth: "920px",
            }}
          >
            Reflections on software engineering, interface design, and digital craftsmanship.
          </div>
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
