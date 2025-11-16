import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white py-14 mt-20">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                <div>
                    <h2 className="text-3xl font-bold tracking-wide">Roomoria</h2>
                    <p className="text-slate-300 mt-3">Ekslusif, nyaman, dan dirancang untuk pengalaman menginap terbaik Anda.</p>

                    <div className="flex gap-4 mt-5">
                        <a href="#" className="hover:text-blue-400 transition">
                            <Facebook size={24} />
                        </a>
                        <a href="#" className="hover:text-blue-400 transition">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="hover:text-blue-400 transition">
                            <Twitter size={24} />
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-slate-300">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Rooms</li>
                        <li className="hover:text-white cursor-pointer">Booking</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <p className="text-slate-300">📍 Jl. Sunset Road No. 45, Bali</p>
                    <p className="text-slate-300 mt-2">📞 +62 812-3456-7890</p>
                    <p className="text-slate-300 mt-2">✉️ support@roomoria.com</p>
                </div>
            </div>

            <div className="border-t border-slate-700 mt-12 pt-6 text-center text-slate-400">© {new Date().getFullYear()} Roomoria. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
