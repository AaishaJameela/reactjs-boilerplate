import React from 'react';
import Layout from '../../components/Layout/Layout.js';
//import Header from '../../components/Header/Header.js';
import contact from './Contact.css';

const Contact = () => {
  const title2="Contact";
    return (
        <div className="Contact">
        <Layout newTitle2={title2} >
        <div>
             <center><h2>Contact Us</h2></center>
        </div>
        </Layout>
        </div>
    );
    }
    export default Contact;