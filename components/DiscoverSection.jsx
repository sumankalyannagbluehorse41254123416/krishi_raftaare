"use client";

export default function HighlightSection() {
  return (
    <div className="bg-[#f1cf69]">
      <div className="max-w-5xl mx-auto text-center py-8 md:py-16 px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden sm:block">
          <div className="w-11 md:w-16 h-10 md:h-16 bg-green-800 rounded-full flex items-center justify-center">
            <svg
              className="w-6 md:w-10 h-6 md:h-10 text-white"
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
          </div>
          <h2 className="text-green-800 font-semibold text-2xl md:text-3xl">
            We're Leader in Agriculture Market
          </h2>
        </div>
        <button className="bg-green-800 mt-4 md:mt-0 text-white px-6 md:px-10 py-3 md:py-4 text-sm rounded-lg">
          Discover More
        </button>
      </div>
    </div>
  );
}
