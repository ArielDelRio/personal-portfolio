import React from "react";
import "./devices.min.css";

const Macbook = ({ children }) => {
  return (
    <div className="marvel-device macbook">
      <div className="top-bar"></div>
      <div className="camera"></div>
      <div className="screen">{children}</div>
      <div className="bottom-bar"></div>
    </div>
  );
};

export default Macbook;
