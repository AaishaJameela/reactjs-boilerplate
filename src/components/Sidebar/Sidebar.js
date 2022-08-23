import React from "react";
import "./Sidebar.css";

const Sidebar = ({ getData }) => {
  const data = "Hi, welcome to this page!";
  return (
    <div className="sidebar">
      <center>
        <h2>Sidebar</h2>
        <button onClick={() => getData(data)}>Home</button>
      </center>
    </div>
  );
};

export default Sidebar;
