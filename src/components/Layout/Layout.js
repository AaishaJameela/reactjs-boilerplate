import React from "react";
import "./Layout.css";
import Header from "../Header/Header.js";
import Sidebar from "../Sidebar/Sidebar.js";

const Layout = ({ children, newTitle, color }) => {
  return (
    <div className="Layout">
      <Header newTitle1={newTitle} color1={color} />
      <Sidebar />
      {children}
    </div>
  );
};
export default Layout;
