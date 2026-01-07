import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Heart, Users } from 'lucide-react';

const reasons = [
    {
        icon: <Users size={28} />,
        title: "Profesioniști cu Experiență",
        description: "Echipa noastră este formată din specialiști dedicați, cu ani de practică și perfecționare continuă."
    },
    {
        icon: <Star size={28} />,
        title: "Produse Premium",
        description: "Folosim exclusiv branduri de top recunoscute internațional pentru a garanta calitatea și siguranța rezultatelor."
    },
    {
        icon: <Heart size={28} />,
        title: "Atmosferă Calmă",
        description: "Un sanctuar de liniște în mijlocul orașului, unde te poți deconecta și relaxa complet."
    },
    {
        icon: <ShieldCheck size={28} />,
        title: "Abordare Personalizată",
        description: "Fiecare client este unic. Îți ascultăm dorințele și adaptăm serviciile pentru a ți se potrivi perfect."
    }
];

export default function WhyUs() {
    return (
        <section className="py-20 bg-[#2C2420] text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center md:text-left"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#BFA588]/10 text-[#BFA588] mb-6">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-serif text-[#F5F0EB] mb-4">
                                {reason.title}
                            </h3>
                            <p className="text-[#D7Cdc4] text-sm leading-relaxed opacity-80 font-light">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
