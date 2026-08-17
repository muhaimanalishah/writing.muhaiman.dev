import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-6">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
