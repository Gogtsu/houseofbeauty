import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Concept', href: '#about' },
        { name: 'Servicii', href: '#services' },
        { name: 'Galerie', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-[#F9F8F6]/90 backdrop-blur-md py-4 border-b border-[#E5E0DC]/50'
                : 'bg-transparent py-8'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo Text/Image */}
                <a href="#" className="relative z-50">
                    <img
                        src="/logo.png"
                        alt="House of Beauty"
                        className={`h-12 w-auto transition-all duration-300 ${isMobileMenuOpen
                                ? ''
                                : (isScrolled ? '' : 'brightness-0 invert')
                            }`}
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-xs uppercase tracking-widest transition-all duration-300 hover:opacity-100 ${isScrolled ? 'text-[#1A1512] opacity-70' : 'text-[#F9F8F6] opacity-80'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className={`px-8 py-3 text-xs uppercase tracking-widest border transition-all duration-300 ${isScrolled
                            ? 'border-[#1A1512] text-[#1A1512] hover:bg-[#1A1512] hover:text-white'
                            : 'border-[#F9F8F6] text-[#F9F8F6] hover:bg-[#F9F8F6] hover:text-[#1A1512]'
                            }`}
                    >
                        Programează-te
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`md:hidden relative z-50 ${isMobileMenuOpen ? 'text-[#1A1512]' : (isScrolled ? 'text-[#1A1512]' : 'text-[#F9F8F6]')}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Fullscreen Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-[#F9F8F6] z-40 flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="font-display text-4xl text-[#1A1512] hover:text-[#C2A88F] transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="w-12 h-[1px] bg-[#E5E0DC] my-4"></div>
                            <a
                                href="#contact"
                                className="text-sm uppercase tracking-widest text-[#1A1512]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Programează-te
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
