import React from 'react';

export default function Select({ types, loading }) {
  console.log('types', types);

  return (
    <>
{//if....then...}

      <select className="select">
        <option value="all">All</option>
        {types.map((type, i) => (
          <option key={i} value={type}>
            {type}
          </option>
        ))}
      </select>
    </>
  );
}
