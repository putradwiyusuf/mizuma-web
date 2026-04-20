"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/swiper-bundle.css"

import { heroSlides } from "@/lib/data/hero"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4500 }}
        loop
        pagination={{ clickable: true }}
        className="h-[90vh] hero-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full flex items-center">

              {/* 🔥 OVERLAY (BIAR DEPTH & KONTRAS) */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black opacity-90"></div> */}

              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* TEXT */}
                <div>
                  <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                    {slide.title}
                    <br />
                    <span className="text-primary">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p className="mt-6 text-gray-400 text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-8">
                    <a
                      href={slide.link}
                      target={slide.link.includes("wa.me") ? "_blank" : "_self"}
                      className="bg-primary text-black px-8 py-4 rounded-lg font-bold hover:scale-105 transition inline-block"
                    >
                      {slide.cta}
                    </a>
                  </div>
                </div>

                {/* IMAGE */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 blur-2xl"></div>

                  <Image
                    src={slide.image}
                    width={500}
                    height={500}
                    alt={slide.title}
                    className="relative rounded-xl shadow-2xl object-contain"
                  />
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  )
}