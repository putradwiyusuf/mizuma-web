export default function CTA() {
  return (
    <section className="py-28 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-zinc-900"></div>

      <div className="relative">
        {/* headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Ready to Upgrade Your Ride?
        </h2>

        {/* subtext */}
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Get the right CVT setup tailored to your riding style. Faster
          acceleration, smoother power delivery, no compromise.
        </p>

        <a
          href="https://wa.me/6285603007707?text=Halo%20MIZUMA%2C%20saya%20tertarik%20dengan%20produk%20CVT%20Upgrade%2C%20bisa%20dibantu%20rekomendasinya%3F"
          className="mt-8 inline-block bg-primary text-black px-10 py-4 rounded-lg font-bold shadow-lg hover:scale-105 transition">
          Chat WhatsApp
        </a>
      </div>
    </section>
  )
}
