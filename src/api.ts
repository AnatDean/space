import axios from 'axios';
import { PlanetOverview } from './components/interfaces';

const api = axios.create({
  baseURL: 'https://space-facts.herokuapp.com/api/'
});

export const getPlanets = (): Promise<any> => {
  return api.get('/planets').then(({ data: { planets } }) => {
    return planets;
  });
};

export const getPlanetById = (id: number): Promise<any> => {
  return api.get(`/planets/${id}`).then(({ data: { planet } }) => {
    return planet;
  });
};

type SubmittablePlanet = {
  name: string;
  au_from_sun: string;
  type: string;
};

export const addPlanet = (planet: SubmittablePlanet): Promise<any> => {
  return api.post('/planets', planet).then(
    ({ data: { planet } }): PlanetOverview => {
      return planet;
    }
  );
};
