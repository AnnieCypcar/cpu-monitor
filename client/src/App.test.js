import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('chart.js')

test('renders the canvas element', () => {
  const { getByTestId } = render(<App />);
  const canvas = getByTestId(/canvas/i);
  expect(canvas).toBeInTheDocument();
});
