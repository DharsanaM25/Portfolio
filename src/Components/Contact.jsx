import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './Contact.css'; // Ensure the styling file exists

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data for EmailJS
    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Use EmailJS to send the email
    emailjs.send(
      'service_rmsboxm', // Replace with your EmailJS Service ID
      'template_uzlvrdf', // Replace with your EmailJS Template ID
      templateParams,
      '6DKXnx1WGCfmdyXx4' // Replace with your EmailJS User ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Thank you for your message!');
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Oops! Something went wrong. Please try again.');
    });

    // Clear the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
