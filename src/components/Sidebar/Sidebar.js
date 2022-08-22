import React from "react";
import sidebar from "./Sidebar.css";
//import { Link } from "react-router-dom";

const Sidebar = ({ getData }) => {
  const data = "Hi, welcome to this page!";
  return (
    <div className="sidebar">
      <center>
        <button onClick={() => getData(data)}>Home</button>
      </center>
    </div>
  );
};

export default Sidebar;
