import React from 'react';

export default function RestaurantForm({ restaurant, onClick }) {
  return (
    <div>
      <input type="text" name="name" value={restaurant.name} onChange={() => {}} />
      <input type="text" name="name" value={restaurant.category} onChange={() => {}} />
      <input type="text" name="name" value={restaurant.address} onChange={() => {}} />
      <button type="button" onClick={onClick}>
        등록
      </button>
    </div>
  );
}
