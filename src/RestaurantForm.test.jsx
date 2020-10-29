import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

test('RestaurantForm', () => {
  const restaurant = {
    name: '마법',
    category: '이탈',
    address: '서울',
  };

  const handleClick = jest.fn();
  const handleChange = jest.fn();

  const { getByText, getByDisplayValue } = render(
    <RestaurantForm
      restaurant={restaurant}
      onClick={handleClick}
      onChange={handleChange}
    />,
  );

  expect(getByText('등록')).not.toBeNull();
  expect(getByDisplayValue('마법')).not.toBeNull();
  expect(getByDisplayValue('이탈')).not.toBeNull();
  expect(getByDisplayValue('서울')).not.toBeNull();

  fireEvent.change(getByDisplayValue('마법'), {
    target: { value: '마법요리' },
  });

  expect(handleChange).toBeCalled();

  expect(getByText('등록')).not.toBeNull();
});
