import React, {useState, useEffect} from 'react';
import Poem from '../Poem/Poem';
import './Poems.css';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const Poems = ({ poems }) => {
  const [portKeyStyle, setPortKeyStyle] = useState({
    width: '',
    position: '',
    left: '',
    top: '',
  });
  const [portKeyIndex, setPortKeyIndex] = useState(2);

  useEffect(() => {
    shuffleKeyPosition()
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

  const poEms = poems.map((poem, index) => {
    return <Route exact path={`/poem/${index+1}`}><Poem poem={poem} key={`${poem.title}-${index}`} id={index+1}/></Route>
  });
  
  return (
    <>
      {(portKeyIndex === 3 && poems.length === 2) || poems.length === 1 || portKeyIndex >= 4?
      <Link to='/'>{portKey}</Link>
      : <Link to={`/poem/${portKeyIndex}`} onClick={()=> {setPortKeyIndex(portKeyIndex +1)}}>{portKey}</Link>
      }
      {poEms}
    </>
  )
}

export default Poems; 

Poems.propTypes = {
  poems: PropTypes.array 
}
