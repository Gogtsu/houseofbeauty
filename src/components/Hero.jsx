import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const scale = useTransform(scrollY, [0, 1000], [1.1, 1]);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#1A1512]">
            {/* Background with Parallax & Slow Zoom */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0 opacity-60"
            >
                <img
                    src={`${import.meta.env.BASE_URL}hero.jpg`}
                    alt="House of Beauty Atmosphere"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Editorial Content Layout */}
            <div className="relative z-10 h-full container mx-auto flex flex-col justify-end pb-24 md:pb-32 text-[#F9F8F6]">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">

                    {/* Main Headline - Massive & Elegant */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="md:w-2/3"
                    >
                        <div className="overflow-hidden mb-2">
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                                className="block text-caption text-[#C2A88F] mb-6"
                            >
                                Est. 2024 — București
                            </motion.span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-display leading-[0.9] tracking-tighter">
                            House <br />
                            <span className="italic font-light ml-4 md:ml-12">of</span> Beauty
                        </h1>
                    </motion.div>

                    {/* Subtext & CTA - Technical & Clean */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                        className="md:w-1/3 md:mb-4 lg:pl-12"
                    >
                        <p className="font-body text-sm md:text-base opacity-80 leading-relaxed mb-8 max-w-xs">
                            Un spațiu dedicat echilibrului, unde ritualurile de îngrijire întâlnesc expertiza. Frumusețea nu este doar estetică, este o stare de spirit.
                        </p>

                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-4 text-sm uppercase tracking-widest border-b border-[#F9F8F6]/30 pb-2 hover:border-[#C2A88F] hover:text-[#C2A88F] transition-all duration-300"
                        >
                            <span>Programează-te</span>
                            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </a>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
