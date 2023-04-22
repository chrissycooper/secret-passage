import React, {useState, useEffect} from 'react';
import './Poem.css';
import { Link } from 'react-router-dom';
import commonWords from '../../poetryData';

const Poem = ({poem, id}) => {
  const [palette, setPalette] = useState('')
  const {title, author, lines} = poem;
  const lineElements = lines.map((line, index )=> {
    return <p key={index}>{line}</p>
  });

  useEffect(() => {
    const styleMatch = findStyle(poem);
    console.log('style match', styleMatch)
    setPalette(styleMatch);
  }, [])
  
  const findStyle = (poem) => {
    let styleType = commonWords.reduce((acc, cv) => {
      let bee = cv.words.find( word => {
       return poem.lines.find(line => line.includes(word))
      })
      if (bee){
        acc = cv.type
      }
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
