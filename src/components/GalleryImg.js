import React, { Component } from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from "react-router-dom";

export default function GalleryImg(props) {
  const ImgCont = styled.div`
    width: 46%;
    background-color: darkslategray;
    padding: 2% 2%;
  `;
  const GallImg = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
  `;
  return (
    <ImgCont>
      <GallImg src={props.img} />
    </ImgCont>
  );
}
