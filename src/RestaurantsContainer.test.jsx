import React from 'react';
import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

test('RestaurantsContainer', () => {
  const { getByText } = render(<RestaurantsContainer restaurants={restaurants} />);

  expect(getByText(/김밥제국/)).not.toBeNull();
});
