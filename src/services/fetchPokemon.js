import React from 'react';

export async function fetchInitialPokemon() {
  console.log('is it calling?');
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex');
  const data = await response.json();
  console.log(data.results);
  return data.results;
}
