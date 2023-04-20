import React from 'react';
import './Poem.css'
import { Link } from 'react-router-dom';

const Poem = ({poem, id}) => {
  const keySrc = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBmZDQ5ZDRkYzk3ZDcwYmI3YmUyMzEyNzE3ZDdhM2RlY2YzZTRjYiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/LuvAW3OKmBgywTpGDY/giphy.gif'
  const {title, author, lines} = poem
  const lineElements = lines.map((line, index )=> {
    return <p key={index}>{line}</p>
  })
  return (
    <>
      <h1>{title}</h1>
      <h2>{author}</h2>
      {lineElements}
      {id < 3 ?
      <Link to={`/poem/${id+1}`}><img src={keySrc}/></Link>
      : <Link to='/'><img src={keySrc}/></Link>
      }
    </>
  )
}

export default Poem;
