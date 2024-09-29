import React from 'react';
import { useParams } from 'react-router-dom';

// Example video links and project data
const projectVideos: Record<number, { videoUrl: string, description: string }> = {
  1: { videoUrl: '/path-to-video1.mp4', description: 'Description for Project 1' },
  2: { videoUrl: '/path-to-video2.mp4', description: 'Description for Project 2' },
  3: { videoUrl: '/path-to-video3.mp4', description: 'Description for Project 3' },
  4: { videoUrl: '/path-to-video4.mp4', description: 'Description for Project 4' },
  5: { videoUrl: '/path-to-video5.mp4', description: 'Description for Project 5' },
  6: { videoUrl: '/path-to-video6.mp4', description: 'Description for Project 6' },
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();  // Get project ID from URL params
  const projectId = Number(id);

  const project = projectVideos[projectId];

  if (!project) {
    return <div className="text-white">Project not found!</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Project {id}</h1>
        <video className="w-full mb-4" controls>
          <source src={project.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;