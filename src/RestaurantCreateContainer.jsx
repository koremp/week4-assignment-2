import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import RestaurantForm from './RestaurantForm';

import {
  addRestaurant,
} from './actions';

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();

  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  function handleClick() {
    dispatch(addRestaurant());
  }

  return (
    <RestaurantForm restaurant={restaurant} onClick={handleClick} />
  );
}