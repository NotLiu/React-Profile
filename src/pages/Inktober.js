import React, { Component } from "react";
import resume from "../downloads/Resume.pdf";
import GalleryImg from "../components/GalleryImg.js";
import ink from "../img/inktober.jpg";
import styled from "styled-components";

export default function Inktober() {
  const InkImg = styled.img`
    position: absolute;
    width: 80vw;

    left: 10vw;
    top: 10vh;
  `;
  return <InkImg src={ink}></InkImg>;
}
