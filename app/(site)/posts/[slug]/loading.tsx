import { Skeleton } from "@/components/ui/skeleton"

export default function PostDetailLoading() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 sm:px-8 sm:py-16">
      {/* Breadcrumb Skeleton */}
      <div className="mb-8 flex items-center gap-2">
        <Skeleton className="h-4 w-12 rounded-md" />
        <span className="text-muted-foreground">/</span>
        <Skeleton className="h-4 w-12 rounded-md" />
        <span className="text-muted-foreground">/</span>
        <Skeleton className="h-4 w-32 rounded-md" />
      </div>

      {/* Header Skeleton */}
      <div className="mb-10 border-b border-border/40 pb-8 space-y-4">
        <Skeleton className="h-4 w-36 rounded-md" />
        <Skeleton className="h-10 w-full rounded-xl" />
        <Skeleton className="h-10 w-4/5 rounded-xl" />
        <Skeleton className="h-5 w-full max-w-lg rounded-md" />
      </div>

      {/* Article Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-5 w-full rounded-md" />
        <Skeleton className="h-5 w-full rounded-md" />
        <Skeleton className="h-5 w-11/12 rounded-md" />
        <Skeleton className="h-5 w-4/5 rounded-md" />
        <div className="py-4">
          <Skeleton className="h-8 w-1/2 rounded-lg" />
        </div>
        <Skeleton className="h-5 w-full rounded-md" />
        <Skeleton className="h-5 w-full rounded-md" />
        <Skeleton className="h-5 w-3/4 rounded-md" />
        <Skeleton className="h-48 w-full rounded-2xl" />
      </div>
    </div>
  )
}
