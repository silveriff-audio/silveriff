import React from 'react';

const Service: React.FC = () => {
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
      <h2>Our Services</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>• Music Production</li>
        <li>• Sound Design</li>
        <li>• Mixing and Mastering</li>
        <li>• Audio Post-Production</li>
      </ul>
    </div>
  );
};

export default Service;
