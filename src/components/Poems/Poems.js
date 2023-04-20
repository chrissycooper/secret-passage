import React from 'react';
import Poem from '../Poem/Poem';
import './Poems.css';
import { Link } from 'react-router-dom';

const Poems = ({poems}) => {

  /*
  for the morning, my question is whether this component is necessary
  How will I route to the individual Poem components? can I have a switch statement
  in this nested component?
  It feels like this would be useful to pull out the logic to create each Poem component here
  but it might be more simple to route in App
  */
  console.log(poems)
  const poEms = poems.map((poem, index) => {
    return <Poem poem={poem} key={index} id={index}/>
  })
  

  return (
    <>
      {poEms}
    </>
  )

}

export default Poems; 
