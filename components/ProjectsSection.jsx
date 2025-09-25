"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectsSection({ sectionData }) {
  if (!sectionData) return null;

  const sectionTitle = sectionData?.title ?? "Recently completed work";
  const sectionShortDescription =
    sectionData?.shortDescription ?? "Explore Our Projects";

  const slides =
    sectionData?.subsections?.map((sub) => ({
      img: sub?.image ?? "/image/projects-img.webp",
      alt: sub?.title ?? "Project Image",
    })) ?? [];

  return (
    <section className="project relative block bg-white pb-10" id="projects">
      <div className="max-w-7xl px-2 mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p
            className="text-[var(--deepest-green)] text-sm md:text-lg leading-6 uppercase tracking-[0.1em] mb-6"
            dangerouslySetInnerHTML={{ __html: sectionTitle }}
          />
          <h2
            className="text-[var(--deepest-green)] text-3xl md:text-4xl xl:text-5xl leading-2 font-bold normal-case tracking-[-0.04em] inline-block"
            dangerouslySetInnerHTML={{ __html: sectionShortDescription }}
          />
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
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
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
                  <div className="slider_img_content">
                    <p>srijani</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
