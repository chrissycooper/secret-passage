import React, {useState, useEffect} from 'react';
import './Poem.css';
import commonWords from '../../utilities/commonWords';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Poem = ({ poem }) => {
  const [palette, setPalette] = useState('')
  const {title, author, lines} = poem;
  const lineElements = lines.map((line, index )=> {
    return <p key={index}>{line}</p>
  });

  useEffect(() => {
    const styleMatch = findStyle(poem);
    setPalette(styleMatch);
  }, [poem])
  
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
        return 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2NlODQ5MGE3ZDk5OWExNTMxZTg5ZTY0NDdiYmYxYmUxOTZiMzdiOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/1zgzISaYrnMAYRJJEr/giphy.gif'
      
      }
  }

  return (
    <>
      <section className={`${palette} poem-area`}>
        <Link to='/' className={`home-btn ${palette}`}>Go Home</Link>
        <img className={`${palette}-img deco-img` } src={getImage()} alt=''/>
        <h1 className='poem-title'>{title}</h1>
        <a className='poet-link' href={`https://www.google.com/search?q=${author}+poetry`} target="_blank" rel="noreferrer"><h2 className='poem-author'>{author}</h2></a>
        <div className={`lines ${palette + '-lines'}`}>
          {lineElements}
        {palette === 'body' && <img src="https://64.media.tumblr.com/b21f01b041647bd47d2197ea3e854868/tumblr_mmbejecChw1rfjowdo1_500.gifv" width="70" height="100" alt="a fan with blue blades blowing air"/>}
        </div>
      </section>
    </>
  )
}

export default Poem;

Poem.propTypes = {
  poem: PropTypes.object,
  id: PropTypes.number
}
