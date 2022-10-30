import React from "react";

const NavBar = () => {
  return (
    <div className="navbarContainer" style={{ border: "1px solid red" }}>
      <ul>
        <div className="floatRight">
          <li>
            <a class="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
