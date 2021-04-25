import React, { Component } from "react";

class QrCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      arr: ["a", "b", "c"],
    };
    // this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    document
      .getElementById("btn-reactandnative")
      .addEventListener("click", (e) => {
        console.log("原生+react事件：原生事件执行");
      });
  }

  componentWillUnmount() {
    document.body.removeEventListener("click");
  }

  //   handleClick() {
  //     console.log(this)
  //     console.log('button click');
  //   }
  handleClick = () => {
    console.log(this);
    console.log("button click");
  };

  handleNativeAndReact(e) {
    console.log("原生+react 事件:  当前执行react事件");
  }

  change=() =>{
    this.setState({
      arr: ["c", "b", "a"],
    });
  }

  render() {
    return (
      <div className="pageIndex">
        <p>react event!!!</p>
        <button id="btn-confirm" onClick={this.handleClick}>
          react事件
        </button>
        <button id="btn-reactandnative" onClick={this.handleNativeAndReact}>
          原生+react
        </button>
        <ul>
          {this.state.arr.map((item, index) => {
            return (
              <li key={item}>
                {item} <input type="text" />
              </li>
            );
          })}
        </ul>
        <button onClick={this.change}>改变顺序的按钮</button>
      </div>
    );
  }
}

export default QrCode;
