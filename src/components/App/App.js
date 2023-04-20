import React, {useState, useEffect} from 'react';
import './App.css';
import Form from '../Form/Form';
import Poems from '../Poems/Poems';
import Poem from '../Poem/Poem';
import Home from '../Home/Home';
import {getAllPoets, getPoems} from '../../apicalls';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [poets, setPoets] = useState([]);
  const [poet, setPoet] = useState('Emily Dickinson'); //errors were being thrown without a truthy initial value
  const [poems, setPoems] = useState([]);
  const [proceed, setProceed] = useState(false);


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
  }, [poet]);
  
  const getRandomIndex = (data) => {
    return Math.floor(Math.random() * data.length);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/select-poet'><Form poets={poets} setPoet={setPoet} /></Route>
        <Poems poems={poems}/>
      </Switch>
    </div>
  );
};

export default App;
