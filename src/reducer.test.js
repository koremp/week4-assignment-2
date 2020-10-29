import reducer from './reducer';

import {
  addRestaurant,
  changeRestaurantField,
  setRestaurants,
} from './actions';

import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('changes restaurants array', () => {
      const initialState = {
        restaurants: [],
      };

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('addRestaurant', () => {
    it('appends restaurant into restaurants and clear restaurant form', () => {
      const initialState = {
        newId: 101,
        restaurants: [],
        restaurant: {
          name: '마법',
          category: '한식',
          address: '서울 강남',
        },
      };

      const state = reducer(initialState, addRestaurant());

      expect(state.restaurants).toHaveLength(1);

      const restaurant = state.restaurants[state.restaurants.length - 1];

      expect(restaurant.id).toBe(101);
      expect(restaurant.name).toBe('마법');
      expect(restaurant.category).toBe('한식');
      expect(restaurant.address).toBe('서울 강남');

      expect(state.restaurant.name).toBe('');
      expect(state.newId).toBe(102);
    });
  });

  describe('changeRestaurantField', () => {
    it('changes restaurant form', () => {
      const initialState = {
        restaurant: {
          name: '마법',
          category: '한식',
          address: '서울 강남',
        },
      };

      const state = reducer(initialState, changeRestaurantField({
        name: 'name',
        value: '마법사주방',
      }));

      expect(state.restaurant.name).toBe('마법사주방');
    });
  });
});
