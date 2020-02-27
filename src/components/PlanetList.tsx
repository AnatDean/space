import React, { ReactNode } from 'react';
import { PlanetTile } from './PlanetTile';
import { PlanetOverview } from './interfaces';
import { Router } from '@reach/router';
import { SinglePlanetPage } from './SinglePlanetPage';

interface PlanetListProps {
  planets: PlanetOverview[];
}
const PlanetList: React.FC<PlanetListProps> = ({ planets }) => {
  const renderPlanet = (planet: PlanetOverview): ReactNode => {
    return <PlanetTile key={planet.planet_id} planet={planet} />;
  };

  return (
    <>
      <Router>
        <SinglePlanetPage path='/:planet_id' />
      </Router>
      <ul>{planets.map(renderPlanet)}</ul>
    </>
  );
};

export default PlanetList;
