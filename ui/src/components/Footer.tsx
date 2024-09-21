import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Contact Information */}
        <div className="flex flex-col text-left">
          <p className="mb-2">Phone: <a href="tel:+8616628718335" className="hover:underline">(+86) 166 2871 8335</a></p>
          <p>Email: <a href="mailto:contact@silveriff.com" className="hover:underline">contact@silveriff.com</a></p>
        </div>

        {/* Right Section: Logo */}
        <div className="text-center">
          <a href="/" className="text-2xl font-semibold hover:underline" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/silveriff.png" alt="Silveriff Logo" className="h-12 mx-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;