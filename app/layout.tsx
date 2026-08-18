import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

/* One friendly humanist sans for everything readable */
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

/* Mono appears only inside code */
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Muhaiman",
    template: "%s · Muhaiman",
  },
  description: "Muhaiman's personal site — writing about software, learning, and life.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://writing.muhaiman.dev"),
  authors: [{ name: "Muhaiman" }],
  creator: "Muhaiman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Muhaiman",
    title: "Muhaiman",
    description: "Muhaiman's personal site — writing about software, learning, and life.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhaiman",
    description: "Muhaiman's personal site — writing about software, learning, and life.",
  },
  alternates: {
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", hanken.variable, plexMono.variable)}
    >
      <body className="min-h-screen bg-background font-sans text-foreground">
        <ThemeProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
