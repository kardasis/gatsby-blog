import React, { useState } from "react";
import { Link } from "gatsby";
import youtube from "../img/social/youtube.svg";
import github from "../img/social/github.svg";
import linkedin from "../img/social/linkedin.svg";
import twitter from "../img/social/twitter.svg";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          {/* Hamburger menu */}
                    <Link to="/" className="navbar-item" title="Logo">
                    <strong>ARI KARDASIS</strong>
          </Link>
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul id="navMenu" className={`navbar-start has-text-centered navbar-menu ${isActive && "is-active"}`}>
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/">
                Home
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            </li>
            <li className="navbar-item" style={{padding: "0px"}}>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            </li>
          <li className="navbar-end">
            <a
              className="navbar-item"
              href="https://twitter.com/kardasis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={twitter} alt="Twitter" />
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://www.youtube.com/channel/UC-Q7CrYOh6V6-6vol8BFoNg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={youtube} alt="YouTube" />
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://github.com/kardasis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://www.linkedin.com/in/ari-kardasis-a1b0a834/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={linkedin} alt="LinkedIn" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
