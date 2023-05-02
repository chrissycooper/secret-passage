import React, {useState, useEffect} from 'react';
import './App.css';
import Form from '../Form/Form';
import Poems from '../Poems/Poems';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import {getAllPoets, getPoems} from '../../apicalls';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  const [poets, setPoets] = useState([]);
  const [poet, setPoet] = useState('Emily Dickinson');
  const [poems, setPoems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getAllPoets()
    .then( data => {
      const { authors } = data;
      setPoets(authors);
    })
    .catch(err => setError(err))
  },[]);

  useEffect(() => {
    getPoems(poet)
    .then(data => {
      const checkNumOfPoems = (data) => {
        if(data.length === 1) {
          setPoems([data[0]])
        } else if ( data.length === 2) {
          setPoems([data[0], data[1]])
        } else if (data.length === 3) {
          setPoems([data[0], data[1], data[2]])
        } else {
          const indices = getRandomIndex(data);
          setPoems([data[indices[0]], data[indices[1]], data[indices[2]]])
        }
      }
      checkNumOfPoems(data)
    })
    .catch(err => setError(err))
  }, [poet]);
  
  const getRandomIndex = (data) => {
      let index1 = Math.floor(Math.random() * data.length);
      let index2 = Math.floor(Math.random() * data.length);
      let index3 = Math.floor(Math.random() * data.length);
      return [index1, index2, index3];
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
