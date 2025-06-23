import { useContext, useState } from "react";
import axios from "axios";
import { ShopContext } from "../../Context/ShopContext";

function ContactForm() {
  const { backendUrl } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        backendUrl + "api/contact/message",
        formData
      );
      if (response.data.success) {
        setResponseMessage(
          response.data.message || "Form submitted successfully!"
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          message: "",
        });
      } else {
        setResponseMessage(response.data.message || "Form submitted failed!");
      }
    } catch (error) {
      setResponseMessage(
        error.message || "An error occurred while submitting the form."
      );
      console.error("Form submission error:", error);
    }

    // Hide the message after 5 seconds
    setTimeout(() => {
      setResponseMessage("");
    }, 5000);
  };

  return (
    <form className="flex flex-col mt-5 lg:mt-10" onSubmit={handleFormSubmit}>
      {responseMessage && (
        <p className="mt-4 text-sm text-red-500">{responseMessage}</p>
      )}
      <div className="w-full flex flex-wrap gap-x-2 gap-y-5 lg:justify-between lg:gap-y-10 xl:gap-y-14">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-[48%] pb-2 bg-transparent text-sm placeholder:text-black text-black border-b-2 border-black/50 outline-none lg:text-lg lg:w-[40%] xl:text-xl"
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-[48%] pb-2 bg-transparent text-sm placeholder:text-black text-black border-b-2 border-black/50 outline-none lg:text-lg lg:w-[40%] xl:text-xl"
          placeholder="Email Address"
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className="w-[48%] pb-2 bg-transparent text-sm placeholder:text-black text-black border-b-2 border-black/50 outline-none lg:text-lg lg:w-[40%] xl:text-xl"
          placeholder="Country"
        />
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-[48%] pb-2 bg-transparent text-sm placeholder:text-black text-black border-b-2 border-black/50 outline-none lg:text-lg lg:w-[40%] xl:text-xl"
          placeholder="Phone Number"
        />
      </div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        className="w-full h-20 mt-5 text-sm border-b-2 bg-transparent border-black/50 text-black placeholder:text-black resize-none outline-none lg:text-lg lg:mt-10 xl:text-xl xl:mt-14 xl:h-32"
        placeholder="Message"
      ></textarea>
      <button
        type="submit"
        className="px-6 py-1 mt-6 self-end rounded-sm bg-secondary hover:bg-[#B0890A] duration-300 text-accent lg:rounded-[0.2rem] lg:tracking-wider xl:px-7 xl:text-xl xl:rounded-[0.25rem]"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
