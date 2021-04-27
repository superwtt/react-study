import React, { Component, useRef } from "react";
import SubComponent from "./bar";

const Imper = () => {
  const subcomponents = useRef(null);

  const handleClick = () => {
    console.log(subcomponents);
    // this.refs.subcomponents.subHandleClick();
  };
  return (
    <div>
      <input
        type="button"
        value="点我调用子组件方法"
        onClick={handleClick}
      />
      <SubComponent ref={subcomponents} />
    </div>
  );
};

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
