import React, {useState} from 'react';
import Poem from '../Poem/Poem';
import './Poems.css';
import { Link, Route } from 'react-router-dom';

const Poems = ({ poems }) => {
  const [portKeyStyle, setPortKeyStyle] = useState({
    width: '35px',
    position: 'absolute',
    left: '10px',
    top: '50px',
  });
  const [portKeyIndex, setPortKeyIndex] = useState(2);


  const keySrc = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzBmZDQ5ZDRkYzk3ZDcwYmI3YmUyMzEyNzE3ZDdhM2RlY2YzZTRjYiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/LuvAW3OKmBgywTpGDY/giphy.gif';
  const bodyHeight = document.body.clientHeight;
  const bodyWidth = document.body.clientWidth;
  
  const shuffleKeyPosition = () => {
    var randPosX = Math.floor((Math.random() * bodyWidth));
    var randPosY = Math.floor((Math.random() * bodyHeight));
    console.log(randPosX, randPosY)
    setPortKeyStyle({width: '35px', position: 'absolute', left:`${randPosX}px`, top:`${randPosY}px` })
  }

  const portKey = <img className='port-key' src={keySrc} style={portKeyStyle} onClick={shuffleKeyPosition} alt='the port key!'/>

  const poEms = poems.map((poem, index) => {
    return <Route exact path={`/poem/${index+1}`}><Poem poem={poem} key={index} id={index+1}/></Route>
  });
  
  return (
    <>
      {portKeyIndex < 4 && poems.length > 1 ?
        <Link to={`/poem/${portKeyIndex}`} onClick={()=> {setPortKeyIndex(portKeyIndex +1)}}>{portKey}</Link>
        : <Link to='/'>{portKey}</Link>
      }
      {poEms}
    </>
  )
}

export default Poems; 
