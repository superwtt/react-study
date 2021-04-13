import React from "react";
import Cat from './cat';
import Mouse from './mouse';

import './index.css'

const HOC = ()=>{
    return (
      <div className="App">
      <div  className="draggable_wrapper">
        <Cat />
        <Mouse />
      </div>
      </div>
    )
}

export default HOC;