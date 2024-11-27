import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/contact.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

   
    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, []);

   
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        
       
        const mailtoLink = `mailto:admin@asinternational.org.in?subject=Message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;

      
        window.location.href = mailtoLink;

      
        alert('Your message has been sent successfully!');

       
        setFormData({ name: '', email: '', message: '' });
    }, [formData]);

    return (
        <div className="contact_main">
            <div className="contact-us-container">
             
                <div className="contact-form">
                    <h2 className="section-title">Contact Us</h2>
                    <form action = "" method = "POST" className="form" onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                className="input-field"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                className="input-field"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Message:
                            <textarea
                                name="message"
                                className="textarea-field"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </label>
                        <button type="submit" className="submit-button">
                            Send Message
                        </button>
                    </form>
                </div>

              
                <div className="get-in-touch">
                    <h2 className="section-title">Get in Touch</h2>
                    <p><strong>Address:</strong> SAMNATH, Samantbhai Nanji Marg, near children jail, Dongri, Mumbai, Maharashtra 400009</p>
                    <p><strong>Phone:</strong> +91 9769456956</p>
                    <p><strong>Email:</strong> admin@asinternational.org.in</p>
                    <div className="social-icons">
                        <Link to="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link to="#" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </div>
                    <Link
                        to="https://wa.me/919769456956"
                        className="whatsapp-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-whatsapp"></i> WhatsApp
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
