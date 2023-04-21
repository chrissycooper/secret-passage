import React, {useState} from 'react';
import './Poem.css'
import { Link } from 'react-router-dom';
import commonWords from '../../poetryData';

const Poem = ({poem, id}) => {
  const {title, author, lines} = poem
  const lineElements = lines.map((line, index )=> {
    return <p key={index}>{line}</p>
  })

  const palette = ''
  
  const findStyle = (poem) => {
    let styleType = commonWords.reduce((acc, cv) => {
      let bee = cv.words.find( word => {
       return poem.find(line => line.includes(word))
      })
      bee ? acc = cv.type : null
      return acc
    }, '')
    return styleType
  }

  return (
    <section className={palette}>
      <h1>{title}</h1>
      <h2>{author}</h2>
      {lineElements}
    </section>
  )
}

export default Poem;
