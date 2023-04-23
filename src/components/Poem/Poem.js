import React, {useState, useEffect} from 'react';
import './Poem.css';
import commonWords from '../../poetryData';

const Poem = ({poem, id}) => {
  const [palette, setPalette] = useState('')
  const {title, author, lines} = poem;
  const lineElements = lines.map((line, index )=> {
    return <p key={index}>{line}</p>
  });

  useEffect(() => {
    const styleMatch = findStyle(poem);
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
    return styleType ? styleType : 'default'
  }

  const getImage = () => {
    switch (palette) {
      case 'nature':
        return 'https://images.unsplash.com/photo-1590149562644-da85d8564000?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      case 'love':
        return 'https://images.unsplash.com/photo-1682113158631-dee509ef98ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
      case 'body':
        return 'https://images.unsplash.com/photo-1613376285451-9163bd277f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      case 'spooky':
        return 'https://i.pinimg.com/originals/c8/1f/e0/c81fe0dcb0ae9bbb442c1303a50bb798.gif'
      case 'time':
        return 'https://media.giphy.com/media/l4hLT6kXPi9js7xFC/giphy.gif'
      default:
        return 'https://plus.unsplash.com/premium_photo-1670044658315-135afb4afe35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
      
      }
  }

  return (
    <>
      <section className={`${palette} poem-area`}>
        <img className={`${palette}-img deco-img` } src={getImage()}/>
        <h1 className='poem-title'>{title}</h1>
        <a className='poet-link' href={`https://www.google.com/search?q=${author}+poetry`} target="_blank"><h2 className='poem-author'>{author}</h2></a>
        <div className={`lines ${palette + '-lines'}`}>
          {lineElements}
        </div>
      </section>
    </>
  )
}

export default Poem;
