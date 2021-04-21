import React, { Component } from "react";
import withDraggable from "./withDraggable";


class Mouse extends Component {

  constructor(props){
     super(props)
  } 

  render() {
    const {x,y} = this.props; 
    console.log(x)
    console.log(y)
    return (
      <span className="mouse" role="img">
        🐭
        {x !== undefined && 
            y !== undefined && (
                <span className="mouse__position"> {`(${x}, ${y})`} </span>
        )}
    </span>
    );
  }
}

export default withDraggable(Mouse);
