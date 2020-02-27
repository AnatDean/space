export interface PlanetOverview {
  name: string;
  planet_id: number;
  au_from_sun: string;
  type: string;
  moon_count?: string;
  img?: string;
}

export interface SinglePlanet {
  img: string;
  mean_diameter_miles: string;
  fun_fact: string;
  mean_temp_c: string;
  // PlanetOverView
  name: string;
  planet_id: number;
  au_from_sun: string;
  type: string;
  moon_count: string;
  // PlanetOverview,
}
