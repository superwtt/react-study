import React, { Component } from "react";

const hoc = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
      };
    }
    render() {
      const newProps = {
        name: {
          value: this.state.name,
          onChange: this.onChange,
        },
      };
      console.log(newProps)
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  };
};
export default hoc;