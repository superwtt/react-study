import React from "react";
import ReactDOM from "react-dom";
import Mouse from "./HocDraggAble/mouse";
import Cat from "./HocDraggAble/cat";

import InpotComp from "./HocInput/hoc";

import PureComp from "./pureComponent/index";

import EventComp from "./event/index";

import ContextComp from "./context";

import ReplaceComp from "./replaceState"

import Bar from "./errorBoundary/bar"


ReactDOM.render(
  <React.StrictMode>
    {/* <>
      <Mouse />
      <Cat />
    </> */}
    {/* <InpotComp /> */}
    {/* <PureComp /> */}
    {/* <EventComp /> */}
    {/* <ContextComp /> */}
    {/* <ReplaceComp /> */}
    <Bar />
  </React.StrictMode>,
  document.getElementById("root")
);
