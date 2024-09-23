import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      {/* Filters Section */}
      <div className="container mx-auto mb-8">
        <ul className="flex justify-center space-x-8 text-lg font-semibold">
          <li className="cursor-pointer hover:underline">All</li>
          <li className="cursor-pointer hover:underline">Game</li>
          <li className="cursor-pointer hover:underline">Film/TV</li>
          <li className="cursor-pointer hover:underline">Commercials</li>
        </ul>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="border border-gray-700 p-4">
          <h3 className="text-xl text-green-500 mb-2">Project Name</h3>
          <p className="text-green-500 mb-4">Project Details</p>
          <img
            src="/path-to-image1.jpg"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Project 2 */}
        <div className="border border-gray-700 p-4">
          <h3 className="text-xl text-green-500 mb-2">Project Name</h3>
          <p className="text-green-500 mb-4">Project Details</p>
          <img
            src="/path-to-image2.jpg"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Project 3 */}
        <div className="border border-gray-700 p-4">
          <h3 className="text-xl text-green-500 mb-2">Project Name</h3>
          <p className="text-green-500 mb-4">Project Details</p>
          <img
            src="/path-to-image3.jpg"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Project 4 */}
        <div className="border border-gray-700 p-4">
          <h3 className="text-xl text-green-500 mb-2">Project Name</h3>
          <p className="text-green-500 mb-4">Project Details</p>
          <img
            src="/path-to-image4.jpg"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Project 5 */}
        <div className="border border-gray-700 p-4">
          <h3 className="text-xl text-green-500 mb-2">Project Name</h3>
          <p className="text-green-500 mb-4">Project Details</p>
          <img
            src="/path-to-image5.jpg"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Project 6 */}
        <div className="border border-gray-700 p-4">
          <h3 className="text-xl text-green-500 mb-2">Project Name</h3>
          <p className="text-green-500 mb-4">Project Details</p>
          <img
            src="/path-to-image6.jpg"
            alt="Project Thumbnail"
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
