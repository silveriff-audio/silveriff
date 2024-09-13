// Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-2xl font-semibold text-white">My Website Logo</Link>
        </div>
        <nav className="space-x-4">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/projects" className="text-white hover:underline">Projects</Link>
          <Link to="/service" className="text-white hover:underline">Service</Link>
          <Link to="/contact" className="text-white hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;