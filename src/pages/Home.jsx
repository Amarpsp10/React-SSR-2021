import React from "react";
import style from './Home.css'

const Home = () => {
  console.log("Home Page Render");

  return (
    <button onClick={() => alert('Hello world')} className={`${style.home}`} >
      Click Me
    </button>
  )
};

export default Home;