import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar.js";
//import Layout from "../../components/Layout/Layout.js";
//import {useState} from 'react';

const Home = () => {
  //const [click, setClick] = useState(0)
  const getData = (Data) => {
    console.log(Data);
  };
  return (
    <Sidebar getData={getData} />

    /* <Layout title="Home" color="black">
      <div className="Home">
        <center>
          <p>Hi, welcome to this page!</p>
        </center>
      </div>
    </Layout>
    <p>You have clicked {click} times.</p>
    <button onClick = {() => setClick(click + 1)}>Increment</button>
  <button onClick = {() => setClick(click - 1)}>Decrement</button> */
  );
};
export default Home;
