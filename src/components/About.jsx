import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-24 md:py-40 bg-[#F9F8F6]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Text Content - Asymmetrical Placement */}
                    <div className="lg:w-1/2 order-2 lg:order-1 pt-12 lg:pt-0">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-caption text-[#C2A88F] mb-6 block"
                        >
                            Filozofia Noastră
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-display text-[#1A1512] mb-12 leading-[1.1]"
                        >
                            Nu doar un salon,<br />
                            ci un <span className="italic text-[#6B635F]">refugiu</span>.
                        </motion.h2>

                        <div className="flex gap-8 lg:gap-12">
                            <div className="w-[1px] bg-[#E5E0DC] h-auto self-stretch hidden md:block"></div>
                            <div className="space-y-8 max-w-md">
                                <p className="text-[#6B635F] text-lg leading-relaxed font-light">
                                    La House of Beauty, redefinim experiența de îngrijire. Credem că frumusețea autentică vine din liniște, din acea stare de bine pe care o simți atunci când ești pe mâini bune.
                                </p>
                                <p className="text-[#6B635F] text-base leading-relaxed font-light">
                                    Fiecare detaliu, de la lumina caldă la produsele premium, este gândit pentru a-ți oferi o pauză de la agitația urbană. Nu vindem doar servicii, ci încredere și momente de respiro.
                                </p>
                                <div className="pt-8">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-3xl font-display text-[#1A1512] mb-2">2024</h4>
                                            <span className="text-xs uppercase tracking-widest text-[#C2A88F]">Fondat</span>
                                        </div>
                                        <div>
                                            <h4 className="text-3xl font-display text-[#1A1512] mb-2">Premium</h4>
                                            <span className="text-xs uppercase tracking-widest text-[#C2A88F]">Standard</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual - Parallax / Offset */}
                    <div className="lg:w-1/2 order-1 lg:order-2 relative">
                        <motion.div
                            initial={{ clipPath: 'inset(100% 0 0 0)' }}
                            whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-10"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}3.jpg`}
                                alt="House of Beauty Interior"
                                className="w-full h-[600px] object-cover grayscale-[0.2]"
                            />
                        </motion.div>
                        {/* Decorative Offset Box */}
                        <div className="absolute top-12 -right-12 w-full h-full border border-[#1A1512]/10 z-0 hidden md:block"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
