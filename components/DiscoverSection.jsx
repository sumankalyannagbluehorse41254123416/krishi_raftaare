"use client";

export default function HighlightSection({ sectionData }) {
  if (!sectionData) return null;

  const { title,shortDescription } = sectionData;
  

  return (
    <div className="bg-[var(--light-yellow)]">
      <div className="max-w-5xl mx-auto text-center py-8 md:py-16 px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center space-x-4 md:space-x-8">
          <div className="hidden sm:block">
            <div className="w-14 md:w-18 h-14 md:h-18 bg-[var(--deepest-green)] rounded-full flex items-center justify-center">
             <img src="/image/wheat_iconn.svg" alt="trusted Image" className="p-1" />
            </div>
          </div>
          <h2 className="font-semibold text-2xl xl:text-3xl text-[var(--deepest-green)]">
            {title}
          </h2>
        </div>
        <button className="button_yellow_hover bg-[var(--deepest-green)] mt-4 md:mt-0 text-[var(--light-yellow)] px-6 md:px-10 py-3 md:py-5 text-sm font-semibold rounded-lg cursor-pointer">
          {shortDescription.replace(/^<p>/i, "").replace(/<\/p>$/i, "").trim() || "Discover More"}
        </button>
      </div>
    </div>
  );
}
