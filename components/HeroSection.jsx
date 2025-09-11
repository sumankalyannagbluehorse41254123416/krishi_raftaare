"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  useEffect(() => {
    // Add custom pagination bullet styles
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
    if (paginationEl) {
      observer.observe(paginationEl, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, []);

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
            if (image) {
              image.style.transform = "scale(1.1)";
            }
          });
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex];
          const image = activeSlide.querySelector(".slide-image");
          if (image) {
            image.style.transform = "scale(1)";
          }
        }}
        onInit={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex];
          const image = activeSlide.querySelector(".slide-image");
          if (image) {
            image.style.transform = "scale(1)";
          }
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative flex items-center justify-center h-full overflow-hidden">
            <img
              src="/image/photo-1500937386664-56d1dfef3854 (1).avif"
              alt="Farm Field"
              className="slide-image absolute top-0 left-0 w-full h-full object-cover scale-110 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
            {/* Text */}
            <div className="relative z-20 text-center text-white max-w-4xl px-5">
              <span className="text-lg md:text-xl font-medium tracking-widest uppercase block mb-4">
                WE'RE PRODUCING NATURAL GOODS
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Welcome to <span className="text-white">Agriculture Farm</span>
              </h1>
              <p className="text-base md:text-lg max-w-2xl mx-auto mb-8">
                There are many passages of lorem ipsum, but the majority have
                suffered alteration in some form.
              </p>
              <a
                href="#"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-3 px-10 rounded-full transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Discover More
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative flex items-center justify-center h-full overflow-hidden">
            <img
              src="/image/photo-1500937386664-56d1dfef3854 (1).avif"
              alt="Harvest"
              className="slide-image absolute top-0 left-0 w-full h-full object-cover scale-110 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
            {/* Text */}
            <div className="relative z-20 text-center text-white max-w-4xl px-5">
              <span className="text-lg md:text-xl font-medium tracking-widest text-gray-200 uppercase block mb-4">
                FRESH FROM OUR FARM
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Organic <span className="text-white">Products</span>
              </h1>
              <p className="text-gray-100 text-base md:text-lg max-w-2xl mx-auto mb-8">
                We grow the highest quality organic fruits and vegetables using
                sustainable farming practices.
              </p>
              <a
                href="#"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-3 px-10 rounded-full transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Our Products
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative flex items-center justify-center h-full overflow-hidden">
            <img
              src="/image/photo-1500937386664-56d1dfef3854 (1).avif"
              alt="Farmers"
              className="slide-image absolute top-0 left-0 w-full h-full object-cover scale-110 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>
            {/* Text */}
            <div className="relative z-20 text-center text-white max-w-4xl px-5">
              <span className="text-lg md:text-xl font-medium tracking-widest text-gray-200 uppercase block mb-4">
                MEET OUR DEDICATED TEAM
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Expert <span className="text-white">Farmers</span>
              </h1>
              <p className="text-gray-100 text-base md:text-lg max-w-2xl mx-auto mb-8">
                Our experienced farmers are committed to sustainable agriculture
                and quality produce.
              </p>
              <a
                href="#"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold text-lg py-3 px-10 rounded-full transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Pagination */}
<div className="swiper-pagination   md:!bottom-8"></div>

      {/* Navigation Arrows */}
      <div className="absolute right-5 bottom-5 z-30 flex flex-col space-y-4  hidden sm:block">
        {/* Prev Button */}
        <button
          className="arrow-prev w-12 h-12 rounded-full flex items-center justify-center cursor-pointer 
               transition-transform duration-300 bg-white/20 backdrop-blur-sm border border-white/10 
               hover:bg-primary hover:-translate-x-1 text-white text-lg"
        >
          <i className="fas fa-arrow-left"></i>
        </button>

        {/* Next Button */}
        <button
          className="arrow-next w-12 h-12 rounded-full flex items-center justify-center cursor-pointer 
               transition-transform duration-300 bg-white/20 backdrop-blur-sm border border-white/10 
               hover:bg-primary hover:translate-x-1 text-white text-lg"
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </section>
  );
}
