import React from 'react'
import bgImage from '../../Assets/Blog/bg-image.jpg';
import sideImage from '../../Assets/Blog/Blog-hero.svg';

function Hero() {
  return (
    <div className='w-full px-2 pt-40 pb-5 sm:pb-20 lg:pt-56 xl:px-16'>
      <div className="w-full h-[30rem] relative rounded-xl sm:mx-auto sm:w-[37rem] sm:h-[15rem] md:w-[45rem] lg:w-[65rem] lg:h-[20rem] lg:rounded-[2.4rem] xl:w-full xl:h-[25rem]">
        <img
          src={bgImage}
          className="w-full h-full object-cover rounded-xl lg:rounded-[2.4rem]"
          loading="lazy"
          alt="bg image"
        />
        <div className="w-full h-full bg-black/20 rounded-xl absolute top-0 left-0 flex flex-col items-center sm:items-start sm:justify-center gap-7 sm:bg-transparent">
          <div className="font-bellefair p-3 sm:w-[20rem] md:p-7 md:w-[30rem] lg:w-[40rem] xl:px-24 xl:w-[55rem]">
            <h1 className="text-primary text-3xl md:mb-4 lg:text-[2.9rem] lg:leading-[3.3rem] xl:text-[3.2rem] xl:mb-8">
            The Jewel Journal
            </h1>
            <p className="lg:text-lg xl:text-xl">Every piece of jewelry carries a unique tale, blending timeless elegance with unmatched craftsmanship. From delicate designs to bold statements, our jewels are more than adornments—they're symbols of strength, beauty, and individuality.</p>
          </div>
          <div className="-mt-16 border-b-2 border-dark w-full flex justify-center sm:w-auto sm:border-none sm:absolute bottom-0 right-0">
            <img
              src={sideImage}
              className="w-60 sm:w-[18rem] lg:w-[24rem] xl:w-[30rem]"
              alt="people image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
