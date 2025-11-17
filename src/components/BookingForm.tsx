import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm: React.FC = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        checkIn: "",
        checkOut: "",
        roomType: "",
        guests: 1,
        notes: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/booking-summary", {
            state: { bookingData: formData },
        });
    };

    return (
        <section className="pt-28 pb-24 px-6 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen text-white">
            <div className="max-w-3xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                    <p className="text-xs uppercase tracking-[0.5em] text-amber-300/80">Reservation</p>
                    <h1 className="text-4xl font-light">Book Your Signature Stay</h1>
                    <p className="text-slate-300">Lengkapi detail berikut untuk mengamankan pengalaman menginap paling eksklusif.</p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white/5 border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.6)] rounded-[28px] p-10 space-y-6 backdrop-blur-2xl"
                >
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <label className="text-xs uppercase tracking-[0.4em] text-amber-300">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="mt-2 w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder:text-slate-400 focus:border-amber-300 outline-none"
                                placeholder="Nama Lengkap"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="text-xs uppercase tracking-[0.4em] text-amber-300">Guests</label>
                            <input
                                type="number"
                                name="guests"
                                min={1}
                                required
                                className="mt-2 w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder:text-slate-400 focus:border-amber-300 outline-none"
                                placeholder="Total tamu"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <label className="text-xs uppercase tracking-[0.4em] text-amber-300">Check-in</label>
                            <input
                                type="date"
                                name="checkIn"
                                required
                                className="mt-2 w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white focus:border-amber-300 outline-none"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="text-xs uppercase tracking-[0.4em] text-amber-300">Check-out</label>
                            <input
                                type="date"
                                name="checkOut"
                                required
                                className="mt-2 w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white focus:border-amber-300 outline-none"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs uppercase tracking-[0.4em] text-amber-300">Room Preference</label>
                        <select
                            name="roomType"
                            required
                            onChange={handleChange}
                            className="mt-2 w-full bg-white border border-amber-300 rounded-2xl px-4 py-3 text-slate-900 focus:border-amber-300 outline-none"
                        >
                            <option value="">Select a suite</option>
                            <option value="Deluxe Room">Deluxe Room</option>
                            <option value="Executive Suite">Executive Suite</option>
                            <option value="Family Room">Family Room</option>
                            <option value="Superior Room">Superior Room</option>
                            <option value="Premium Suite">Premium Suite</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-xs uppercase tracking-[0.4em] text-amber-300">Special Notes</label>
                        <textarea
                            name="notes"
                            rows={4}
                            className="mt-2 w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder:text-slate-400 focus:border-amber-300 outline-none"
                            placeholder="Tulis request khusus Anda..."
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 rounded-full bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 font-semibold tracking-[0.3em] shadow-lg shadow-amber-500/40"
                    >
                        Generate Booking
                    </button>
                </form>
            </div>
        </section>
    );
};

export default BookingForm;
