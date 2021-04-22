import React, { Component, PureComponent } from "react";

// export default class List extends Component {
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{ title: "react line 1" }, { title: "react line 2" }],
    };
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     data: [{ title: "react line 1" }, { title: "react line 2" }],
    //   });
    // }, 1000);

  }

  handleClick=()=>{
      const newData = JSON.parse(JSON.stringify(this.state.data));
      newData[0].title="123"
      this.setState({
          data:newData
      })
      setTimeout(()=>{
          console.log(this.state.data)
      },0)
  }



  render() {
    console.log("list render");
    return <div>
        <button onClick={this.handleClick}>点击修改</button>
        {this.state.data[0].title}
    </div>;
    // return <div>{this.props.list.title}</div>;
  }
}
