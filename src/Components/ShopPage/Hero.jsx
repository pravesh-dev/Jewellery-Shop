import React, { useEffect, useState } from 'react';
import bgImage1 from '../../Assets/ShopPage/bg-image.jpg';
import manImage1 from '../../Assets/ShopPage/man.png';

function Hero() {
  const data = [
    {
      bgImage: bgImage1,
      manImage: manImage1,
      heading: `20% OFF ONLY TODAY AND GET SPECIAL GIFT`,
      para: `Lorem ipsum dolor sit amet consectetur. Volutpat accumsan suspendisse malesuada lacinia feugiat. Justo fermentum sapien malesuada fringilla facilisis augue.`,
    },
    {
      bgImage: bgImage1,
      manImage: manImage1,
      heading: `SUMMER SALE IS HERE`,
      para: `Sed velit in vulputate amet vulputate donec pretium. Amet adipiscing habitant ac faucibus eu risus a.`,
    },
    {
      bgImage: bgImage1,
      manImage: manImage1,
      heading: `WINTER COLLECTION IS NOW LIVE`,
      para: `Amet adipiscing habitant ac faucibus eu risus a. Sed velit in vulputate amet vulputate donec pretium.`,
    },
    {
      bgImage: bgImage1,
      manImage: manImage1,
      heading: `SPRING INTO FASHION`,
      para: `Volutpat accumsan suspendisse malesuada lacinia feugiat. Justo fermentum sapien malesuada fringilla facilisis augue.`,
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
    <section className="w-full px-2 pt-40 pb-5 sm:pb-20 lg:pt-56 xl:px-16">
      <div className="w-full h-[30rem] relative rounded-xl sm:mx-auto sm:w-[37rem] sm:h-[15rem] md:w-[45rem] lg:w-[65rem] lg:h-[20rem] lg:rounded-[2.4rem] xl:w-full xl:h-[25rem]">
        <img
          src={data[currentIndex].bgImage}
          className="w-full h-full object-cover rounded-xl lg:rounded-[2.4rem]"
          loading="lazy"
          alt="bg image"
        />
        <div className="w-full h-full bg-black/20 rounded-xl absolute top-0 left-0 flex flex-col items-center sm:items-start sm:justify-center gap-7 sm:bg-transparent">
          <div className="-mt-16 border-b-2 border-dark w-full flex justify-center sm:w-auto sm:border-none sm:absolute bottom-0 right-0">
            <img
              src={data[currentIndex].manImage}
              className="w-60 sm:w-[18rem] lg:w-[24rem] xl:w-[30rem]"
              alt="people image"
            />
          </div>
          <div className="font-bellefair p-3 sm:w-[20rem] md:p-7 md:w-[30rem] lg:w-[40rem] xl:px-24 xl:w-[55rem]">
            <h1 className="text-primary text-3xl md:mb-4 lg:text-[2.9rem] lg:leading-[3.3rem] xl:text-[3.2rem] xl:mb-8">
              {data[currentIndex].heading}
            </h1>
            <p className="lg:text-lg xl:text-xl">{data[currentIndex].para}</p>
          </div>
          <div className="w-[90%] flex gap-2 justify-center absolute bottom-2 left-1/2 -translate-x-1/2 lg:w-[80%] lg:bottom-4">
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
