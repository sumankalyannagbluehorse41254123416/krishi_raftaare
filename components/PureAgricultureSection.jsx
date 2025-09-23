"use client";
import React, { useEffect, useRef } from "react";

export default function AboutSection({ data = [] }) {
  const s3 = data?.[3] ?? {};
  const s4 = data?.[4] ?? {};
  const s5 = data?.[5] ?? {};
  const s6 = data?.[6] ?? {};
  const successProjectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (successProjectRef.current) {
      observer.observe(successProjectRef.current);
    }

    return () => {
      if (successProjectRef.current) {
        observer.unobserve(successProjectRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-white relative" id="about">
      <style jsx>{`
        .success_project {
          transform: translateX(-100%);
          opacity: 0;
          transition: transform 1.2s ease-in-out, opacity 1.2s ease-in-out;
        }
        .animate-slide-in {
          transform: translateX(0);
          opacity: 1;
        }
      `}</style>
      <div className="absolute bottom-0 right-0 w-auto h-auto">
        <img
          src="/image/about-v1-bg.webp"
          className="w-auto h-auto"
          alt="Background Image"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          <div className="relative hero_bottom_img">
            <div className="about_img justify-self-center">
              <img
                src={s3?.image || "/image/about-v1-img1.webp"}
                className="lg:w-full h-auto rounded-tl-lg rounded-tr-lg rounded-br-lg shadow-lg"
                alt={s3?.title || "About Image"}
              />
            </div>

            {s3?.subsections?.[0] && (
              <div
                ref={successProjectRef}
                className="success_project bg-[var(--light-green)] flex items-center justify-center px-6 xl:px-10 py-10 sm:w-fit rounded-xl mt-10 sm:mt-0 sm:absolute -bottom-10 sm:left-[10%] md:left-[19%] lg:left-0 lg:bottom-6 sm:mr-6 sm:ml-6"
              >
                <div className="pr-4">
                  <img
                    src={s3.subsections[0].image}
                    alt=""
                    className="w-24 h-24 object-cover"
                  />
                </div>
                <div className="border-l-2 border-white/50 pl-4 xl:pl-8 relative block">
                  <p
                    className="text-3xl xl:text-5xl text-white pb-2"
                    dangerouslySetInnerHTML={{
                      __html: s3.subsections[0].title || "",
                    }}
                  />
                  <p
                    className="text-sm xl:text-lg text-white"
                    dangerouslySetInnerHTML={{
                      __html: s3.subsections[0].description || "",
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="sm:p-6 z-10">
            <div className="w-5 h-5 rounded-full flex items-center justify-center mb-2">
              <img alt src="/image/sec-title-icon1.webp" />
            </div>
            <span
              className="text-left block text-[var(--deepest-green)]"
              dangerouslySetInnerHTML={{ __html: s4?.shortDescription || "" }}
            />
            <h2
              className="text-[var(--deepest-green)] text-3xl md:text-4xl xl:text-5xl font-bold mt-2"
              dangerouslySetInnerHTML={{ __html: s4?.title || "" }}
            />
            <h2
              className="md:text-2xl text-xl my-4 xl:my-8 font-bold text-[var(--light-green)]"
              dangerouslySetInnerHTML={{
                __html: s4?.subsections?.[0]?.title || "",
              }}
            />
            <p
              className="text-sm xl:text-lg text-[var(--light-green)]"
              dangerouslySetInnerHTML={{
                __html: s4?.subsections?.[0]?.description || "",
              }}
            />

            <ul className="flex flex-col mt-6 pl-5">
              {s5?.subsections?.map((sub, idx) => (
                <li
                  key={idx}
                  className="list-disc text-sm xl:text-lg m-0 pt-4 text-[var(--deepest-green)]"
                  dangerouslySetInnerHTML={{ __html: sub?.title || "" }}
                />
              ))}
            </ul>

            <div className="flex gap-14 items-center mt-12">
              <div className="relative">
                <div className="relative hero_bottom_video">
                  <img
                    src={s6?.image}
                    alt={s6?.title}
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 z-10">
                  <div className="visible animate-zoomIn duration-1500 delay-300">
                    <a
                      href="#"
                      className="bg-[var(--light-yellow)] pt-2 pr-2.5 pb-2 pl-2.5 rounded-full inline-flex items-center justify-center"
                    >
                      <span className="border-animation border-1"></span>
                      <span className="border-animation border-2"></span>
                      <span className="border-animation border-3"></span>
                      <i className="fa-solid fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <p
                  className="text-sm sm:text-md tracking-[0.1em] text-gray-600 text-[var(--deepest-green)]"
                  dangerouslySetInnerHTML={{
                    __html: s6?.shortDescription || "",
                  }}
                />
                <h5
                  className="text-sm xl:text-xl text-dark font-bold text-[var(--deepest-green)]"
                  dangerouslySetInnerHTML={{ __html: s6?.title || "" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}