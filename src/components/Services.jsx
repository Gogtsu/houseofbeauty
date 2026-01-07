import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const servicesList = [
    {
        id: "01",
        title: "Hair Styling",
        subtitle: "Tunsoare, Coafat, Texturare",
        price: "de la 150 RON"
    },
    {
        id: "02",
        title: "Colorimetrie",
        subtitle: "Balayage, AirTouch, Corecții Culoare",
        price: "de la 450 RON"
    },
    {
        id: "03",
        title: "Terapii Capilare",
        subtitle: "Hidratare Profundă, Reconstrucție",
        price: "de la 200 RON"
    },
    {
        id: "04",
        title: "Nail Care",
        subtitle: "Manichiură Dry, Pedichiură Spa",
        price: "de la 120 RON"
    },
    {
        id: "05",
        title: "Estetică Facială",
        subtitle: "Curățare, Masaj Facial, Peeling",
        price: "de la 300 RON"
    }
];

export default function Services() {
    const [hoveredService, setHoveredService] = useState(null);

    return (
        <section id="services" className="py-32 bg-[#F9F8F6] relative z-10">
            <div className="container mx-auto px-6 lg:px-12">

                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-[#E5E0DC] pb-8">
                    <h2 className="text-4xl md:text-5xl font-display text-[#1A1512]">
                        Servicii
                    </h2>
                    <p className="text-[#6B635F] max-w-md mt-4 md:mt-0 text-sm md:text-base">
                        O selecție de ritualuri create pentru a-ți evidenția frumusețea naturală, realizate cu produse de top.
                    </p>
                </div>

                <div className="flex flex-col">
                    {servicesList.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                            className="group relative border-b border-[#E5E0DC] py-10 cursor-pointer flex flex-col md:flex-row justify-between items-baseline gap-4 md:items-center transition-colors duration-500 hover:border-[#1A1512]"
                        >
                            <div className="md:w-1/12 text-sm text-[#C2A88F] font-mono opacity-60">
                                /{service.id}
                            </div>

                            <div className="md:w-5/12">
                                <h3 className="text-2xl md:text-4xl font-display text-[#1A1512] group-hover:pl-4 transition-all duration-500">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="md:w-4/12 text-[#6B635F] text-sm md:text-base font-light opacity-80 group-hover:opacity-100 transition-opacity">
                                {service.subtitle}
                            </div>

                            <div className="md:w-2/12 flex justify-between md:justify-end items-center gap-4 w-full">
                                <span className="text-[#1A1512] font-medium">{service.price}</span>
                                <div className="bg-[#1A1512] text-white p-2 rounded-full opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                    <ArrowUpRight size={18} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Image Preview (Optional/Advanced - Keeping it simple first but structured for it) */}
                {/* If we had images for each service, we'd place a fixed position image container here that changes source based on hoveredService */}

            </div>
        </section>
    );
}
