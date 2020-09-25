import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

test('renders Hello World!', () => {
  const { getByText } = render(<Home />, { wrapper: MemoryRouter });
  const h1Element = getByText(/Hello World!/i);
  expect(h1Element).toBeInTheDocument();
});