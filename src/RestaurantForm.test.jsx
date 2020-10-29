import React from 'react';
import { render } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

test('RestaurantForm', () => {
  const restaurant = {
    name: '마법',
    category: '이탈',
    address: '서울',
  };

  const handleClick = jest.fn();

  const { getByText } = render(<RestaurantForm restaurant={restaurant} onClick={handleClick} />);

  expect(getByText('등록')).not.toBeNull();
});
