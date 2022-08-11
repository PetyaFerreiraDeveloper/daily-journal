import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Button from './Button';

const mockProps = { 
    label: 'buttonLabel',
    className: '',
    nav: '/about'
}

it('renders Button component', () => {
  render(<BrowserRouter><Button {...mockProps} /></BrowserRouter>);
  screen.getByText(/buttonLabel/i);
});