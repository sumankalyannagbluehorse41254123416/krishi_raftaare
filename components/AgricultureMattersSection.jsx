"use client";

export default function AgricultureMattersSection() {
  return (
    <section
      className="agriculture_matters relative bg-center bg-no-repeat w-full h-[500px]"
      style={{ backgroundImage: "url('/image/photo-1500937386664-56d1dfef3854.avif')" }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between pt-20 lg:pt-28 text-center lg:text-left">
          {/* Left Content */}
          <div className="relative">
            <h2 className="text-white text-3xl md:text-5xl xl:text-6xl leading-tight tracking-tight font-bold">
              Agriculture Matters to <br /> the Future of Development
            </h2>
            <div className="mt-10">
              <a
                href="#"
                className="relative inline-block align-middle appearance-none border-none outline-none bg-[var(--agriox-base,#f1cf69)] text-[var(--agriox-primary,#334b35)] text-sm font-bold uppercase py-[18px] px-[50px] rounded-[10px] tracking-[0.1em] transition-all duration-300 ease-linear overflow-hidden z-[1]"
              >
                Discover more
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="mt-12 lg:mt-0">
            <a
              href="#"
              className="border border-white rounded-full p-[26px_30px_18px] text-white text-3xl inline-flex items-center justify-center"
            >
              <i className="fa-solid fa-play" style={{ fontSize: "38px" }}></i>
            </a>
            <h5 className="text-3xl text-yellow-400 mt-5 pl-10">
              Watch the video
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
