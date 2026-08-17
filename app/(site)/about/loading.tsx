import { Skeleton } from "@/components/ui/skeleton"

export default function AboutLoading() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16 space-y-6">
      <Skeleton className="h-10 w-40 rounded-xl" />
      <Skeleton className="h-5 w-full rounded-md" />
      <Skeleton className="h-5 w-full rounded-md" />
      <Skeleton className="h-5 w-5/6 rounded-md" />
      <div className="py-4">
        <Skeleton className="h-8 w-48 rounded-lg" />
      </div>
      <Skeleton className="h-5 w-full rounded-md" />
      <Skeleton className="h-5 w-4/5 rounded-md" />
    </div>
  )
}
