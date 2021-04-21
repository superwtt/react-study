import React from "react";
import ReactDOM from "react-dom";
import Mouse from "./HocDraggAble/mouse";
import Cat from "./HocDraggAble/cat";

import InpotComp from "./HocInput/hoc";

import PureComp from "./pureComponent/index"

ReactDOM.render(
  <React.StrictMode>
    {/* <>
      <Mouse />
      <Cat />
    </> */}
    {/* <InpotComp /> */}
    <PureComp />
  </React.StrictMode>,
  document.getElementById("root")
);
