import React from 'react';

export async function fetchInitialPokemon() {
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex');
  const data = await response.json();

  return data.results;
}

export async function fetchTypes() {
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');

  const data = await response.json();
  console.log('data', data);
  return data;
}

export async function fetchPokemon(type) {
  const response = await fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?type=${type}`);
  const data = await response.json();
  return data.results;
}
