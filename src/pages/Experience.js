import React, { Component } from "react";
import resume from "../downloads/Resume.pdf";

export default function Experience() {
  return (
    <div>
      <div id="experience-block">
        <div id="resume">
          <a href={resume} download>
            <i class="fas fa-file-download"></i> Resume PDF
          </a>
        </div>
        Experiences
        <div class="title-indent">
          <h4>
            Software Engineer/ User Experience Design Intern -- 05/19 - 08/19
          </h4>
          <div class="colortext">RGA Shanghai</div>
        </div>
        <div class="text-indent">
          • Developed a hybrid-web app prototype with backend functionality{" "}
          <br /> • Wrote documentation for project proposals to share with
          advertising clients <br /> • Designed user experience flows and
          conducted market research for project targeting
        </div>
        <br />
        <div class="title-indent">
          Learning Assistant for Intro to Computer Programming -- 09/18 - 05-19
          <div class="colortext">
            NYU Shanghai Academic Resource Center - Department of Computer
            Science
          </div>
        </div>
        <div class="text-indent">
          • Supported students and professors with Python instruction
          <br /> • Held office hours for individual and group tutoring sessions{" "}
          <br /> • Liaison between faculty and students both within and beyond
          the lecture
        </div>
      </div>
      <div id="involvement-block">
        Involvement
        <div class="title-indent">
          Marketing Committee -- 08/2019 - 05/2020
          <div class="colortext">NYU Asian Heritage Month</div>
        </div>
        <div class="text-indent">
          • Communicated with Asian organizations to host New York University’s
          Asian Heritage Month Theme Month
          <br /> • Coordinated with HBO to show HBO’s A/PA Visionaries Shorts
          <br /> • Designed organization social media promotion materials
        </div>
        <br />
        <div class="title-indent">
          Director of Events -- 09/2018 - 05/2019
          <div class="colortext">NYU Shanghai x HSBC Annual Hackathon</div>
        </div>
        <div class="text-indent">
          • Handled sponsorships and event logistics for the first joint
          data-science hackathon in China
          <br /> • Successfully raised over 200,000 RMB from Intel, HSBC, and
          New York University
          <br /> • Coordinated with New York University and HSBC executives to
          challenge teams to leverage machine learning with real world customer
          data from HSBC
        </div>
        <br />
        <div class="title-indent">
          Founding Member and Secretary -- 09/2018 - 05/2019
          <div class="colortext">SPLICE Computer Science Club</div>
        </div>
        <div class="text-indent">
          • Organized and hosted workshops and mini hackathons
          <br /> • Cooperated with other clubs in organizing major events
        </div>
        <br />
        <div class="title-indent">
          President -- 09/2018 - 05/2019
          <div class="colortext">NYUSH Volleyball Club</div>
        </div>
        <div class="text-indent">
          • Organized and hosted volleyball courts and freeplays
        </div>
      </div>
    </div>
  );
}
