import React from 'react';

const Skills = () => {
    return (
        <section id="skills">
            <p className="section__text__p1">Explore my</p>
            <h1 className="title">Skills</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <h2 className="experience-sub-title">Programming Languages</h2>
                        <div className="article-container">
                            {["Python", "C", "HTML", "CSS"].map((lang, idx) => (
                                <article key={idx}>
                                    <img src="/checkmark.png" alt="checkmark" className="icon" />
                                    <div>
                                        <h3>{lang}</h3>
                                        <p>{lang === "C" ? "Beginner" : "Intermediate"}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                    <div className="details-container">
                        <h2 className="experience-sub-title">Libraries/Tools</h2>
                        <div className="article-container">
                            {[
                                { name: "Numpy", level: "Beginner" },
                                { name: "Pandas", level: "Beginner" },
                                { name: "Matplotlib", level: "Beginner" },
                                { name: "OpenCV", level: "Beginner" },
                                { name: "Git", level: "Beginner" },
                                { name: "Figma", level: "Intermediate" },
                                { name: "Canva", level: "Intermediate" }
                            ].map((tool, idx) => (
                                <article key={idx}>
                                    <img src="/checkmark.png" alt="checkmark" className="icon" />
                                    <div>
                                        <h3>{tool.name}</h3>
                                        <p>{tool.level}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <img
                src="/arrow.png"
                alt="arrow icon"
                className="icon arrow"
                onClick={() => (window.location.href = '#projects')}
            />
        </section>
    );
};

export default Skills;
