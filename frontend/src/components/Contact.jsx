import React, { useState } from 'react';
import { BiEnvelope, BiPhone, BiMap } from 'react-icons/bi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Show success message for 3 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false }));
      }, 3000);

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message
      });
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-primary mb-3">Get In Touch</h2>
          <p className="lead text-muted">Have a project in mind? Let's work together!</p>
        </div>

        <div className="row justify-content-center">
          {/* Contact Information */}
          <div className="col-md-5 mb-4 mb-md-0">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="h4 mb-4">Contact Information</h3>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <BiEnvelope className="text-primary fs-4" />
                  </div>
                  <div>
                    <p className="text-muted mb-0">Email</p>
                    <a href="mailto:your.email@example.com" className="text-dark text-decoration-none">
                      your.email@example.com
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <BiPhone className="text-primary fs-4" />
                  </div>
                  <div>
                    <p className="text-muted mb-0">Phone</p>
                    <a href="tel:+1234567890" className="text-dark text-decoration-none">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <BiMap className="text-primary fs-4" />
                  </div>
                  <div>
                    <p className="text-muted mb-0">Location</p>
                    <p className="text-dark mb-0">Your City, Country</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength="2"
                      maxLength="50"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength="10"
                      maxLength="1000"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status.submitting}
                  >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>

                  {/* Status Messages */}
                  {status.submitted && (
                    <div className="alert alert-success mt-3" role="alert">
                      Message sent successfully!
                    </div>
                  )}
                  
                  {status.error && (
                    <div className="alert alert-danger mt-3" role="alert">
                      {status.error}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

  