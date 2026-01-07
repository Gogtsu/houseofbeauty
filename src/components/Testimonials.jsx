import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Un loc unde timpul pare că stă în loc. Serviciile sunt impecabile, dar atmosfera este cea care te face să revii.",
        author: "Ana Moraru",
        role: "Client Fidel"
    },
    {
        quote: "House of Beauty a ridicat standardul în București. Echipa este fantastică, iar atenția la detalii se vede în fiecare gest.",
        author: "Elena Radu",
        role: "Business Owner"
    },
    {
        quote: "Cel mai bun balayage pe care l-am avut vreodată. Recomand cu toată încrederea pentru profesionalism.",
        author: "Maria Voinea",
        role: "Fashion Editor"
    }
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-[#F9F8F6] border-t border-[#E5E0DC]">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <span className="text-caption text-[#C2A88F] mb-4 block">Recenzii</span>
                    <h2 className="text-4xl md:text-5xl font-display text-[#1A1512]">Vochile Clienților</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="flex flex-col text-center md:text-left"
                        >
                            <div className="text-5xl text-[#C2A88F] font-serif mb-6 opacity-30">“</div>
                            <p className="text-lg md:text-xl text-[#1A1512] font-display leading-relaxed mb-8">
                                {t.quote}
                            </p>
                            <div className="mt-auto">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-[#1A1512]">{t.author}</h4>
                                <p className="text-xs text-[#6B635F] mt-1">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
