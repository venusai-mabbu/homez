// Agent.jsx
import React from 'react';

const styles = {
  agentSection: {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: 'auto',
    textAlign: 'center',
  },
  agentHeader: {
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
  agentContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '20px',
    marginTop: '40px',
  },
  agentCard: {
    width: '100%',
    maxWidth: '350px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'left',
  },
  agentImage: {
    width: '100%',
    height: 'auto',
  },
  agentText: {
    padding: '20px',
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
    contact: {
      fontWeight: 'bold',
    },
  },
};

const Agent = () => {
  return (
    <div style={styles.agentSection}>
      <div style={styles.agentHeader}>
        <h1 style={styles.agentHeader.h1}>Meet Our Agents</h1>
        <p style={styles.agentHeader.p}>Professional, Experienced, and Ready to Help You</p>
      </div>

      <div style={styles.agentContent}>
        <div style={styles.agentCard}>
          <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"} alt="Agent 1" style={styles.agentImage} />
          <div style={styles.agentText}>
            <h2 style={styles.agentText.h2}>Agent Name 1</h2>
            <p style={styles.agentText.p}>With over 10 years of experience in residential and commercial properties, Agent Name 1 is a seasoned expert in the real estate market.</p>
            <p style={{ ...styles.agentText.p, ...styles.agentText.contact }}>Phone: (123) 456-7891</p>
            <p style={{ ...styles.agentText.p, ...styles.agentText.contact }}>Email: agent1@realestate.com</p>
          </div>
        </div>

        <div style={styles.agentCard}>
          <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"} alt="Agent 2" style={styles.agentImage} />
          <div style={styles.agentText}>
            <h2 style={styles.agentText.h2}>Agent Name 2</h2>
            <p style={styles.agentText.p}>A dedicated agent specializing in luxury homes, Agent Name 2 is known for her commitment to client satisfaction.</p>
            <p style={{ ...styles.agentText.p, ...styles.agentText.contact }}>Phone: (123) 456-7892</p>
            <p style={{ ...styles.agentText.p, ...styles.agentText.contact }}>Email: agent2@realestate.com</p>
          </div>
        </div>

        <div style={styles.agentCard}>
          <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"} alt="Agent 3" style={styles.agentImage} />
          <div style={styles.agentText}>
            <h2 style={styles.agentText.h2}>Agent Name 3</h2>
            <p style={styles.agentText.p}>Agent Name 3 brings a unique approach to real estate, making him a go-to resource for both first-time buyers and seasoned investors.</p>
            <p style={{ ...styles.agentText.p, ...styles.agentText.contact }}>Phone: (123) 456-7893</p>
            <p style={{ ...styles.agentText.p, ...styles.agentText.contact }}>Email: agent3@realestate.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
