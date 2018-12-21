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
          Jeune étudiant de 19 ans à <span>Sup'Internet</span>. Fan de culture japonaises, de sport et de langage informatique.
          <br/>
          Dès la Terminale, j'ai découvert ma passion pour les langages informatiques où on a dû rendre un projet en HTML 5 et CSS3, 
          c'est en cours de ce projet que j'ai commencé à chercher des écoles spécialisé dans ce domaine.
          <br />
          Après avoir fait de nombreuses portes ouverte, Sup'Internet m'a
          beaucoup plus, par son ambiance, la formation qu'il propose et les intervenant qui font cours.
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
