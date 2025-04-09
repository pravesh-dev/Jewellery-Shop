import React from 'react';
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className=''>
      <img src={logo} alt="logo image" />
      <button>Logout</button>
    </div>
  )
}

export default Navbar
