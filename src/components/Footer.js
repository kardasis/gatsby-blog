import * as React from "react";
import { Link } from "gatsby";

import github from "../img/social/github.svg";
import linkedin from "../img/social/linkedin.svg";
import twitter from "../img/social/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="primary-row columns">
        <section className="menu column">
          <ul className="menu-list flex flex-row">
            <li>
              <Link to="/" className="navbar-item">
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </section>
        <div className="column social-icons">
          <div className="flex flex-row">
            <a title="Twitter" href="https://twitter.com/kardasis">
              <img className="invert" src={twitter} alt="Twitter" />
            </a>
            <a title="GitHub" href="https://github.com/kardasis">
              <img className="invert" src={github} alt="GitHub" />
            </a>
            <a
              title="LinkedIn"
              href="https://www.linkedin.com/in/ari-kardasis-a1b0a834/"
            >
              <img className="invert" src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
