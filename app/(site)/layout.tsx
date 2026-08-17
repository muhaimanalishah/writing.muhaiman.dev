import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-5 sm:px-8">
      <Navbar />
      <main className="leaf flex-1 border-t border-rule">{children}</main>
      <Footer />
    </div>
  )
}
