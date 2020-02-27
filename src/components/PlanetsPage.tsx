import React, { useEffect, useState } from 'react';
import PlanetList from './PlanetList';
import Loading from './Loading';
import { PlanetOverview } from './interfaces';
import { getPlanets } from '../api';

interface PlanetsPageProps {
  path: string;
}

const PlanetsPage: React.FC<PlanetsPageProps> = () => {
  const [planets, setPlanets] = useState<PlanetOverview[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect((): void => {
    getPlanets().then((planets): void => {
      setPlanets(planets);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? <Loading /> : <PlanetList planets={planets} />;
};

export default PlanetsPage;
