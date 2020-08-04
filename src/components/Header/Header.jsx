import React from "react";

import "../../assets/css/Home.css";
import Navbar from "../Navbar/Navbar";

function Header() {
  return (
    <div>
      {/* Begin Header */}
      <div className="header-wrapper" id="home">
        {/* Begin Hero */}
        <section className="hero is-large">
          {/* Begin Mobile Nav */}
          <nav className="navbar is-transparent is-hidden-desktop">
            {/* Begin Burger Menu */}
            <div className="navbar-brand">
              <div className="navbar-burger burger" data-target="mobile-nav">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            {/* End Burger Menu */}
            <div id="mobile-nav" className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-item">
                  <a className="navbar-item" href="#home">
                    Home
                  </a>
                </div>
                <div className="navbar-item">
                  <a className="navbar-item" href="#about-me">
                    About Me
                  </a>
                </div>
                <div className="navbar-item">
                  <a className="navbar-item" href="#services">
                    Services
                  </a>
                </div>
                <div className="navbar-item">
                  <a className="navbar-item" href="#skills">
                    Skills
                  </a>
                </div>
                <div className="navbar-item">
                  <a className="navbar-item" href="#my-work">
                    My Work
                  </a>
                </div>
                <div className="navbar-item">
                  <a className="navbar-item" href="#contact">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
          {/* End Mobile Nav */}
          {/* Begin Hero Content */}
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="subtitle">
                Hello, World! We Are <br /> <span>Digitarian</span>
              </h1>
              {/* <h2 className="title">Digitarian</h2> */}
            </div>
          </div>
          {/* End Hero Content */}
          {/* Begin Hero Menu */}
          <div className="hero-foot ">
            {/* <div className="hero-foot--wrapper"> */}
            {/* <div className="columns">
                <div className="column is-12 hero-menu-desktop has-text-centered"> */}
            <Navbar />
            {/* <ul>
                    <li className="is-active">
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about-me">About Me</a>
                    </li>
                    <li>
                      <a href="#services">Services</a>
                    </li>
                    <li>
                      <a href="#skills">Skills</a>
                    </li>
                    <li>
                      <a href="#my-work">My Work</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul> */}
            {/* </div>
              </div> */}
            {/* </div> */}
          </div>
          {/* End Hero Menu */}
        </section>
        {/* End Hero */}
      </div>
      {/* End Header */}
    </div>
  );
}

export default Header;
