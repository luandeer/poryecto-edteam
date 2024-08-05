'use client'
import { FotosService } from '@/common/services/fotos/fotos'
import { useInfiniteQuery } from '@tanstack/react-query'

export default function Home() {
  const { getFotos } = FotosService()
  const { data, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['fotos'],
    queryFn: ({ pageParam = 1 }) => getFotos({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor
  })

  if (isFetching && !isFetchingNextPage) {
    return <div>Loading...</div>
  }

  if (!data) {
    return <div>No data available</div>
  }

  return (
    <div className="container mx-auto my-10">
      <h1 className="mb-5 flex items-center justify-center text-2xl font-semibold underline underline-offset-8">
        Tarjeta de colores
      </h1>
      <div className="grid grid-cols-2 gap-x-3 gap-y-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.pages.flatMap((page) =>
          page.data.map((foto: any) => (
            <div key={foto.id} className="max-w-full">
              <img
                src={foto.url}
                alt={foto.title}
                className="w-full rounded-xl object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
              <p className="truncate">{foto.title}</p>
            </div>
          ))
        )}
      </div>
      <button
        className="mx-auto mt-5 block rounded-lg border-2 border-white bg-blue-400 p-2 hover:bg-blue-500"
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? 'Loading more...' : 'More Results'}
      </button>
    </div>
  )
}
