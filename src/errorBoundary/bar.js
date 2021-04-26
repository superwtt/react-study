import React from "react";
import ErrorBoundary from "./index";

class Bar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  test = () => {
    var arr = [1, 2, 3];
    var newArr = arr.map((item) => {
      item = item + 1;
    });
    this.setState({
        list:newArr
    });
  };

  render() {
    return (
      <ErrorBoundary>
        <div>
          这是Bar组件
          <button onClick={this.test}>这是按钮</button>
          {this.state.list.map((item,index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
      </ErrorBoundary>
    );
  }
}

export default Bar;
