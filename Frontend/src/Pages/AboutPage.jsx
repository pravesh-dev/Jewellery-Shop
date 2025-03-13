import React, { useRef } from 'react'; // Import React and useRef for creating a reference to a DOM node
import Hero from '../Components/AboutPage/Hero'; // Import Hero component from AboutPage
import AboutMore from '../Components/AboutPage/AboutMore'; // Import AboutMore component from AboutPage
import OurTeam from '../Components/AboutPage/OurTeam'; // Import OurTeam component from AboutPage

// Function component for AboutPage
function AboutPage() {
  const teamRef = useRef(null); // Create a reference to the OurTeam component

  // Function to scroll to the OurTeam section
  const scrollToTeam = () => {
    if (teamRef.current) {
      const headerHeight = 80; // Height of the header
      const elementPosition = teamRef.current.getBoundingClientRect().top; // Position relative to the viewport
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight; // Calculate the offset position for scrolling
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth', // Smooth scrolling behavior
      });
    }
  };

  // JSX for rendering the AboutPage components
  return (
    <div>
      <Hero scrollToTeam={scrollToTeam} /> {/* Pass the scrollToTeam function to Hero component */}
      <AboutMore />
      <OurTeam ref={teamRef} /> {/* Assign the teamRef to OurTeam component */}
    </div>
  )
}

export default AboutPage // Export the AboutPage component
