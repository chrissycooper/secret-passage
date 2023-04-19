import React, {useState, useEffect} from 'react';
import './App.css';
import Form from '../Form/Form';
import getAllPoets from '../../apicalls';

const App = () => {
  const [poets, setPoets] = useState([]);
  const [poet, setPoet] = useState('');

  useEffect(() => {
    getAllPoets()
    .then( data => {
      const { authors } = data
      setPoets(authors)
    })
  },[]);
  

  return (
    <div className="App">
      <Form poets={poets} setPoet={setPoet}/>
    </div>
  );
};

export default App;
