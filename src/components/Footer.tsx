import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="relative mt-20 bg-slate-950 text-white overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-tr from-amber-500/10 via-transparent to-transparent" />
            <div className="relative max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                    <h2 className="text-3xl font-semibold tracking-[0.3em] uppercase">Roomoria</h2>
                    <p className="text-slate-300">
                        Kemewahan modern dengan pelayanan tailored, menghadirkan ketenangan di setiap perjalanan Anda.
                    </p>
                    <div className="flex gap-4">
                        {[Facebook, Instagram, Twitter].map((Icon, index) => (
                            <a key={index} href="#" className="p-3 rounded-full border border-white/20 hover:border-amber-300/60 transition">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-sm uppercase tracking-[0.4em] text-amber-300 mb-4">Navigation</h3>
                    <ul className="space-y-3 text-slate-300">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">Rooms</li>
                        <li className="hover:text-white cursor-pointer">Booking</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                    </ul>
                </div>

                <div className="space-y-3 text-slate-300">
                    <h3 className="text-sm uppercase tracking-[0.4em] text-amber-300">Contact</h3>
                    <p>Jl. Sunset Road No. 45, Bali</p>
                    <p>+62 812-3456-7890</p>
                    <p>support@roomoria.com</p>
                </div>
            </div>

            <div className="relative border-t border-white/10 text-center text-slate-400 py-6 text-sm tracking-[0.35em] uppercase">
                © {new Date().getFullYear()} Roomoria. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

