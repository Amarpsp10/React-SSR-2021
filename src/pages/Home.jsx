import React from "react";
import './Home.css'

const Home = () => {
  console.log("Home Page Render");

  return (
    <button onClick={() => alert('Hello world')} className='home'>
      Click Me
    </button>
  )
};

export default Home;