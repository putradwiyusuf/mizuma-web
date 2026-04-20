"use client"

import Image from "next/image"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled
          ? "bg-black/80 backdrop-blur border-b border-zinc-800"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/images/logo.png"
              alt="Mizuma Logo"
              width={180}
              height={70}
              className="object-contain"
            />
          </div>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#produk" className="hover:text-primary transition">
            Product
          </a>
          <a href="#video" className="hover:text-primary transition">
            Videos
          </a>
          <a href="#edukasi" className="hover:text-primary transition">
            Education
          </a>
          {/* <a href="#testimoni" className="hover:text-primary transition">
            Testimoni
          </a> */}
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/6285603007707?text=Halo%20MIZUMA%2C%20saya%20tertarik%20dengan%20produk%20CVT%20Upgrade%2C%20bisa%20dibantu%20rekomendasinya%3F"
          className="bg-primary text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition">
          Contact Us
        </a>
      </div>
    </header>
  )
}
