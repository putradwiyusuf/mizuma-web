import { getVideos } from '@/lib/services/videoService'

export default async function VideosPage() {
  const products = await getVideos()

  return (
    <div className="p-10 bg-black min-h-screen text-white">
      <h1 className="text-3xl mb-6">Produk MIZUMA</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-gray-900 p-4 rounded-lg">
            <img src={p.thumbnail} className="mb-3" />
            <h2 className="text-xl">{p.title}</h2>
            <p className="text-gray-400">{p.description}</p>

            <a href={`/products/${p.id}`} className="text-red-500 mt-2 block">
              Detail
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}