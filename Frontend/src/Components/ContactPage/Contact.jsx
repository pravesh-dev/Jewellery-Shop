import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section className="font-bellefair pt-24 pb-10 md:pt-32 md:px-10 lg:px-20 lg:pt-40">
      <h1 className="capitalize text-primary text-2xl drop-shadow-[0_0_0.4px_#006400] md:mx-auto px-2 md:p-0 lg:text-4xl xl:w-[70rem]">
          Get in touch
      </h1>
      <div className="md:flex justify-center gap-5 lg:gap-14 xl:w-[70rem] xl:justify-between xl:mx-auto xl:gap-20">
        <div className="px-2 md:w-1/2 md:border-r border-[#E1E1E1] md:pl-0 md:pr-5 lg:pr-14 xl:w-[60%] xl:pr-20">
        <h2 className="mt-5 text-primary drop-shadow-[0_0_0.4px_#006400] lg:text-xl">
          Send a Message
        </h2>
        <p className="leading-5 lg:text-xl lg:leading-5">
          We'd love to hear from you! Whether you have a question, feedback, or a specific inquiry—feel free to reach out using the form below. Our team will get back to you as soon as possible.
        </p>
        <ContactForm />
        </div>
        <div className="px-2 md:w-1/2 md:px-0 lg:space-y-10 xl:w-[40%]">
        <div className="lg:space-y-2">
          <h2 className="mt-5 text-primary drop-shadow-[0_0_0.4px_#006400] lg:text-xl">
            Call Us
          </h2>
          <p className="leading-5 lg:text-xl lg:leading-5">
          Have a quick question or need assistance right away? Give us a call! We're here to help and happy to assist you with anything you need. 
          </p>
          <a className="flex items-center gap-2 text-secondary text-xs lg:text-sm lg:gap-4" href="tel:+91 9991831473"><IoIosCall className="p-1 text-xl text-accent bg-secondary rounded-full lg:text-3xl lg:p-[0.4rem]" /> +91 9991831473</a>
        </div>
        <div className="lg:space-y-2">
          <h2 className="mt-5 text-primary drop-shadow-[0_0_0.4px_#006400] lg:text-xl">
            Visit Us
          </h2>
          <p className="leading-5 lg:text-xl lg:leading-5">
          Prefer to talk in person? You’re always welcome to stop by our office. Come meet our friendly team—we’d love to chat over a cup of chai!
          </p>
          <p className="flex items-center gap-2 text-secondary text-xs lg:text-sm lg:gap-4"><FaLocationDot className="p-1 text-xl text-accent bg-secondary rounded-full lg:text-3xl lg:p-[0.4rem]" /> 123001 Narnaul, Haryana, India</p>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
