import { useState } from 'react';

const styles = {
  container: {
    backgroundColor: 'black',
    padding: '3rem 2rem',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto'
  },
  heading: {
    color: 'white',
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontWeight: 'bold'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '2rem',
  },
  input: {
    padding: '0.75rem',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto'
  },
  button: {
    padding: '0.75rem 2rem',
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1.1rem',
    cursor: 'pointer',
    marginTop: '1rem'
  },
  info: {
    marginTop: '3rem',
    fontSize: '1.2rem',
    color: '#555'
  },
  emailLink: {
    color: 'orange',
    textDecoration: 'none', // Optional: Remove underline
  }
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>

      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...styles.input, height: '150px' }}
          required
        />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>

      <div style={styles.info}>
        <p><strong>WRKHRD</strong></p>
        <p>Email: <a href="mailto:rileystrasser@gmail.com" style={styles.emailLink}>support@wrkhrd.com</a></p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>
    </div>
  );
}

export default Contact;