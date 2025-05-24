import React from 'react';
import { Code, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: "Frontend Development",
      description: "React, JavaScript, HTML5, CSS3, Bootstrap, Tailwind CSS"
    },
    {
      icon: <Database size={32} />,
      title: "Backend Development", 
      description: "Node.js, Express.js, MongoDB, RESTful APIs"
    },
    {
      icon: <Globe size={32} />,
      title: "Full Stack Solutions",
      description: "End-to-end web application development"
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Optimization",
      description: "Fast, responsive, and scalable applications"
    }
  ];

  return (
    <section id="about" className="pt-0 pb-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-secondary fs-5 mb-5 mx-auto" style={{maxWidth: '800px'}}>
            I'm a passionate full-stack developer with expertise in the MERN stack. 
            I love building innovative web applications that solve real-world problems 
            and deliver exceptional user experiences.
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-4">
                <div className="text-primary mb-3">
                  {feature.icon}
                </div>
                <div className="card-body p-0">
                  <h3 className="h5 text-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-secondary mb-0">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;