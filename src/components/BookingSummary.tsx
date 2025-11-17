import React from "react";
import { useLocation } from "react-router-dom";

const BookingSummary: React.FC = () => {
    const location = useLocation();
    const { bookingData } = location.state || {};

    if (!bookingData) {
        return <p className="text-center text-red-500 pt-24">Booking data not found. Please go back and try again.</p>;
    }

    return (
        <section className="min-h-screen pt-28 pb-20 px-6 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
            <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-[32px] p-10 shadow-[0_35px_90px_rgba(0,0,0,0.65)] backdrop-blur-3xl space-y-8">
                <div className="text-center space-y-2">
                    <p className="text-xs uppercase tracking-[0.5em] text-amber-300/80">Booking Summary</p>
                    <h2 className="text-3xl font-semibold">Roomoria Grand Collection</h2>
                    <p className="text-slate-200 text-sm">Tunjukkan informasi ini saat check-in untuk layanan prioritas.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                        <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Guest</p>
                        <p className="text-xl font-semibold">{bookingData.name}</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                        <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Suite</p>
                        <p className="text-xl font-semibold">{bookingData.roomType}</p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                        <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Check-in</p>
                        <p className="text-lg">{bookingData.checkIn}</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                        <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Check-out</p>
                        <p className="text-lg">{bookingData.checkOut}</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                        <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Guests</p>
                        <p className="text-lg">{bookingData.guests} person(s)</p>
                    </div>
                    {bookingData.notes && (
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 sm:col-span-2">
                            <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Notes</p>
                            <p className="text-lg">{bookingData.notes}</p>
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between bg-linear-to-r from-amber-400/20 to-amber-500/20 border border-amber-200/40 rounded-2xl px-6 py-4">
                    <p className="text-sm text-amber-200">Booking Confirmed</p>
                    <span className="text-amber-300 text-xl">✓</span>
                </div>
            </div>
        </section>
    );
};

export default BookingSummary;
