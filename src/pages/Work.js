import React, { Component } from "react";
import resume from "../downloads/Resume.pdf";

import Starry from "../img/starry.gif";

export default function Work() {
  return (
    <div>
      <div id="experience-block">
        <div id="resume">
          <a href={resume} download>
            <i class="fas fa-file-download"></i> Resume PDF
          </a>
        </div>
        Andrew Liu
        <br />
        <span style={{ color: "grey" }}>I'm available for contract and freelance work:</span>
        <br />
        <div class="title-indent">
          Web dev & Illustration
          <div class="colortext">Web Dev</div>
        </div>
        <div class="text-indent">• Struggling to develop interactive sites?</div>
        <div class="text-indent">• Looking to develop creative coding projects?</div>
        <div class="text-indent">• Developing accessible and responsive designs?</div>
        <div class="text-indent">• Turn designs and project descriptions to full websites!</div>
        <div class="text-indent">• Design websites from the ground up, starting with mockups!</div>
        <br />
        <div class="text-indent">• Full-stack system design</div>
        <div class="text-indent">• Data visualization</div>
        <br />
        <div class="title-indent" style={{ color: "grey", fontWeight: "bold" }}>
          Art Direction
        </div>
        <div class="text-indent">• Looking for someone to help with design direction on 2D game projects?</div>
        <div class="text-indent">• Working on developing serious games?</div>
        <div class="title-indent" style={{ color: "grey", fontWeight: "bold" }}>
          Illustration
        </div>
        <div class="text-indent">• Illustration for album covers, promotional art, or book covers</div>
        <div class="title-indent" style={{ color: "grey", fontWeight: "bold" }}>
          Character Design
        </div>
        <div class="text-indent">• Character Design for animation, stories, game projects</div>
      </div>
      <img src={Starry} id={"starry-left"} />
      <img src={Starry} id={"starry-right"} />
    </div>
  );
}
