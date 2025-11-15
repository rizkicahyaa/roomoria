import React from "react";
import { useLocation } from "react-router-dom";

const BookingSummary: React.FC = () => {
    const location = useLocation();
    const { bookingData } = location.state || {};

    if (!bookingData) {
        return <p className="text-center text-red-600 pt-24">Booking data not found. Please go back and try again.</p>;
    }

    return (
        <div className="max-w-xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Booking Summary - Roomoria</h2>

            <div className="space-y-3 text-gray-700">
                <p>
                    <span className="font-semibold">Name:</span> {bookingData.name}
                </p>
                <p>
                    <span className="font-semibold">Check-in:</span> {bookingData.checkIn}
                </p>
                <p>
                    <span className="font-semibold">Check-out:</span> {bookingData.checkOut}
                </p>
                <p>
                    <span className="font-semibold">Room Type:</span> {bookingData.roomType}
                </p>
                <p>
                    <span className="font-semibold">Guests:</span> {bookingData.guests}
                </p>
                {bookingData.notes && (
                    <p>
                        <span className="font-semibold">Notes:</span> {bookingData.notes}
                    </p>
                )}
            </div>

            <div className="border-t border-gray-300 my-4"></div>

            <p className="text-sm text-gray-500 text-center">Tunjukkan halaman ini ke resepsionis untuk menyelesaikan proses check-in.</p>

            <p className="text-center mt-2 font-semibold text-green-600">Booking Confirmed ✓</p>
        </div>
    );
};

export default BookingSummary;
