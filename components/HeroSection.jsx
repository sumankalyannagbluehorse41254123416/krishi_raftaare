"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// SafeHtml component for client-side DOMPurify
function SafeHtml({ html, className }) {
  const [cleanHtml, setCleanHtml] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("dompurify").then((DOMPurify) => {
        setCleanHtml(DOMPurify.default.sanitize(html || ""));
      });
    }
  }, [html]);

  return <div className={className} dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
}

export default function HeroSlider({ slides }) {
  useEffect(() => {
    // Observe pagination bullets to add custom styles
    const observer = new MutationObserver(() => {
      document
        .querySelectorAll(".swiper-pagination-bullet")
        .forEach((bullet) => {
          if (bullet.classList.contains("swiper-pagination-bullet-active")) {
            bullet.classList.add("!bg-green-500", "!opacity-100");
          } else {
            bullet.classList.remove("!bg-green-500", "!opacity-100");
          }
        });
    });

    const paginationEl = document.querySelector(".swiper-pagination");
    if (paginationEl)
      observer.observe(paginationEl, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  if (!slides || slides.length === 0) return null;

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        pagination={{
          clickable: true,
          renderBullet: (_, className) =>
            `<span class="${className} !w-3 !h-3 !bg-white !opacity-50"></span>`,
        }}
        navigation={{ nextEl: ".arrow-next", prevEl: ".arrow-prev" }}
        className="heroSwiper h-full w-full"
        onSlideChangeTransitionStart={(swiper) => {
          swiper.slides.forEach((slide) => {
            const image = slide.querySelector(".slide-image");
            if (image) image.style.transform = "scale(1.1)";
          });
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex];
          const image = activeSlide.querySelector(".slide-image");
          if (image) image.style.transform = "scale(1)";
        }}
        onInit={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex];
          const image = activeSlide.querySelector(".slide-image");
          if (image) image.style.transform = "scale(1)";
        }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative flex items-center justify-center h-full overflow-hidden">
              <img
                src={slide?.image || "/image/placeholder.jpg"}
                alt={slide?.subsections?.[0]?.title || `Slide ${idx + 1}`}
                className="slide-image absolute top-0 left-0 w-full h-full object-cover scale-110 transition-transform duration-700"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
              <div className="relative z-20 text-center text-white max-w-4xl px-5">
                {/* <span className="text-lg md:text-xl font-medium tracking-widest text-gray-200 uppercase block mb-4">
                  {slide?.subsections?.[0]?.title || ""}
                </span> */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {slide?.title || ""}
                </h1>

                {slide?.shortDescription && (
                  <SafeHtml
                    html={slide.shortDescription}
                    className="text-base md:text-lg max-w-2xl mx-auto mb-8"
                  />
                )}

                {slide?.subsections?.[0]?.description && (
                  <SafeHtml
                    html={slide.subsections[0].description}
                    className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-3 px-10 rounded-full transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1"
                  />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-pagination md:!bottom-8"></div>

      <div className="absolute right-5 bottom-5 z-30 flex flex-col space-y-4 hidden sm:block">
        <button className="arrow-prev w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 bg-white/20 backdrop-blur-sm border border-white/10 hover:bg-primary hover:-translate-x-1 text-white text-lg">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="arrow-next w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 bg-white/20 backdrop-blur-sm border border-white/10 hover:bg-primary hover:translate-x-1 text-white text-lg">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}
