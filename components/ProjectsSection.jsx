"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectsSection() {
  const slides = [
    { img: "/image/projects-img.webp", alt: "Biometric Office Locker" },
    { img: "/image/projects-img.webp", alt: "Inhaler" },
    { img: "/image/projects-img.webp", alt: "Oxygen Mask" },
    { img: "/image/projects-img.webp", alt: "Respirator Mask" },
    { img: "/image/projects-img.webp", alt: "Respirator Mask" },
  ];

  return (
    <section className="project relative block bg-white pb-10">
      <div className="max-w-7xl px-2 mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm md:text-lg leading-6 uppercase tracking-[0.1em]">
            Recently completed work
          </p>
          <h2 className="text-3xl md:text-5xl leading-2 font-bold normal-case tracking-[-0.04em]">
            Explore Our Projects
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="projectSwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden transition hover:scale-105 animate-on-scroll flip-in delay-[100ms]">
                <div className="relative">
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
