import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;