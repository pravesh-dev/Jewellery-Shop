import React, { useState, useEffect } from 'react';
import star from "../../assets/LandingPage/Feedback/star.svg";
import client1 from '../../Assets/LandingPage/Feedback/client1.jpg'
function FeedbackSlider() {
  const clients = [
    {
      img: client1,
      startsCount: 5,
      para: `Impressed by the exceptional craftsmanship and quality of the jewelry. The 100% pure gold shines brilliantly, reflecting true luxury and sophistication. A must-have for those who appreciate timeless elegance.`,
      name: "Bill Gates",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === clients.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="feedback-slider w-full relative md:mt-10 md:w-[40rem] lg:mt-20 lg:w-[60rem]">
      <div className="slider-content w-full flex items-center justify-center transition-opacity duration-1000">
        {clients.map((client, index) => (
          <div
            key={index}
            className={`slide w-full flex items-center justify-center ${index === currentIndex ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
            style={{ display: index === currentIndex ? 'flex' : 'none' }}
          >
            <div className="text-center bg-dark text-accent p-4 rounded-lg md:flex md:items-center md:py-2 md:px-3 lg:p-0 overflow-hidden">
              <div className="w-16 h-16 mx-auto rounded-full mb-4 md:w-40 md:h-40 md:rounded-none md:mb-0 flex-shrink-0 overflow-hidden lg:w-60 lg:h-full">
                <img
                  src={client.img}
                  alt={`Feedback from ${client.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:py-4 md:px-6">
                <div className="flex justify-center mb-2 md:justify-start">
                  {Array(client.startsCount)
                    .fill(0)
                    .map((_, i) => (
                      <img
                        key={i}
                        src={star}
                        alt="star"
                        className="w-4 md:w-5"
                      />
                    ))}
                </div>
                <p className="text-sm mb-2 font-poppins md:text-left">{client.para}</p>
                <p className="font-bellefair text-primary text-xl md:w-full md:text-right">{client.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackSlider;
