import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/Navbar.css";
import logo from "../images/logo.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}>
          <NavLink className="home" to="/"><li>Home</li></NavLink>
          <NavLink className="about" to="/about"><li>About</li></NavLink>
          <NavLink className="products" to="/products"><li>Products</li></NavLink>
          <NavLink className="contact" to="/contact"><li>Contact</li></NavLink>
        </ul>

        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </>
  );
}

export default Navbar;

