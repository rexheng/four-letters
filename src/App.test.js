import { render, screen } from '@testing-library/react';
import App from './App';

test('renders menu screen with game title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Four Letters/i);
  expect(titleElement).toBeInTheDocument();
});
