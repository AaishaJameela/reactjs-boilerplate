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
        <input
          name="color"
          onChange={(e) =>
            setColor(
              "orange",
              "yellow",
              "green",
              "blue",
              "violet",
              "black",
              "brown",
              "white",
              "pink"
            )
          }
        ></input>
      </center>
    </div>
  );
};
export default Home;
