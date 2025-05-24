import React from 'react'
import { BiLogoGithub, BiLogoLinkedin, BiEnvelope } from 'react-icons/bi'

const Hero = () => {
  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container text-center"> 
        <div className="animate__animated animate__fadeIn">
          <h1 className="display-3 fw-bold text-dark mb-4">
            <div className="typing-container">
              <span className="typing">Hi, I'm <span className="text-gradient">Harry</span></span>
            </div>
          </h1>
          
          <p className="text-secondary fs-5 mb-5 mx-auto" style={{maxWidth: '600px'}}>
            I'm a Software Engineering graduate from La Trobe University. Here, I'm unraveling my journey in software and research – my work, my discoveries, and the path I'm carving. This is my story, told my way.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center mb-5">
            <a 
              href="#projects"
              className="btn btn-primary btn-lg px-4 py-2"
            >
              View My Work
            </a>
            
            <a 
              href="#contact"
              className="btn btn-outline-primary btn-lg px-4 py-2"
            >
              Get In Touch
            </a>
          </div>

          <div className="d-flex justify-content-center gap-4">
            <a href="https://github.com/haodonguyen" target="_blank" rel="noopener noreferrer" className="text-secondary fs-4 text-decoration-none hover-lift">
              <BiLogoGithub />
            </a>
            <a href="https://www.linkedin.com/in/nguyenhaodo/" target="_blank" rel="noopener noreferrer" className="text-secondary fs-4 text-decoration-none hover-lift">
              <BiLogoLinkedin />
            </a>
            <a href="mailto:nguyenhaodo@gmail.com" className="text-secondary fs-4 text-decoration-none hover-lift">
              <BiEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
