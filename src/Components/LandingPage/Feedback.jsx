import React from "react";
import FeedbackSlider from "./FeedbackSlider";

function FeedBack() {
  return (
    <section className="w-full relative pb-10 h-[110vh] md:h-[95vh]">
      <div className="w-full h-96 lg:h-[30rem]">
        <img src={bgImage} className="w-full h-full object-cover object-center filter brightness-50" alt="background image" />
      </div>
      <div className="w-full flex flex-col items-center absolute top-0 left-0 py-16">
        <h1 className="font-bellefair capitalize text-white text-4xl text-center my-2 md:w-[35rem] md:text-5xl lg:text-7xl lg:w-[50rem] lg:mb-5">
        what our client says
        </h1>
          <FeedbackSlider />
      </div>
    </section>
  );
}

export default FeedBack;
