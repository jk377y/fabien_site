import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

