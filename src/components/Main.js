import React from 'react';
import usePokemon from '../hooks/usePokemon.js';
import PokeCard from './PokeCard.js';
import Select from './Select.js';

export default function Main() {
  const { pokemon, types, loading } = usePokemon();
  // console.log('typesFromMain', types);
  return (
    <div>
      <Select {...{ types, loading }} />
      {pokemon.map((poke) => (
        <PokeCard key={poke._id} {...poke} />
      ))}
    </div>
  );
}
