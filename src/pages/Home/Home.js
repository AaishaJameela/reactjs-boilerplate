import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Sidebar from "../../components/Sidebar/Sidebar.js";

const Home = () => {
  const [color, setColor] = useState("red");
  const getData = (Data) => {
    document.write(Data);
  };
  return (
    <div>
      <Sidebar getData={getData} />
      <Layout title="Header" color="black"></Layout>
      <center>
        <p>Your favorite color is {color}!</p>
        <input name="color" onChange={(e) => setColor("orange")}></input>
        <input name="color" onChange={(e) => setColor("yellow")}></input>
        <input name="color" onChange={(e) => setColor("green")}></input>
        <input name="color" onChange={(e) => setColor("blue")}></input>
        <input name="color" onChange={(e) => setColor("violet")}></input>
        <input name="color" onChange={(e) => setColor("black")}></input>
        <input name="color" onChange={(e) => setColor("brown")}></input>
        <input name="color" onChange={(e) => setColor("pink")}></input>
        <input name="color" onChange={(e) => setColor("white")}></input>
      </center>
    </div>
  );
};
export default Home;
