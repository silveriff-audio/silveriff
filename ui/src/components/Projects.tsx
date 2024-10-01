import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: number;
  name: string;
  slug: string;
  details: string;
  image: string;
  category: 'game' | 'film-tv' | 'commercials';
}

const Projects: React.FC = () => {
  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'game' | 'film-tv' | 'commercials'>('all');
  const navigate = useNavigate();  // Use this to navigate programmatically

  useEffect(() => {
    document.title = 'Portfolio | silveriff audio';
  }, []);

  // Example project data
  const projectData: Project[] = [
    { id: 1, name: 'Project 1', slug: 'project-1', details: 'Details of Project 1', image: '/path-to-image1.jpg', category: 'game' },
    { id: 2, name: 'Project 2', slug: 'project-2', details: 'Details of Project 2', image: '/path-to-image2.jpg', category: 'film-tv' },
    { id: 3, name: 'Project 3', slug: 'project-3', details: 'Details of Project 3', image: '/path-to-image3.jpg', category: 'commercials' },
    { id: 4, name: 'Project 4', slug: 'project-4', details: 'Details of Project 4', image: '/path-to-image4.jpg', category: 'game' },
    { id: 5, name: 'Project 5', slug: 'project-5', details: 'Details of Project 5', image: '/path-to-image5.jpg', category: 'film-tv' },
    { id: 6, name: 'Project 6', slug: 'project-6', details: 'Details of Project 6', image: '/path-to-image6.jpg', category: 'commercials' },
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all'
    ? projectData
    : projectData.filter(project => project.category === selectedCategory);

  const handleProjectClick = (slug: string) => {
    navigate(`/project/${slug}`);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      {/* Filters Section */}
      <div className="container mx-auto mb-8">
        <ul className="flex justify-center space-x-8 text-lg font-semibold">
          <li
            className={`cursor-pointer hover:underline ${selectedCategory === 'all' ? 'underline text-yellow-500' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </li>
          <li
            className={`cursor-pointer hover:underline ${selectedCategory === 'game' ? 'underline text-yellow-500' : ''}`}
            onClick={() => setSelectedCategory('game')}
          >
            Game
          </li>
          <li
            className={`cursor-pointer hover:underline ${selectedCategory === 'film-tv' ? 'underline text-yellow-500' : ''}`}
            onClick={() => setSelectedCategory('film-tv')}
          >
            Film/TV
          </li>
          <li
            className={`cursor-pointer hover:underline ${selectedCategory === 'commercials' ? 'underline text-yellow-500' : ''}`}
            onClick={() => setSelectedCategory('commercials')}
          >
            Commercials
          </li>
        </ul>
      </div>

      {/* Project Grid */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="border border-gray-700 p-4 cursor-pointer"
            onClick={() => handleProjectClick(project.slug)}
          >
            <h3 className="text-xl text-green-500 mb-2">{project.name}</h3>
            <p className="text-green-500 mb-4">{project.details}</p>
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
