export async function fetchInitialPokemon() {
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex');
  const data = await response.json();

  return data.results;
}

export async function fetchTypes() {
  const response = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex/types');

  const data = await response.json();
  return data;
}

export async function fetchPokemon(type, search) {
  const params = new URLSearchParams();
  if (type !== 'all') {
    params.set('type', type);
  }
  if (search) {
    params.set('pokemon', search);
  }

  const response = await fetch(
    `https://alchemy-pokedex.herokuapp.com/api/pokedex/?${params.toString()}`
  );
  const data = await response.json();
  return data.results;
}
