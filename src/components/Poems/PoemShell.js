import React, {useState, useEffect} from 'react';
import Poem from './Poem/Poem';
import './PoemShell.css';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PoemShell = ({ poems, index, setPoet }) => {

  const [portKeyStyle, setPortKeyStyle] = useState({
    width: '',
    position: '',
    left: '',
    top: '',
  });

  useEffect(() => {
    shuffleKeyPosition();
  }, [])

  const keySrc = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBmZDQ5ZDRkYzk3ZDcwYmI3YmUyMzEyNzE3ZDdhM2RlY2YzZTRjYiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/LuvAW3OKmBgywTpGDY/giphy.gif';
  const bodyHeight = document.body.clientHeight;
  const bodyWidth = document.body.clientWidth;
  
  const shuffleKeyPosition = () => {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    setPortKeyStyle({width: '35px', position: 'absolute', left:`${randPosX}px`, top:`${randPosY}px` })
  }

  const portKey = <img className='port-key' src={keySrc} style={portKeyStyle} onClick={shuffleKeyPosition} alt='the port key!'/>

  return (
    !poems[index-1] ? <Redirect to='/404'/> :
    <div className='port-key-container'>
      { 
        index < poems.length ? 
        <Link to={`/poem/${index + 1}`}>{portKey}</Link> :
        <Link to='/'>{portKey}</Link>
      }
      <Poem poem={poems[index-1]} key={poems[index-1].title} id={index+1} setPoet={setPoet}/>
    </div>
  )
}

export default PoemShell; 

PoemShell.propTypes = {
  poems: PropTypes.array
};
