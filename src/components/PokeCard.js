import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, id, ability_1, url_image, type_1, type_2, loading }) {
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="poke-card">
        <p>id:{id}</p>
        <h1>{pokemon}</h1>
        <img src={url_image}></img>
        <div className="bio">
          <p>Special Ability: {ability_1}</p>
          <p>Type 1: {type_1}</p>
          <p>Type 2: {type_2}</p>
        </div>
      </div>
    </>
  );
}
