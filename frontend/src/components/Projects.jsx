import React from 'react';
import { BiLogoGithub } from 'react-icons/bi';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration features, and progress tracking.",
      technologies: ["React", "Socket.io", "MongoDB", "Express", "JWT"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling, and performance metrics.",
      technologies: ["React", "Chart.js", "Node.js", "MongoDB", "REST API"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-secondary fs-5 mb-5 mx-auto" style={{maxWidth: '800px'}}>
            Here are some of my recent MERN stack projects that showcase my skills and creativity
          </p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm project-card">
                <div className="position-relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="card-img-top project-image"
                    style={{height: '200px', objectFit: 'cover'}}
                  />
                  <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
                </div>
                
                <div className="card-body p-4">
                  <h3 className="h5 text-dark mb-3">
                    {project.title}
                  </h3>
                  <p className="text-secondary mb-3 small">
                    {project.description}
                  </p>
                  
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="badge bg-primary bg-opacity-10 text-primary px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div>
                    <a 
                      href={project.github}
                      className="btn btn-primary btn-sm d-flex align-items-center gap-2"
                      style={{width: 'fit-content'}}
                    >
                      <BiLogoGithub /> Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
