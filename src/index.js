import React from "react";
import ReactDOM from "react-dom";
import Mouse from "./HocDraggAble/mouse";
import Cat from "./HocDraggAble/cat";

import InpotComp from "./HocInput/hoc";

import PureComp from "./pureComponent/index";

import EventComp from "./event/index";

import ContextComp from "./context/手动实现";

import ReplaceComp from "./replaceState"

import Bar from "./errorBoundary/bar"

import Imper from "./useImperativeHandle/index"

import GetDefault from "./生命周期/getDefaultProps"


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
    {/* <Bar /> */}
    {/* <Imper /> */}
    <GetDefault />
  </React.StrictMode>,
  document.getElementById("root")
);
