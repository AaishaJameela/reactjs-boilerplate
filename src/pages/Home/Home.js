import React from 'react';
//import {useState} from 'react';
import Layout from '../../components/Layout/Layout.js';
import pic from '../../assets/images/welcome.jpg';
import home from './Home.css';

const Home = () => {
  const title="Home";
 //const [click, setClick] = useState(0)
  return (
        <div className="Home">
        <Layout newTitle={title}>
        <div>Hi, welcome to this page!</div>
        <div><img src={pic} /></div>
        </Layout> 
        </div>

        //<p>You have clicked {click} times.</p>
        //<button onClick = {() => setClick(click + 1)}>Increment</button>
        //<button onClick = {() => setClick(click - 1)}>Decrement</button>
    );
    }
    export default Home;