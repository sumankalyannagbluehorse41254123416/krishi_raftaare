"use client";

export default function ServicesSection() {
  return (
    <section className="relative bg-white pt-20 md:pt-40 pb-20 z-10">
      <div
        className="absolute bg-gray-100 z-[-1] bg-cover w-full bg-[bottom_center] h-[508px] top-0 bottom-0"
        style={{ backgroundImage: "url('/image/service-top-bg-1-1.webp')" }}
      ></div>

      <div className="relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm md:text-lg leading-6 uppercase tracking-[0.1em] mb-6">
              What we’re doing
            </p>
            <h2 className="text-3xl md:text-5xl leading-2 font-bold normal-case tracking-[-0.04em] inline">
              Services We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="shadow-lg rounded-lg overflow-hidden relative">
                <div className="pb-16">
                  <img
                    src="/image/services-row-img.webp"
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="relative text-center px-9 pt-3 pb-6 bg-white">
                  <div className="shadow-lg w-fit rounded-full absolute left-0 right-0 mx-auto -top-[122px]">
                    <img
                      src="/image/harvest.png"
                      alt=""
                      className="w-28 h-auto"
                    />
                  </div>
                  <h3 className="text-3xl leading-9 mb-4">
                    <a href="#">
                      Agriculture <br /> Products
                    </a>
                  </h3>
                  <p className="text-md leading-7">
                    Lorem ium dolor sit ametad pisicing elit sed simply do ut.
                  </p>
                  <a
                    href="#"
                    className="pt-3 text-xl inline-block w-14 h-14 rounded-full bg-[#f1cf69] mt-4 z-10 flex items-center justify-center"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
