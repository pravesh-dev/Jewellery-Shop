import React from 'react'
import { Link } from 'react-router-dom'

function Hero({scrollToTeam}) {
  return (
    <div className='w-full mx-auto font-bellefair pt-20 pb-5 sm:pt-28 px-2 flex flex-col gap-10 justify-center sm:flex-row lg:px-28 xl:w-[75rem] xl:px-0 xl:pt-44 xl:pb-10'>
      <div className='flex items-center justify-center gap-4 sm:w-[30%] sm:flex-col sm:gap-2 sm:justify-start sm:pt-14 lg:pt-24 xl:items-start xl:gap-1'>
        <Link className='text-secondary border-b border-secondary sm:leading-4 sm:text-xl xl:text-2xl'>About Us.</Link>
        <button onClick={scrollToTeam} className='sm:leading-4 sm:text-xl xl:text-2xl'>Our Team.</button>
      </div>
      <div className='flex flex-col items-center gap-2 sm:w-[70%] sm:items-start lg:gap-4'>
        <h1 className='uppercase text-primary text-3xl sm:text-4xl lg:text-5xl lg:mb-5'>about us</h1>
        <p className='text-sm text-center sm:text-left sm:text-base lg:text-lg xl:text-[1.3rem] xl:leading-6'>Lorem ipsum dolor sit amet consectetur. Diam tellus viverra diam pellentesque. Iaculis amet adipiscing ornare enim elementum pulvinar purus vitae. Aliquam et ultrices vestibulum ut tellus mattis elit facilisis vel. Elit lectus purus consequat quam non hendrerit sapien ante nisl. Sit consequat viverra amet leo ac. Diam nunc erat id mauris mauris erat. Dolor eget tortor non eget egestas vulputate sit urna purus. Enim eu dui ultricies sollicitudin ultricies justo a aenean aliquam.</p>
        <p className='text-sm text-center sm:text-left sm:text-base lg:text-lg xl:text-[1.3rem] xl:leading-6'>Lorem ipsum dolor sit amet consectetur. Diam tellus viverra diam pellentesque. Iaculis amet adipiscing ornare enim elementum pulvinar purus vitae. Aliquam et ultrices vestibulum ut tellus mattis elit facilisis vel. Elit lectus purus consequat quam non hendrerit sapien ante nisl. Sit consequat viverra amet leo ac. Diam nunc erat id mauris mauris erat. Dolor eget tortor non eget egestas vulputate sit urna purus. Enim eu dui ultricies sollicitudin ultricies justo a aenean aliquam. Mi ultrices quam viverra sollicitudin in bibendum enim consequat. Non vitae neque rhoncus curabitur. Donec magna volutpat sagittis mauris. Turpis congue blandit gravida diam non vulputate donec.</p>
      </div>
    </div>
  )
}

export default Hero
