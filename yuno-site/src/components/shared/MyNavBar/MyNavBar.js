import React from "react";
import "./MyNavBar.scss";

class NavBar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/Home">
          <img
            src="https://raw.githubusercontent.com/williaj615/Yuno/master/yuno-site/photos/YUNO%20LOGO.png"
            alt="yuno-logo"
          ></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/About">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Programs">
                Programs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Events">
                Events
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Resources">
                Resources
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
