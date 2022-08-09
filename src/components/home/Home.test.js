import { render, screen } from '@testing-library/react';
import { default as userEvent } from '@testing-library/user-event';
import Home from './Home';

// jest
//   .spyOn(window.localStorage, "getItem")
//   .mockImplementationOnce((node) => node);

describe('renders home page', () => {
  // it('find title', () => {
  //   render(<Home />);
  //   const homePageTitle = screen.getByText(/journal every day/i);
  //   expect(homePageTitle).toBeInTheDocument();
  // });
  // it('open register page on button click', () => {
  //   render(<Home />);
  //   const buttonName = screen.getByText(/start your journal/i);
  //   userEvent.click(buttonName);
  //   screen.getByText(/register/i);
  // });
});
