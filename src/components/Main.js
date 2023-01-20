import React from 'react';
import usePokemon from '../hooks/Pokemon.js';
import PokeCard from './PokeCard.js';
import Select from './Select.js';

export default function Main() {
  const pokemon = usePokemon();
  return (
    <div>
      <Select />
      {pokemon.map((poke) => (
        <PokeCard key={poke._id} {...poke} />
      ))}
    </div>
  );
}
