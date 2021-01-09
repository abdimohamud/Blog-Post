import React from "react";
import avi from "../assets/avi.svg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="masthead" class="site-header outer">
      <div class="inner">
        <div class="site-header-inside">
          <div class="site-branding">
            <p class="site-logo">
              <Link aria-current="page" class="" href="/">
                <img src={avi} alt="avi" />
              </Link>
            </p>
          </div>
          <button id="menu-open" class="menu-toggle">
            <span class="screen-reader-text">Close Menu</span>
            <span class="icon-menu" aria-hidden="true"></span>
          </button>
          <nav
            id="main-navigation"
            class="site-navigation"
            aria-label="Main Navigation"
          >
            <div class="site-nav-inside">
              <button id="menu-close" class="menu-toggle">
                <span class="screen-reader-text">Open Menu</span>
                <span class="icon-close" aria-hidden="true"></span>
              </button>
              <ul class="menu">
                <li class="menu-item current-menu-item">
                  <a aria-current="page" class="" href="/">
                    Home
                  </a>
                </li>
                <li class="menu-item">
                  <Link to="/overview">Overview</Link>
                </li>
                <li class="menu-item">
                  <Link to="/blog/">Blog</Link>
                </li>
                <li class="menu-item">
                  <Link to="/about/">About</Link>
                </li>
                <li class="menu-item">
                  <Link to="/contact/">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
