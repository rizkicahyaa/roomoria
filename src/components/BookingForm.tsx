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
        <div className="pt-24 pb-16 px-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold text-slate-900 text-center mb-8">Room Booking Form</h1>

            <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded-xl space-y-5">
                <div>
                    <label className="font-medium text-slate-700">Full Name</label>
                    <input type="text" name="name" required className="w-full mt-1 p-3 border rounded-lg focus:ring focus:ring-slate-300" placeholder="Your full name" onChange={handleChange} />
                </div>

                <div>
                    <label className="font-medium text-slate-700">Check-in Date</label>
                    <input type="date" name="checkIn" required className="w-full mt-1 p-3 border rounded-lg" onChange={handleChange} />
                </div>

                <div>
                    <label className="font-medium text-slate-700">Check-out Date</label>
                    <input type="date" name="checkOut" required className="w-full mt-1 p-3 border rounded-lg" onChange={handleChange} />
                </div>

                <div>
                    <label className="font-medium text-slate-700">Room Type</label>
                    <select name="roomType" required onChange={handleChange} className="w-full mt-1 p-3 border rounded-lg">
                        <option value="">-- Select Room --</option>
                        <option value="Deluxe Room">Deluxe Room</option>
                        <option value="Executive Suite">Executive Suite</option>
                        <option value="Family Room">Family Room</option>
                        <option value="Superior Room">Superior Room</option>
                        <option value="Premium Suite">Premium Suite</option>
                    </select>
                </div>

                <div>
                    <label className="font-medium text-slate-700">Total Guests</label>
                    <input type="number" name="guests" required min={1} className="w-full mt-1 p-3 border rounded-lg" onChange={handleChange} />
                </div>

                <div>
                    <label className="font-medium text-slate-700">Additional Notes (Optional)</label>
                    <textarea name="notes" rows={3} className="w-full mt-1 p-3 border rounded-lg" placeholder="Any special request?" onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="w-full bg-slate-900 text-white py-3 rounded-lg text-lg font-medium hover:bg-slate-700 transition">
                    Generate Booking
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
