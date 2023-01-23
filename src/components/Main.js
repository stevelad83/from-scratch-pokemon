import React from 'react';
import usePokemon from '../hooks/usePokemon.js';
import PokeCard from './PokeCard.js';
import Select from './Select.js';
import Query from './Query.js';

export default function Main() {
  const { pokemon, types, loading, handleTypeChange, query, setQuery, handleButtonClick } =
    usePokemon();

  return (
    <div>
      <Select {...{ types, loading, handleTypeChange }} />
      <Query inputValue={query} changeHandler={setQuery} handleButtonClick={handleButtonClick} />
      {pokemon.map((poke) => (
        <PokeCard key={poke._id} {...poke} loading={loading} />
      ))}
    </div>
  );
}
