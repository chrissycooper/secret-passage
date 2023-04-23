import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  return (
    <section className="not-found">
      <h1>The passage you're looking for does not exist. Try something else, or <Link to='/'>start from the beginning</Link> </h1>
      <img className='arch-img'src='https://images.unsplash.com/photo-1606066539135-63bd1058ca97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' alt='an archway looking into a garden'></img>
    </section>
  )
}

export default NotFound;
