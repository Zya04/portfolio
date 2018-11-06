import React from "react";

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="#home">
          Acceuil
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#about">
          à propos
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#resume">
          résumé
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="#portfolio">
          projet
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
