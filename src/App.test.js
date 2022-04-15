import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("title is rendered", () => {
  render(<App />)
  let element = screen.getByText("YOUR TO DO LIST")
  expect(element).toBeInTheDocument ()
})

test("Add task button is rendered" , () => {
  render(<App />)
  let element = screen.getAllByText("ADD TASK")
  expect(element.length).toBe(1)
})

test("Delete task button is rendered" , () => {
  render(<App />)
  let element = screen.getAllByText("DELETE TASK")
  expect(element.length).toBe(1)
})

