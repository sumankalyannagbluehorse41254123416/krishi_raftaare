"use client";
import React from "react";

export default function AboutSection({ data = [] }) {
  const s3 = data?.[3] ?? {};
  const s4 = data?.[4] ?? {};
  const s5 = data?.[5] ?? {};
  const s6 = data?.[6] ?? {};

  return (
    <section className="py-16 bg-white relative" id="about">
      {/* Background Image */}
      <div className="absolute bottom-0 right-0 w-auto h-auto">
        <img
          src="/image/about-v1-bg.webp"
          className="w-auto h-auto"
          alt="Background Image"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Image Section (Index 8) */}
          <div className="relative hero_bottom_img">
            <div className="about_img justify-self-center">
              <img
                src={s3?.image || "/image/about-v1-img1.webp"}
                className="lg:w-full h-auto rounded-tl-lg rounded-tr-lg rounded-br-lg shadow-lg"
                alt={s3?.title || "About Image"}
              />
            </div>

            {/* Successfully Project Completed */}
            {s3?.subsections?.[0] && (
              <div className="success_project bg-green-700 flex items-center justify-center px-6 xl:px-10 py-8 w-fit rounded-xl mt-10 sm:mt-0 sm:absolute -bottom-10 sm:left-[10%] md:left-[19%] lg:left-0 lg:bottom-6 mr-6 ml-6">
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

          {/* Right Text Section (Index 9) */}
          <div className="p-6 z-10">
            <span
              className="text-left block"
              dangerouslySetInnerHTML={{ __html: s4?.shortDescription || "" }}
            />
            <h2
              className="text-3xl md:text-5xl font-bold mt-2"
              dangerouslySetInnerHTML={{ __html: s4?.title || "" }}
            />
            <h2
              className="md:text-2xl text-xl my-4 xl:my-8 font-bold"
              dangerouslySetInnerHTML={{
                __html: s4?.subsections?.[0]?.title || "",
              }}
            />
            <p
              className="text-sm xl:text-lg"
              dangerouslySetInnerHTML={{
                __html: s4?.subsections?.[0]?.description || "",
              }}
            />

            {/* List Section (Index 11) */}
            <ul className="flex flex-col mt-6">
              {s5?.subsections?.map((sub, idx) => (
                <li
                  key={idx}
                  className="list-disc text-sm xl:text-lg m-0 pt-4"
                  dangerouslySetInnerHTML={{ __html: sub?.title || "" }}
                />
              ))}
            </ul>

            {/* Video Section (Index 10) */}
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
                  <a
                    href="#"
                    className="bg-yellow-400 pt-1.5 pr-2.5 pb-1 pl-2.5 rounded-full inline-flex items-center justify-center"
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
              <div>
                <p
                  className="text-md tracking-[0.1em] text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: s6?.shortDescription || "",
                  }}
                />
                <h5
                  className="xl:text-xl text-dark font-bold"
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
