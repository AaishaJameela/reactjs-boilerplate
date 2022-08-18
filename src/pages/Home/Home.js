import React from "react";
//import {useState} from 'react';
import Sidebar from "../../components/Sidebar/Sidebar.js";

const Home = () => {
  //const [click, setClick] = useState(0)
  const getData = (getData) => {
    console.log(getData);
  };
  return (
    <div className="Home">
      <Sidebar getData={getData} />
    </div>

    //<p>You have clicked {click} times.</p>
    //<button onClick = {() => setClick(click + 1)}>Increment</button>
    //<button onClick = {() => setClick(click - 1)}>Decrement</button>
  );
};
export default Home;
