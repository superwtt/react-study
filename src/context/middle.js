import React from "react";
import GlobalContext from "./context";

const Middle = () => {
  return (
    <GlobalContext.Consumer>
      {(context) => {
        return (
          <div>
            <h1
              style={{ background: context.background, color: context.color }}
            >
              {context.content}
            </h1>
            <input methodA={context.methodA} value={context.content} />
          </div>
        );
      }}
    </GlobalContext.Consumer>
  );
};

export default Middle;
