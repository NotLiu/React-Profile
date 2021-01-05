import React, {Component} from 'react';
import Project from '../components/Project'

//project imgs
import mile666_img from "../img/Mile66(6).gif"
import incubusMD_img from "../img/IncubusMD.gif"
import narrative_img from "../img/Narrative.png"
import restoration_img from "../img/restoration.png"

export default class Projects extends Component{
    mile666_body = (<div><text>Mile 666 is a prototype game where you play as a tank driver as you are deployed to combat the
    giant
    hell portal that has opened. As you make your way towards destroying the gate to hell, you must
    shoot
    down enemies and avoid obstacles in a bullet-hell, infinite-runner mashup game.</text>
    <br/>
    <a href="https://not-absent.itch.io/mile666">Play Online</a> <text>password: pass</text>
    <br/></div>);

    Inc_body = (<div><text>Done for Global Game Jam 2020, at Playcrafting + Microsoft (NYC)!
    <br/>
    Incubus M.D is a platform game about exploring the mind of a patient and diagnosing their
    problems.
    As
    the game progresses, you learn detailed information about each patient and their issues. Each
    level
    is
    inspired by each character's fears, dreams, and thoughts. You will complete each mission by
    defeating
    the final boss.
    <br/></text></div>);

    narrative_body = (<div><text>Narrative Game Mod done in 2 weeks for a game development course. The mod introduces several new
        npcs, different dialogues, total reskin, new area, as well as shaders.
        Challenge the tower as you encounter Duke Blue and challenge him in a duel for his estate! Each
        floor explores combat in a different video game genre as you challenge Duke Blue over and over!
        Currently only the first floor is implemented.
        <br/></text></div>)

    restoration_body = (<div><text>Restoration follows the elderly Martin the Fox. He has received an eviction notice in the mail,
        so he attempts to get to the top of a multi-purpose office building and speak with the CEO. He
        is a very sentimental father, as he keeps all of his sacred memories in his scrapbook. The power
        of reliving his memories will soon come into play as he sneaks past security and knocks out
        baddies. An old man getting violent? Not exactly. A dungeon crawler, with all original assets.
        <br/></text></div>)

    render (){ 
        return(
            
            <div id="projectblock">
                <div id="project">
                    PROJECTS
                </div>

                <Project proj_title = "Mile 666" proj_date="Spring 2020" proj_img={mile666_img} proj_body = {this.mile666_body}/>
                <Project proj_title = "IncubusMD" proj_date="Spring 2020" proj_img={incubusMD_img} proj_body = {this.Inc_body}/>
                <Project proj_title = "Narrative Game" proj_date="Spring 2020" proj_img={narrative_img} proj_body = {this.narrative_body}/>
                <Project proj_title = "Restoration" proj_date="Spring 2019" proj_img={restoration_img} proj_body = {this.restoration_body}/>

            </div>
        );
    }
}
