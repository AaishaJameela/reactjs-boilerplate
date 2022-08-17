import React from "react";
//import {useState} from 'react';
import Layout from "../../components/Layout/Layout.js";
import Header from "../../components/Header/Header.js";

const Home = () => {
  const title = "Home";
  //const [click, setClick] = useState(0)
  return (
    <div className="Home">
      <Layout>
        <Header newTitle={title} />
        <div>Hi, welcome to this page!</div>
      </Layout>
    </div>

    //<p>You have clicked {click} times.</p>
    //<button onClick = {() => setClick(click + 1)}>Increment</button>
    //<button onClick = {() => setClick(click - 1)}>Decrement</button>
  );
};
export default Home;
