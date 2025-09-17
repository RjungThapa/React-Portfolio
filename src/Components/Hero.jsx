import React from 'react';

const Hero = () => {
    return (
        <section id="profile">
            <div className="section__pic-container">
                <img src="/profile-pic.png" alt="Rhythm Jung Thapa" />
            </div>
            <div className="section__text">
                <p className="section__text__p1">Hello, I'm</p>
                <h1 className="title">Rhythm Jung Thapa</h1>
                <p className="section__text__p2">AI Student</p>

                <div className="btn-container">
                    <button className="btn btn-color-2" onClick={() => window.open('/CV.pdf')}>
                        Download CV
                    </button>
                    <button className="btn btn-color-1" onClick={() => (window.location.href = '#contact')}>
                        Contact Info
                    </button>
                </div>

                <div id="socials-container">
                    <img src="/linkedin.png" alt="linkedin" className="icon" onClick={() => window.location.href = 'https://www.linkedin.com/in/rjung-thapa/'} />
                    <img src="/github.png" alt="github" className="icon" onClick={() => window.location.href = 'https://github.com/RjungThapa'} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
