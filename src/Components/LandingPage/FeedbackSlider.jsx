import React, { useState, useEffect } from "react";
import star from "../../assets/LandingPage/Feedback/star.svg";
import client1 from "../../Assets/LandingPage/Feedback/client1.jpg";

function FeedbackSlider() {
  const clients = [
    {
      img: client1,
      startsCount: 5,
      para: `Impressed by the exceptional craftsmanship and quality of the jewelry. The 100% pure gold shines brilliantly, reflecting true luxury and sophistication. A must-have for those who appreciate timeless elegance.`,
      name: "Bill Gates",
    },
    {
      img: client1,
      startsCount: 4,
      para: `The jewelry exceeded my expectations. The intricate designs and attention to detail are truly remarkable. I'm thrilled to have such a unique piece in my collection.`,
      name: "Elon Musk",
    },
    {
      img: client1,
      startsCount: 5,
      para: `I was blown away by the customer service. The team went above and beyond to ensure I was completely satisfied with my purchase. The jewelry itself is stunning and I've received countless compliments.`,
      name: "Mark Zuckerberg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReversing, setIsReversing] = useState(false); // To track slide direction

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [currentIndex, isReversing]);

  const handleNext = () => {
    if (!isReversing) {
      if (currentIndex < clients.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsReversing(true); // Start reversing direction
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      } else {
        setIsReversing(false); // Resume normal sliding
      }
    }
  };

  return (
    <div className="feedback-slider w-full relative md:mt-10 md:w-[40rem] lg:mt-20 lg:w-[60rem] overflow-hidden bg-red-600 flex justify-center">
      <div
        className="slider-content flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${clients.length * 100}%`,
        }}
      >
        {clients.map((client, index) => (
          <div
            key={index}
            className="slide w-full flex-shrink-0 flex items-center justify-center"
            style={{ width: "100%" }}
          >
            <div className="text-center bg-dark text-accent px-2 py-3 rounded-lg flex justify-center items-center gap-2">
              <div className="w-56 flex flex-col gap-2">
                <p className="font-bellefair text-xs text-start">{client.para}</p>
                <div className="flex items-center justify-between w-full">
                  <div className="flex justify-center md:justify-start">
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
                  <h2 className="text-sm font-bellefair">
                    <span className="text-secondary">-</span> {client.name}
                  </h2>
                </div>
              </div>
              <div className="w-16 h-16 border-l-4 border-b-4 border-secondary rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={client.img}
                  className="w-full h-full object-cover"
                  alt={`Feedback from ${client.name}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackSlider;
