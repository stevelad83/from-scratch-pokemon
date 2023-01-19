import React from 'react';
import usePokemon from '../hooks/Pokemon.js';

export default function Main() {
  const pokemon = usePokemon();
  return <div>{pokemon}</div>;
}
