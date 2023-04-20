import React, {useState, useEffect} from 'react';
import './App.css';
import Form from '../Form/Form';
import Poems from '../Poems/Poems';
import Poem from '../Poem/Poem';
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
        {/* <Route exact path='/'></Route> */}
        <Route exact path='/'><Form poets={poets} setPoet={setPoet} setProceed={setProceed} proceed={proceed}/></Route>
        {/* <Route path='/poems'><Poems poems={poems}/></Route> */}
        <Route exact path='/poem/1'><Poem poem={poems[0]} id={1}/></Route>
        <Route exact path='/poem/2'><Poem poem={poems[1]} id={2}/></Route>
        <Route exact path='/poem/3'><Poem poem={poems[2]} id={3}/></Route>
        {/* <Route path='/poems/:id' render={({match}) => {
          console.log(match.params)
          const { id } = match.params;
          return <Poem poem={poems[0]}/>
        }}/> */}
      </Switch>
    </div>
  );
};

export default App;
