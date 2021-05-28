import React from "react";
import { render } from "react-dom";

const styles = {
  red: {
    padding: 20,
    backgroundColor: "red",
    color: "black",
  },
  dark: {
    padding: 20,
    backgroundColor: "black",
    color: "white",
  },
};

const emitter = {
  listeners: [],
  on: (fn) => {
    emitter.listeners.push(fn);
  },
  off: (fn) => {
    emitter.listeners.splice(emitter.listeners.findIndex(fn, 1));
  },
  emit: (value) => {
    emitter.listeners.forEach((fn) => fn(value));
  },
};

function createContext(defaultValue) {
  // 发布者
  class Provider extends React.PureComponent {
    componentDidUpdate() {
      emitter.emit(this.props.value);
    }
    componentDidMount() {
      emitter.emit(this.props.value);
    }
    render() {
      return this.props.children;
    }
  }

  // 订阅者
  class Consumer extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = { value: defaultValue };

      emitter.on((value) => {
        console.log(value);
        this.setState({ value });
      });
    }

    render() {
      return this.props.children(this.state.value);
    }
  }

  return { Provider, Consumer };
}

const ThemeContext = createContext("red");


// 触发事件
class AppBody2 extends React.PureComponent {
  render() {
    console.log("AppBody2 rendered");
    const { onClick, context: theme } = this.props;

    return (
      <div>
        <button style={styles[theme]} onClick={onClick}>
          {theme}
          这是颜色
        </button>
      </div>
    );
  }
}
// console.log(AppBody2);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: "red" };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState(
      {
        theme: this.state.theme === "red" ? "dark" : "red",
      },
      () => {
        console.log(this.state);
      }
    );
  }

  render() {
    console.log("app rerender");
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <AppBody2 onClick={this.toggleTheme} />
        </ThemeContext.Provider>
        <NestedPanel />
      </div>
    );
  }
}

// 订阅者
class NestedPanel extends React.PureComponent {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => {
          console.log("NestedPanel render");
          return <div style={styles[theme]}>theme</div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default App;
