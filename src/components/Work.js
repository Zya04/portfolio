import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Projet étudiant</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Pokedex</h3>
          <p>
            Pokedex fait en CSS et Javascript, avec récuperation de données
            en JSON et AJAX.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Listen my heroes</h3>
          <p>
            4 images de personnages différents avec des boutons, au clic sur les boutons restent affichés
            les hommes, et les femmes ou tout les deux, fait en
            CSS et Javascript.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>My todo list</h3>
          <p>
            Système de to-do list stocké dans le localStorage 
            en Javascript.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>Filer</h3>
          <p>
            Système de gestion de fichier avec un système de 
            connexion fait en PHP et MySQl.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>Twitter</h3>
          <p>
            Twitter avec de l'ajax pour récupérer les tweets 
            dynamiquement tous ça stocké dans une base de données. 
            Fait en PHP, Twig, Javascript et MySQl.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
