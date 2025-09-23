"use client";

export default function Team() {
    return (
        <>
            <section className="container mx-auto px-4 relative z-10 pb-20">
                <div className="text-center mb-12">
                    <p className="text-sm md:text-lg leading-6 uppercase tracking-[0.1em] mb-6 text-[var(--deepest-green)]">Recently completed work</p>
                    <h2 className="text-[var(--deepest-green)] text-3xl md:text-4xl xl:text-5xl leading-2 font-bold normal-case tracking-[-0.04em] inline-block">
                        <strong>Our Team</strong>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="relative group">
                        <div>
                            <img src="/image/team1.jpeg" alt="" className="w-full h-120 sm:h-auto object-cover object-[center_2%] sm:object-unset" />
                        </div>
                        <div className="bg-white/60 group-hover:bg-white/80 rounded-lg absolute bottom-5  left-0 right-0 mx-4 p-3 transition-all duration-300 ease-in-out">
                            <h5 className="text-lg text-[var(--deepest-green)] leading-tight">Jessica</h5>
                            <p className="text-black mt-2 text-sm">leader</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div>
                            <img src="/image/team1.jpeg" alt="" className="w-full h-120 sm:h-auto object-cover object-[center_2%] sm:object-unset" />
                        </div>
                        <div className="bg-white/60 group-hover:bg-white/80 rounded-lg absolute bottom-5  left-0 right-0 mx-4 p-3 transition-all duration-300 ease-in-out">
                            <h5 className="text-lg text-[var(--deepest-green)] leading-tight">Jessica</h5>
                            <p className="text-black mt-2 text-sm">leader</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div>
                            <img src="/image/team1.jpeg" alt="" className="w-full h-120 sm:h-auto object-cover object-[center_2%] sm:object-unset" />
                        </div>
                        <div className="bg-white/60 group-hover:bg-white/80 rounded-lg absolute bottom-5  left-0 right-0 mx-4 p-3 transition-all duration-300 ease-in-out">
                            <h5 className="text-lg text-[var(--deepest-green)] leading-tight">Jessica</h5>
                            <p className="text-black mt-2 text-sm">leader</p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div>
                            <img src="/image/team1.jpeg" alt="" className="w-full h-120 sm:h-auto object-cover object-[center_2%] sm:object-unset" />
                        </div>
                        <div className="bg-white/60 group-hover:bg-white/80 rounded-lg absolute bottom-5  left-0 right-0 mx-4 p-3 transition-all duration-300 ease-in-out">
                            <h5 className="text-lg text-[var(--deepest-green)] leading-tight">Jessica</h5>
                            <p className="text-black mt-2 text-sm">leader</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}