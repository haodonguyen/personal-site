import React, { useState, useRef, useEffect } from 'react';

const TimeLineData = [
  { year: 2020, text: 'Started my journey as a web developer' },
  { year: 2021, text: 'Worked as a freelance developer' },
  { year: 2022, text: 'Founded my own platform' },
  { year: 2023, text: 'Shared my projects with the world' },
  { year: 2024, text: 'Started my own platform' }
];

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const handleClick = (index) => {
    setActiveItem(index);
    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (index / TimeLineData.length));
      carouselRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      id="timeline" 
      className="min-vh-100 d-flex align-items-center bg-light"
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-dark mb-4">
            My <span className="text-primary">Journey</span>
          </h2>
          <p className="text-secondary fs-5 mb-5 mx-auto" style={{maxWidth: '800px'}}>
            Here's a timeline of my professional journey and achievements
          </p>
        </div>

        <div 
          className="timeline-carousel position-relative overflow-hidden"
          ref={carouselRef}
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="d-flex gap-4 pb-4">
            {TimeLineData.map((item, index) => (
              <div 
                key={index}
                className={`timeline-item flex-shrink-0 ${activeItem === index ? 'active' : ''}`}
                style={{
                  minWidth: '280px',
                  scrollSnapAlign: 'start'
                }}
              >
                <div 
                  className={`card border-0 shadow-sm h-100 ${activeItem === index ? 'border-primary' : ''}`}
                  onClick={() => handleClick(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-body p-4">
                    <h3 className="h2 text-primary mb-3">{item.year}</h3>
                    <p className="text-secondary mb-0">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-center gap-2 mt-4">
          {TimeLineData.map((_, index) => (
            <button
              key={index}
              className={`btn btn-sm rounded-circle p-2 ${
                activeItem === index ? 'btn-primary' : 'btn-outline-primary'
              }`}
              onClick={() => handleClick(index)}
              style={{
                width: '15px',
                height: '15px',
                padding: '0!important'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;