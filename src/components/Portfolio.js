import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import todoList from "../assets/images/portfolio/todoList.png";
import heroes from "../assets/images/portfolio/listenMyHeroes.png";
import pokedex from "../assets/images/portfolio/pokedex.png";
import filer from "../assets/images/portfolio/filer.png";
import twitter from "../assets/images/portfolio/twitter.png";


const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>cliquez pour accéder à mes projets.</h1>

        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://todo.zyanassurally.me/" title="">
                <img alt="" src={todoList} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>todo-list</h5>
                    <p>Javascript</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://heroes.zyanassurally.me" title="">
                <img alt="" src={heroes} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>listen my heroes</h5>
                    <p>Javascript</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://pokedex.zyanassurally.me/" title="">
                <img alt="" src={pokedex} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>pokedex</h5>
                    <p>Javascript</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://filer.zyanassurally.me/" title="">
                <img alt="" src={filer} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Filer</h5>
                    <p>PHP</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://twitter.zyanassurally.me/" title="">
                <img alt="" src={twitter} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Twitter</h5>
                    <p>Twig/PHP</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
