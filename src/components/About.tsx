import React from "react";

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="absolute -inset-4 bg-linear-to-r from-amber-400/30 to-amber-600/30 blur-3xl opacity-60" />
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=75"
                        alt="Hotel"
                        className="relative rounded-[32px] shadow-[0_25px_80px_rgba(0,0,0,0.55)] border border-white/10"
                    />
                    <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-lg px-6 py-4 rounded-2xl border border-white/20">
                        <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Since 2012</p>
                        <p className="text-lg font-semibold">Exquisite Hospitality</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <p className="text-xs uppercase tracking-[0.5em] text-amber-300/80">About Roomoria</p>
                    <h2 className="text-4xl font-light leading-tight">
                        Beyond a stay—Roomoria menghadirkan karya seni perhotelan.
                    </h2>
                    <p className="text-slate-300 leading-relaxed">
                        Roomoria dirancang untuk tamu yang mengutamakan privasi, kenyamanan, dan pelayanan berkelas.
                        Kami menggabungkan desain interior kontemporer dengan sentuhan budaya lokal, menciptakan suasana
                        hangat yang eksklusif.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Setiap detail kami kurasi: aromatik khas lobby, personal butler on-demand, hingga signature
                        dining experience. Semua untuk memastikan Anda menikmati momen terbaik tanpa gangguan.
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs tracking-[0.35em] uppercase text-slate-200">
                        <span className="px-4 py-2 rounded-full border border-white/20">Curated Suites</span>
                        <span className="px-4 py-2 rounded-full border border-white/20">Private Concierge</span>
                        <span className="px-4 py-2 rounded-full border border-white/20">Art & Design</span>
                    </div>
                    <button className="mt-4 inline-flex items-center gap-3 px-8 py-3 rounded-full bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 font-semibold tracking-[0.3em] shadow-lg shadow-amber-500/30">
                        Discover Story
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
