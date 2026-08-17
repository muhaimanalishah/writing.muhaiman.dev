import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-16">
      <div className="mb-12 space-y-4">
        <Skeleton className="h-10 w-64 rounded-xl" />
        <Skeleton className="h-5 w-full max-w-xl rounded-lg" />
      </div>

      <div className="space-y-6">
        <Skeleton className="h-32 w-full rounded-2xl" />
        <Skeleton className="h-32 w-full rounded-2xl" />
        <Skeleton className="h-32 w-full rounded-2xl" />
      </div>
    </div>
  )
}
