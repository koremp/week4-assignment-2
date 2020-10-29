import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import RestaurantForm from './RestaurantForm';

import {
  addRestaurant,
  changeRestaurantField,
} from './actions';

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  function handleClick() {
    dispatch(addRestaurant());
  }

  function handleChange({ name, value }) {
    dispatch(changeRestaurantField({ name, value }));
  }

  return (
    <RestaurantForm restaurant={restaurant} onClick={handleClick} onChange={handleChange} />
  );
}
