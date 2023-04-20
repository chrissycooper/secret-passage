import React from 'react';
import './Poem.css'

const Poem = ({poem}) => {
  const {title, author, lines} = poem
  const lineElements = lines.map((line, index )=> {
    return <p key={index}>{line}</p>
  })
  return (
    <>
      <h1>{title}</h1>
      <h2>{author}</h2>
      {lineElements}
    </>
  )
}

export default Poem;
