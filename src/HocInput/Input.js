import React, { Component } from "react";
import hoc from './hoc'

class InputComp extends Component {
  constructor(props){
     super(props) 
  }  
  render() {
    return <input name="name" {...this.props.name} />;
  }
}

export default hoc(InputComp);
