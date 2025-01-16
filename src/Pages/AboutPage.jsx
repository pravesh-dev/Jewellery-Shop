import React, { useRef } from 'react';
import Hero from '../Components/AboutPage/Hero';
import AboutMore from '../Components/AboutPage/AboutMore';
import OurTeam from '../Components/AboutPage/OurTeam';

function AboutPage() {
  const teamRef = useRef(null);

  const scrollToTeam = () => {
    if (teamRef.current) {
      const headerHeight = 80;
      const elementPosition = teamRef.current.getBoundingClientRect().top; // Position relative to the viewport
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <Hero scrollToTeam={scrollToTeam} />
      <AboutMore />
      <OurTeam ref={teamRef} />
    </div>
  )
}

export default AboutPage
