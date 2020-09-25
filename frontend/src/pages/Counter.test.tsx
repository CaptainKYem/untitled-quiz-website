import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Counter from './Counter';

test('handles button input', () => {
  const { getByText } = render(<Counter />);
  const button = getByText('Click me!');
  const label = getByText(/You have clicked the button/i);
  expect(label).toHaveTextContent('You have clicked the button 0 time(s).');

  fireEvent.click(button);
  expect(label).toHaveTextContent('You have clicked the button 1 time(s).');
});