import React from 'react'
import Background from '../Components/LoginSignupPages/Background'
import Login from '../Components/LoginSignupPages/Login'

function LoginPage() {
  return (
    <section className='relative w-full h-screen'>
      <Background />
      <Login />
    </section>
  )
}

export default LoginPage