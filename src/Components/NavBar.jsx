import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [show, setShow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Setting state based on scroll position
      const isShow = window.scrollY > 50;
      setIsScrolled(isShow);
    };

    // Adding scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Added logic to dynamically switch CSS classes
  const navbarClasses = `navbar ${isScrolled ? "scrolled" : ""}`;

  return (
    <div className={navbarClasses}>
      <div className="title">
        <img src={logo} alt="logo" />
        <h2>
         UMCA Chapel, Abuja
        </h2>
      </div>
      <div>
        <nav
          className={show ? "nav-links" : "nav-links-mobile"}
          onClick={() => setShow(true)}
        >
          <NavLink to="/">Upcoming Events</NavLink>
          <NavLink to="/videos">Uploaded Videos</NavLink>
          <NavLink to="/members">Fellowship Groups</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          {/* <NavLink to="/register">
            <button>Register</button>
          </NavLink> */}
        </nav>
        <button className="mobile-menu-icon" onClick={() => setShow(!show)}>
          {show ? <MenuIcon /> : <CloseIcon />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
