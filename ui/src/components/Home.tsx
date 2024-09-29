import React from 'react';
import '../styles/App.css';

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black text-white overflow-y-auto custom-scroll">
      {/* Video Section */}
      <div className="relative w-full h-[80vh]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/landing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Floating Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-widest">SCORING MUSIC</h1>
          <h2 className="text-4xl md:text-6xl font-bold tracking-widest">SCULPTING STORY</h2>
        </div>
        
        {/* Overlay to darken the video */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-5"></div>
      </div>

      {/* About Us Section */}
      <div className="w-full py-12 bg-black text-white text-center">
        <h2 className="text-4xl font-semibold mb-4">ABOUT US</h2>
        <p className="max-w-2xl mx-auto text-lg px-4">
          Silveriff is a music studio specializing in composition and scoring services, dedicated to providing high-quality music creation for games and film projects. We combine deep professional knowledge with innovative musical concepts to offer customized music solutions that meet a variety of client needs.
        </p>
      </div>

      {/* Cover-Screen Thumbnail Section */}
      <div className="relative w-full h-[60vh]">
        <img
          src="/thumbnail.png"
          alt="Cover Thumbnail"
          className="absolute top-0 left-0 w-full h-48 object-cover"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-40 z-5"></div>
        
        <div className="absolute inset-0 top-[30%] flex justify-center items-center z-10">
          <h2 className="text-5xl font-semibold tracking-widest">PROJECT HIGHLIGHT</h2>
        </div>
      </div>


      {/* Project Highlight Section */}
      <div className="w-full py-12 bg-black text-white">

        {/* Project Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">

          <div className="relative">
            <img
              src="/project1.jpg"
              alt="Project 1"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="relative">
            <img
              src="/project2.jpg"
              alt="Project 2"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="relative">
            <img
              src="/project.png"
              alt="Project 3"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="relative">
            <img
              src="/project-4.jpg"
              alt="Project 4"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="relative">
            <img
              src="/project-5.jpg"
              alt="Project 5"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="relative">
            <img
              src="/project-6.jpg"
              alt="Project 6"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="relative">
            <img
              src="/project-7.jpg"
              alt="Project 7"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="relative">
            <img
              src="/project-8.jpg"
              alt="Project 8"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="relative">
            <img
              src="/project-9.jpg"
              alt="Project 9"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
