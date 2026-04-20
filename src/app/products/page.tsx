import { getProducts } from '@/lib/services/productService'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="p-10 bg-black min-h-screen text-white">
      <h1 className="text-3xl mb-6">Produk MIZUMA</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-gray-900 p-4 rounded-lg">
            <img src={p.image} className="mb-3" />
            <h2 className="text-xl">{p.name}</h2>
            <p className="text-gray-400">{p.benefits}</p>

            <a href={`/products/${p.id}`} className="text-red-500 mt-2 block">
              Detail
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}