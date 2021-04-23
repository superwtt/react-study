import React, { Component } from "react";

class QrCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  componentDidMount() {
    document.getElementById('btn-reactandnative').addEventListener('click',e=>{
        console.log('原生+react事件：原生事件执行')
    })
  }

  componentWillUnmount() {
    document.body.removeEventListener("click");
  }

  handleClick() {
    console.log('button click');
  }

  handleNativeAndReact(e) {
    console.log('原生+react 事件:  当前执行react事件');
  }

  render() {
    return (
      <div className="pageIndex">
        <p>react event!!!</p>
        <button id="btn-confirm" onClick={this.handleClick}>react事件</button>
        <button id="btn-reactandnative" onClick={this.handleNativeAndReact}>原生+react</button>
      </div>
    );
  }
}

export default QrCode