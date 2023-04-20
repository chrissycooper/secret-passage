import React from 'react';
import Poem from '../Poem/Poem';
import './Poems.css';
import { Link, Route } from 'react-router-dom';

const Poems = ({poems}) => {

  console.log(poems)
  const poEms = poems.map((poem, index) => {
    return <Route exact path={`/poem/${index+1}`}><Poem poem={poem} key={index} id={index+1}/></Route>
  })
  
  return (
    <>
      {poEms}
    </>
  )
}

export default Poems; 
