import React from "react";

const About: React.FC = () => {
    return (
        <section id="about" className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" alt="Hotel" className="rounded-2xl shadow-lg" />
                </div>

                <div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">
                        About <span className="text-blue-600">Roomoria</span>
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed mb-4">Roomoria is a modern and comfortable hotel booking system designed to make your stay unforgettable. With luxurious rooms, premium facilities, and an easy online booking experience, we aim to provide the best hospitality service for every guest.</p>

                    <p className="text-lg text-slate-600 leading-relaxed mb-6">Our team is dedicated to ensuring your comfort and satisfaction from the moment you check in until you check out. Enjoy a seamless and relaxing experience with Roomoria.</p>

                    <button className="px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-700 transition">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default About;
