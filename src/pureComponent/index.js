import React, { Component } from "react";
import ShouldComponentUpdateList from "./ShouldComponentUpdateList";

class PureComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() { 
    setInterval(() => {
      this.setState({
        data: [{ title: "react line 1" }, { title: "react line 2" }],
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        1123
        {this.state.data.map((item, index) => {
          return <ShouldComponentUpdateList key={index} list={item} />;
        })}
      </div>
    );
  }
}

export default PureComp;