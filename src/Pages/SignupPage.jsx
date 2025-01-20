import React from 'react'
import Background from '../Components/LoginSignupPages/Background'
import Signup from '../Components/LoginSignupPages/Signup'

function SignupPage() {
  return (
    <section className='relative w-full h-[42rem] lg:h-[50rem] xl:h-[55rem]'>
      <Background />
      <Signup />
    </section>
  )
}

export default SignupPage
