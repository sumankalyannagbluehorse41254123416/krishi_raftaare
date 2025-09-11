"use client";

export default function ProjectSection() {
  return (
    <section className="project bg-green-700">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center text-white rounded-lg overflow-hidden">
          {/* Image */}
          <div className="w-full lg:w-2/5">
            <img
              src="/image/family-plating-together-ground.avif"
              alt="Family farming"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="justify-center lg:justify-start w-full lg:w-3/5 p-6">
            <div className="text-left flex gap-10 xl:gap-20">
              {/* Circle Icon */}
              <div className="w-10 xl:w-16 h-10 xl:h-16 bg-green-800 rounded-full flex items-center justify-center mt-5">
                <svg
                  className="w-8 xl:w-10 h-8 xl:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
              </div>

              {/* Text Content */}
              <div className="md:max-w-md">
                <div className="w-6 h-6 bg-green-800 rounded-full flex items-center justify-center mb-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Providing High Quality Products
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start">
                    <span className="p-4 lg:p-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4"></span>
                    <p className="text-sm leading-6">
                      <span className="text-base font-bold">Making Healthy Foods</span>
                      <br />
                      There are many variations of passages available but the majority have simply free text.
                    </p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <span className="p-4 lg:p-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4"></span>
                    <p className="text-sm leading-6">
                      <span className="text-base font-bold">Our Agriculture Growth</span>
                      <br />
                      There are many variations of passages available but the majority have simply free text.
                    </p>
                  </div>
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
