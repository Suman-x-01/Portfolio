import React, { useState, useEffect, useRef } from "react";
// import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const dropdownRef = useRef(null); // Ref for dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicked outside or after selecting an option
  const handleOptionClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="n-wrapper"
      id="Navbar"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      {/* left */}
      <div className="n-left">
        <div className="n-name">Suman</div>
        {/* <Toggle /> */}
      </div>
      {/* right */}
      <div className="n-right">
        <div className={`n-list ${isOpen ? "open" : ""}`} ref={dropdownRef}>
          <ul style={{ listStyleType: "none" }}>
            {/* Added `onClick` directly on each <Link> to close dropdown */}
            <li>
              <Link
                activeClass="active"
                to="Navbar"
                spy={true}
                smooth={true}
                onClick={handleOptionClick} // Close dropdown when an option is selected
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                onClick={handleOptionClick} // Close dropdown when an option is selected
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                onClick={handleOptionClick} // Close dropdown when an option is selected
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                onClick={handleOptionClick} // Close dropdown when an option is selected
              >
                Projeccts
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Button */}
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Unicode character for hamburger icon */}
        </div>

        {/* Contact Button on a new line */}
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
