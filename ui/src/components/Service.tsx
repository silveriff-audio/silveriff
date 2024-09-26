import React from 'react';

const Service: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center p-10">
      
      {/* Header */}
      <h1 className="text-5xl font-bold mb-10">Our Services</h1>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        
        {/* Scoring for Media Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Scoring for Media</h2>
          <ul className="space-y-2 ml-4">
            <li>• Game</li>
            <li>• Film</li>
            <li>• TV</li>
            <li>• Advertisement</li>
            <li>• Sonic Branding</li>
          </ul>
        </div>

        {/* Music Production Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Music Production</h2>
          <ul className="space-y-2 ml-4">
            <li>• Songwriting</li>
            <li>• Arranging</li>
            <li>• Recording</li>
            <li>• Mixing</li>
            <li>• Mastering</li>
          </ul>
        </div>

        {/* Immersive Audio Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Immersive Audio</h2>
          <ul className="space-y-2 ml-4">
            <li>• Ambisonic Recording</li>
            <li>• Spatial Audio Installation</li>
            <li>• VR 3D Audio Visual Implementation</li>
            <li>• Dolby Atmos</li>
          </ul>
        </div>

        {/* Sound Design Section */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Sound Design</h2>
          <ul className="space-y-2 ml-4">
            <li>• Game</li>
            <li>• Film</li>
            <li>• TV</li>
            <li>• Advertisement</li>
            <li>• Sonic Branding</li>
          </ul>
        </div>
      </div>

      {/* ProTools Section */}
      <div className="mt-10 w-full max-w-6xl">
        <h2 className="text-3xl font-semibold mb-4">ProTools</h2>
        <p className="text-lg ml-4">
          We use industry-standard tools such as ProTools for our recording and editing processes. With advanced features, it ensures high-quality results.
        </p>
      </div>
    </div>
  );
};

export default Service;
