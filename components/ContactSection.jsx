"use client";

export default function ContactSection() {
  return (
    <section className="bg-white pt-10 pb-10 md:pb-20 lg:py-10">
      <div className="mx-auto p-6 max-w-5xl">
        <div className="text-center">
          <h5 className="text-sm mb-2">CONTACT WITH US</h5>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-800 mb-4 max-w-xl mx-auto">
            Looking for Agriculture & Organic Eco Services?
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10 lg:gap-20 pt-[30px]">
          <div className="flex-1">
            <p className="text-gray-600 mb-6 text-sm">
              There are many variations of passages of available but the majority have suffered alteration in some form, by injected humour or randomised words even believe.
            </p>
            <ul className="text-left text-gray-600 list-disc pl-5 mb-6">
              <li>Making this the first generator on the internet</li>
              <li>Lorem ipsum is not simply random text</li>
              <li>If you are going to use a passage</li>
            </ul>

            <div className="relative mt-[45px]">
              <div className="relative z-10 agricultural_img">
                <img
                  src="image/planting.jpg"
                  alt="Agriculture"
                  className="rounded-lg shadow-md h-28 lg:h-40 w-32 lg:w-40 object-cover"
                />
              </div>
              <img
                src="image/health_benefits_carrots.webp"
                alt="Organic Eco"
                className="rounded-lg shadow-md mt-4 w-[300px] absolute top-[40px] right-0"
              />
            </div>
          </div>

          <div className="flex-1 bg-[#f5f5f5] p-10 rounded-lg shadow-md mt-28 lg:mt-0">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Contact With Us</h2>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 mb-4 border-none rounded-[10px] bg-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 mb-4 border-none rounded-[10px] bg-white"
              />
              <textarea
                placeholder="Write Message"
                className="w-full p-2 mb-4 border-none rounded-[10px] bg-white"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-fit bg-[#f1cf69] text-white p-3 rounded hover:bg-yellow-500"
              >
                SEND A MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
