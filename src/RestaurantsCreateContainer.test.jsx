import React from 'react';
import { render } from '@testing-library/react';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';

test('RestaurantsCreateContainer', () => {
  const { getByText } = render(<RestaurantsCreateContainer />);

  expect(getByText('등록')).not.toBeNull();
});
