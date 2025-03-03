import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText('Search App')).toBeInTheDocument(); // Modify as needed based on your app content
});
