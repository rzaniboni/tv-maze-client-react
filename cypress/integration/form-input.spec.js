/// <reference types="cypress" />

describe('Form Input', () => {
  it('Visits the app', () => {
    cy.visit('/');
  });

  it('Focuses the input on load', () => {
    cy.visit('/');
    // cy.get('input').should('have.focus');
    cy.focused().should('have.focus');

    // placeholder: Search TV Series
  });

  it('Accepts input', () => {
    cy.visit('/');
    cy.get('input').type('dark');
  });
});
