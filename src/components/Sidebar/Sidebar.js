import React from 'react';
import sidebar from './Sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (

    <div className="sidebar">
    <h1>Sidebar</h1>
    <ul>
      <li> <Link to ="/">Home</Link></li>
      <li> <Link to ="/About">About</Link></li>
      <li> <Link to ="/Contact">Contact</Link></li>
    </ul>
   
    </div>

  );
  }

export default Sidebar;