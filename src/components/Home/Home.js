import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
  const keySrc = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBmZDQ5ZDRkYzk3ZDcwYmI3YmUyMzEyNzE3ZDdhM2RlY2YzZTRjYiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/LuvAW3OKmBgywTpGDY/giphy.gif';

  return (
    <main className='main'>
        <div className="image-text">
          <div className='txt-background'>
            <h1 className='welcome'>Welcome to</h1>
            <h2 className='title'>Secret Passage</h2>
            <h3 className="desc">On the next page there is a list of poets. If you select a poet, up to   three of their works will be presented to you. Look for the hidden key <img className='port-key' src={keySrc} alt='the port key!'/> to move on to the next poem.</h3>
            <Link className='arch-link'to='/select-poet'>Begin</Link>
          <img className='arch-img'src='https://images.unsplash.com/photo-1571987947518-65105b24ae99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt=''></img>
          </div>
        </div>
    </main>
  )
}

export default Home;
