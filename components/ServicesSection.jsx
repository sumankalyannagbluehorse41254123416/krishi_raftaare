"use client";

export default function ServicesSection({ sectionData }) {
  if (!sectionData) return null;

  console.log("Subsections in Services:", sectionData.subsections);

  return (
    <section className="relative bg-white pt-20 md:pt-40 pb-20 z-10" id="services">
      {/* Section background */}
      <div
        className="absolute bg-gray-100 z-[-1] bg-cover w-full bg-[bottom_center] h-[508px] top-0 bottom-0"
        style={{ backgroundImage: "url('/image/service-top-bg-1-1.webp')" }}
      ></div>

      <div className="relative">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
             <div className="w-5 h-5 rounded-full flex items-center justify-center mb-2 mx-auto">
            <img alt src="/image/sec-title-icon1.webp" />
          </div>
            <p
              className="text-[var(--deepest-green)] text-sm md:text-lg leading-6 uppercase tracking-[0.1em] mb-6"
              dangerouslySetInnerHTML={{ __html: sectionData.title ?? "" }}
            />
            <h2
              className="text-[var(--deepest-green)] text-3xl md:text-4xl xl:text-5xl leading-2 font-bold normal-case tracking-[-0.04em] inline-block"
              dangerouslySetInnerHTML={{ __html: sectionData.shortDescription ?? "" }}
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6">
            {sectionData.subsections?.map((sub, index) => (
              <div key={index} className="shadow-lg rounded-lg overflow-hidden relative">
                {/* Card background */}
                <div className="pb-16">
                  <img src={sectionData.image} alt="service" className="w-full" />
                </div>

                <div className="relative text-center px-9 pt-3 pb-6 bg-white">
                  {/* Round icon */}
                  <div className="shadow-lg w-fit rounded-full absolute left-0 right-0 mx-auto -top-[122px] bg-white">
                    <img src={sub.image} alt={sub.title} className="w-28 h-auto" />
                  </div>

                  <h3 className="text-3xl leading-9 mb-4 text-[var(--deepest-green)]">
                    <a href={sub.link ?? "#"} dangerouslySetInnerHTML={{ __html: sub.title ?? "" }} />
                  </h3>

                  <p
                    className="text-md leading-7 text-[var(--light-gray)]"
                    dangerouslySetInnerHTML={{ __html: sub.description ?? "" }}
                  />

                  <a
                    href={sub.link ?? "#"}
                    className="pt-3 text-xl inline-block w-14 h-14 rounded-full bg-[var(--light-yellow)] mt-4 z-10 flex items-center justify-center"
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
