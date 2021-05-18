import React from "react";

const ChildImpDemo = (props) => {
  console.log(props.children)
  console.log(React.Children.map(props.children,c=>[c,[c]]))
  return <>
    {
        props.children
    }
  </>;
}

class ChildImp extends React.Component {
  render() {
    return (
      <ChildImpDemo>
        <span>1</span>
        <span>2</span>
      </ChildImpDemo>
    );
  }
}

export default ChildImp;
