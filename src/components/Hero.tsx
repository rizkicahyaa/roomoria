import React from "react";

const Hero: React.FC = () => {
    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url("https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1400&h=900&fit=crop")`,
            }}
        >
            <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900/95 to-amber-900/60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,215,128,0.35),transparent_55%)]" />

            <div className="relative z-10 text-center text-white px-6 py-32 space-y-8 max-w-3xl">
                <p className="text-sm uppercase tracking-[0.8em] text-amber-300/80">Signature Collection</p>
                <h1 className="text-4xl md:text-6xl font-light leading-tight">
                    Grand Luxury Retreats by <span className="font-semibold">Roomoria</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                    Rasakan ketenangan dan kemewahan hotel bintang lima dengan layanan personal 24/7, interior elegan,
                    dan panorama eksklusif yang dirancang untuk menghadirkan pengalaman menginap tak tertandingi.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#rooms"
                        className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-3 rounded-full text-sm font-semibold tracking-[0.3em] shadow-xl shadow-amber-500/40 hover:shadow-amber-400/60"
                    >
                        Discover Suites
                    </a>
                    <a
                        href="#facilities"
                        className="w-full sm:w-auto inline-flex justify-center items-center gap-3 border border-white/40 px-8 py-3 rounded-full text-sm font-semibold tracking-[0.3em] hover:border-white/80 transition"
                    >
                        Signature Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
