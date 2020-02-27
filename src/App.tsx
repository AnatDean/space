import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import { Nav } from './components/Nav';
import AddPlanetForm from './components/AddPlanetForm';
import PlanetsPage from './components/PlanetsPage';

const App: React.FC = () => {
  return (
    <div className='App'>
      <h1>Planets...</h1>
      <Nav />
      <main>
        <Router>
          <AddPlanetForm path='/add' />
          <PlanetsPage path='/' />
          <PlanetsPage path='/planets/*' />
        </Router>
      </main>
    </div>
  );
};

export default App;
