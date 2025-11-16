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
        <section id="facilities" className="w-full bg-slate-50 py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-14">
                    Our <span className="text-blue-600">Facilities</span>
                </h2>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                    {items.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer text-center">
                            <div className="flex justify-center mb-4 text-blue-600">{item.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;
