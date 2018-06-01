import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilePic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>A propos de moi</h2>
        <p>
          jeune homme de 19 ans étudiant a <span>Sup'Internet</span>. Fan de mangas, de jeux vidéos et de langage informatique.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contactez moi</h2>
            <p className="address">
              <span>Zya Nassurally</span>
              <br />
              <span>
                286 rue de Stalingrad
                <br /> 93700 Drancy, France
              </span>
              <br />
              <span>0771154636</span>
              <br />
              <span>zya.nassurally@supinternet.fr</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
