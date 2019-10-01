import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Études</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Lycée Germaine Tillon</h3>
          <p className="info">
            Baccalauréat
            <span>&bull;</span>
            <em className="date">2016-2017</em>
          </p>
          <p>
            Baccalauréat STMG option système d'information et de gestion.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Sup'Internet</h3>
          <p className="info">
            développeur web
            <span>&bull;</span>
            <em className="date">2017-2020</em>
          </p>
          <p>
            Bachelor Manager de projet web et expertise web développement.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
