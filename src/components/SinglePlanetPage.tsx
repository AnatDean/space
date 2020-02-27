import React, { useState, useEffect } from 'react';
import { SinglePlanet as SinglePlanetState } from './interfaces';
import SinglePlanetContent from './SinglePlanetContent';
import { Link } from '@reach/router';
import { getPlanetById } from '../api';
import Loading from './Loading';

interface SinglePlanetProps {
  path: string;
  planet_id?: any;
}

export const SinglePlanetPage: React.FC<SinglePlanetProps> = ({
  planet_id
}) => {
  const [planet, setPlanet] = useState<SinglePlanetState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect((): void => {
    getPlanetById(planet_id).then((retrievedPlanet): void => {
      setPlanet(retrievedPlanet);
      setIsLoading(false);
    });
  }, [planet_id]);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        planet && (
          <section id='single-planet-wrapper'>
            <Link to={`/planets/${+planet_id - 1}`}>{'<'}</Link>
            <SinglePlanetContent planet={planet} />
            <Link to={`/planets/${+planet_id + 1}`}>{'>'}</Link>
          </section>
        )
      )}
    </main>
  );
};
