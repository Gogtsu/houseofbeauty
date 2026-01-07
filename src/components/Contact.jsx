import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-[#2C2420] text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <div>
                        <span className="text-[#BFA588] uppercase tracking-widest text-sm font-semibold mb-4 block">
                            Contactează-ne
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#F5F0EB] mb-8 leading-tight">
                            Programează o vizită la House of Beauty
                        </h2>
                        <p className="text-[#D7Cdc4]/80 mb-12 max-w-md font-light">
                            Suntem aici pentru a-ți oferi sfaturi și programări. Nu ezita să ne contactezi pentru orice întrebare.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-[#BFA588] mt-1 shrink-0" size={24} />
                                <div>
                                    <h4 className="font-serif text-lg mb-1">Adresă</h4>
                                    <p className="text-[#D7Cdc4]/80 font-light">Strada Primăverii nr. 20, București</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="text-[#BFA588] mt-1 shrink-0" size={24} />
                                <div>
                                    <h4 className="font-serif text-lg mb-1">Telefon</h4>
                                    <p className="text-[#D7Cdc4]/80 font-light">+40 722 123 456</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="text-[#BFA588] mt-1 shrink-0" size={24} />
                                <div>
                                    <h4 className="font-serif text-lg mb-1">Email</h4>
                                    <p className="text-[#D7Cdc4]/80 font-light">contact@houseofbeauty.ro</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="text-[#BFA588] mt-1 shrink-0" size={24} />
                                <div>
                                    <h4 className="font-serif text-lg mb-1">Program</h4>
                                    <p className="text-[#D7Cdc4]/80 font-light">Luni - Vineri: 10:00 - 20:00</p>
                                    <p className="text-[#D7Cdc4]/80 font-light">Sâmbătă: 09:00 - 18:00</p>
                                    <p className="text-[#D7Cdc4]/80 font-light">Duminică: Închis</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 p-2 rounded-sm h-[400px] lg:h-auto overflow-hidden relative grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {/* Map Placeholder */}
                        <div className="w-full h-full bg-[#3a312d] flex items-center justify-center">
                            <span className="text-[#D7Cdc4]/30 uppercase tracking-widest">Google Maps Integration</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
