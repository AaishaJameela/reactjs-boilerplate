import React from "react";
import "./Header.css";

const getHeader = (titleName) => {
  return (
    <div className="Header">
      <center>
        <h2 style={{ color: "blue" }}>{titleName.newTitle}</h2>
        <h2 style={{ color: "green" }}>{titleName.newTitle1}</h2>
        <h2 style={{ color: "violet" }}>{titleName.newTitle2}</h2>
      </center>
    </div>
  );
};

export default getHeader;
