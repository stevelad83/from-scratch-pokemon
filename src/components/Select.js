import React, { useState } from 'react';
import usePokemon from '../hooks/Pokemon.js';
import PokeCard from './PokeCard.js';

export default function Select() {
  const pokemon = usePokemon();
  console.log(pokemon);
  const [type, setType] = useState('all');

  const types = [...new Set(pokemon.map(({ type_1 }) => type_1))];
  console.log(types);

  const filtered = pokemon.filter((poke) => poke.type === type || type === 'all');

  return (
    <main className="container">
      <select className="select" onChange={(e) => setType(e.target.value)}>
        <option value="all">All</option>
        {types.map((type_1) => (
          <option key={type_1} value={type_1}>
            {type_1}
          </option>
        ))}
      </select>
      {filtered.map((poke) => (
        <PokeCard key={poke._id} {...poke} />
      ))}
    </main>
  );
}
