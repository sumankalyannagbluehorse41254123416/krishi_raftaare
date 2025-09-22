"use client";

export default function Team() {
    return (
        <>
            <section className="container mx-auto px-4 relative z-10 pb-20">
                <div class="text-center mb-12">
                    <p class="text-sm md:text-lg leading-6 uppercase tracking-[0.1em] mb-6">Recently completed work</p>
                    <h2 class="text-3xl md:text-4xl xl:text-5xl leading-2 font-bold normal-case tracking-[-0.04em] inline-block">

                        <strong>Explore Our Projects</strong>

                    </h2>
                </div>
                <div className="grid grid-cols-4 gap-5">
                    <div className="relative">
                        <div>
                            <img src="/image/team1.jpeg" alt="" className="w-full" />
                        </div>
                        <div className="bg-white/60  absolute bottom-5  left-0 right-0 mx-4 p-2">
                            <h5 className="text-lg text-black leading-tight">jessica</h5>
                            <p className="text-black mt-2">leader</p>
                        </div>
                    </div>
                     <div className="relative">
                        <div>
                            <img src="/image/team1.jpeg" alt="" className="w-full" />
                        </div>
                        <div className="bg-white/60  absolute bottom-5  left-0 right-0 mx-4 p-2">
                            <h5 className="text-lg text-black leading-tight">jessica</h5>
                            <p className="text-black mt-2">leader</p>
                        </div>
                    </div>
                     <div className="relative">
                        <div>
                            <img src="/image/team1.jpeg" alt="" className="w-full" />
                        </div>
                        <div className="bg-white/60  absolute bottom-5  left-0 right-0 mx-4 p-2">
                            <h5 className="text-lg text-black leading-tight">jessica</h5>
                            <p className="text-black mt-2">leader</p>
                        </div>
                    </div>
                     <div className="relative">
                        <div>
                            <img src="/image/team1.jpeg" alt="" className="w-full" />
                        </div>
                        <div className="bg-white/60  absolute bottom-5  left-0 right-0 mx-4 p-2">
                            <h5 className="text-lg text-black leading-tight">jessica</h5>
                            <p className="text-black mt-2">leader</p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}