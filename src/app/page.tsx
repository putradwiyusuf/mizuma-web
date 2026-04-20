import Hero from "@/components/sections/Hero"
import Products from "@/components/sections/Products"
import Videos from "@/components/sections/Videos"
import Education from "@/components/sections/Education"
import Testimonials from "@/components/sections/Testimonials"
import CTA from "@/components/sections/CTA"

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Products />
      <Videos />
      <Education />
      {/* <Testimonials /> */}
      <CTA />
    </main>
  )
}