import React from 'react';

function About() {
  const aboutContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#f4f4f4',
    minHeight: '50vh',
  };

  const aboutContentStyle = {
    maxWidth: '800px',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  const aboutTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1.5rem',
  };

  const aboutTextStyle = {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  };

  // Mobile responsive styles
  const mobileStyles = {
    '@media (max-width: 768px)': {
      fontSize: '2rem',
    },
  };

  return (
    <div style={aboutContainerStyle}>
      <div style={aboutContentStyle}>
        <h1 style={aboutTitleStyle}>About WRKHRD</h1>
        <p style={aboutTextStyle}>
          At WRKHRD, we believe in providing the best workout gear that combines style, comfort, and durability. Whether you're hitting the gym, going for a run, or just lounging, we've got you covered with high-quality activewear designed to perform as hard as you do.
        </p>
        <p style={aboutTextStyle}>
          Our mission is simple: to help you push your limits and look great doing it. We believe that when you feel good in your gear, you perform better. WRKHRD is for those who work hard, train hard, and hustle every day to reach their goals.
        </p>
      </div>
    </div>
  );
}

export default About;