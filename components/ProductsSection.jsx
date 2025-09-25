"use client";

export default function ProductsSection({ sectionData }) {
  if (!sectionData) return null;

  const { title, image, subsections = [] } = sectionData;

  return (
    <section className="project bg-[var(--light-green)]" id="products">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center text-white rounded-lg overflow-hidden">
          {/* Image */}
          <div className="w-full lg:w-2/5">
            <img
              src={image || "/image/fallback.jpg"}
              alt={title || "Project Section"}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="justify-center lg:justify-start w-full lg:w-3/5 p-6">
            <div className="text-left flex gap-10 xl:gap-20">
              {/* Circle Icon (static) */}
              <div className="hidden sm:block">
                <div
                  className="w-10 xl:w-22 h-10 xl:h-22 rounded-full flex items-center justify-center mt-5 animate-spin-slow"
                >
                  <img src="image/providing-quality.webp" alt="Providing Quality" />
                </div>
              </div>

              {/* Text Content */}
              <div className="md:max-w-md">
                <div className="w-5 h-5 rounded-full flex items-center justify-center mb-2">
                  <img src="/image/sec-title-icon2.webp" alt="" />
                </div>

                {/* Section Title */}
                <p className="text-xs  leading-6 uppercase tracking-[0.1em]">MODERN AGRICULTURE</p>
                <h2 className="text-3xl md:text-4xl xl:text-4xl font-bold mb-4">{title}</h2>

                {/* Subsections */}
                <div className="space-y-4">
                  {subsections.map((sub, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center md:justify-start"
                    >
                      <span className=" px-3 py-2 bg-[var(--light-yellow)] rounded-full flex items-center justify-center mr-4">
                        <img src="/image/wheat_icon.svg" alt=""  className="h-auto w-20 object-cover"/>
                      </span>
                      <p className="text-sm leading-6">
                        <span className="text-base font-bold">{sub.title}</span>
                        <br />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: sub.description || "",
                          }}
                        />
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* End Content */}
        </div>
      </div>
    </section>
  );
}
