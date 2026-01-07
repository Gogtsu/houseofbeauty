import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const images = [
    `${import.meta.env.BASE_URL}1.jpg`,
    `${import.meta.env.BASE_URL}2.jpg`,
    `${import.meta.env.BASE_URL}3.jpg`,
    `${import.meta.env.BASE_URL}4.jpg`,
];

export default function Gallery() {
    const containerRef = useRef(null);

    // Create a horizontal scroll feel or strict grid. Let's do a refined grid for stability but with nice hover.

    return (
        <section id="gallery" className="py-24 bg-[#1A1512] text-[#F9F8F6] overflow-hidden">
            <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
                <h2 className="text-4xl md:text-6xl font-display">
                    Portofoliu
                </h2>
                <p className="hidden md:block text-[#C2A88F] text-sm tracking-widest uppercase">
                    Instagram @houseofbeauty
                </p>
            </div>

            {/* Full width marquee-like strip or wide grid */}
            <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[500px]">
                {images.map((src, index) => (
                    <div key={index} className="relative flex-1 group overflow-hidden border-r border-[#F9F8F6]/10 last:border-r-0">
                        <img
                            src={src}
                            alt="Gallery"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                            <span className="text-xs uppercase tracking-widest block mb-2 text-[#C2A88F]">Look {index + 1}</span>
                            <span className="font-display text-2xl">Signature Style</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
