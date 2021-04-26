import React from "react";
import Middle from "./middle";
import Leaf from "./leaf";
import GlobalContext from "./context"

const ContextComp = () => {

  const changeStateByChildren = ()=>{}  

  return (
    <GlobalContext.Provider
        value={{
            background: 'green', 
            color: 'white',
            content:'123',
            methodA:changeStateByChildren
        }}
    >
      <Middle />
      <Leaf />
    </GlobalContext.Provider>
  );
};

export default ContextComp;
