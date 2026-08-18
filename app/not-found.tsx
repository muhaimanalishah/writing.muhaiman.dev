import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NotFoundContent } from "@/components/not-found-content"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-2xl flex-col px-6">
      <Navbar />
      <main className="flex-1">
        <NotFoundContent />
      </main>
      <Footer />
    </div>
  )
}
