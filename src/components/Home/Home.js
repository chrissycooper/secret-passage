import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to Secret Passage</h1>
      <Link to='/select-poet'>Begin</Link>
    </>
  )
}

export default Home;
