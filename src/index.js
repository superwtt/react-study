import React from "react";
import ReactDOM from "react-dom";
import Mouse from "./HOC/mouse";
import Cat from "./HOC/cat";

import './HOC/index.css'

ReactDOM.render(
  <React.StrictMode>
   <Mouse />
    <Cat />
  </React.StrictMode>,
  document.getElementById("root")
);
