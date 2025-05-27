import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
const App = () => {
  return (
    <div className='App'>
      <Hero />
      <Timeline />
      <About />
      <Skills />
      <Projects />
      <Contact /> 
    </div>

  );
};

export default App;