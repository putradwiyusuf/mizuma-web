export default function Testimonials() {
  const data = [
    "Tarikan jauh lebih enak, berasa ringan banget",
    "Dipakai harian nyaman, tapi tetep galak",
    "Worth it banget buat upgrade CVT"
  ]

  return (
    <section className="py-24 bg-zinc-950">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Apa Kata Mereka?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((t, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl"
            >
              <p className="text-gray-300">&quot;{t}&quot;</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}