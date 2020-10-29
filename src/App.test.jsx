import React from 'react';
import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import App from './App';

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));
  const { getByText } = render(<App />);

  expect(getByText('Restaurants')).not.toBeNull();
  expect(dispatch).toBeCalled();
});
