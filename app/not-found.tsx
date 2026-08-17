import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-24 sm:py-32 text-center">
      <p className="font-mono text-sm text-muted-foreground mb-3">404</p>
      <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
        Page Not Found
      </h1>
      <p className="text-muted-foreground text-base sm:text-lg max-w-md mb-8">
        The piece of writing or page you are looking for doesn&apos;t exist or may have been moved.
      </p>
      <Button render={<Link href="/" />}>
        Return to Home
      </Button>
    </div>
  )
}
