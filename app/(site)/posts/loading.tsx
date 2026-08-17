import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

export default function PostsLoading() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-16">
      <div className="mb-10 border-b border-border/40 pb-6 space-y-3">
        <Skeleton className="h-10 w-48 rounded-xl" />
        <Skeleton className="h-5 w-80 rounded-lg" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} className="flex flex-col justify-between">
            <CardHeader className="gap-2">
              <Skeleton className="h-4 w-24 rounded-md" />
              <Skeleton className="h-6 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4 rounded-lg" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-5/6 rounded-md" />
              <Skeleton className="h-4 w-4/6 rounded-md" />
            </CardContent>
            <CardFooter className="pt-0">
              <Skeleton className="h-4 w-20 rounded-md" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
