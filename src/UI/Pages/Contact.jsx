import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import Footer from "../Components/Footer";
import Navbar from "../Components/Navabar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false); // State for loading spinner
  const [statusMessage, setStatusMessage] = useState(''); // State for status message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    emailjs.send('service_gzi0mnc', 'template_i1ys5wg', formData, 'Bd9DrMKN3xYbRF1lK')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatusMessage('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false); // Stop loading
        setTimeout(() => setStatusMessage(''), 3000); // Clear message after 3 seconds
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6 lg:w-1/2 lora-regular">
        <h1 className="text-2xl font-bold lg:text-3xl lg:font-bold text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        {statusMessage && <p className="text-center">{statusMessage}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
