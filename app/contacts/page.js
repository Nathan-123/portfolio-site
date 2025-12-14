"use client";

import { useState } from "react";
import{Mail} from "@deemlol/next-icons"; 
import{MapPin} from "@deemlol/next-icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  }); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(
            'Hi Nathan,\n\n' +
            'You have a new message from your portfolio contact form:\n\n' +
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );
        window.location.href = `mailto:nathantadams@hotmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="contact-page">
            <h2>Reach Out!</h2>
            <p className="contact-intro">
                I'm currently open to new opportunities and collaborations! 
                Whether you have a project in mind, have a question, or just want to say hi, I will do my best to get back to you as soon as possible!
            </p>

            <div className ="contact-content">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            placeholder="Your Name"
                            value={formData.name} 
                            onChange={handleChange} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            placeholder="youremail@examplemail.com"
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="5" 
                            required 
                            placeholder="Hello! I would like to talk about..."
                            value={formData.message} 
                            onChange={handleChange} 
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>

                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <div className="info-item">
                        <Mail size={24} color="#299f29"/>
                        <p>nathantadams@hotmail.com</p>
                    </div>
                    <div className="info-item">
                        <MapPin size={24} color="#299f29"/>
                        <p>Based in Seattle, WA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
