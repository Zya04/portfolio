import React from "react";

import Education from "./Education";
import Work from "./Work";
import Skills from "./Skills";
import ProProject from "./proProject"

const Resume = () => (
  <section id="resume">
    <Education />
    <ProProject />
    <Work />
    <Skills />
  </section>
);

export default Resume;
