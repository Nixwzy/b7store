export const ProductListSkeleton = () => {
  return (
    <div className="mt-10">
        {/* title */}
        <div className="bg-gray-200 rounded w-52 h-8 mb-4 mx-auto md:mx-0 animate-pulse"></div>
         <div className="bg-gray-200 rounded w-64 h-5 mx-auto md:mx-0 animate-pulse"></div>

         {/* grid */}
         <div className="mt-9 grid grid-cols-1 md:grid-cols-4 gap-8 animate-pulse">
            <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
            <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
            <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
            <div className="bg-gray-200 h-80 rounded animate-pulse"></div>
         </div>
    </div>
  );
};