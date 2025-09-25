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
          <div className="w-5 h-5 rounded-full flex items-center justify-center mb-2 mx-auto">
            <img src="/image/sec-title-icon1.webp" />
          </div>
          <p
            className="text-[var(--deepest-green)] text-sm md:text-lg leading-6 uppercase tracking-[0.1em]"
            dangerouslySetInnerHTML={{ __html: sectionTitle }}
          />
          <div
            className="text-[var(--deepest-green)] text-3xl md:text-4xl xl:text-5xl leading-tight font-bold normal-case tracking-[-0.04em] inline-block"
            dangerouslySetInnerHTML={{ __html: sectionShortDescription }}
          />
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 115000, disableOnInteraction: false }}
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
              <div className="bg-white rounded-lg overflow-hidden transition animate-on-scroll flip-in delay-[100ms]">
                <div className="relative explore_slider group">
                  <img
                    src={slide.img}
                    alt={slide.alt}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute z-50 bottom-0 mx-2 right-0 left-0 scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-in-out">
                    <p className="text-md bg-[var(--light-yellow)] px-10 py-1 rounded-tl-lg rounded-tr-lg w-fit relative">
                      {sectionData?.subsections?.[index]?.title?.trim() || ""}
                    </p>
                    <p className="text-md bg-[var(--light-green)] px-10 py-7 rounded-tr-lg relative">
                      {sectionData?.subsections?.[index]?.description
                        ?.replace(/^<p>/i, "")
                        .replace(/<\/p>$/i, "")
                        .replace(/&nbsp;/gi, " ")
                        .trim() || ""}
                    </p>
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
