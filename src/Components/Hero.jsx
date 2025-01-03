import React from 'react'
import HeroSlider from './HeroSlider'

function Hero() {
  return (
    <section className='w-full h-screen flex flex-col gap-10 justify-center items-center'>
      <h1 className='h-[46%] text-primary text-2xl tracking-wider text-center font-bellefair content-center'>Exquisite Jewellery. <br /> Reserved for the Exceptional.</h1>
      <HeroSlider />
    </section>
  )
}

export default Hero
