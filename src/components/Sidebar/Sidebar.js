import React from "react";
import { Link } from "react-router-dom";
import pic from "../../assets/images/welcome.jpg";
import sidebar from "./Sidebar.css";

const Sidebar = () => {
  const data = "Hi, welcome to this page!";
  return (
    <div className="sidebar">
      <center>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </center>
    </div>
  );
};

export default Sidebar;
