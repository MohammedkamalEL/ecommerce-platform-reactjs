export default function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col animate-pulse">
      <div className="aspect-square bg-gray-200" />

      <div className="p-4 flex flex-col flex-1">
        <div className="h-3 bg-gray-200 rounded w-1/4 mb-2" />

        <div className="h-4 bg-gray-200 rounded w-full mb-2" />
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-4" />

        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded-full" />
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="h-6 bg-gray-200 rounded w-1/4" />
          <div className="h-8 bg-gray-200 rounded-lg w-1/3" />
        </div>
      </div>
    </div>
  );
}
