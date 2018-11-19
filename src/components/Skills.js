import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Compétences</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand html" />
            <em>HTML5</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>CSS3/SCSS</em>
          </li>
          <li>
            <span className="bar-expand php" />
            <em>PHP</em>
          </li>
          <li>
            <span className="bar-expand javascript" />
            <em>Javascript</em>
          </li>
          <li>
            <span className="bar-expand react" />
            <em>React</em>
          </li>
          <li>
            <span className="bar-expand sql" />
            <em>MySQL</em>
          </li>
           <li>
            <span className="bar-expand jquery" />
            <em>JQuery</em>
          </li>
           <li>
            <span className="bar-expand github" />
            <em>Github</em>
          </li>
          <li>
            <span className="bar-expand agilite" />
            <em>agilité</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
