import React, { useState, useEffect } from 'react';
import { fetchInitialPokemon, fetchPokemon, fetchTypes } from '../services/fetchPokemon.js';

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchInitialPokemon();
      const typeData = await fetchTypes();
      const types1 = typeData.map(({ type }) => type);
      setTypes(types1);
      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     console.log('dataFromUseEffect', data);

  //     // console.log('typesFromUseEffect', types);
  //   };
  //   fetchData();
  // }, []);

  const handleTypeChange = async (type) => {
    setLoading(true);
    const data = await fetchPokemon(type);
    setPokemon(data);
    setLoading(false);
  };
  return { pokemon, types, handleTypeChange, loading };
}
