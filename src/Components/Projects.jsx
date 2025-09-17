import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    {[
                        {
                            title: "IntelliVision",
                            img: "/project-1.png",
                            link: "https://github.com/Bishwas-Cdy/IntelliVision.git",
                            label: "Github"
                        },
                        {
                            title: "Calsync",
                            img: "/project-2.png",
                            link: "https://github.com/RjungThapa/CalSync.git",
                            label: "Github"
                        },
                        {
                            title: "Smart Weather Station",
                            img: "/project-3.png",
                            link: "/Smart Weather Station.pdf",
                            label: "Read Article"
                        }
                    ].map((project, idx) => (
                        <div className="details-container color-container" key={idx}>
                            <div className="article-container">
                                <img src={project.img} alt={project.title} className="project-img" />
                            </div>
                            <h2 className="experience-sub-title project-title">{project.title}</h2>
                            <div className="btn-container">
                                <button className="btn btn-color-2 project-btn" onClick={() => window.open(project.link)}>
                                    {project.label}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img src="/arrow.png" alt="arrow icon" className="icon arrow" onClick={() => (window.location.href = '#contact')} />
        </section>
    );
};

export default Projects;
