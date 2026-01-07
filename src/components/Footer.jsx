import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#1e1815] text-[#D7Cdc4] py-12 border-t border-[#3a312d]">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Logo/Brand */}
                <div className="text-center md:text-left">
                    <h3 className="font-serif text-2xl text-[#F5F0EB] mb-2">House of Beauty</h3>
                    <p className="text-xs tracking-widest opacity-50 uppercase">Luxury Beauty Salon</p>
                </div>

                {/* Social */}
                <div className="flex gap-6">
                    <a href="#" className="hover:text-[#BFA588] transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="hover:text-[#BFA588] transition-colors"><Facebook size={20} /></a>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-right text-xs opacity-40 font-light">
                    <p>&copy; {new Date().getFullYear()} House of Beauty. Toate drepturile rezervate.</p>
                </div>

            </div>
        </footer>
    );
}
