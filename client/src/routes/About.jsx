// About.jsx
import React from 'react';

const styles = {
  aboutSection: {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: 'auto',
    textAlign: 'center',
  },
  aboutHeader: {
    h1: {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '10px',
    },
    p: {
      fontSize: '1.2rem',
      color: '#666',
    },
  },
  aboutContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '20px',
    marginTop: '40px',
  },
  aboutCard: {
    width: '100%',
    maxWidth: '350px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s',
  },
  aboutImage: {
    width: '100%',
    height: 'auto',
  },
  aboutText: {
    padding: '20px',
    textAlign: 'left',
    h2: {
      fontSize: '1.5rem',
      color: '#333',
      marginBottom: '10px',
    },
    p: {
      fontSize: '1rem',
      color: '#555',
      lineHeight: '1.5',
    },
  },
};

const About = () => {
  return (
    <div style={styles.aboutSection}>
      <div style={styles.aboutHeader}>
        <h1 style={styles.aboutHeader.h1}>About Us</h1>
        <p style={styles.aboutHeader.p}>Your Trusted Real Estate Partner</p>
      </div>

      <div style={styles.aboutContent}>
        <div style={styles.aboutCard}>
          <img src={"https://assets-eu-01.kc-usercontent.com/faf6531c-2af4-0128-bed9-496b32f5822b/e5b0f367-5d06-4c19-b2f4-7845b9dd8c61/Old%20Course%20-%20Home%20End-min.jpg?w=1280&&fm=webp"} alt="Our Office" style={styles.aboutImage} />
          <div style={styles.aboutText}>
            <h2 style={styles.aboutText.h2}>Our Story</h2>
            <p style={styles.aboutText.p}>
              With years of experience in the industry, we are dedicated to helping clients find their dream homes or investment properties. Our commitment to excellence has made us a trusted name in real estate.
            </p>
          </div>
        </div>

        <div style={styles.aboutCard}>
          <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"} alt="Our Team" style={styles.aboutImage} />
          <div style={styles.aboutText}>
            <h2 style={styles.aboutText.h2}>Meet Our Team</h2>
            <p style={styles.aboutText.p}>
              Our team of professionals is passionate about providing the best service to our clients. We are here to guide you through every step of the real estate journey.
            </p>
          </div>
        </div>

        <div style={styles.aboutCard}>
          <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"} alt="Properties" style={styles.aboutImage} />
          <div style={styles.aboutText}>
            <h2 style={styles.aboutText.h2}>Our Properties</h2>
            <p style={styles.aboutText.p}>
              We offer a wide range of properties to meet the diverse needs of our clients. From residential to commercial spaces, we have options for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
