import React from 'react';
import { Link } from '@reach/router';
import { PlanetOverview } from './interfaces';

interface PlanetTileProps {
  planet: PlanetOverview;
}

export const PlanetTile: React.FC<PlanetTileProps> = ({ planet }) => {
  return (
    <li className='planet-tile'>
      <Link to={`/planets/${planet.planet_id}`}>
        <h2>{planet.name}</h2>
        <p>{planet.au_from_sun}</p>
        <p>{planet.type}</p>
        <p>{planet.moon_count}</p>
      </Link>
    </li>
  );
};
