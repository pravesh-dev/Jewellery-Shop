import React from "react";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <section className="font-bellefair pt-24 pb-10 md:pt-32 md:px-10">
      <h1 className="capitalize text-primary text-2xl drop-shadow-[0_0_0.4px_#006400] md:mx-auto px-2 md:p-0">
          Get in touch
      </h1>
      <div className="md:flex justify-center gap-5">
        <div className="px-2 md:w-1/2 md:border-r border-[#E1E1E1] md:pl-0 md:pr-5">
        <h2 className="mt-5 text-primary drop-shadow-[0_0_0.4px_#006400]">
          Send a Message
        </h2>
        <p className="leading-5">
          Lorem ipsum dolor sit amet consectetur. Risus urna donec molestie
          proin velit rhoncus rhoncus amet nisl.
        </p>
        <form className="flex flex-col mt-5">
          <div className="w-full flex flex-wrap gap-x-2 gap-y-5">
            <input
              type="text"
              className="w-[48%] pb-2 text-sm placeholder:text-black text-black border-b border-black/50 outline-none"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="w-[48%] pb-2 text-sm placeholder:text-black text-black border-b border-black/50 outline-none"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="w-[48%] pb-2 text-sm placeholder:text-black text-black border-b border-black/50 outline-none"
              placeholder="Country"
            />
            <input
              type="number"
              className="w-[48%] pb-2 text-sm placeholder:text-black text-black border-b border-black/50 outline-none"
              placeholder="Phone Number"
            />
          </div>
          <textarea
            className="w-full h-20 mt-5 text-sm border-b border-black/50 text-black placeholder:text-black resize-none outline-none"
            placeholder="Message"
          ></textarea>
          <button className="px-6 py-1 mt-6 self-end rounded-sm bg-secondary text-accent">
            Submit
          </button>
        </form>
        </div>
        <div className="px-2 md:w-1/2 md:px-0">
        <div>
          <h2 className="mt-5 text-primary drop-shadow-[0_0_0.4px_#006400]">
            Call Us
          </h2>
          <p className="leading-5">
          Lorem ipsum dolor sit amet consectetur. Risus urna donec molestie proin velit rhoncus rhoncus amet nisl. Lorem ipsum dolor sit amet consectetur. 
          </p>
          <a className="flex items-center gap-2 text-secondary text-xs" href="tel:+91 8877995512"><IoIosCall className="p-1 text-xl text-accent bg-secondary rounded-full" /> +91 8877995512</a>
        </div>
        <div>
          <h2 className="mt-5 text-primary drop-shadow-[0_0_0.4px_#006400]">
            Visit Us
          </h2>
          <p className="leading-5">
          Lorem ipsum dolor sit amet consectetur. Risus urna donec molestie proin velit rhoncus rhoncus amet nisl. Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="flex items-center gap-2 text-secondary text-xs"><FaLocationDot className="p-1 text-xl text-accent bg-secondary rounded-full" /> 123001 Narula, Haryana, India</p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
