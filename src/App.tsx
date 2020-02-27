import React, { useState, useEffect } from 'react';
import './App.css';
import Planets from './components/Planets';
import { Router } from '@reach/router';
import { Nav } from './components/Nav';
import { getPlanets } from './api';
import AddPlanetForm from './components/AddPlanetForm';

const App: React.FC = () => {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect((): void => {
    getPlanets().then((planets): void => {
      setPlanets(planets);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className='App'>
      <h1>Planets...</h1>
      <Nav />
      <main>
        {isLoading ? (
          'loading...'
        ) : (
          <Router>
            <AddPlanetForm path='/add' />
            <Planets path='/*' planets={planets} />
          </Router>
        )}
      </main>
    </div>
  );
};

export default App;
