// Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">
            <a href="tel:+8616628718335" className="text-white hover:underline">(+86)16628718335</a>
          </div>
          <div>
            <Link to="/" className="text-2xl font-semibold text-white">My Website Logo</Link>
          </div>
        </div>
        <div>
          <a href="https://www.instagram.com" className="mr-4 text-white hover:underline">Instagram</a>
          <a href="https://www.linkedin.com" className="mr-4 text-white hover:underline">LinkedIn</a>
          <a href="mailto:contact@silveriff.com" className="text-white hover:underline">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;