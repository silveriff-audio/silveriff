import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center justify-start">
          <NavLink to="/" className="text-2xl font-semibold text-white">
            <img src="/silveriff.png" alt="Silveriff Logo" className="w-40" style={{ marginLeft: -30, marginTop: 8 }} />
          </NavLink>
        </div>
        
        <nav className="flex bg-black space-x-12 justify-end items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'bg-gray-600 text-yellow-500 px-4 py-2 rounded underline uppercase' : 'text-white hover:underline uppercase'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'bg-gray-600 text-yellow-500 px-4 py-2 rounded underline uppercase' : 'text-white hover:underline uppercase'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              isActive ? 'bg-gray-600 text-yellow-500 px-4 py-2 rounded underline uppercase' : 'text-white hover:underline uppercase'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'bg-gray-600 text-yellow-500 px-4 py-2 rounded underline uppercase' : 'text-white hover:underline uppercase'
            }
          >
            Contact Us
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;