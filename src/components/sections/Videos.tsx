import Image from "next/image"
import { videos } from "@/lib/data/videos"

export default function Videos() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Real Performance Footage
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div
              key={v.id}
              className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-primary transition"
            >

              <div className="relative h-48">
                <Image
                  src={v.thumbnail}
                  alt={v.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="bg-primary text-black px-4 py-2 rounded font-bold">
                    ▶ PLAY
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3>{v.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}