import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href = "https://www.instagram.com/zya_lmauricien/" >
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/Zya04">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/zya-nassurally-2013ab159/">
        <FaLinkedin />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
