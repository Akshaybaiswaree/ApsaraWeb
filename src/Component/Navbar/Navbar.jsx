import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  const location = useLocation();
  const isActive = (route) => {
    return location.pathname === "/" + route;
  };

  return (
    <>
      <nav
        class="navbar navbar-expand-lg fixed-top"
        style={{ backgroundColor: " #e6e6ff" }}
      >
        <div class="container-fluid">
          <Link to="/" className="nav-link" onClick={closeNavbar}>
            Apsara Dry Cleaners
          </Link>
          <button
            className={`navbar-toggler ${isNavbarOpen ? "collapsed" : ""}`}
            onClick={toggleNavbar}
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isNavbarOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <div class="collapse navbar-collapse order-lg-1" id="navbarNav"> */}
          <div
            className={`collapse navbar-collapse order-lg-1 
            ${
              isNavbarOpen ? "show" : "" // Add 'show' class if navbar is open
            }`}
            id="navbarNav"
            // style={{
            //   transition: "max-height 0.8s ease-in-out", // Add smooth transition
            //   maxHeight: isNavbarOpen ? "1000px" : "0", // Set max-height based on navbar state
            // }}
          >
            <ul class="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="services"
                  className="nav-link"
                  activeClassName="active"
                  style={{ color: isActive("services") ? "green" : "inherit" }}
                  onClick={closeNavbar}
                >
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="pricing"
                  className="nav-link"
                  activeClassName="active"
                  style={{ color: isActive("pricing") ? "green" : "inherit" }}
                  onClick={closeNavbar}
                >
                  Pricing
                </Link>
              </li>{" "}
              <li class="nav-item">
                <Link
                  to="blog"
                  className="nav-link"
                  activeClassName="active"
                  style={{ color: isActive("blog") ? "green" : "inherit" }}
                  onClick={closeNavbar}
                >
                  Blog
                </Link>
              </li>{" "}
              <li class="nav-item">
                <Link
                  to="contactus"
                  className="nav-link "
                  activeClassName="active"
                  style={{ color: isActive("contactus") ? "green" : "inherit" }}
                  onClick={closeNavbar}
                >
                  Contact Us
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="aboutus"
                  className="nav-link "
                  activeClassName="active"
                  style={{ color: isActive("aboutus") ? "green" : "inherit" }}
                  onClick={closeNavbar}
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
