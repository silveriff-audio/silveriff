import React from 'react';

const Home: React.FC = () => {
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
      <h1>Welcome to Silveriff</h1>
      <p>Your go-to place for professional music production services.</p>
    </div>
  );
};

export default Home;
