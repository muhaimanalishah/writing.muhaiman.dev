import type { Metadata } from "next"
import { IBM_Plex_Mono, Newsreader } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

/* The writing — display, body, and the italics that carry standfirsts */
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

/* The machinery — marginalia, nav, dates, code */
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
  description: "Personal writing by Muhaiman — essays and notes, on no particular subject.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://writing.muhaiman.dev"),
  authors: [{ name: "Muhaiman" }],
  creator: "Muhaiman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Muhaiman",
    title: "Muhaiman",
    description: "Personal writing by Muhaiman — essays and notes, on no particular subject.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhaiman",
    description: "Personal writing by Muhaiman — essays and notes, on no particular subject.",
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
      className={cn("antialiased", newsreader.variable, plexMono.variable)}
    >
      <body className="min-h-screen bg-background font-serif text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
