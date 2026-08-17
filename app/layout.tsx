import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Writings",
    template: "%s | Writings",
  },
  description: "A minimal, content-focused personal writing website exploring design, code, and philosophy.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://writing.muhaiman.dev"),
  authors: [{ name: "Muhaiman" }],
  creator: "Muhaiman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Writings",
    title: "Writings",
    description: "A minimal, content-focused personal writing website exploring design, code, and philosophy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writings",
    description: "A minimal, content-focused personal writing website exploring design, code, and philosophy.",
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
      className={cn("antialiased", fontMono.variable, inter.variable, "font-sans")}
    >
      <body className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
