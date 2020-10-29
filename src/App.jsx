import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  setRestaurants,
} from './actions';

import restaurants from '../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';
import RestaurantsCreateContainer from './RestaurantsCreateContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <RestaurantsCreateContainer />
    </div>
  );
}
