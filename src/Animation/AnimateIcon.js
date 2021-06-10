import React, { Component } from "react";
import "./animationicon.css"
import Particles from "react-particles-js";
import ParticleConfig from "./ParticleConfig.js";

class Animatedicons extends Component {
  render() {
    
    return (
      <Particles params = {ParticleConfig} /> 
    )
  }
}

export default Animatedicons;