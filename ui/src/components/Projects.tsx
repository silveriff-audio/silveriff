import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: number;
  name: string;
  slug: string;
  details: string;
  image: string;
  category: 'electronic' | 'folk-fusion' | 'orchestration' | 'pop' | 'game' | 'film-tv' | 'commercials';
}

const Projects: React.FC = () => {
  // State to track selected category and subcategory
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'music' | 'videos'>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Portfolio | silveriff audio';
  }, []);

  // Example project data
  const projectData: Project[] = [
    { id: 1, name: 'Project 1', slug: 'project-1', details: 'Details of Project 1', image: '/path-to-image1.jpg', category: 'game' },
    { id: 2, name: 'Project 2', slug: 'project-2', details: 'Details of Project 2', image: '/path-to-image2.jpg', category: 'film-tv' },
    { id: 3, name: 'Project 3', slug: 'project-3', details: 'Details of Project 3', image: '/path-to-image3.jpg', category: 'commercials' },
    { id: 4, name: 'Project 4', slug: 'project-4', details: 'Details of Project 4', image: '/path-to-image4.jpg', category: 'electronic' },
    { id: 5, name: 'Project 5', slug: 'project-5', details: 'Details of Project 5', image: '/path-to-image5.jpg', category: 'pop' },
    { id: 6, name: 'Project 6', slug: 'project-6', details: 'Details of Project 6', image: '/path-to-image6.jpg', category: 'folk-fusion' },
    { id: 7, name: 'Project 7', slug: 'project-7', details: 'Details of Project 7', image: '/path-to-image7.jpg', category: 'orchestration' },
  ];

  // Filter projects based on selected category and subcategory
  const filteredProjects = selectedCategory === 'all'
    ? projectData
    : selectedSubCategory
      ? projectData.filter(project => project.category === selectedSubCategory)
      : selectedCategory === 'music'
        ? projectData.filter(project => ['electronic', 'folk-fusion', 'orchestration', 'pop'].includes(project.category))
        : projectData.filter(project => ['game', 'film-tv', 'commercials'].includes(project.category));

  const handleProjectClick = (slug: string) => {
    navigate(`/project/${slug}`);
  };

  const handleCategoryClick = (category: 'all' | 'music' | 'videos') => {
    setSelectedCategory(category);
    setSelectedSubCategory(null); // Reset subcategory on category change
  };

  const handleSubCategoryClick = (subcategory: string) => {
    setSelectedSubCategory(subcategory);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      {/* Filters Section */}
      <div className="container mx-auto mb-8">
        <ul className="flex justify-center space-x-8 text-lg font-semibold">
          <li
            className={`cursor-pointer hover:underline ${selectedCategory === 'all' ? 'underline text-yellow-500' : ''}`}
            onClick={() => handleCategoryClick('all')}
          >
            All
          </li>
          <li
            className={`cursor-pointer hover:underline ${selectedCategory === 'music' ? 'underline text-yellow-500' : ''}`}
            onClick={() => handleCategoryClick('music')}
          >
            Music
          </li>
          <li
            className={`cursor-pointer hover:underline ${selectedCategory === 'videos' ? 'underline text-yellow-500' : ''}`}
            onClick={() => handleCategoryClick('videos')}
          >
            Videos
          </li>
        </ul>

        {/* Subcategories Section */}
        {selectedCategory === 'music' && (
          <ul className="flex justify-center space-x-8 mt-4 text-sm font-medium">
            <li
              className={`cursor-pointer hover:underline ${selectedSubCategory === 'electronic' ? 'underline text-yellow-500' : ''}`}
              onClick={() => handleSubCategoryClick('electronic')}
            >
              Electronic
            </li>
            <li
              className={`cursor-pointer hover:underline ${selectedSubCategory === 'folk-fusion' ? 'underline text-yellow-500' : ''}`}
              onClick={() => handleSubCategoryClick('folk-fusion')}
            >
              Folk/Fusion
            </li>
            <li
              className={`cursor-pointer hover:underline ${selectedSubCategory === 'orchestration' ? 'underline text-yellow-500' : ''}`}
              onClick={() => handleSubCategoryClick('orchestration')}
            >
              Orchestration
            </li>
            <li
              className={`cursor-pointer hover:underline ${selectedSubCategory === 'pop' ? 'underline text-yellow-500' : ''}`}
              onClick={() => handleSubCategoryClick('pop')}
            >
              Pop
            </li>
          </ul>
        )}

        {selectedCategory === 'videos' && (
          <ul className="flex justify-center space-x-8 mt-4 text-sm font-medium">
            <li
              className={`cursor-pointer hover:underline ${selectedSubCategory === 'game' ? 'underline text-yellow-500' : ''}`}
              onClick={() => handleSubCategoryClick('game')}
            >
              Game
            </li>
            <li
              className={`cursor-pointer hover:underline ${selectedSubCategory === 'film-tv' ? 'underline text-yellow-500' : ''}`}
              onClick={() => handleSubCategoryClick('film-tv')}
            >
              Film/TV
            </li>
            <li
              className={`cursor-pointer hover:underline ${selectedSubCategory === 'commercials' ? 'underline text-yellow-500' : ''}`}
              onClick={() => handleSubCategoryClick('commercials')}
            >
              Commercials
            </li>
          </ul>
        )}
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
