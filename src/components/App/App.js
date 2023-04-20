import React, {useState, useEffect} from 'react';
import './App.css';
import Form from '../Form/Form';
import {getAllPoets, getPoems} from '../../apicalls';

const App = () => {
  const [poets, setPoets] = useState([]);
  const [poet, setPoet] = useState('Emily Dickinson'); //errors were being thrown without a truthy initial value
  const [poems, setPoems] = useState([])

  useEffect(() => {
    getAllPoets()
    .then( data => {
      const { authors } = data;
      setPoets(authors);
    })
  },[]);

  useEffect(() => {
    getPoems(poet)
    .then(data => {
      setPoems([data[getRandomIndex(data)], data[getRandomIndex(data)], data[getRandomIndex(data)]])});
  }, [poet])
  
  const getRandomIndex = (data) => {
    return Math.floor(Math.random() * data.length);
  }

  return (
    <div className="App">
      <Form poets={poets} setPoet={setPoet}/>
    </div>
  );
};

export default App;
