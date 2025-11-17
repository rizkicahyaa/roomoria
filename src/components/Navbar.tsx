import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (sectionId: string) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 200);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-white">
                <Link to="/" className="text-2xl font-semibold tracking-[0.3em] uppercase">
                    Roomoria
                </Link>

                <ul className="hidden md:flex items-center gap-10 text-sm tracking-[0.35em] uppercase">
                    <li>
                        <Link to="/" className="hover:text-amber-300 transition">
                            Home
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("rooms")} className="hover:text-amber-300 transition">
                            Rooms
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("facilities")} className="hover:text-amber-300 transition">
                            Facilities
                        </button>
                    </li>
                    <li>
                        <button onClick={() => scrollToSection("about")} className="hover:text-amber-300 transition">
                            About
                        </button>
                    </li>
                </ul>

                <Link
                    to="/booking"
                    className="hidden md:inline-flex items-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-2 rounded-full text-sm font-semibold tracking-[0.2em] shadow-lg shadow-amber-500/40 hover:shadow-amber-400/60"
                >
                    Reserve
                </Link>

                <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                    </svg>
                </button>
            </div>

            <div
                className={`md:hidden absolute inset-x-0 top-full bg-slate-950/95 backdrop-blur-2xl border-t border-white/10 transition-all ${
                    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}
            >
                <ul className="flex flex-col items-center text-white py-6 gap-4 text-sm tracking-[0.35em] uppercase">
                    <li>
                        <Link to="/" className="hover:text-amber-300" onClick={() => setOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                scrollToSection("rooms");
                                setOpen(false);
                            }}
                            className="hover:text-amber-300"
                        >
                            Rooms
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                scrollToSection("facilities");
                                setOpen(false);
                            }}
                            className="hover:text-amber-300"
                        >
                            Facilities
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                scrollToSection("about");
                                setOpen(false);
                            }}
                            className="hover:text-amber-300"
                        >
                            About
                        </button>
                    </li>
                    <li>
                        <Link
                            to="/booking"
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-2 rounded-full text-sm font-semibold tracking-[0.2em] shadow-lg shadow-amber-500/40"
                        >
                            Reserve
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
