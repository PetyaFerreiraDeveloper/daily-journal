import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PageLink from './PageLink';

const mockProps = {
    link: {
        page: '/about',
        navigation: '/about'
    }
}

it("Renders PageLink component", () => {
    render(<BrowserRouter><PageLink {...mockProps} /></BrowserRouter>);
});