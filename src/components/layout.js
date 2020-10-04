import React from "react";
import "./layout.css";
import Menu from "./menu";

export default props => {
  const { children } = props;

  return (
        <div className="app">
          <Menu title={"Blog"} />
          <div className="main">
            <div className="content">{children}</div>
          </div>
        </div>
  )
}