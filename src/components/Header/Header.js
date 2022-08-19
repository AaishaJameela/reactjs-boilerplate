import React from "react";
import "./Header.css";

const getHeader = (props) => {
  return (
    <div className="Header">
      <center>
        <h2 style={{ color: props.newColor }}>{props.newTitle}</h2>
      </center>
    </div>
  );
};

export default getHeader;
