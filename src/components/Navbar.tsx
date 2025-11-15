import React, { useState } from "react";

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-slate-900 text-white shadow-md fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-wide">Roomoria</h1>

                <ul className="hidden md:flex gap-8 text-lg">
                    <li className="hover:text-slate-300 cursor-pointer">Home</li>
                    <li className="hover:text-slate-300 cursor-pointer">Rooms</li>
                    <li className="hover:text-slate-300 cursor-pointer">Booking</li>
                    <li className="hover:text-slate-300 cursor-pointer">About</li>
                </ul>

                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                    </svg>
                </button>
            </div>

            {open && (
                <ul className="md:hidden bg-slate-800 py-4 space-y-4 text-center text-lg">
                    <li className="hover:text-slate-300 cursor-pointer">Home</li>
                    <li className="hover:text-slate-300 cursor-pointer">Rooms</li>
                    <li className="hover:text-slate-300 cursor-pointer">Booking</li>
                    <li className="hover:text-slate-300 cursor-pointer">About</li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
