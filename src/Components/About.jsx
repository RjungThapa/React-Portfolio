import React from 'react';

const About = () => {
    return (
        <section id="about">
            <p className="section__text__p1">Get to Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <img src="/about-pic.png" alt="Profile Pic" className="about-pic" />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img src="/skills.png" alt="experience icon" className="icon" />
                            <h3>Experience</h3>
                            <p>No experience <br />Student</p>
                        </div>
                        <div className="details-container">
                            <img src="/education.png" alt="Education icon" className="icon" />
                            <h3>Education</h3>
                            <p>BSc (Hons) Computer Science with Artificial Intelligence <br />Year: Expected 2028</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            I’m a passionate Computer Science student currently pursuing a BSc (Hons) in Computer Science with Artificial Intelligence at Birmingham City University...
                        </p>
                    </div>
                </div>
            </div>
            <img src="/arrow.png" alt="arrow icon" className="icon arrow" onClick={() => (window.location.href = '#skills')} />
        </section>
    );
};

export default About;
