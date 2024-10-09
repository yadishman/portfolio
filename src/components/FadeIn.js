import React, { useEffect, useRef, useState } from 'react';
import "../App.css";

const FadeIn = ({ children, type = 'slow' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
          ([entry]) => {
              if (entry.isIntersecting) {
                  setIsVisible(true);
                  observer.disconnect(); // Stop observing once visible
              }
          },
          { threshold: 0.1 } // Adjust threshold as needed
      );

      if (ref.current) {
          observer.observe(ref.current);
      }

      return () => {
          if (ref.current) {
              observer.unobserve(ref.current);
          }
      };
  }, []);

  return (
      <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''} ${type}`}>
          {children}
      </div>
  );
};

export default FadeIn;