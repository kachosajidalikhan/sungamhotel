import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // State to track if the menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className=" fixed z-50 w-full bg-[#293941] text-white">
      <div className="container py-1 mx-auto flex items-center justify-between">
        {/* Brand Name */}
        
        
          <div className="md:hidden w-16">
          <Link to="/" >
            {/* Sun<span className="text-blue-500">Gam</span> */}
            <img src="/images/Sungam3.png" alt="" className="w-full" />
          </Link>
          </div>

        <div className="hidden md:block w-36">
        <Link to="/" >
          {/* Sun<span className="text-blue-500">Gam</span> */}
          <img src="/images/Sungam.png" alt="" className="w-full" />
        </Link>
        </div>
        

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle navigation"
          onClick={toggleMenu} // Toggle menu on click
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        

        {/* Navigation Links */}
        <div className="px-4 py-4 hidden lg:flex space-x-6">
          <Link to="/" className="text-[#c2c3c7] hover:text-[#c59a63]">
            Home
          </Link>
          <Link to="/gallery" className="text-[#c2c3c7] hover:text-[#c59a63]">
            Gallery
          </Link>
          <Link to="/rooms" className="text-[#c2c3c7] hover:text-[#c59a63]">
            Our Rooms
          </Link>
          <Link to="/services" className="text-[#c2c3c7] hover:text-[#c59a63]">
            Services
          </Link>
          <Link to="/events" className="text-[#c2c3c7] hover:text-[#c59a63]">
            Events
          </Link>
          <Link to="/menu" className="text-[#c2c3c7] hover:text-[#c59a63]">
            Menu
          </Link>
          <Link to="/aboutus" className="text-[#c2c3c7] hover:text-[#c59a63]">
            About Us
          </Link>
          <Link to="/contactus" className="text-[#c2c3c7] hover:text-[#c59a63]">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (<>
        <div className="lg:hidden flex flex-col space-y-4 items-center py-4">
          <Link to="/" className="text-[#c2c3c7] hover:text-[#c59a63]" onClick={handleLinkClick}>
            Home
          </Link>
          <Link
            to="/gallery"
            className="text-[#c2c3c7] hover:text-[#c59a63]"
            onClick={handleLinkClick}
          >
            Gallery
          </Link>
          <Link
            to="/rooms"
            className="text-[#c2c3c7] hover:text-[#c59a63]"
            onClick={handleLinkClick}
          >
            Our Rooms
          </Link>
          <Link
            to="/services"
            className="text-[#c2c3c7] hover:text-[#c59a63]"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            to="/events"
            className="text-[#c2c3c7] hover:text-[#c59a63]"
            onClick={handleLinkClick}
          >
            Events
          </Link>
          <Link
            to="/menu"
            className="text-[#c2c3c7] hover:text-[#c59a63]"
            onClick={handleLinkClick}
          >
            Menu
          </Link>
          <Link
            to="/aboutus"
            className="text-[#c2c3c7] hover:text-[#c59a63]"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            to="/contactus"
            className="text-[#c2c3c7] hover:text-[#c59a63]"
            onClick={handleLinkClick}
          >
            Contact
          </Link>
        </div>
        </>)}
    </nav>
  );
};

export default Header;
