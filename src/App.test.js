import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders about link', () => {
  render(
      <Router>
        <App />
      </Router>
  );
  const linkElement = screen.getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
