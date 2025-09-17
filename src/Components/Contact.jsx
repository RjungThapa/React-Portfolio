import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img src="/email.png" alt="email" className="icon contact-icon email-icon" />
                    <p><a href="mailto:rjungthapa064@gmail.com">rjungthapa064@gmail.com</a></p>
                </div>
                <div className="contact-info-container">
                    <img src="/linkedin.png" alt="linkedin" className="icon contact-icon" />
                    <p><a href="https://www.linkedin.com/in/rjung-thapa">LinkedIn</a></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
