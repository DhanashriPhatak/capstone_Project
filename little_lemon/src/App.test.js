import { render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './BookingPage';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText("Little Lemon");
//   expect(linkElement).toBeInTheDocument();
// });


test('Renders the BookingForm heading', () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Make Your reservation");
  // console.log("Dhanu:-"+headingElement);
  expect(headingElement).toBeInTheDocument();
})


