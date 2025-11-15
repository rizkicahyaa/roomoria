import React from "react";

const Hero: React.FC = () => {
    return (
        <section
            className="w-full h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: `url("https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg")`,
            }}
        >
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">Welcome to Roomoria</h1>

                <p className="max-w-2xl text-lg md:text-xl text-slate-200 mb-8">Experience premium comfort with our elegant rooms, modern facilities, and exceptional hospitality.</p>

                <a href="#rooms" className="bg-slate-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-700 transition">
                    Book Now
                </a>
            </div>
        </section>
    );
};

export default Hero;
