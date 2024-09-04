import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Service from './components/Service';
import Contact from './components/Contact';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ minHeight: '100vh', minWidth: '100vw', display: 'flex', flexDirection: 'column' }}>
        <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff', display: 'absolute', justifyContent: 'center' }}>
          <Link to="/" className="logo">Home</Link>
          <Link to="/projects" className="logo">Projects</Link>
          <Link to="/service" className="logo">Service</Link>
          <Link to="/contact" className="logo">Contact</Link>
        </nav>
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
