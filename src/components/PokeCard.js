import React from 'react';

export default function PokeCard({ pokemon, id, ability_1, url_image, type_1, type_2, loading }) {
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="poke-card">
        <p>{id}</p>
        <h1>{pokemon}</h1>
        <img src={url_image}></img>
        <p>{ability_1}</p>
        <p>{type_1}</p>
        <p>{type_2}</p>
      </div>
    </>
  );
}
