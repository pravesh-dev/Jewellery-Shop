import React from "react";

function ContactForm() {
  return (
    <form className="flex flex-col mt-5 lg:mt-10">
      <div className="w-full flex flex-wrap gap-x-2 gap-y-5 lg:justify-between lg:gap-y-10 xl:gap-y-14">
        <input
          type="text"
          className="w-[48%] pb-2 text-sm placeholder:text-black text-black border-b-2 border-black/50 outline-none lg:text-lg lg:w-[40%] xl:text-xl"
          placeholder="Full Name"
        />
        <input
          type="email"
          className="w-[48%] pb-2 text-sm placeholder:text-black text-black border-b-2 border-black/50 outline-none lg:text-lg lg:w-[40%] xl:text-xl"
          placeholder="Email Address"
        />
        <input
          type="text"
          className="w-[48%] pb-2 text-sm placeholder:text-black text-black border-b-2 border-black/50 outline-none lg:text-lg lg:w-[40%] xl:text-xl"
          placeholder="Country"
        />
        <input
          type="number"
          className="w-[48%] pb-2 text-sm placeholder:text-black text-black border-b-2 border-black/50 outline-none lg:text-lg lg:w-[40%] xl:text-xl"
          placeholder="Phone Number"
        />
      </div>
      <textarea
        className="w-full h-20 mt-5 text-sm border-b-2 border-black/50 text-black placeholder:text-black resize-none outline-none lg:text-lg lg:mt-10 xl:text-xl xl:mt-14 xl:h-32"
        placeholder="Message"
      ></textarea>
      <button className="px-6 py-1 mt-6 self-end rounded-sm bg-secondary text-accent lg:rounded-[0.2rem] lg:tracking-wider xl:px-7 xl:text-xl xl:rounded-[0.25rem]">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
