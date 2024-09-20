import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-semibold text-white">
            <img src="/silveriff.png" alt="Silveriff Logo" className="h-48 ml-0 pl-0 mr-4" />
          </Link>
        </div>
        
        <nav className="flex bg-black space-x-12 justify-end items-center">
          <Link to="/" className="text-white hover:underline uppercase">Home</Link>
          <Link to="/projects" className="text-white hover:underline uppercase">Projects</Link>
          <Link to="/service" className="text-white hover:underline uppercase">About</Link>
          <Link to="/contact" className="text-white hover:bg-gray-600 px-4 py-2 rounded uppercase">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;