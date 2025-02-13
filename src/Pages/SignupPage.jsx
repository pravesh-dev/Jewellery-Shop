import React from 'react' // Import React for component creation
import Background from '../Components/LoginSignupPages/Background' // Import Background component
import Signup from '../Components/LoginSignupPages/Signup' // Import Signup component

// Function component for SignupPage
function SignupPage() {
  return (
    <section className='relative w-full h-[42rem] lg:h-[50rem] xl:h-[55rem]'> // Container for SignupPage with responsive height
      <Background /> // Render Background component
      <Signup /> // Render Signup component
    </section>
  )
}

export default SignupPage // Export the SignupPage component
