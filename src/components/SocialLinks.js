import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href = "https://twitter.com/ZyanaNass">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href = "https://www.instagram.com/zya_lmauricien/" >
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="#">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
