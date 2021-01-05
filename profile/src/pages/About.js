import React, {Component} from "react"
import banner from "../img/Sprite-0002.gif"

export default class About extends Component {
    render() {
        return(
            <div>
                <div id="image-banner">
                    <img src= {banner} />
                </div>
            
            
                <div id="aboutme">
                    <div id="about">
            
                        A LITTLE ABOUT ME
            
                    </div>
                    <div id="about-text">
                        <p>
                            Hi, I'm Andrew Liu and I'm from Houston, Texas.
                            <br/>
                            <br/>
                            I'm a student at New York University
                            Shanghai (NYUSH) where I'm
                            pursuing a major in Computer Science, and a minor in Business.
                            <br/>
                            <br/>
                            Over the Course of my career at NYU Shanghai, I have learned and honed my skills
                            in:
                            <code
                                class="code">Python, JavaScript, Express / NodeJS, JQuery, MySQL, MongoDB SQLite, C, Java, HTML, CSS, R, Tableau, JMP, and Photoshop</code>
                            , while taking the courses:
                        <div class="colortext">
                            Design & Analysis of Algorithms, Data-Driven Decision Making, Database Design and Implementation,
                            Computer Networking, Computer Architecture, Data Structures, Introduction to Computer Music, Intro to
                            Game Dev, Computer Graphics, Introduction to Computer Science, Introduction to Computer Programming
                        </div>
                        <br/>
                        For my business studies, I have taken:
                        <br/>
                        <br/>
                        <div class="colortext">
                            Microeconomics, Statistics for Business and Economics, Principles of
                            Financial
                            Accounting, Intro to Marketing,
                            Economics for Global Business, Business of Video Games, and Data-driven Decision Making.
                        </div>
                        <br/>
                        My hobbies are in: <code class="code">digital art, video games, game development, and bouldering</code>.
                        <br/>
                        <br/>
                        I'm currently hoping to apply my skills in programming and artwork, by working
                        on
                        projects in video game development.
                        </p>
                    </div>
                    <div id="backtotop">
                        back to top
                    </div>
                </div>
            </div>
        )
    }
}