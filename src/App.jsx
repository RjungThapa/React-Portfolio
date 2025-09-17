import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ParticleCanvas from './Components/ParticleCanvas';
import './style.css';
import './mediaquery.css';


function App() {
    return (
        <>
            <ParticleCanvas />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <main style={{ position: 'relative', zIndex: 1 }}></main>
        </>
    );
}

export default App;
