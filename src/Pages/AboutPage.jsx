import React, { useRef } from 'react';
import Hero from '../Components/AboutPage/Hero';
import AboutMore from '../Components/AboutPage/AboutMore';
import OurTeam from '../Components/AboutPage/OurTeam';

function AboutPage() {
  const teamRef = useRef(null);

  const scrollToTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: 'smooth' });
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
