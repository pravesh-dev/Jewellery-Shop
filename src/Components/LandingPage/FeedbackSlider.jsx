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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clients.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="feedback-slider w-full relative md:mt-10 md:w-[40rem] lg:mt-20 lg:w-[60rem]">
      <div className="slider-content w-full flex items-center justify-center transition-opacity duration-1000">
        {clients.map((client, index) => (
          <div
            key={index}
            className={`slide w-full flex items-center justify-center ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-1000`}
            style={{ display: index === currentIndex ? "flex" : "none" }}
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
                <img src={client.img} className="w-full h-full object-cover" alt={`Feedback from ${client.name}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedbackSlider;
