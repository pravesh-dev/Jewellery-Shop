import { useState, useContext, useEffect } from "react";
import axios from "axios"; // Import axios for HTTP requests
import sideImage from "../../Assets/loginSignupPage/login-side-image.svg";
import user from "../../Assets/loginSignupPage/user.svg"; // Import user icon asset
import lock from "../../Assets/loginSignupPage/lock.svg"; // Import lock icon asset
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Login() {
  const navigate = useNavigate(); // Use navigate hook for navigation
  const { token, setToken, backendUrl } = useContext(ShopContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State to hold form data and response message
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
  setResponseMessage("Password must be at least 6 characters.");
  return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    setResponseMessage("Please enter a valid email address.");
    return;
  }


    setIsSubmitting(true);
    try {
      const response = await axios.post( backendUrl + 'api/user/login', formData);
      if(response.data.success){
        setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
        setResponseMessage(response.data.message || 'Login successful!');
      }else{
        console.log('login failed')
        setResponseMessage(response.data.message || 'Login Failed!');
      }
    } catch (error) {
      setResponseMessage('An error occurred during login.');
      console.error('Login error:', error);
    }

    // Hide the message after 5 seconds
    setTimeout(() => {
      setResponseMessage('');
    }, 5000);

    setIsSubmitting(false);
  };

  useEffect(()=> {
    if(token) {
      navigate('/')
    }
  },[token, navigate])

  return (
    <div className="w-full h-full absolute top-0 left-0 font-mulish flex justify-center md:gap-10 lg:gap-20 xl:px-28 xl:justify-between">
      <form
        className="w-80 px-2 h-full flex flex-col justify-center lg:w-96 xl:ml-14 xl:w-auto"
        onSubmit={handleFormSubmit}
      >
        <div className="flex justify-between px-3 mb-10 lg:mb-14 xl:justify-start xl:gap-16">
          <Link
            to="/login"
            className="text-[#62DC7C] text-2xl border-b-2 border-[#62DC7C] px-2 pb-1 lg:text-4xl lg:px-4 xl:text-[2.1rem] text-stroke-1 xl:pb-3 xl:px-6 xl:border-b-[3.5px]"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-gray-400 text-2xl border-b-2 border-gray-300 px-2 pb-1 lg:text-4xl lg:px-4 xl:text-[2.1rem] text-stroke-1 xl:pb-3 xl:px-6 xl:border-b-[3.5px]"
          >
            Sign up
          </Link>
        </div>

        {/* Response Message */}
        {responseMessage && (
          <p className="mt-4 text-sm text-red-500">{responseMessage}</p>
        )}

        {/* Input Fields */}
        <div className="space-y-8 lg:space-y-12 xl:space-y-16">
          {/* Email */}
          <div className="relative xl:w-[28.6rem] xl:h-[3.6rem]">
            <img
              src={user}
              className="w-6 absolute left-3 top-1/2 transform -translate-y-1/2 xl:w-[1.8rem] xl:left-6"
              alt="user icon"
            />
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email here"
              autoComplete="off"
              className="w-full pl-12 py-3 rounded-md border-0 shadow-lg shadow-[#C8F3BF] focus:outline-none focus:ring-1 ring-primary lg:rounded-full lg:pl-16 xl:py-0 xl:h-full xl:text-[1.12rem] xl:pl-20"
            />
          </div>

          {/* Password */}
          <div className="relative xl:w-[28.6rem] xl:h-[3.6rem]">
            <img
              src={lock}
              className="w-6 absolute left-3 top-1/2 transform -translate-y-1/2 xl:w-[1.8rem] xl:left-6"
              alt="user icon"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              autoComplete="off"
              className="w-full pl-12 py-3 rounded-md border-0 shadow-lg shadow-[#C8F3BF] focus:outline-none focus:ring-1 ring-primary lg:rounded-full lg:pl-16 xl:py-0 xl:h-full xl:text-[1.12rem] xl:pl-20"
            />
          </div>
        </div>

        <div className="lg:flex justify-between items-center xl:mt-10">
          {/* Forgot Password */}
          <a
            href="#"
            className="text-[#62DC7C] mt-7 text-sm hover:underline hover:text-green-600 xl:text-[1.12rem]"
          >
            Forgot your password?
          </a>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 bg-[#009400] text-accent text-lg py-2 rounded-md lg:w-auto lg:px-10 lg:rounded-full xl:p-0 xl:w-[9.8rem] xl:h-[3.3rem] xl:text-[1.5rem]"
          >
            {isSubmitting ? 'Processing...' : 'Login'}
          </button>
        </div>
      </form>
      <div className="hidden md:flex justify-center items-center">
        <img className="w-80 lg:w-[27rem] xl:w-[32rem]" src={sideImage} alt="image" />
      </div>
    </div>
  );
}

export default Login;
