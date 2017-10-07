import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
  }

  render() {
    return (
      <button className="Button">{this.text}</button>
    )
  }
}

export default Button;
