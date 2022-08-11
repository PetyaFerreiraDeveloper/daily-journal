import { render, screen } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import ArticleImage from './ArticleImage';

const mockProps = {
    imageUrl: '', 
    imageAlt: 'Alternative text',
    articleTitle: 'Article Image test', 
    label: 'buttonLabel',
    buttonColor: 'yellow', 
    navigateTo: 'http://localhost:3000/about', 
    description: 'Article description', 
    className: '',
    aboutSection: null
}

it("renders ArticleImage component", () => {
  render(<BrowserRouter><ArticleImage {...mockProps} /></BrowserRouter>);
  screen.getByText(/Article Image test/i);
});