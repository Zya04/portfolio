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
        <h3><a href="https://zya04.github.io/my-todo-list/"> My todo list</a></h3>
          <p>
           Todo-list avec stockage dans le localstorage pouvant aussi changer la couleur de la police et du fond.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3><a href="http://zyo-new-todo-list.surge.sh/">New todo-list</a> </h3>
          <p>
            Nouvelle todo-list qui est réalisé en reactJS.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          
          <h3> <a href="https://zya04.github.io/pokedex/">Pokedex</a></h3>
          <p>
            Pokedex fait en CSS et Javascript, avec récuperation de données
            en JSON et AJAX.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
