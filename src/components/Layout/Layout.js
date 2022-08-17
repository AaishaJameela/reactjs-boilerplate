import React from "react";
import "./Layout.css";
import Sidebar from "../Sidebar/Sidebar.js";

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Sidebar />
      {children}
    </div>
  );
};
export default Layout;
