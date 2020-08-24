import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Particles extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
          <ParticlesBg type="random" bg={true}/>
    );
  }
}

export default Particles