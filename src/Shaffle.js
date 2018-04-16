import React, { Component } from 'react'
import Chaffle from 'chaffle'

class Shaffle extends Component {

  componentDidMount() {
    const chaffle = new Chaffle(this.refs.target, {
      speed: 30,
      delay: 100
     });
    chaffle.init();
  }

  render() {
    return (
      <span data-chaffle="en" ref="target">{this.props.text}</span>
    );
  }
}

export default Shaffle;
