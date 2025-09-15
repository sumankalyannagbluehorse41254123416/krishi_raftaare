"use client";

import { useEffect, useState } from "react";

export default function AgricultureMattersSection({ data }) {
  if (!data) return null;

  const bgImage =
    data?.sectionImage ||
    data?.imageUrl ||
    "/image/photo-bg.avif"; // fallback
  const title = data?.sectionTitle || data?.title || "Default Title";
  const shortDescription =
    data?.sectionDescription || data?.shortDescription || "Discover more";
  const videoText = data?.videoText || "Watch the video";
  const videoUrl = data?.videoUrl || "#";

  const [safeDescription, setSafeDescription] = useState(shortDescription);

  useEffect(() => {
    // Load DOMPurify only in the browser
    import("dompurify").then((DOMPurify) => {
      setSafeDescription(DOMPurify.default.sanitize(shortDescription));
    });
  }, [shortDescription]);

  return (
    <section
      className="agriculture_matters relative bg-center bg-no-repeat w-full h-auto lg:h-[500px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between pb-12 lg:pb-0 pt-12 lg:pt-28 text-center lg:text-left">
          {/* Left Content */}
          <div className="relative max-w-full lg:max-w-[640px] xl:max-w-3xl">
            <h2 className="text-white text-3xl md:text-5xl xl:text-6xl leading-tight tracking-tight font-bold">
              {title}
            </h2>
            <div className="mt-10">
              <a
                href="#"
                className="relative inline-block align-middle appearance-none border-none outline-none bg-[var(--agriox-base,#f1cf69)] text-[var(--agriox-primary,#334b35)] text-sm font-bold uppercase py-[15px] sm:py-[18px] px-[30px] sm:px-[50px] rounded-[10px] tracking-[0.1em] transition-all duration-300 ease-linear overflow-hidden z-[1]"
                dangerouslySetInnerHTML={{ __html: safeDescription }}
              ></a>
            </div>
          </div>

          {/* Right Content */}
          <div className="mt-8 lg:mt-12 lg:mt-0">
            <a
              href={videoUrl}
              className="border border-white rounded-full p-[26px_27px_18px] text-white text-3xl inline-flex items-center justify-center"
            >
              <i className="fa-solid fa-play" style={{ fontSize: "38px" }}></i>
            </a>
            <h5 className="text-3xl text-yellow-400 mt-5 pl-10">
              {videoText}
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
