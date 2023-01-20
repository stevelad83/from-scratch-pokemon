import React, { useState, useEffect } from 'react';
import { fetchInitialPokemon, fetchPokemon, fetchTypes } from '../services/fetchPokemon.js';

export default function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchInitialPokemon();
      setPokemon(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const typeData = await fetchTypes();
      const types1 = typeData.map(({ type }) => type);
      setTypes(types1);
    };
    fetchData();
  }, []);

  const handleTypeChange = async (type) => {
    setLoading(true);
    setSelectedType(type);
    const data = await fetchPokemon(type, query);
    setPokemon(data);
    setLoading(false);
  };

  const handleButtonClick = async () => {
    setLoading(true);
    const data = await fetchPokemon(selectedType, query);
    setPokemon(data);
    setLoading(false);
  };
  return { pokemon, types, handleTypeChange, loading, query, setQuery, handleButtonClick };
}
