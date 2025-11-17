import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const dummyRooms = [
    {
        id: 1,
        name: "Deluxe Room",
        price: 550000,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        description: "Ruang elegan bernuansa hangat dengan pencahayaan lembut, cocok untuk pasangan atau pelancong solo yang menginginkan kenyamanan premium.",
        facilities: ["Free WiFi", "Air Conditioning", "Minibar", "King Size Bed", "Room Service"],
    },
    {
        id: 2,
        name: "Executive Suite",
        price: 850000,
        image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        description: "Suite luas dengan ruang kerja pribadi, lounge modern, dan kamar mandi marmer eksklusif untuk tamu eksekutif.",
        facilities: ["High-Speed WiFi", "Living Area", "Bathtub", "Work Desk", "Personal Butler"],
    },
    {
        id: 3,
        name: "Family Room",
        price: 700000,
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        description: "Dirancang untuk keluarga, menghadirkan area luas dengan dua tempat tidur dan sudut bermain anak yang aman.",
        facilities: ["WiFi", "2 Queen Beds", "Kids Corner", "Smart TV", "Mini Pantry"],
    },
    {
        id: 4,
        name: "Superior Room",
        price: 480000,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        description: "Pilihan terbaik untuk pelancong bisnis, menghadirkan kenyamanan maksimal dengan interior modern dan view kota.",
        facilities: ["WiFi", "Working Desk", "Rain Shower", "Coffee Maker", "24h Service"],
    },
    {
        id: 5,
        name: "Premium Suite",
        price: 1200000,
        image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        description: "Suite paling mewah dengan ruang tamu terpisah, dining area, dan layanan private chef jika dibutuhkan.",
        facilities: ["Private Lounge", "Dining Area", "Jacuzzi", "Premium Mini Bar", "VIP Concierge"],
    },
    {
        id: 6,
        name: "Twin Room",
        price: 430000,
        image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
        description: "Kamar twin bergaya kontemporer dengan dua single bed nyaman dan pencahayaan natural.",
        facilities: ["WiFi", "Twin Beds", "Wardrobe", "Room Service", "Complimentary Tea"],
    },
];

const RoomDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const room = dummyRooms.find((r) => r.id === Number(id));

    if (!room) {
        return <p className="text-center mt-24 text-xl text-white">Room not found.</p>;
    }

    const handleBookNow = () => {
        navigate("/booking", {
            state: {
                roomId: room.id,
                roomName: room.name,
                price: room.price,
            },
        });
    };

    return (
        <section className="pt-24 pb-20 px-6 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="rounded-[32px] overflow-hidden shadow-[0_35px_120px_rgba(0,0,0,0.55)] border border-white/10">
                    <img src={room.image} alt={room.name} className="w-full h-[500px] object-cover" />
                </div>

                <div className="space-y-6">
                    <p className="text-xs uppercase tracking-[0.45em] text-amber-300/80">Suite Detail</p>
                    <h1 className="text-4xl font-semibold">{room.name}</h1>
                    <p className="text-3xl text-amber-300 font-light">Rp {room.price.toLocaleString()} / night</p>
                    <p className="text-slate-200 leading-relaxed">{room.description}</p>

                    <div>
                        <h2 className="text-lg tracking-[0.45em] uppercase text-amber-300 mb-3">Facilities</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {room.facilities.map((fac, index) => (
                                <div key={index} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10">
                                    <span className="text-amber-300">◆</span>
                                    <p className="text-sm uppercase tracking-[0.2em] text-slate-200">{fac}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={handleBookNow}
                        className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-3 rounded-full bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 font-semibold tracking-[0.3em] shadow-lg shadow-amber-500/40"
                    >
                        Book This Suite
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RoomDetail;
