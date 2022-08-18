import React from "react";
import pic from "../../assets/images/welcome.jpg";
import sidebar from "./Sidebar.css";

const Sidebar = ({ getData }) => {
  const data = "Hi, welcome to this page!";
  return (
    <div className="sidebar">
      <center>
        <br></br>
        <button onClick={() => getData(data)}>Home</button>
      </center>
    </div>
  );
};

export default Sidebar;
