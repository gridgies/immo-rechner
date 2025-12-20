export default function Loading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Navigation Skeleton */}
      <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
              <div className="h-6 w-40 bg-gray-200 rounded"></div>
            </div>
            <div className="h-10 w-24 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section Skeleton */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Beta Badge Skeleton */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
            </div>
            
            {/* Headline Skeleton */}
            <div className="space-y-3 mb-6">
              <div className="h-12 sm:h-14 bg-gray-200 rounded-lg mx-auto w-full max-w-xl"></div>
              <div className="h-12 sm:h-14 bg-[#7099A3]/20 rounded-lg mx-auto w-64"></div>
              <div className="h-12 sm:h-14 bg-gray-200 rounded-lg mx-auto w-48"></div>
            </div>

            {/* Subtitle Skeleton */}
            <div className="space-y-2 mb-8">
              <div className="h-6 bg-gray-100 rounded mx-auto w-full max-w-lg"></div>
              <div className="h-6 bg-gray-100 rounded mx-auto w-full max-w-md"></div>
            </div>

            {/* Buttons Skeleton */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="h-14 w-44 bg-[#7099A3]/30 rounded-lg"></div>
              <div className="h-14 w-32 bg-gray-200 rounded-lg border-2 border-gray-200"></div>
            </div>

            {/* Helper text skeleton */}
            <div className="h-4 w-72 bg-gray-100 rounded mx-auto mt-4"></div>
          </div>

          {/* Stats Bar Skeleton */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="text-center">
                <div className="h-7 w-20 bg-gray-200 rounded mx-auto mb-2"></div>
                <div className="h-4 w-28 bg-gray-100 rounded mx-auto"></div>
              </div>
            ))}
          </div>

          {/* Screenshot Preview Skeleton */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              {/* Browser chrome */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="h-4 w-32 bg-gray-200 rounded mx-auto"></div>
                </div>
              </div>
              {/* Screenshot area */}
              <div className="w-full aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="h-10 w-80 bg-gray-200 rounded-lg mx-auto mb-4"></div>
            <div className="h-6 w-96 bg-gray-100 rounded mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-[#7099A3]/20 rounded-xl mb-6"></div>
                <div className="h-6 w-48 bg-gray-200 rounded mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-100 rounded w-full"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
