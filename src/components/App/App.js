import React, {useState, useEffect} from 'react';
import './App.css';
import Form from '../Form/Form';
import Poems from '../Poems/Poems';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import {getAllPoets, getPoems} from '../../utilities/apicalls';
import { Route, Switch, Redirect } from 'react-router-dom';
import filterForNumPoems from '../../utilities/filterPoets';

const App = () => {
  const [poets, setPoets] = useState([]);
  const [poet, setPoet] = useState('Emily Dickinson');
  const [poems, setPoems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllPoets()
    .then( data => {
      filterForNumPoems(data)
      .then(authors => setPoets(authors))
      .catch(err => setError(err))
    })
    .catch(err => setError(err));
  }, []);

  useEffect(() => {
    getPoems(poet)
    .then(data => {
          const randPoems = getRandomPoems(data);
          setPoems(randPoems);
    })
    .catch(err => setError(err));
  }, [poet]);
  
  const getRandomPoems = (data) => {
    const findIndex = () => Math.floor(Math.random() * data.length);
      const indices = [];
      if(data.length >= 10) {
        for (let i = 0; i < 10; i++){
          indices.push(findIndex());
        }
      } else {
        for (let i = 0; i < data.length; i++){
          indices.push(i);
        }
      }
      const poems = indices.map(index => data[index])
      return poems;
  };

  return (
    <div className="App">
        {error ? <NotFound /> :
          <Switch>
            <Route exact path='/'><Home/></Route>
            <Route exact path='/select-poet'><Form poets={poets} setPoet={setPoet}/></Route>
            <Route exact path='/404'><NotFound /></Route>
            <Route exact path='/poem/:index' render={({match}) => {
             return <Poems poems={poems} index={parseInt(match.params.index)}/>
            }}></Route>
            <Route path='*'><Redirect to='/404'/></Route>
          </Switch>
        }
    </div>
  );
};

export default App;
