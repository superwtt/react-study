// import React, { useImperativeHandle } from "react";

// const Bar = React.forwardRef((props, ref) => {

//   const refresh = () => {
//     console.log("进来刷新了");
//   };

//   useImperativeHandle(ref, () => ({
//     refresh
//   }));

//   return <div>这是Bar组件</div>;
// });

// export default Bar;


import React, { forwardRef,useImperativeHandle } from "react";

const Bar = forwardRef((props,ref) => {

  const refresh = () => {
    console.log("进来刷新了");
  };

  return <div ref={ref}>这是Bar组件</div>;
});

export default Bar;
