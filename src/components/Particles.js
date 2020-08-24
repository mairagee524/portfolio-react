import React, { Component } from "react";
import { render } from "react-dom";
import ParticlesBg from "particles-bg";
import Album from "./Album";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Album>
          <ParticlesBg type="random" bg={true}/>
      </Album>
    );
  }
}

render(<App />, document.getElementById("root"));
