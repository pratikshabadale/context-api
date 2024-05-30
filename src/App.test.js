import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the items in the cart', () => {
    cy.contains('iphone');
    cy.contains('macbook');
  });

  it('adds items to the cart', () => {
    cy.contains('Add to Cart').click();
    cy.contains('Cart (1)');
  });

  it('removes items from the cart', () => {
    cy.contains('Add to Cart').click();
    cy.contains('Remove').click();
    cy.contains('Cart (0)');
  });
});