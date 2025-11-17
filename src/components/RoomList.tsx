import React from "react";
import { Link } from "react-router-dom";

interface Room {
    id: number;
    name: string;
    price: number;
    image: string;
}

const rooms: Room[] = [
    {
        id: 1,
        name: "Deluxe Room",
        price: 550000,
            image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    },
    {
        id: 2,
        name: "Executive Suite",
        price: 850000,
            image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    },
    {
        id: 3,
        name: "Family Room",
        price: 700000,
            image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    },
    {
        id: 4,
        name: "Superior Room",
        price: 480000,
            image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    },
    {
        id: 5,
        name: "Premium Suite",
        price: 1200000,
            image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    },
    {
        id: 6,
        name: "Twin Room",
        price: 430000,
            image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop",
    },
];

const RoomList: React.FC = () => {
    return (
        <section
            id="rooms"
            className="relative py-20 px-6 bg-linear-to-br from-slate-950 via-slate-900 to-amber-900 overflow-hidden"
        >
            <div className="absolute inset-0">
                <div className="w-full h-full bg-[url('https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg')] opacity-10 bg-cover bg-center blur-sm" />
                <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-slate-900/60 to-slate-950" />
            </div>

            <div className="relative max-w-7xl mx-auto text-center mb-16">
                <p className="uppercase tracking-[0.4em] text-amber-400/80 text-sm mb-4">Room Collection</p>
                <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
                    Experience a Grand Stay
                </h2>
                <p className="text-slate-200 text-lg max-w-3xl mx-auto">
                    Nikmati kenyamanan premium dengan suasana hotel bintang lima. Setiap kamar dirancang dengan
                    sentuhan elegan, layanan terbaik, dan fasilitas lengkap untuk pengalaman menginap tak terlupakan.
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {rooms.map((room) => (
                    <div
                        key={room.id}
                        className="group rounded-3xl bg-white/5 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-amber-300/60"
                    >
                        <div className="relative">
                            <img
                                src={room.image}
                                alt={room.name}
                                className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                                <span className="text-white font-light tracking-wide text-sm">Starting from</span>
                                <span className="text-amber-300 font-semibold text-lg">
                                    Rp {room.price.toLocaleString()}
                                </span>
                            </div>
                        </div>

                        <div className="p-8 space-y-5">
                            <div>
                                <p className="text-amber-300 text-xs uppercase tracking-[0.35em] mb-2">Luxury Suite</p>
                                <h3 className="text-2xl font-semibold text-white">{room.name}</h3>
                            </div>

                            <p className="text-slate-300 text-sm">
                                Dirancang dengan detail mewah, pencahayaan lembut, serta fasilitas premium untuk
                                memastikan kenyamanan penuh selama menginap.
                            </p>

                            <div className="flex items-center gap-4 text-xs text-slate-200 uppercase tracking-[0.25em]">
                                <span className="flex-1 h-px bg-white/20" />
                                Grand Luxury
                                <span className="flex-1 h-px bg-white/20" />
                            </div>

                            <Link to={`/room/${room.id}`}>
                                <button className="w-full py-3 rounded-2xl bg-linear-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-900 font-semibold tracking-wide shadow-lg shadow-amber-500/30 transition hover:shadow-amber-400/40">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RoomList;
