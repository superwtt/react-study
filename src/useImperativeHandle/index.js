import React, { Component, useRef, useState } from "react";
import SubComponent from "./bar";

class Imper extends Component {

  constructor(props){
      super(props)

      this.state = {
          type:{
              name:"123"
          }
      }
  }  

  handleClick = () => {
    this.setState({
        type:{
            school:"赤壁路"
        }
    },()=>{
        console.log(this.state)
    })
  };
  render() {
    return (
      <div>
        <input
          type="button"
          value="点我调用子组件方法"
          onClick={this.handleClick}
        />
        
        {/* <SubComponent ref={subcomponents} /> */}
      </div>
    );
  }
}

export default Imper;

// import React, { useEffect, useRef } from "react";
// import Bar from "./bar";

// const Imper = () => {
//   let barRef = useRef(null);
//   const btnRef = useRef(null);

//   useEffect(() => {
//     console.log(barRef);
//     console.log(btnRef)
//   }, []);

//   return (
//     <div>
//       这是Imper组件
//       <hr />
//       <Bar ref="subcomponents" />
//       <button ref={btnRef}>这是按钮</button>
//     </div>
//   );
// };

// export default Imper;
