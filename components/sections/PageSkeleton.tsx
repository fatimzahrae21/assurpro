import { CardSkeleton, Skeleton } from "@/components/ui";

export default function PageSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="min-h-screen bg-brand-950 flex items-center">
        <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Skeleton className="h-8 w-48 bg-white/10" />
            <Skeleton className="h-20 w-full bg-white/10" />
            <Skeleton className="h-16 w-3/4 bg-white/10" />
            <div className="flex gap-4">
              <Skeleton className="h-14 w-48 bg-white/10 rounded-2xl" />
              <Skeleton className="h-14 w-40 bg-white/10 rounded-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Services skeleton */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-14 space-y-4">
            <Skeleton className="h-6 w-32 mx-auto" />
            <Skeleton className="h-12 w-96 mx-auto" />
            <Skeleton className="h-5 w-2/3 mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
