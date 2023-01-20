import React from 'react';

export default function Select({ types, loading, handleTypeChange }) {
  return (
    <select className="select" onChange={(e) => handleTypeChange(e.target.value)}>
      <option value="all">All</option>
      {types.map((type, i) => (
        <option key={i} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
