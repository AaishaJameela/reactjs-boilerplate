import React from "react";
import Layout from "../../components/Layout/Layout.js";
//import {useState} from 'react';
//import Sidebar from "../../components/Sidebar/Sidebar.js";

const Home = () => {
  //const [click, setClick] = useState(0)
  //const getData = (getData) => {
  //console.log(getData);
  //<Sidebar getData={getData} />
  return (
    <Layout title="Home" color="black">
      <div className="Home">
        <center>
          <p>Hi, welcome to this page!</p>
        </center>
      </div>
    </Layout>

    //<p>You have clicked {click} times.</p>
    //<button onClick = {() => setClick(click + 1)}>Increment</button>
    //<button onClick = {() => setClick(click - 1)}>Decrement</button>
  );
};
export default Home;
