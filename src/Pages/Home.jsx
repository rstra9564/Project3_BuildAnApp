import React from "react";
import { Link } from "react-router-dom";
import '../Home.css';

const backgroundImageUrl = './images/wrkhrdbg.png';
const styles = {
  container: {
    height: '100vh',
    width: '100%',
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.7)',
    padding: '2rem',
    textAlign: 'center'
  },
  heading: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  subheading: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    maxWidth: '600px'
  },
  ctaContainer: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
};

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to WRKHRD</h1>
      <p style={styles.subheading}>
        Gear up for greatness. High-performance apparel built for strength, sweat, and style.
      </p>

      <div style={styles.ctaContainer}>
      <Link to="/gear" className="cta-button">Shop Gear</Link>
      <Link to="/accessories" className="cta-button">Shop Accessories</Link>
      <Link to="/contact" className="cta-button">Contact us</Link>
      </div>
    </div>
  );
}

export default Home;