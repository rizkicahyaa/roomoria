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
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    },
    {
        id: 2,
        name: "Executive Suite",
        price: 850000,
        image: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
    },
    {
        id: 3,
        name: "Family Room",
        price: 700000,
        image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
    },
    {
        id: 4,
        name: "Superior Room",
        price: 480000,
        image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    },
    {
        id: 5,
        name: "Premium Suite",
        price: 1200000,
        image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    },
    {
        id: 6,
        name: "Twin Room",
        price: 430000,
        image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    },
];

const RoomList: React.FC = () => {
    return (
        <section id="rooms" className="py-16 px-6 bg-slate-100">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900 mb-2">Our Rooms</h2>
                <p className="text-slate-600">Choose from our premium selection of comfortable and luxurious rooms.</p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {rooms.map((room) => (
                    <div key={room.id} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
                        <img src={room.image} alt={room.name} className="w-full h-56 object-cover" />

                        <div className="p-5">
                            <h3 className="text-2xl font-semibold text-slate-900">{room.name}</h3>

                            <p className="text-slate-600 mt-2 mb-4">Rp {room.price.toLocaleString()} / night</p>

                            <Link to={`/room/${room.id}`}>
                                <button className="w-full bg-slate-900 text-white py-2 rounded-lg font-medium hover:bg-slate-700 transition">View Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RoomList;
