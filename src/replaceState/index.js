import React from "react";

class ReplaceComp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "周妤萱",
      age: 8,
    };
  }

  viewState = () => {
    // this.setState({
    //   school: "赤壁路小学",
    // });
    this.setState((preState) => ({
      age: preState.age + 1,
    }));
    setTimeout(() => {
      console.log(this.state);
    }, 0);
  };

  render() {
    return <button onClick={this.viewState}>123</button>;
  }
}

export default ReplaceComp;
