import React, { Component } from "react";
import { Draggable } from "gsap/all";

import "./index.css";

const withDrag = (Wrapped) => {
  class WithDrag extends Component {
    constructor(props) {
      super(props);
      this.state = {
        x: undefined,
        y: undefined,
      };
      this.elementRef = React.createRef();
    }

    componentDidMount = () =>
      new Draggable(this.elementRef.current, { onDrag: this.onDrag });

    onDrag = (e) => {
      const { x, y } = e.target.getBoundingClientRect();
      this.setState({
        x: Math.floor(x),
        y: Math.floor(y),
      });
    };

    render = () => {
      
      return (
        <span className="draggable_wrapper" ref={this.elementRef}>
          <Wrapped {...this.props} x={this.state.x} y={this.state.y} />
        </span>
      );
    };
  }
  WithDrag.displayName = `WithDrag(${Wrapped.displayName || Wrapped.name})`;
  return WithDrag;
};

export default withDrag;
