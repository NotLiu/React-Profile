import React, { Component } from "react";
import resume from "../downloads/Resume.pdf";
import GalleryImg from "../components/GalleryImg.js";
import boo from "../img/halloween.gif";
import styled from "styled-components";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from "react-router-dom";

export default function Gallery() {
  const GalleryBorder = styled.div`
    position: absolute;
    top: 10%;
    left: 8%;
    width: 84%;
    height: 20em;
  `;

  const HeroImage = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${boo});
    height: 50%;

    /* Position and center the image to scale nicely on all screens */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-width: 2px;
    border-color: floralwhite;
    border-style: solid;

    &:hover {
      background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url(${boo});
      font-size: large;
      color: black;
    }
  `;

  const HeroText = styled.div`
    text-align: center;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  `;
  return (
    <GalleryBorder>
      <Link to="/inktober">
        <HeroImage>
          <HeroText>INKTOBER 21</HeroText>
        </HeroImage>
      </Link>
    </GalleryBorder>
  );
}
