import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Article from './Article';

const mockProps = {
    articleTitle: 'Article test', 
    description: 'Article description', 
    navigateTo: 'http://localhost:3000/about', 
    label: 'buttonLabel',
    className: '',
    buttonColor: 'yellow', 
    homeSection: null
}

it('renders Article component', () => {
  render(<BrowserRouter><Article {...mockProps} /></BrowserRouter>);
  screen.getByText(/Article test/i);
});