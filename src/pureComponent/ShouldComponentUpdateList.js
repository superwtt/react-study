import React, { Component,PureComponent } from "react";

// export default class List extends Component {
 export default class List extends PureComponent{   
  render() {
    console.log("list render");
    return <div>{this.props.list.title}</div>;
  }
}
