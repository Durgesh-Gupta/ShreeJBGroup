import React from "react";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <ul>
        <div className="floatRight">
          <li>
            <a class="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#service">Service</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
