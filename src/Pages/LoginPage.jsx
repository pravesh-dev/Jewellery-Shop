import React from 'react'
import Background from '../Components/LoginSignupPages/Background'
import Login from '../Components/LoginSignupPages/Login'

function LoginPage() {
  return (
    <section className='relative w-full h-[42rem] lg:h-[47rem]'>
      <Background />
      <Login />
    </section>
  )
}

export default LoginPage
