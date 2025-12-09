import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from "./components/About";
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Blog from './components/Blog';
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Blog/>
        <Contact />
      </main>
      <Footer/>
    </>
  )
}

export default App;