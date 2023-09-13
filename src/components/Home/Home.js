import React from "react";
import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
  const keySrc = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBmZDQ5ZDRkYzk3ZDcwYmI3YmUyMzEyNzE3ZDdhM2RlY2YzZTRjYiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/LuvAW3OKmBgywTpGDY/giphy.gif';

  return (
    <main className='main'>
          <div className='txt-background'>
            <h1 className='welcome'>Welcome to</h1>
            <h2 className='title'>Secret Passage</h2>
            <h3 className='desc'>On the next page there is a list of poets. If you select a poet, up to   ten of their works will be presented to you. Look for the hidden key <img className='port-key' src={keySrc} alt='the port key!'/> to move on to the next poem.</h3>
            <h3 className='direction'>Click on the door below to begin!</h3>
            <Link className='link-to-form'to='/select-poet'><img className='trapdoor'src={require("./tdoorwoodmed_gt.png")} alt='a trapdoor'/></Link>              
          </div>
    </main>
  )
}

export default Home;
