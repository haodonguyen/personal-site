import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      color: "#00A9FF",  // Deep ethereal blue
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      color: "#89CFF3",  // Main ethereal blue
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "RESTful APIs", "JWT"]
    },
    {
      category: "Tools & Others",
      color: "#164863",  // Dark navy accent
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Webpack"]
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-secondary fs-5 mb-5 mx-auto" style={{maxWidth: '700px'}}>
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm" 
                style={{ 
                  backgroundColor: '#F5FCFF',
                  borderRadius: '15px',
                }}>
                <div className="card-body p-4">
                  <h3 className="display-6 fw-bold mb-4 text-center skill-category"
                    style={{ color: category.color }}>
                    {category.category}
                  </h3>
                  <div className="d-flex flex-column gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="skill-item p-3 rounded text-dark text-center"
                        style={{ 
                          backgroundColor: 'rgba(137, 207, 243, 0.1)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {skill}
                      </div>
                    ))}
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

export default Skills;

