import React, { Component } from "react";
import withDraggable from "./withDraggable";

class Cat extends Component {
  render() {
    return (
      <div className="cat" role="img">
        <span>🐭</span>
      </div>
    );
  }
}

export default withDraggable(Cat);
