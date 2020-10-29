import React from 'react';
import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  const restaurants = [
    {
      id: 1, name: '김밥제국', category: '한식', location: '서울',
    },
  ];

  const { getByText } = render(<RestaurantsContainer restaurants={restaurants} />);

  expect(getByText(/김밥제국/)).not.toBeNull();
});
