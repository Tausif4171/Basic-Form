import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        currentCompany: '',
        currentDesignation: '',
        reasonToContact: '',
    });

    console.log({ formData })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            margin: '0px auto'
        }}>


            <div className="contact-form">
                <form onSubmit={handleSubmit} style={{ display: 'block' }}>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="currentCompany">Current Company:</label>
                        <input
                            type="text"
                            id="currentCompany"
                            name="currentCompany"
                            value={formData.currentCompany}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="currentDesignation">Current Designation:</label>
                        <input
                            type="text"
                            id="currentDesignation"
                            name="currentDesignation"
                            value={formData.currentDesignation}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="reasonToContact">Why do you want to contact us?</label>
                        <textarea
                            id="reasonToContact"
                            name="reasonToContact"
                            value={formData.reasonToContact}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type="submit" style={{ backgroundColor: "#212DD4", width: '100%' }}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
