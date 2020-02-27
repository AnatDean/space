import React, { ReactNode } from 'react';
import { PlanetTile } from './PlanetTile';
import { PlanetOverview } from './interfaces';
import { Router } from '@reach/router';
import { SinglePlanetPage } from './SinglePlanetPage';

interface PlanetsProps {
  planets: PlanetOverview[];
  path: string;
}
const Planets: React.FC<PlanetsProps> = ({ planets }) => {
  const renderPlanet = (planet: PlanetOverview): ReactNode => {
    return <PlanetTile key={planet.planet_id} planet={planet} />;
  };

  return (
    <>
      <Router>
        <SinglePlanetPage path='/planets/:planet_id' />
      </Router>
      <ul>{planets.map(renderPlanet)}</ul>
    </>
  );
};

export default Planets;
