import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar.jsx';
import Nav from './components/Nav/Nav.jsx';
import Section from './components/Section/Section.jsx';
import Aside from './components/Aside/Aside.js';
import Skills from './components/Skills/Skills.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Nav />
      <Section />
      <Skills />
      <Aside />
      <Footer />

    </div>
  );
}

export default App;
