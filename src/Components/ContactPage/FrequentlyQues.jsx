import React, { useEffect, useState } from "react";
import { data } from './FaqData';
import { FaMinus, FaPlus } from "react-icons/fa6";

function FrequentlyQues() {
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    setActiveIndex(null); // Reset active index on language change
  }, []);
  return (
    <div className="w-full px-2 font-bellefair py-10 sm:flex md:px-10 lg:px-20 lg:justify-between xl:w-[70rem] xl:mx-auto xl:px-0">
      <div className="sm:w-[40%] lg:w-[20rem]">
        <h2 className="text-primary drop-shadow-[0_0_0.4px_#006400] lg:text-xl">
          FAQ
        </h2>
        <h1 className="text-primary text-3xl drop-shadow-[0_0_0.4px_#006400] md:text-4xl md:mt-3 lg:text-5xl">
          Frequently asked questions.
        </h1>
      </div>
      <div className="sm:w-[60%] lg:w-[28rem]">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full mt-4 pb-1"
          >
            <h1
              className="font-bellefair text-dark drop-shadow-[0_0_0.4px_#333333] text-base flex items-center justify-between md:text-xl cursor-pointer"
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
            >
              {item.ques}{" "}
              <span className="bg-secondary rounded-full text-xs p-1">
                {index === activeIndex ? <FaMinus /> : <FaPlus />}
              </span>
            </h1>
            <p
              className={`font-poppins text-xs ${
                index === activeIndex ? "" : "h-0"
              } overflow-hidden text-black md:text-sm lg:text-base lg:leading-5 lg:mt-3 duration-500 bg-red-400 xl:text-lg xl:leading-5`}
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
