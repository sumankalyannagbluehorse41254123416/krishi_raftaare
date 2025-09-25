"use client";

import { useEffect, useState } from "react";

export default function AgricultureMattersSection({ data }) {
  if (!data) return null;

  const bgImage =
    data?.sectionImage ||
    data?.imageUrl ||
    "/image/Full_Banner.png"; // fallback
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
      className="agriculture_matters relative bg-center bg-no-repeat w-full h-[500px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between pt-20 lg:pt-28 text-center lg:text-left">
          {/* Left Content */}
          <div className="relative lg:max-w-12/24 xl:max-w-14/24">
            <h2 className="text-white text-3xl md:text-4xl xl:text-5xl leading-tight tracking-tight font-bold">
              {title}
            </h2>
            <div className="mt-10">
              <a
                href="#contact"
                className="button_hover relative inline-block align-middle appearance-none border-none outline-none bg-[var(--light-yellow)] text-[var(--deepest-green)] text-sm font-bold uppercase py-[15px] sm:py-[18px] px-[30px] sm:px-[50px] rounded-[10px] tracking-[0.1em] transition-all duration-300 ease-linear overflow-hidden"
                dangerouslySetInnerHTML={{ __html: safeDescription }}
              ></a>
            </div>
          </div>

          {/* Right Content */}
          <div className="mt-8 sm:mt-12 lg:mt-0">
            <div className="visible animate-zoomIn duration-1500 delay-300">
              <a
                href="https://www.youtube.com/watch?v=TDSf9Zi69d4"
                className="play_icon border border-white rounded-full p-[26px_29px_22px] text-white text-3xl inline-flex items-center justify-center"
              >
                <span className="border-animation border-1"></span>
                <span className="border-animation border-2"></span>
                <span className="border-animation border-3"></span>
                <i className="fa-solid fa-play" style={{ fontSize: "38px" }}></i>
              </a>
            </div>
            <h5 className="text-2xl lg:text-3xl text-[var(--light-yellow)] mt-5 lg:pl-10">
              {videoText}
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
