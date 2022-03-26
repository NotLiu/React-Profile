import React, { Component } from "react";
import Project from "../components/Project";

import SC_paper from "../downloads/SC_REPORT.pdf";
//project imgs
import mile666_img from "../img/Mile66(6).gif";
import incubusMD_img from "../img/IncubusMD.gif";
import narrative_img from "../img/Narrative.png";
import restoration_img from "../img/restoration.png";
import ten65_img from "../img/gamestill.png";
import duelality_img from "../img/map-crates.png";
import citation_img from "../img/citation.png";
import SC_img from "../img/webapp.png";
import scared_img from "../img/scaredbot.png";

export default function Projects() {
  let scared_body = (
    <div>
      <text>
        Scared bot is a twitter bot built in Python. Scared bot functions as a
        webscraper that follows a set of basic sentence construction rules to
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
        Web Application built for the visualization of Schwarz-Christoffel
        mapping. Done as our Computer Science major final capstone project. Here
        is the paper describing our work on the project: <br />
        Built using a Python/ Django.py backend, and a React.js frontend
        <br />
        <a download={SC_paper}>Schwarz Chirstoffel Paper</a>
      </text>
      <br />
      <a href="https://schwarz-christoffel.herokuapp.com/">
        <i class="fas fa-file-download"></i>WEB APP
      </a>
      <br />
    </div>
  );
  let citation_body = (
    <div>
      <text>
        Citation is an episodic mobile and desktop web game made in the amazing
        open-source Godot Game Engine. You play as a fledgling, if not forgetful
        scholar of magic on a hunt for your lost notes. In the process, you’ll
        absorb some common-sense knowledge about what it means to be an ethical
        scholar. This is our first full game as a studio and we all learned a
        lot about what it takes to make a performant, interesting and
        educational web game.
        <br />
        Done in collaboration with NYU.
        <br />
        <a href="https://citation-34f48.web.app/">Prototype Homepage</a>
        <br />
      </text>
    </div>
  );
  let duelality_body = (
    <div>
      <text>
        Done for Global Game Jam 2022 (theme: duality), done remotely! Duelality
        is a simple game where two players fight a simple best of five rounds
        fighting game that gets more complex as the echoes from the previous
        rounds come to life as well
      </text>
    </div>
  );
  let ten65_body = (
    <div>
      <text>
        Done for Global Game Jam 2021, done remotely! $10.65 An Hour is a
        mystery game made in Unity. Play as Gale, a gas station attendant right
        outside of Red Mesa, Arizona as he follows on the trail of a missing
        girl and a town that's slowly changing.
      </text>
    </div>
  );
  let mile666_body = (
    <div>
      <text>
        Mile 666 is a prototype game where you play as a tank driver as you are
        deployed to combat the giant hell portal that has opened. As you make
        your way towards destroying the gate to hell, you must shoot down
        enemies and avoid obstacles in a bullet-hell, infinite-runner mashup
        game.
      </text>
      <br />
      <a href="https://not-absent.itch.io/mile666">Play Online</a>{" "}
      <text>password: pass</text>
      <br />
    </div>
  );

  let Inc_body = (
    <div>
      <text>
        Done for Global Game Jam 2020, at Playcrafting + Microsoft (NYC)!
        <br />
        Incubus M.D is a platform game about exploring the mind of a patient and
        diagnosing their problems. As the game progresses, you learn detailed
        information about each patient and their issues. Each level is inspired
        by each character's fears, dreams, and thoughts. You will complete each
        mission by defeating the final boss.
        <br />
      </text>
    </div>
  );

  let narrative_body = (
    <div>
      <text>
        Narrative Game Mod done in 2 weeks for a game development course. The
        mod introduces several new npcs, different dialogues, total reskin, new
        area, as well as shaders. Challenge the tower as you encounter Duke Blue
        and challenge him in a duel for his estate! Each floor explores combat
        in a different video game genre as you challenge Duke Blue over and
        over! Currently only the first floor is implemented.
        <br />
      </text>
    </div>
  );

  let restoration_body = (
    <div>
      <text>
        Restoration follows the elderly Martin the Fox. He has received an
        eviction notice in the mail, so he attempts to get to the top of a
        multi-purpose office building and speak with the CEO. He is a very
        sentimental father, as he keeps all of his sacred memories in his
        scrapbook. The power of reliving his memories will soon come into play
        as he sneaks past security and knocks out baddies. An old man getting
        violent? Not exactly. A dungeon crawler, with all original assets.
        <br />
      </text>
    </div>
  );

  return (
    <div id="projectblock">
      <div id="project">PROJECTS</div>
      <Project
        proj_title="ScaredBot"
        proj_date="Spring 2021"
        proj_img={scared_img}
        proj_body={scared_body}
      />
      <Project
        proj_title="Citation"
        proj_date="Summer 2021 - 2022"
        proj_img={citation_img}
        proj_body={citation_body}
      />
      <Project
        proj_title="Schwarz Christoffel Mapping"
        proj_date="Winter 2020 - Summer 2021"
        proj_img={SC_img}
        proj_body={schwarz_body}
      />
      <Project
        proj_title="Duelality"
        proj_date="Spring 2022"
        proj_img={duelality_img}
        proj_body={duelality_body}
      />
      <Project
        proj_title="$10.65/hr"
        proj_date="Spring 2021"
        proj_img={ten65_img}
        proj_body={ten65_body}
      />
      <Project
        proj_title="Mile 666"
        proj_date="Spring 2020"
        proj_img={mile666_img}
        proj_body={mile666_body}
      />
      <Project
        proj_title="IncubusMD"
        proj_date="Spring 2020"
        proj_img={incubusMD_img}
        proj_body={Inc_body}
      />
      <Project
        proj_title="Narrative Game"
        proj_date="Spring 2020"
        proj_img={narrative_img}
        proj_body={narrative_body}
      />
      <Project
        proj_title="Restoration"
        proj_date="Spring 2019"
        proj_img={restoration_img}
        proj_body={restoration_body}
      />
    </div>
  );
}
