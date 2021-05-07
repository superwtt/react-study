import React from "react";
import PropTypes from "prop-types";

//----1  context的提供方和订阅方
const { Provider, Consumer } = React.createContext("default");
//----1.1 等同于
const ThemeContext = React.createContext("light");

function Child1() {
  return (
    <Consumer>
      {(value) => (
        <p>
          newContext:{value} <br/>
        </p>
      )}
    </Consumer>
  );
}

class Child2 extends React.Component {
  render() {
    return <p>childContext: {this.context.value}</p>;
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childContext: "123",
      newContext: "456",
    };
  }

  // 1.0 父组件声明getChildContext，return的对象就是子组件能够获取到的值
  getChildContext() {
    return { value: this.state.childContext };
  }

  render() {
    return (
      <>
        <div>
          <label>childContext: </label>
          <input
            type="text"
            value={this.state.childContext}
            onChange={(e) => this.setState({ childContext: e.target.value })}
          />
        </div>
        <div>
          <label>newContext: </label>
          <input
            type="text"
            value={this.state.newContext}
            onChange={(e) => this.setState({ newContext: e.target.value })}
          />
        </div>

        <Child2 />
        <Provider value={this.state.newContext}>
          <Child1 />
        </Provider>
      </>
    );
  }
}

// 2.2 声明子组件的contextTypes，这个声明告诉React在渲染过程中，该组件希望去获取它的父组件所提供的context里面某几个属性，某几个属性即child2.contextTypes声明的属性，不声明则获取不到
Child2.contextTypes = {
  value: PropTypes.string,
};

// 2.1 声明组件的childContextTypes 声明的内容和proptypes一样
Parent.childContextTypes = {
  value: PropTypes.string,
};

export default () => <Parent />;
