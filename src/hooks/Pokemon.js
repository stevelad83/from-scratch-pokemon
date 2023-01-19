import React, { useState, useEffect } from 'react';
import { fetchInitialPokemon } from '../services/fetchPokemon.js';

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInitialPokemon();
      setPokemon(data);
    };
    fetchData();
  }, []);

  return pokemon;
}
