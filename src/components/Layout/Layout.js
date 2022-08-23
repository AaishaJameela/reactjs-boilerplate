import React from "react";
import "./Layout.css";
import Header from "../Header/Header.js";
//import Sidebar from "../Sidebar/Sidebar.js";

const Layout = ({ children, title, color }) => {
  return (
    <div className="Layout">
      <Header newTitle={title} newColor={color} />
      {children}
    </div>
  );
};
export default Layout;
