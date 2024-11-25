// Contact.jsx
import React from 'react';

const styles = {
  contactSection: {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: 'auto',
    textAlign: 'center',
  },
  contactHeader: {
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
  contactContent: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '20px',
    marginTop: '40px',
  },
  contactCard: {
    width: '100%',
    maxWidth: '350px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
  },
  contactImage: {
    width: '100%',
    height: 'auto',
  },
  contactText: {
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '20px',
    input: {
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '1rem',
    },
    textarea: {
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      resize: 'vertical',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: '1rem',
      cursor: 'pointer',
    },
  },
};

const Contact = () => {
  return (
    <div style={styles.contactSection}>
      <div style={styles.contactHeader}>
        <h1 style={styles.contactHeader.h1}>Contact Us</h1>
        <p style={styles.contactHeader.p}> We love to hear from you! Reach out with any questions or inquiries.</p>
      </div>

      <div style={styles.contactContent}>
        <div style={styles.contactCard}>
          <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"} alt="Contact Office" style={styles.contactImage} />
          <div style={styles.contactText}>
            <h2 style={styles.contactText.h2}>Our Office</h2>
            <p style={styles.contactText.p}>123 Real Estate Ave, Suite 456, City, State, ZIP</p>
            <p style={styles.contactText.p}>Phone: (123) 456-7890</p>
            <p style={styles.contactText.p}>Email: contact@realestate.com</p>
          </div>
        </div>

        <div style={styles.contactCard}>
          <img src={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"} alt="Map Location" style={styles.contactImage} />
          <div style={styles.contactText}>
            <h2 style={styles.contactText.h2}>Our Location</h2>
            <p style={styles.contactText.p}>Find us on the map and visit our office for a consultation.</p>
          </div>
        </div>

        <div style={styles.contactCard}>
          <div style={styles.contactText}>
            <h2 style={styles.contactText.h2}>Send Us a Message</h2>
            <form style={styles.form}>
              <input type="text" placeholder="Your Name" style={styles.form.input} />
              <input type="email" placeholder="Your Email" style={styles.form.input} />
              <textarea rows="5" placeholder="Your Message" style={styles.form.textarea}></textarea>
              <button type="submit" style={styles.form.button}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
