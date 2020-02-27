import React from 'react';
import { SinglePlanet } from './interfaces';
import { Link } from '@reach/router';

interface SinglePlanetContentProps {
  planet: SinglePlanet;
}

const SinglePlanetContent: React.FC<SinglePlanetContentProps> = ({
  planet
}) => {
  const {
    name,
    img,
    fun_fact,
    au_from_sun,
    type,
    moon_count,
    mean_diameter_miles,
    mean_temp_c
  } = planet;
  return (
    <>
      <section id='single-planet'>
        <section className='top-bar'>
          <Link to='/'> X</Link>
        </section>
        <h2>{name}</h2>
        <img height={175} alt={name} src={img} />
        <p>Distance from sun (AU): {au_from_sun}</p>
        <p>Type: {type}</p>
        <p>Moons: {moon_count}</p>
        <p>Avg Diameter (miles) {mean_diameter_miles}</p>
        <p>Avg Temp (C) {mean_temp_c}</p>
        <section className='long-text'>
          <p>Fun Fact: {fun_fact}</p>
        </section>
      </section>
    </>
  );
};

export default SinglePlanetContent;
