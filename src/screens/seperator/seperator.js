import React from "react";
import "./SepratorStyle.css";

function Seprator({ children, ...restProps }) {
  return (
    <div className="seperator" {...restProps}>
      {children}
    </div>
  );
}

export default Seprator;