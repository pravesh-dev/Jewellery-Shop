import React from 'react'
import bgImage from '../../Assets/Blog/bg-image.jpg';
import sideImage from '../../Assets/Blog/Blog-hero.svg';

function Hero() {
  return (
    <div className='w-full px-2 pt-28 pb-5 sm:pb-20 md:pt-40 xl:px-16'>
      <div className="w-full h-[30rem] relative rounded-xl sm:mx-auto sm:w-[37rem] sm:h-[15rem] md:w-[45rem] lg:w-[60rem] lg:h-[20rem] lg:rounded-[2.4rem] xl:w-full xl:h-[25rem]">
        <img
          src={bgImage}
          className="w-full h-full object-cover rounded-xl lg:rounded-[2.4rem]"
          loading="lazy"
          alt="bg image"
        />
        <div className="w-full h-full rounded-xl absolute top-0 left-0 flex gap-7 flex-col items-center justify-center sm:flex-row-reverse">
        <div className="w-full flex justify-center sm:w-auto">
            <img
              src={sideImage}
              className="w-80 lg:w-[30rem]"
              alt="side image"
            />
          </div>
          <div className="font-bellefair flex flex-col gap-2 items-center px-1 sm:items-start sm:w-[27rem] sm:pl-8 md:p-7 md:w-[30rem] lg:w-[40rem] xl:px-24 xl:w-[55rem]">
            <h1 className="text-primary uppercase text-center text-3xl sm:text-left md:mb-4 lg:text-[2.9rem] lg:leading-[3.3rem] xl:text-[3.2rem] xl:mb-8">
            The Jewel Journal
            </h1>
            <p className="text-center sm:text-left lg:text-lg xl:text-2xl">Every piece of jewelry carries a unique tale, blending timeless elegance with unmatched craftsmanship. From delicate designs to bold statements, our jewels are more than adornments—they're symbols of strength, beauty, and individuality.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
