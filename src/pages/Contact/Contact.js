import React from 'react';
import Layout from '../../components/Layout/Layout.js';
import Header from '../../components/Header/Header.js';

const Contact = () => {
  const title2="Contact";
    return (
        <div className="Contact">
        <Header newTitle2={title2} />
        <Layout>
        <div>
             <center><h2>Contact Us</h2></center>
        </div>
        </Layout>
        </div>
    );
    }
    export default Contact;