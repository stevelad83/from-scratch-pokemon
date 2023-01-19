import React from 'react';
import usePokemon from '../hooks/Pokemon.js';
import PokeCard from './PokeCard.js';

export default function Main() {
  const pokemon = usePokemon();
  return (
    <div>
      {pokemon.map((poke) => (
        // <p key={poke._id}>{poke.pokemon}</p>

        <PokeCard key={poke._id} {...poke} />
      ))}
    </div>
  );
}
