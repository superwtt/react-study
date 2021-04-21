import React, { Component } from "react";
import { Draggable } from "gsap/all";

import "./index.css";

const withDrag = Wrapped => {
  class WithDrag extends Component {
    constructor(props) {
      super(props);
      this.elementRef = React.createRef();
      console.log(props)
    }

    

    componentDidMount = () => new Draggable(this.elementRef.current);

    render = () => {
     
      return (
        <span className="draggable_wrapper" ref={this.elementRef}>
          <Wrapped {...this.props} />
        </span>
      );
    };
  }
  WithDrag.displayName = `WithDrag(${Wrapped.displayName || Wrapped.name})`;
  return WithDrag;
};

export default withDrag;

