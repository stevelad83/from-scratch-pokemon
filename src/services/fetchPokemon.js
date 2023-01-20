import React from 'react';

export async function fetchInitialPokemon() {
  console.log('is it calling?');
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex');
  const data = await response.json();
  console.log(data.results);
  return data.results;
}

export async function fetchTypes() {
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');
  console.log('response', response);
  const data = await response.json();
  console.log('data', data);
  return data;
}
