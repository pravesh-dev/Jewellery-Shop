import React from 'react' // Import React for component creation
import Contact from '../Components/ContactPage/Contact' // Import Contact component from ContactPage
import BgImage from '../Components/ContactPage/BgImage' // Import BgImage component from ContactPage
import FrequentlyQues from '../Components/ContactPage/FrequentlyQues' // Import FrequentlyQues component from ContactPage

// Function component for ContactPage
function ContactPage() {
  return (
    <> // Fragment to wrap components without adding extra DOM nodes
      <Contact /> // Render Contact component
      <BgImage /> // Render BgImage component
      <FrequentlyQues /> // Render FrequentlyQues component
    </>
  )
}

export default ContactPage // Export the ContactPage component
