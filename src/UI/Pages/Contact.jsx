import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: ''
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
  
    // Log the form data to check if fields are updating correctly
    console.log('Form Data before sending:', formData);
  
    // Structure the email parameters
    const emailParams = {
        name: formData.user_name,
        email: formData.user_email,
        message: formData.user_message
    };
  
    // Ensure the form data is correctly structured for EmailJS
    emailjs
      .send('service_gzi0mnc', 'template_i1ys5wg', emailParams, 'Bd9DrMKN3xYbRF1lK')
      .then((response) => {
        console.log('EmailJS Response:', response);
        console.log('SUCCESS!', response.status, response.text);
        setStatusMessage('Message sent successfully!');
        setFormData({ user_name: '', user_email: '', user_message: '' }); // Clear form
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatusMessage('Failed to send message. Please try again.');
      })
      .finally(() => {
        setLoading(false); // Stop loading
        setTimeout(() => setStatusMessage(''), 3000); // Clear message after 3 seconds
      });
  };
  

  return (
    <div>
      <div className="container mx-auto p-6 lg:w-1/2 lora-regular">
        <h1 className="text-2xl font-bold lg:text-3xl lg:font-bold text-center">Contact Us</h1>
        <form onSubmit={handleSubmit} className="mt-6 lg:mt-10 lg:mb-10 mb-6 text-center">
          {/* Name Input */}
          <input 
            type="text" 
            name="user_name" 
            className="input input-bordered sm:w-full lg:w-96 w-full" 
            placeholder="Name" 
            onChange={handleInputChange} 
            value={formData.user_name} 
            required 
          />
          
          {/* Email Input */}
          <input 
            type="email" 
            name="user_email" 
            className="input input-bordered mt-10 lg:mt-10 sm:w-full lg:w-96 w-full" 
            placeholder="Email" 
            onChange={handleInputChange} 
            value={formData.user_email} 
            required 
          />
          
          {/* Message Input */}
          <textarea 
            name="user_message" 
            className="textarea textarea-bordered mt-10 lg:mt-10 sm:w-full lg:w-96 w-full" 
            placeholder="Message" 
            onChange={handleInputChange} 
            value={formData.user_message} 
            required 
          />
          
          {/* Submit Button */}
          <button 
            type="submit" 
            className="btn btn-success mt-10 lg:mt-10 sm:w-full lg:w-96 w-3/6" 
            style={{ color: 'white' }} 
            disabled={loading} // Disable button during loading
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

        {/* Status Message */}
        {statusMessage && <p className="text-center">{statusMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;
