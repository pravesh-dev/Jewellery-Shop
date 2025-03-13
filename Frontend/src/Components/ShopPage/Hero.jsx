import React, { useEffect, useState } from 'react';
import bgImage1 from '../../Assets/ShopPage/bg-image.jpg';
import bgImage2 from '../../Assets/ShopPage/bg-image2.jpg';
import bgImage3 from '../../Assets/ShopPage/bg-image3.jpg';
import bgImage4 from '../../Assets/ShopPage/bg-image4.jpg';
import manImage1 from '../../Assets/ShopPage/man.png';
import manImage2 from '../../Assets/ShopPage/man2.svg';
import manImage3 from '../../Assets/ShopPage/man3.svg';
import manImage4 from '../../Assets/ShopPage/man4.svg';

function Hero() {
  const data = [
    {
      bgImage: bgImage1,
      manImage: manImage1,
      heading: `20% OFF ONLY TODAY AND GET SPECIAL GIFT`,
      para: `Lorem ipsum dolor sit amet consectetur. Volutpat accumsan suspendisse malesuada lacinia feugiat. Justo fermentum sapien malesuada fringilla facilisis augue.`,
    },
    {
      bgImage: bgImage2,
      manImage: manImage2,
      heading: `Buy Now and Save 25%! Plus, a Free Surprise Gift Awaits!`,
      para: `Sed velit in vulputate amet vulputate donec pretium. Amet adipiscing habitant ac faucibus eu risus a.`,
    },
    {
      bgImage: bgImage3,
      manImage: manImage3,
      heading: `Hurry! Flat 15% OFF + Special Gift for Early Birds!`,
      para: `Amet adipiscing habitant ac faucibus eu risus a. Sed velit in vulputate amet vulputate donec pretium.`,
    },
    {
      bgImage: bgImage4,
      manImage: manImage4,
      heading: `Hurry! Flat 20% OFF + Free Mystery Gift – Don’t Wait!`,
      para: `Amet adipiscing habitant ac faucibus eu risus a. Sed velit in vulputate amet vulputate donec pretium.`,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    // Start the animation after the first render
      setInitialized(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [data.length]);

  return (
    <section className="w-full px-2 pt-40 pb-5 sm:pb-20 lg:pb-0 xl:px-16">
      <div className="w-full h-[30rem] relative rounded-xl sm:mx-auto sm:w-[37rem] sm:h-[15rem] md:w-[45rem] lg:w-full lg:h-[15.4rem] lg:rounded-[2.4rem]">
        <img
          src={data[currentIndex].bgImage}
          className="w-full h-full object-cover rounded-xl lg:rounded-[2.4rem]"
          loading="lazy"
          alt="bg image"
        />
        <div className="w-full h-full bg-black/20 rounded-xl absolute top-0 left-0 flex flex-col items-center sm:items-start sm:justify-center gap-7 sm:bg-transparent lg:px-14 xl:px-24">
          <div className="-mt-16 border-b-2 border-dark w-full flex justify-center sm:w-auto sm:border-none sm:absolute bottom-0 right-0 lg:right-10 xl:right-16">
            <img
              src={data[currentIndex].manImage}
              className="w-60 sm:w-[18rem] lg:w-[18rem]"
              alt="people image"
            />
          </div>
          <div className="font-bellefair p-3 sm:w-[20rem] md:p-7 md:w-[30rem] lg:w-[35rem]">
            <h1 className="text-primary text-2xl md:mb-4 lg:text-[1.5rem] text-stroke lg:leading-[2.2rem] lg:w-[25rem] uppercase">
              {data[currentIndex].heading}
            </h1>
            <p className="lg:text-[1.12rem]">{data[currentIndex].para}</p>
          </div>
          <div className="w-[90%] flex gap-2 justify-center absolute bottom-2 left-1/2 -translate-x-1/2 lg:w-[70%] lg:bottom-4">
            {data.map((_, index) => (
              <div key={index} className="relative w-1/4 h-1 bg-secondary rounded-full overflow-hidden">
                <span
                  className={`absolute top-0 left-0 h-full bg-primary rounded-full`}
                  style={{
                    width: currentIndex === index && initialized ? '100%' : '0%',
                    transition: currentIndex === index && initialized ? 'width 5s linear' : 'none',
                  }}
                ></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
