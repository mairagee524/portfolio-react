import React, { Component } from "react";
import { render } from "react-dom";
import ParticlesBg from "particles-bg";
import Header from "./Header";

class Particles extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Header>
          <ParticlesBg type="random" bg={true}/>
      </Header>
    );
  }
}

export default Particles