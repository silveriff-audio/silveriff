import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const worker_url = 'https://r2-worker.simonewangmusic.workers.dev/ldr-s3';

const desc_2 = 'Love, Death & Robots is an animated anthology series produced by\
Netflix, with Tim Miller and David Fincher serving as executive\
producers since its debut in 2019. Our composer had the privilege of\
contributing music composition, synthesizer, and orchestration to the\
series. Season 3 continues this critically acclaimed anthology, featuring\
episodes that showcase unique animation styles and a diverse range of\
narratives, from dark humor to thought-provoking themes. The series\
has received numerous awards and nominations, including but not\
limited to:Annie Award for Outstanding Achievement for Music in an\
Animated Television/Broadcast Production; Emmy Award for\
Outstanding Individual Achievement In Animaon,Juried; Outstanding\
Short From Animated Program.'

const desc_5 = 'The Bachelor is an acclaimed reality television series produced by ABC,\
a leading network in the United States and a subsidiary of The Walt\
Disney Company. Our composer has crafted the music for the entire\
series of The Bachelor in Paradise, Season 9. With multiple seasons and\
spin-offs, including The Bachelor in Paradise, the franchise has\
garnered prestigious awards, including the Young Hollywood Award for\
Reality Royalty and nominations at the MTV Movie & TV Awards and\
the Teen Choice Awards'

const projectVideos: Record<string, { videoUrl: string, description: string }> = {
  'project-1': { videoUrl: 'https://your-worker-url/video1.mp4', description: 'Description for Project 1' },
  'project-2': { videoUrl: `${worker_url}/LDR2.mov`, description: desc_2 },
  'project-3': { videoUrl: 'https://your-worker-url/video3.mp4', description: 'Description for Project 3' },
  'project-4': { videoUrl: 'https://your-worker-url/video4.mp4', description: 'Description for Project 4' },
  'project-5': { videoUrl: `${worker_url}/LDR5.mov`, description: desc_5 },
  'project-6': { videoUrl: 'https://your-worker-url/video6.mp4', description: 'Description for Project 6' },
};

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug || !projectVideos[slug]) {
      setError("Project not found!");
      return;
    }

    // Directly use the video URL from projectVideos
    const video = projectVideos[slug];
    setVideoUrl(video.videoUrl);
  }, [slug]);

  if (error) {
    return <div className="text-white">{error}</div>;
  }

  const project = slug && projectVideos[slug] ? projectVideos[slug] : null;

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">{slug}</h1>
        {videoUrl ? (
          <video className="w-full mb-4" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading video...</p>
        )}
        {project && <p>{project.description}</p>}
      </div>
    </div>
  );
};

export default ProjectDetail;
