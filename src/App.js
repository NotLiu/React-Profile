import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Gallery from "./pages/Gallery";
import Inktober from "./pages/Inktober";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //xstate : xvalue
    };
  }
  render() {
    return (
      <Router>
        <div>
          <div id="nav-bar">
            <div id="nav-name">
              <a href="/">ANDREW LIU</a>
              <a href="mailto:aliu@lediur.com" id="email">
                <i class="fas fa-envelope"></i>
              </a>
            </div>
            <ul id="nav">
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
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/inktober">
              <Inktober />
            </Route>
            <Route path="/test"></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
