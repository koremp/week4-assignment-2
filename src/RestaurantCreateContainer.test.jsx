import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import RestaurantCreateContainer from './RestaurantCreateContainer';

test('RestaurantCreateContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '마법',
      category: '이탈',
      address: '서울',
    },
  }));

  const { getByText, getByDisplayValue } = render(<RestaurantCreateContainer />);

  expect(getByText('등록')).not.toBeNull();
  expect(getByDisplayValue('마법')).not.toBeNull();
  expect(getByDisplayValue('이탈')).not.toBeNull();
  expect(getByDisplayValue('서울')).not.toBeNull();

  fireEvent.change(getByDisplayValue('마법'), {
    target: { value: '마법요리' },
  });

  expect(dispatch).toBeCalledWith({
    type: 'changeRestaurantField',
    payload: {
      name: 'name',
      value: '마법요리',
    },
  });

  fireEvent.click(getByText('등록'));

  expect(dispatch).toBeCalledWith({
    type: 'addRestaurant',
  });
});
