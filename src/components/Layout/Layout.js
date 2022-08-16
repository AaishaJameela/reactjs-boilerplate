import React from 'react';
import './Layout.css';
import Home from '../pages/Home/Home.js';
import About from '../pages/About/About.js';
import Contact from '../pages/Contact/Contact.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Sidebar from '../Sidebar/Sidebar.js';


const Layout = ({children, newTitle, newTitle1, newTitle2}) => {
     return (
           <div className="Layout">
           <Header newTitle={title}/>
           <Header newTitle1={title1}/>
           <Header newTitle2={title2}/>
           <Sidebar />
           {children}
           <Footer />
           </div>
    );
}
export default Layout;