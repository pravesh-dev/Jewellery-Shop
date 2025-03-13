import React from 'react' // Import React for component creation
import Background from '../Components/LoginSignupPages/Background' // Import Background component from LoginSignupPages
import Login from '../Components/LoginSignupPages/Login' // Import Login component from LoginSignupPages

// Function component for Login page
function LoginPage() {
  return (
    <section className='relative w-full h-[42rem] lg:h-[47rem] xl:h-[49rem]'>
      <Background />
      <Login />
    </section>
  )
}

export default LoginPage // Export the LoginPage component
