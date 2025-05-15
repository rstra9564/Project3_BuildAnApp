import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Gear from './Pages/Gear';
import Accessories from './Pages/Accessories';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gear" element={<Gear />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;