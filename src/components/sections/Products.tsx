import { getProducts } from "@/lib/services/productService"
import Image from "next/image"

export default async function Products() {
  const products = await getProducts()

  return (
    <section id="produk" className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Product
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-primary transition"
            >
              <div className="bg-black p-6">
                <div className="relative h-40">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain group-hover:scale-110 transition"
                  />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.name}</h3>

                <p className="text-gray-400 text-sm mt-2">
                  {p.benefits}
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-primary font-bold">MIZUMA</span>

                  <span className="text-sm text-white group-hover:text-primary">
                    View Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}