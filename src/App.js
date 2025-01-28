import logo from "./logo.svg";
import "./App.css";
import React, { Component, useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Redirect, Route, Routes, Link } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Gallery from "./pages/Gallery";
import Inktober from "./pages/Inktober";
import Work from "./pages/Work";

function App() {
  const [showNav, setShowNav] = useState(true);

  useScrollPosition(({ prevPos, currPos }) => {
    setShowNav(prevPos.y < currPos.y);
  });

  return (
    <Router>
      <div>
        <div id="nav-bar" className={showNav ? "show" : "hidden"}>
          <div id="nav-name">
            <a href="/">ANDREW LIU</a>
            <a href="mailto:aliu@lediur.com" id="email">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
          <ul id="nav">
            {/* <li>
                <Link to="/work" id="work">
                  WORK
                </Link>
              </li> */}
            <li>
              <Link to="/" id="about-but">
                ABOUT
              </Link>
            </li>
            {/* <li>
                      <a href="#gallery" id="gallery">GALLERY</a>
                  </li> */}
            <li>
              <Link to="/projects" id="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link to="/gallery" id="gallery">
                GALLERY
              </Link>
            </li>
            <li>
              <a href="https://github.com/NotLiu">GITHUB</a>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<About />} />

          <Route path="/work" element={<Work />} />

          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/projects" element={<Projects />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/inktober" element={<Inktober />} />

          {/* <Route path="/test" element={} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
