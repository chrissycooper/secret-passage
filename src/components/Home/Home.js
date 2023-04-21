import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className='main'>
      <h1>Welcome to</h1>
      <h2>Secret Passage</h2>
      <h3>On the next page you'll be able to select a poet. Three of their works will be presented to you. Look for the hidden key to move on to the next poem. </h3>
      <Link to='/select-poet'>Begin</Link>
    </main>
  )
}

export default Home;
