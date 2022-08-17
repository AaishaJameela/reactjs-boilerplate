import React from 'react';
//import {useState} from 'react';
import Layout from '../../components/Layout/Layout.js';
import Header from '../../components/Header/Header.js';
import pic from '../../assets/images/welcome.jpg';

const Home = () => {
  const title="Home";
 //const [click, setClick] = useState(0)
  return (
        <div className="Home">
        <Header newTitle={title} />
        <Layout>
        <div>Hi, welcome to this page!</div>
        <div><img src={pic} alt="Welcome!"/></div>
        </Layout> 
        </div>

        //<p>You have clicked {click} times.</p>
        //<button onClick = {() => setClick(click + 1)}>Increment</button>
        //<button onClick = {() => setClick(click - 1)}>Decrement</button>
    );
    }
    export default Home;