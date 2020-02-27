import React, { useState } from 'react';
import { addPlanet } from '../api';
import { navigate } from '@reach/router';

interface AddPlanetFormProps {
  path: string;
}

const AddPlanetForm: React.FC<AddPlanetFormProps> = () => {
  const [nameInput, setNameInput] = useState<string>('');
  const [typeInput, setTypeInput] = useState<string>('gas');
  const [au_from_sunInput, setAu_from_sunInput] = useState<string>('0');
  const [err, setErr] = useState(null);
  const handleSubmit = async (
    e: React.FormEvent<EventTarget>
  ): Promise<any> => {
    e.preventDefault();
    try {
      const planet = await addPlanet({
        name: nameInput,
        type: typeInput,
        au_from_sun: au_from_sunInput
      });
      navigate(`/planets/${planet.planet_id}`);
    } catch (err) {
      setErr(err.response.data.msg);
    }
  };
  return (
    <>
      <h2>Discovered a planet? Add it on here!</h2>
      {err && <p>{err}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          onChange={({ target: { value } }) => setNameInput(value)}
          value={nameInput}
          required
          name='name'
          id='name'
          type='text'
        />
        <label htmlFor='type'>Type:</label>
        <select
          onChange={({ target: { value } }) => setTypeInput(value)}
          value={typeInput}
          required
          id='type'
          name='type'>
          <option value='gas'>gas</option>
          <option value='rock'>rock</option>
        </select>
        <label htmlFor='au_from_sun'>Au from sun:</label>
        <input
          onChange={({ target: { value } }) => setAu_from_sunInput(value)}
          name='au_from_sun'
          id='au_from_sun'
          value={au_from_sunInput}
          type='number'
          required
          min='0'
          max='10'
          step='0.1'
        />
        <button>submit</button>
      </form>
    </>
  );
};

export default AddPlanetForm;
