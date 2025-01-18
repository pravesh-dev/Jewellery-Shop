import React, { useEffect, useState } from "react";

function FrequentlyQues() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setActiveIndex(null); // Reset active index on language change
  }, []);

  return (
    <div className="w-full px-2 font-bellefair py-10">
      <div>
        <h2 className="text-primary drop-shadow-[0_0_0.4px_#006400] lg:text-xl">
          FAQ
        </h2>
        <h1 className="text-primary text-3xl drop-shadow-[0_0_0.4px_#006400]">
          Frequently asked questions.
        </h1>
      </div>
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full mt-7 md:mt-10 md:w-[45%] border-b-2 border-black/30 pb-2"
          >
            <h1
              className="font-bellefair text-base flex items-center justify-between md:text-xl lg:text-2xl cursor-pointer"
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
            >
              {item.ques}{" "}
              <span>
                {index === activeIndex ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </h1>
            <p
              className={`font-poppins text-xs ${
                index === activeIndex ? "h-auto" : "h-0"
              } overflow-hidden text-black/70 md:text-sm lg:text-base duration-500`}
            >
              {item.ans}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrequentlyQues;
