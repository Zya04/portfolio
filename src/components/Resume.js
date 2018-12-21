import React from "react";

import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import ProProject from "./proProject";
import Portfolio from './Portfolio'

const Resume = () => (
  <section id="resume">
    <Education />
    <ProProject />
    <Work />
    <Skills />
    <Portfolio />
  </section>
);

export default Resume;
