import React, { Component } from "react";
import ShouldComponentUpdateList from "./ShouldComponentUpdateList";

class PureComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: "哈哈哈",
    };
    this.queryName = null;
  }
  //   componentDidMount() {
  //     setInterval(() => {
  //       this.setState({
  //         data: [{ title: "react line 1" }, { title: "react line 2" }],
  //       });
  //     }, 1000);
  //   }
  componentDidMount() {
    console.log(this.spanRef);
  }
  handleClick() {
    // 使用原生的 DOM API 获取焦点
    this.queryName.focus();
  }
  render() {
    return (
      <div>
        
        <input type="text" ref={(input) => {this.queryName = input}} />
        <input
          type="button"
          value="点我输入框获取焦点"
          onClick={this.handleClick.bind(this)}
        />
        <>
          <span id="name" ref={this.spanRef}>
            {this.state.title}
          </span>
          <span>{this.queryName ? "有值" : "无值"}</span>
        </>
        <ShouldComponentUpdateList />;
      </div>
    );
  }
}

export default PureComp;
