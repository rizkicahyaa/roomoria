import React from "react";
import { Wifi, BedDouble, Car, Coffee, ShieldCheck, Dumbbell } from "lucide-react";

const Facilities: React.FC = () => {
    const items = [
        {
            icon: <Wifi size={40} />,
            title: "Free High-Speed WiFi",
            desc: "Nikmati koneksi internet cepat di seluruh area hotel.",
        },
        {
            icon: <BedDouble size={40} />,
            title: "Comfortable Rooms",
            desc: "Kamar modern, bersih, dan nyaman untuk pengalaman menginap terbaik.",
        },
        {
            icon: <Car size={40} />,
            title: "Free Parking",
            desc: "Area parkir luas dan aman tersedia untuk semua tamu.",
        },
        {
            icon: <Coffee size={40} />,
            title: "Breakfast Included",
            desc: "Sarapan lezat gratis setiap pagi untuk memulai hari Anda.",
        },
        {
            icon: <ShieldCheck size={40} />,
            title: "24/7 Security",
            desc: "Keamanan hotel terjamin sepanjang hari dengan sistem profesional.",
        },
        {
            icon: <Dumbbell size={40} />,
            title: "Fitness Center",
            desc: "Fasilitas gym lengkap untuk menjaga kebugaran Anda.",
        },
    ];

    return (
        <section id="facilities" className="relative py-24 bg-slate-950 overflow-hidden">
            <div
                className="absolute inset-0 opacity-70"
                style={{ background: "radial-gradient(circle, rgba(255,215,128,0.1), transparent 45%)" }}
            />
            <div className="relative max-w-7xl mx-auto px-6 text-center text-white space-y-12">
                <div>
                    <p className="uppercase tracking-[0.5em] text-xs text-amber-300/80 mb-4">Signature Privileges</p>
                    <h2 className="text-4xl font-light">
                        Crafted Services for a <span className="font-semibold text-amber-300">Grand Stay</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white/5 border border-white/10 px-8 py-10 rounded-3xl backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] transition hover:-translate-y-2 hover:border-amber-300/40"
                        >
                            <div className="flex justify-center mb-6 text-amber-300 group-hover:text-amber-200 transition">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;
