import * as React from "react";
import { Link } from "gatsby";

import github from "../img/social/github.svg";
import linkedin from "../img/social/linkedin.svg";
import twitter from "../img/social/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
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
                    <Link className="navbar-item" to="/products">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact/examples">
                      Form Examples
                    </Link>
                  </li>
                  <li>
                    <a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Latest Stories
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <a title="Twitter" href="https://twitter.com/kardasis">
                <img className="invert h-8" src={twitter} alt="Twitter" />
              </a>
              <a title="GitHub" href="https://github.com/kardasis">
                <img className="invert h-8 mt-3" src={github} alt="GitHub" />
              </a>
              <a title="LinkedIn" href="https://www.linkedin.com/in/ari-kardasis-a1b0a834/">
                <img className="invert h-8 mt-3" src={linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
