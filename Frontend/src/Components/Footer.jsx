import logo from '/logo.svg'
import underline from '../Assets/footer-line.svg'
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  const date = new Date();

  return (
    <footer className="bg-dark text-accent py-4 md:px-5 lg:px-16 lg:pt-10 md:space-y-2 lg:space-y-4">
      <div className="w-full md:flex items-center justify-between">
      {/* Footer Logo Section */}
      <div className="mb-8 flex flex-col gap-5 items-center md:gap-0 md:mb-0">
        <div className="md:flex items-start">
        <img
          src={logo}
          alt="Imperial Grand Hotel Logo"
          className="w-20 -mb-2 mx-auto md:mb-0 md:-mt-3 md:-mx-2"
          />
        <div className="flex flex-col items-center md:items-start">
            <span className="text-[1.65rem] tracking-wider md:text-3xl uppercase font-bellefair">joyería</span>
            <span className="text-[0.6rem] md:text-[0.9rem] text-white/90 uppercase font-mulish">
            Top Quality is Our Priority
            </span>
        </div>
        </div>
        <div className="flex justify-center space-x-4 md:-ml-6 md:space-x-2">
          <a href="http://linkedin.com/company/hexadefend" className="text-dark bg-secondary rounded-full text-sm p-[0.3rem]"><FaLinkedinIn /></a>
          <a href="" className="text-dark bg-secondary rounded-full text-sm p-[0.3rem]"><FaTwitter /></a>
          <a href="http://facebook.com/hexadefendofficial" className="text-dark bg-secondary rounded-full text-sm p-[0.3rem]"><FaFacebookF/></a>
          <a href="http://instagram.com/hexadefend" className="text-dark bg-secondary rounded-full text-sm p-[0.3rem]"><FaInstagram /></a>
        </div>
      </div>

      {/* Useful Links Section */}
      <div className="mb-8 flex flex-col items-center md:mb-0">
        <h2 className="text-lg tracking-wider font-lora text-secondary mb-2 relative w-max">
          USEFUL LINKS
          <img src={underline} className="w-full" alt="curved underline" />
        </h2>
        <ul className="w-40 flex font-Cormorant flex-wrap gap-3 lg:w-72 xl:w-96">
          <li className="w-[45%] text-center lg:w-[30%]">
            <Link to="/" className="hover:text-secondary">
              Home
            </Link>
          </li>
          <li className="w-[45%] text-center lg:w-[30%]">
            <Link to="/blog" className="hover:text-secondary">
              Blog
            </Link>
          </li>
          <li className="w-[45%] text-center lg:w-[30%]">
            <Link to="/contact" className="hover:text-secondary">
              Contact
            </Link>
          </li>
          <li className="w-[45%] text-center lg:w-[30%]">
            <Link to="/shop" className="hover:text-secondary">
              Shop
            </Link>
          </li>
          <li className="w-[45%] text-center lg:w-[30%]">
            <Link to="/about" className="hover:text-secondary">
              About
            </Link>
          </li>
        </ul>
      </div>
      {/* Signup Newsletter section */}
      <div className="w-full flex flex-col items-center mb-8  md:items-start md:w-72 md:mb-0 lg:w-80">
          <h3 className="text-lg leading-5 mb-3 font-light">SIGNUP FOR <br /> <span className="tracking-widest font-normal">NEWSLETTER</span></h3>
          <form className='w-72 h-10 flex items-center bg-[#E4CA73] border border-secondary md:w-full overflow-hidden lg:rounded-md'>
            <input type="email" className="w-[65%] h-full font-lora tracking-wide text-sm pl-2 text-accent bg-[#E4CA73] border-none outline-none placeholder:text-accent lg:tracking-widest lg:pl-4" name="footerEmail" placeholder="Enter Your Email" required autoComplete="off" />
            <button className="w-[35%] text-xs h-full bg-secondary text-accent tracking-wider font-lora font-semibold lg:tracking-widest lg:text-sm lg:rounded-l-md" type="submit">Submit</button>
          </form>
        </div>
      </div>

      <span className="w-[90%] h-[1px] bg-accent/40 block mx-auto mb-8 md:mb-0" />
      {/* Footer Bottom Section */}
      <div className="text-sm text-accent font-lora flex flex-col items-center md:flex-row md:justify-between lg:tracking-widest">
        <p className="lg:w-32 xl:w-60"></p>
        <p>&copy; {date.getFullYear()} Joyería All Rights Reserved.</p>
        <p className="space-x-2">
          <Link to="/privacy" className="hover:text-secondary">
            Privacy Policy
          </Link> /
          <Link to="/terms" className="hover:text-secondary">
            Terms of Use
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
