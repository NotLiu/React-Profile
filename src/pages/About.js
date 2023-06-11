import React, { Component, useEffect, useState, useRef } from "react";
import banner from "../img/stars.gif";
import banner_legacy from "../img/Sprite-0002.gif";
import styled from "styled-components";
import Parallax from "parallax-js";

// resume
import resume from "../downloads/Resume.pdf";

// import parallax images
import stars_ast from "../img/stars-ast.gif";
import stars_mts1 from "../img/stars-mts1.png";
import stars_mts2 from "../img/stars-mts2.gif";
import stars_mts3 from "../img/stars-mts3.gif";
import stars_stars1 from "../img/stars-stars1.gif";
import stars_stars2 from "../img/stars-stars2.gif";
import stars_stars3 from "../img/stars-stars3.gif";
import stars_starsbg from "../img/stars-starsbg.png";

export default function About() {
  const [bannerImgLegacy, setBannerImg] = useState(false);
  const [image, setImg] = useState(banner);
  const [legacytitle, setLegacyTitle] = useState("LEGACY");

  const BannerCSS = styled.img`
    width: ${(props) => (props.mts ? "125vw" : "100vw")};
    height: ${(props) => (props.legacy ? "105vh" : "100%")};
    transform: scale(${(props) => (props.mts ? "1" : "1")})
      translateY(${(props) => (props.mts ? "-25%" : "-0%")})
      translateX(${(props) => (props.mts ? "-15vw" : "0px")});
  `;

  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    parallaxInstance.enable();

    // return () => parallaxInstance.disable();
  }, []);

  const LegacyButton = styled.button`
    position: Absolute;
    top: 92vh;
    left: 90vw;
    font-size: 1em;
    color: darkslategrey;
    background-color: transparent;
    border-color: transparent;
    &:hover {
      color: floralwhite;
    }
  `;

  function Banner() {
    if (bannerImgLegacy == false) {
      return (
        <div id="scene" ref={sceneEl}>
          <div ref={sceneEl} data-depth="0" data-limit-y="20">
            <BannerCSS
              legacy={bannerImgLegacy}
              mts={false}
              src={stars_starsbg}
            />
          </div>
          <div ref={sceneEl} data-depth="0.2">
            <BannerCSS
              legacy={bannerImgLegacy}
              mts={false}
              src={stars_stars3}
            />
          </div>
          <div ref={sceneEl} data-depth="0.4">
            <BannerCSS
              legacy={bannerImgLegacy}
              mts={false}
              src={stars_stars2}
            />
          </div>
          <div ref={sceneEl} data-depth="0.5">
            <BannerCSS
              legacy={bannerImgLegacy}
              mts={false}
              src={stars_stars1}
            />
          </div>
          <div ref={sceneEl} data-depth="0.6">
            <BannerCSS legacy={bannerImgLegacy} mts={false} src={stars_ast} />
          </div>
          <div ref={sceneEl} data-depth="0.8">
            <BannerCSS legacy={bannerImgLegacy} mts={true} src={stars_mts3} />
          </div>
          <div ref={sceneEl} data-depth="0.9">
            <BannerCSS legacy={bannerImgLegacy} mts={true} src={stars_mts2} />
          </div>
          <div ref={sceneEl} data-depth="1.1">
            <BannerCSS
              legacy={bannerImgLegacy}
              mts={true}
              src={stars_mts1}
              style={{ transform: "translateX(-15vw) translateY(-20%)" }}
            />
          </div>
        </div>
      );
    } else {
      return <BannerCSS legacy={bannerImgLegacy} mts={false} src={image} />;
    }
  }

  return (
    <div style={{ width: "100%" }}>
      <div id="image-banner">{Banner()}</div>
      <LegacyButton
        onClick={() => {
          if (bannerImgLegacy == false) {
            setBannerImg(true);
            setImg(banner_legacy);
            setLegacyTitle("2021");
          } else {
            window.location.reload();
            setBannerImg(false);
            setImg(banner);
            setLegacyTitle("LEGACY");
          }
        }}
      >
        {legacytitle}
      </LegacyButton>

      <div id="aboutme">
        <div id="about">A LITTLE ABOUT ME</div>
        <div id="resume">
          <a href={resume} download>
            <i class="fas fa-file-download"></i> Resume PDF
          </a>
        </div>
        <div id="about-text">
          <p>
            Hi, I'm Andrew Liu and I'm from Houston, Texas.
            <br />
            <br />
            I am currently completing a Master's in Computer Science at New York
            University. I completed my Bachelor's at NYU Shanghai with a major
            in Computer Science, and a minor in business.
            <br />
            <br />
            Alongside my graduate studies I am currently doing work as a
            freelance illustrator and acting as the Art Director for Hallpass
            Studios. My current interests are in Computer Graphics, Software
            Engineering, Artificial Intelligence, Game Development and how these
            fields can be applied in conjunction with art.
            <br />
            <br />
            Over the course of my studies at NYU, I have learned and honed my
            skills in:
            <br />
            <code class="code">
              React.js, Python, JavaScript, OpenGL, C++, Godot, SQL, MongoDB, C,
              Unity and C#, ExpressJS, NodeJS, Jira Workflow, Adobe Photoshop,
              Figma, Github terminal, Docker, and Tableau
            </code>
            <br />
            while taking the courses:
            <br />
            <br />
            <div class="colortext">
              Offensive Security, Interactive Computer Graphics, Operating
              Systems, Software Engineering, Data Visualization, Design &
              Analysis of Algorithms, Data-Driven Decision Making, Database
              Design and Implementation, Computer Networking, Computer
              Architecture, Data Structures, Introduction to Computer Music,
              Game Design
            </div>
            <br />
            For my business studies, I have taken:
            <br />
            <br />
            <div class="colortext">
              Microeconomics, Statistics for Business and Economics, Principles
              of Financial Accounting, Intro to Marketing, Economics for Global
              Business, Business of Video Games, and Data-driven Decision
              Making.
            </div>
            <br />
            My hobbies are in:{" "}
            <code class="code">
              digital art, video games, game development, bouldering, and random
              exploration
            </code>
            .
            <br />
            <br />
            I'm currently hoping to apply my skills in programming and artwork,
            by working on projects in software engineering and video game
            development.
          </p>
        </div>
        <div
          id="backtotop"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          style={{ fontSize: "26px", paddingBottom: "30px" }}
        >
          back to top
        </div>
      </div>
    </div>
  );
}
