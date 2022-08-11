import { render, screen } from '@testing-library/react';
import { BrowserRouter  } from 'react-router-dom';
import NoEntries from './NoEntries';

it("renders NoEntries component", () => {
  render(<BrowserRouter><NoEntries /></BrowserRouter>);
  screen.getByText(/You don't have any journal entries yet!/i);
});