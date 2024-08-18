import React, { Component } from "react";
import Project from "../components/Project";

import SC_paper from "../downloads/SC_REPORT.pdf";
//project imgs
import mile666_img from "../img/Mile66(6).gif";
import incubusMD_img from "../img/IncubusMD.gif";
import narrative_img from "../img/Narrative.png";
import restoration_img from "../img/restoration.png";
import ten65_img from "../img/gamestill.png";
import duelality_img from "../img/duelality.gif";
import citation_img from "../img/citation.png";
import SC_img from "../img/webapp.png";
import scared_img from "../img/scaredbot.png";
import diced_img from "../img/diced.gif";
import progress_img from "../img/progress.png";
import opengl_img from "../img/opengl.gif";
import cleanAlpha_img from "../img/asepriteScript.png";
import colorMeSilly_img from "../img/colormascot.gif";
import betweenWorlds_img from "../img/banner.png";
import muniEmoji_img from "../img/muniEmoji.gif";
import mapc_60th_img from "../img/60th-mapc.png";
import webapp_template_img from "../img/webapp-template.png";
import rental_listings_img from "../img/rental-listings.png";
import mapc_design_img from "../img/mapc-design-system.png";

let mapc_regional_map = (
  <div>
    <text>
      The MAPC embedded regional foot trails map is a project that I led translating a static map into an interactive web map to be embedded into the
      MAPC landlines site. This project was built using the foundational components and design philosophy that I had helped set up with the MAPC
      component library, as the first use case for the MAPC component library it served to greatly increase efficiency for an initial MVP. This
      project also makes use of content management workflows that I helped establish at MAPC, using a standardized Airtable base setup to allow live
      content management by product experts; effectively cutting out redundant middlemen for providing data fidelity updates. This version of the map
      was initially forked off of the Landline map.
    </text>
  </div>
);

let mapc_landline_map = (
  <div>
    <text>
      The MAPC embedded landline map is a project that I led translating a static map into an interactive web map to be embedded into the MAPC
      landlines site. This project was built using the foundational components and design philosophy that I had helped set up with the MAPC component
      library, as the first use case for the MAPC component library it served to greatly increase efficiency for an initial MVP. This project also
      makes use of content management workflows that I helped establish at MAPC, using a standardized Airtable base setup to allow live content
      management by product experts; effectively cutting out redundant middlemen for providing data fidelity updates.
    </text>
  </div>
);

let mapc_rental_listings_web = (
  <div>
    <text>
      The Metro Boston Rental Listings Database (RLDB) is a comprehensive database of point-level market value rental listings. This project is
      intended as a web portal to streamline the existing user workflow in retrieving raw data and data visualizations. This project also serves as a
      public facing interface to help present MAPC rental listings data to the public in a easy to access and catered portal.
    </text>
  </div>
);

let mapc_webapp_templates = (
  <div>
    <text>
      This repository is a testing ground for webapp templates for streamlining new app generation, done as part of the MAPC Design System
      infrastructure project. The intent is to create an App page generator with MAPC style guidelines and theming as a starting point for all future
      webapp dev projects, similarly to Create-React-App. As a standard, templates are built in Typescript using in file styling with
      styled-components. These templates can be tested on the template storybook.
      <br />
      <br />
      Templates All templates are built using themes pulled from MAPC design documentation, and other constants data found in the constants directory.
      The format of the themes found in the templates are standardized with mapc-design-system, with room to be changed.
    </text>
  </div>
);

let mapc_design_system = (
  <div>
    <text>
      This is a small experimental component library connected to the npm registry. Developed as part of an effort to design a bidirectional workflow
      of focusing on the development of independent modular components to incorporate and reuse in future development projects to streamline project
      MVP standup time. <br />
      <br />
      Visit the Storybook <a href="https://mapc.github.io/mapc-components/?path=/docs/overview-introduction--docs"> here</a>
    </text>
  </div>
);

let mapc_60th = (
  <div>
    <text>
      Quick internal community engagement single day development project '60th-MAPC-timeline'. An exercise in developing and using imported and
      reusable modular components from component libraries to speed up and develop streamlined workflow of new dev projects.
      <br />
      <br />
      Visit the site <a href="https://mapc.github.io/60th-site/">here</a>
      <br />
      Visit the Github repo <a href="https://github.com/MAPC/60th-site"> here</a>
    </text>
  </div>
);

let muniEmoji_body = (
  <div>
    <text>
      Muni Emoji is a creative coding project developed at MAPC for internal community engagement and discussion over a fun light-hearted topic of
      international emoji day! This project covers the 101 municpalities within the MAPC region, providing a fun way to engage with others in the area
      and learn more fun facts about the region!
      <br />
      <br />
      Lead and developed quick 2-day creative coding community engagement project 'Muni Emoji', reaching internal MAPC staff, general public, and
      legislators. Built using ReactJS, D3.js, with an Airtable backend. Referenced on Medium{" "}
      <a href="https://medium.com/dataservicesblog/introducing-mapc-muni-emoji-map-%EF%B8%8F-26ba02cdfa92">here</a>
      <br />
      Visit the Github repo <a href="https://github.com/MAPC/EmojiKotH"> here</a>
    </text>
  </div>
);

let betweenWorlds_body = (
  <div>
    <text>
      Between Worlds is a combat integrated puzzle game with classic dungeon crawler puzzle mechanics. You play as a hunter in a tundra landscape, and
      encounter a deer which has been corrupted by a mysterious alien entity. You must navigate through combat and puzzles in different worlds to
      progress into the heart of the alien dungeon and prevent the worlds from being corrupted.
      <br />
      <br />
      Built in Godot, assets by Me.
      <br />
      <a href="https://not-absent.itch.io/between-worlds">LINK</a>
    </text>
  </div>
);
let colorMeSilly_body = (
  <div>
    <text>
      Game developed during <i>NYU Game Design 2023</i> focusing on game characteristics, namely following the concepts of (Dexterity vs Strategy),
      (Gameplay Heuristics), (Scaling Difficulty & Mastery). This game is designed with several heuristics in mind, with a exceedingly simple mechanic
      that still provides challenge and allows for player mastery.
      <br />
      <br />
      Built in Godot, assets by Me.
      <br />
      <a href="https://not-absent.itch.io/color-me-silly">LINK</a>
    </text>
  </div>
);
let cleanAlpha_body = (
  <div>
    <text>
      Aseprite, the pixel art focused art / animation software, has the ability to run custom scripts that can change how the software does most
      functions including exports, reading images, layering. etc.
      <br />
      After encountering a problem with scaling, the interpolation resulted in messy alpha artifacting, I decided to write my own script that read
      through the image and cleaned up the interpolation alpha artifacts.
      <br />
      <br />
      Written in Lua.
    </text>
  </div>
);
let opengl_body = (
  <div>
    <text>
      During <i>Interactive Computer Graphics</i>, after completing projects implementing techniques such as model generation, model reading, texture
      UV mapping, render to texture, and deferred shading. This project was meant to be a free-range application and exploration of advanced graphics
      techniques.
      <br />
      Initially inspired by rolling hills and fireflies, the project transformed to the starry landscape that we see now. Procedrually generated noise
      terrain, with randomly instanced snow / star objects
      <br />
      <br />
      Implemented with applications of blinn-phong's illumination, flat surface normals, ray tracing, perlin noise, bloom.
      <br />
      <br />
      Written in C++, OpenGL, using GLEW.
    </text>
  </div>
);
let progress_body = (
  <div>
    <text>
      React interactive progress bar is a NPM package built to provide an expansive progress bar implementation with returning values and customizable
      section and button generation. <br />
      Part of a larger project 'Commission Tracker', which is not online yet. Built using ReactJS, Typescript.
      <br />
      <a href="https://www.npmjs.com/package/react-interactive-progress-bar">LINK</a>
      <br />
    </text>
  </div>
);
let scared_body = (
  <div>
    <text>
      Scared bot is a twitter bot built in Python. Scared bot functions as a webscraper that follows a set of basic sentence construction rules to
      attempt to tweet what twitter users are scared of.
      <br />
      <a href="twitter.com/ScaredBot">LINK</a>
      <br />
    </text>
  </div>
);
let schwarz_body = (
  <div>
    <text>
      Web Application built for the visualization of Schwarz-Christoffel mapping. Done as our Computer Science major final capstone project. Here is
      the paper describing our work on the project: <br />
      Built using a Python/ Django.py backend, and a React.js frontend
      <br />
      <a href={SC_paper} download>
        <i class="fas fa-file-download"></i>Schwarz Christoffel Paper
      </a>
    </text>
    <br />

    <a href="https://schwarz-christoffel.herokuapp.com/">WEB APP</a>
    <br />
  </div>
);
let citation_body = (
  <div>
    <text>
      Citation is an episodic mobile and desktop web game made in the amazing open-source Godot Game Engine. You play as a fledgling, if not forgetful
      scholar of magic on a hunt for your lost notes. In the process, you’ll absorb some common-sense knowledge about what it means to be an ethical
      scholar. This is our first full game as a studio and we all learned a lot about what it takes to make a performant, interesting and educational
      web game.
      <br />
      <br />
      Done in collaboration with NYU.
      <br />
      <br />
      Website written and designed by me.
      <br />
      <a href="https://www.citationgame.com/">Game Homepage</a>
      <br />
    </text>
  </div>
);
let diced_body = (
  <div>
    <text>
      Diced was a game concept created for GMTK 2022 with the theme: "Roll of the Dice". Main mechanics were dice based combat as well as generation
      of rooms from sides of a dice.
    </text>
  </div>
);
let duelality_body = (
  <div>
    <text>
      Done for Global Game Jam 2022 (theme: duality), done remotely! Duelality is a simple game where two players fight a simple best of five rounds
      fighting game that gets more complex as the echoes from the previous rounds come to life as well
    </text>
  </div>
);
let ten65_body = (
  <div>
    <text>
      Done for Global Game Jam 2021, done remotely! $10.65 An Hour is a mystery game made in Unity. Play as Gale, a gas station attendant right
      outside of Red Mesa, Arizona as he follows on the trail of a missing girl and a town that's slowly changing.
    </text>
  </div>
);
let mile666_body = (
  <div>
    <text>
      Mile 666 is a prototype game where you play as a tank driver as you are deployed to combat the giant hell portal that has opened. As you make
      your way towards destroying the gate to hell, you must shoot down enemies and avoid obstacles in a bullet-hell, infinite-runner mashup game.
    </text>
    <br />
    <a href="https://not-absent.itch.io/mile666">Play Online</a> <text>password: pass</text>
    <br />
  </div>
);

let Inc_body = (
  <div>
    <text>
      Done for Global Game Jam 2020, at Playcrafting + Microsoft (NYC)!
      <br />
      Incubus M.D is a platform game about exploring the mind of a patient and diagnosing their problems. As the game progresses, you learn detailed
      information about each patient and their issues. Each level is inspired by each character's fears, dreams, and thoughts. You will complete each
      mission by defeating the final boss.
      <br />
    </text>
  </div>
);

let narrative_body = (
  <div>
    <text>
      Narrative Game Mod done in 2 weeks for a game development course. The mod introduces several new npcs, different dialogues, total reskin, new
      area, as well as shaders. Challenge the tower as you encounter Duke Blue and challenge him in a duel for his estate! Each floor explores combat
      in a different video game genre as you challenge Duke Blue over and over! Currently only the first floor is implemented.
      <br />
    </text>
  </div>
);

let restoration_body = (
  <div>
    <text>
      Restoration follows the elderly Martin the Fox. He has received an eviction notice in the mail, so he attempts to get to the top of a
      multi-purpose office building and speak with the CEO. He is a very sentimental father, as he keeps all of his sacred memories in his scrapbook.
      The power of reliving his memories will soon come into play as he sneaks past security and knocks out baddies. An old man getting violent? Not
      exactly. A dungeon crawler, with all original assets.
      <br />
    </text>
  </div>
);

export default function Projects() {
  return (
    <div id="projectblock">
      <div id="project">PROJECTS</div>
      <Project
        proj_title="MAPC Landlines"
        proj_date="Summer 2024"
        proj_iframe={"https://mapc.github.io/embedded-map/"}
        proj_body={mapc_landline_map}
      />
      <Project
        proj_title="MAPC Regional Foot trails"
        proj_date="Summer 2024"
        proj_iframe={"https://mapc.github.io/regional-foot-map/"}
        proj_body={mapc_regional_map}
      />
      <Project proj_title="Rental Listings" proj_date="Winter 2023" proj_img={rental_listings_img} proj_body={mapc_rental_listings_web} />
      <Project proj_title="MAPC Webapp Templates" proj_date="Fall 2023" proj_img={webapp_template_img} proj_body={mapc_webapp_templates} />
      <Project
        proj_title="MAPC Design System"
        proj_date="Fall 2023"
        proj_iframe={"https://mapc.github.io/mapc-components/?path=/docs/overview-introduction--docs"}
        proj_body={mapc_design_system}
      />
      <Project proj_title="60th MAPC" proj_date="Fall 2023" proj_img={mapc_60th_img} proj_body={mapc_60th} />
      <Project proj_title="Muni Emoji" proj_date="Summer 2023" proj_img={muniEmoji_img} proj_body={muniEmoji_body} />
      <Project proj_title="Between Worlds" proj_date="Spring 2023" proj_img={betweenWorlds_img} proj_body={betweenWorlds_body} />
      <Project proj_title="Color Me Silly" proj_date="Spring 2023" proj_img={colorMeSilly_img} proj_body={colorMeSilly_body} />
      <Project proj_title="Aseprite Alpha Cleaner" proj_date="Winter 2023" proj_img={cleanAlpha_img} proj_body={cleanAlpha_body} />
      <Project proj_title="OpenGL - WaveStarry" proj_date="Fall 2022" proj_img={opengl_img} proj_body={opengl_body} />
      <Project proj_title="React Interactive Progress Bar" proj_date="Summer 2022" proj_img={progress_img} proj_body={progress_body} />
      <Project proj_title="DICED" proj_date="Summer 2022" proj_img={diced_img} proj_body={diced_body} />
      <Project proj_title="ScaredBot" proj_date="Spring 2022" proj_img={scared_img} proj_body={scared_body} />
      <Project proj_title="Citation" proj_date="Summer 2021 - 2022" proj_img={citation_img} proj_body={citation_body} />
      <Project proj_title="Duelality" proj_date="Spring 2022" proj_img={duelality_img} proj_body={duelality_body} />
      <Project proj_title="Schwarz Christoffel Mapping" proj_date="Winter 2020 - Summer 2021" proj_img={SC_img} proj_body={schwarz_body} />
      <Project proj_title="$10.65/hr" proj_date="Spring 2021" proj_img={ten65_img} proj_body={ten65_body} />
      <Project proj_title="Mile 666" proj_date="Spring 2020" proj_img={mile666_img} proj_body={mile666_body} />
      <Project proj_title="IncubusMD" proj_date="Spring 2020" proj_img={incubusMD_img} proj_body={Inc_body} />
      <Project proj_title="Narrative Game" proj_date="Spring 2020" proj_img={narrative_img} proj_body={narrative_body} />
      <Project proj_title="Restoration" proj_date="Spring 2019" proj_img={restoration_img} proj_body={restoration_body} />
    </div>
  );
}
