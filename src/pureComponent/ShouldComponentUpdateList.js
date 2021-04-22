import React, { Component, PureComponent } from "react";

// export default class List extends Component {
export default class List extends PureComponent {
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
    console.log("list render");
    {
      this.state.data.map((item, index) => {
        return <div>{item.title}</div>;
      });
    }
    return 123;
    // return <div>{this.props.list.title}</div>;
  }
}
