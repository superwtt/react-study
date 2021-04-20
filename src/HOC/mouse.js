import React, { Component } from "react";
import withDraggable from "./withDraggable";


class Mouse extends Component {
  render() {
    return (
      <div className="cat" role="img">
        <span>🐱</span>
      </div>
    );
  }
}

export default withDraggable(Mouse);
