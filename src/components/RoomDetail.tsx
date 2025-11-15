import React from "react";
import { useParams } from "react-router-dom";

const dummyRooms = [
    {
        id: 1,
        name: "Deluxe Room",
        price: 550000,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
        description: "A luxurious room perfect for couples or solo travelers. Featuring premium bedding, air conditioning, minibar, and city view.",
        facilities: ["Free WiFi", "Air Conditioning", "Minibar", "King Size Bed", "Room Service"],
    },
    {
        id: 2,
        name: "Executive Suite",
        price: 850000,
        image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
        description: "Spacious suite with a modern living area, work desk, high-quality amenities, and a premium bathroom.",
        facilities: ["WiFi", "Living Room", "Bathtub", "Work Desk", "City View"],
    },
];

const RoomDetail: React.FC = () => {
    const { id } = useParams();
    const room = dummyRooms.find((r) => r.id === Number(id));

    if (!room) {
        return <p className="text-center mt-20 text-xl">Room not found.</p>;
    }

    return (
        <div className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
            <img src={room.image} alt={room.name} className="w-full h-[400px] object-cover rounded-xl shadow-md" />

            <h1 className="text-4xl font-bold mt-6 text-slate-900">{room.name}</h1>

            <p className="text-2xl text-slate-700 mt-2">Rp {room.price.toLocaleString()} / night</p>

            <p className="mt-6 text-slate-600 leading-relaxed text-lg max-w-3xl">{room.description}</p>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-3 text-slate-900">Facilities</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {room.facilities.map((fac, index) => (
                        <div key={index} className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg">
                            <span className="text-slate-700">✔</span>
                            <p className="text-slate-700">{fac}</p>
                        </div>
                    ))}
                </div>
            </div>

            <button className="bg-slate-900 text-white mt-10 px-10 py-3 rounded-lg text-lg font-medium hover:bg-slate-700 transition">Book Now</button>
        </div>
    );
};

export default RoomDetail;
