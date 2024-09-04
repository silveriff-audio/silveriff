import React from 'react';

const Projects: React.FC = () => {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: '#fff',
    }}>
      <h2>Our Projects</h2>
      <p>Explore our portfolio of music production projects.</p>
    </div>
  );
};

export default Projects;
