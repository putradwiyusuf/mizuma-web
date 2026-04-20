import Image from "next/image"
export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden">

      {/* 🔥 BASE */}
      <div className="bg-black/90 border-t border-zinc-800">

        {/* 🔥 AKSEN KUNING MIRING */}
        <div className="absolute -left-40 bottom-0 w-[300px] h-[700px] bg-primary rotate-[20deg] "></div>

        {/* 🔥 GARIS PUTIH (TECH LINE) */}
        <div className="absolute left-40 -bottom-10 w-[10px] h-[800px] bg-white rotate-[20deg] "></div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-60">

            {/* BRAND */}
            <div>
             <Image 
             src={"/images/logo2.png"}
             width={300}
             height={100}
             alt="Mizuma Logo"
             className="object-contain"
             />
            </div>

            {/* LINKS */}
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#produk" className="hover:text-primary">Products</a></li>
                <li><a href="#" className="hover:text-primary">About</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h3 className="font-semibold mb-4">Need Setup Advice?</h3>
              <a
                href="https://wa.me/628XXXXXXX"
                target="_blank"
                className="inline-block bg-primary text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition"
              >
                Chat via WhatsApp
              </a>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="mt-12 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Mizuma Performance. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  )
}