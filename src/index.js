import React from "react";
import ReactDOM from "react-dom";
import Mouse from "./HocDraggAble/mouse";
import Cat from "./HocDraggAble/cat";

import InpotComp from "./HocInput/hoc";

import PureComp from "./pureComponent/index";

import EventComp from "./event/index"

ReactDOM.render(
  <React.StrictMode>
    {/* <>
      <Mouse />
      <Cat />
    </> */}
    {/* <InpotComp /> */}
    {/* <PureComp /> */}
    <EventComp />
  </React.StrictMode>,
  document.getElementById("root")
);
