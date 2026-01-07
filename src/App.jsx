import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <WhyUs />
                <Testimonials />
                <Gallery />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
