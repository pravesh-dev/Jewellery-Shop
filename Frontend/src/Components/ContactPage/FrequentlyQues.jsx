import React, { useEffect, useState, useRef } from "react";
import { data } from './FaqData';
import { FaMinus, FaPlus } from "react-icons/fa6";

function FrequentlyQues() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle active index
  const toggleActiveIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full px-2 font-bellefair py-10 sm:flex md:px-10 lg:px-20 lg:justify-between xl:w-[70rem] xl:mx-auto xl:px-0 xl:pb-20 xl:pt-5">
      <div className="sm:w-[40%] lg:w-[20rem]">
        <h2 className="text-primary drop-shadow-[0_0_0.4px_#006400] lg:text-xl">
          FAQ
        </h2>
        <h1 className="text-primary text-3xl drop-shadow-[0_0_0.4px_#006400] md:text-4xl md:mt-3 lg:text-5xl lg:mt-5 xl:mt-10">
          Frequently asked questions.
        </h1>
      </div>
      <div className="sm:w-[60%] lg:w-[28rem] xl:w-[34rem]">
        {data.map((item, index) => {
          const isActive = index === activeIndex;
          const contentRef = useRef(null);

          return (
            <div key={index} className="w-full mt-4 pb-1">
              <h1
                className="font-bellefair text-dark drop-shadow-[0_0_0.4px_#333333] text-base flex items-center justify-between md:text-xl cursor-pointer xl:text-[1.4rem]"
                onClick={() => toggleActiveIndex(index)}
              >
                {item.ques}
                <span className="bg-secondary rounded-full text-xs p-1 lg:p-2">
                  {isActive ? <FaMinus /> : <FaPlus />}
                </span>
              </h1>
              <div
                ref={contentRef}
                className={`font-poppins text-xs overflow-hidden text-black md:text-sm lg:text-base lg:leading-5 lg:mt-3 duration-500 ease-in-out xl:text-lg xl:leading-5`}
                style={{
                  maxHeight: isActive ? `${contentRef.current?.scrollHeight}px` : "0",
                  transition: "max-height 0.5s ease-in-out",
                }}
              >
                <p>
                  {item.ans}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FrequentlyQues;
