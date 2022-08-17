import React from 'react';
import { Link } from "react-router-dom";
import pic from '../../assets/images/welcome.jpg';
import sidebar from './Sidebar.css';

const Sidebar = () => {
  return (

    <div className="sidebar">
    <br></br>
    <center><img src={pic} alt="Welcome!"/></center>
    <ul>
      <li> <Link to ="/">Home</Link></li>
      <li> <Link to ="/About">About</Link></li>
      <li> <Link to ="/Contact">Contact</Link></li>
    </ul>
   
    </div>

  );
  }

export default Sidebar;