import React from 'react';

const Contact: React.FC = () => {
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
      <h2>Contact Us</h2>
      <p>Get in touch with us for your music production needs.</p>
      {/* Add contact form or details here */}
    </div>
  );
};

export default Contact;
