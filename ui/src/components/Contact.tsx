import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-[#E5DAC3] flex justify-center items-center px-8">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap">
        {/* Left section: Contact Info */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">CONTACT US</h2>
          <p className="text-lg mb-2">+1-8482562416</p>
          <p className="text-lg mb-6">+86-16628718335</p>
          <p className="text-lg">contact@silveriff.com</p>
        </div>

        {/* Right section: Contact Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border border-gray-600 bg-[#383838] text-[#E5DAC3] focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-3 border border-gray-600 bg-[#383838] text-[#E5DAC3] focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email *"
              className="p-3 border border-red-500 bg-[#383838] text-[#E5DAC3] focus:outline-none col-span-2"
            />
          </div>
          <textarea
            placeholder="Message"
            className="p-3 h-32 border border-gray-600 bg-[#383838] text-[#E5DAC3] focus:outline-none mb-4"
          ></textarea>
          <button className="bg-[#E5DAC3] text-black py-3 px-6 font-semibold">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
