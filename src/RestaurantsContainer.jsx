import React from 'react';

export default function RestaurantsContainer({ restaurants }) {
  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
