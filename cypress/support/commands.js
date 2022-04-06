// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  cy.get('#login-button').click();
  cy.get('.user-info-form > input').eq(0).type(email);
  cy.get('.user-info-form > input').eq(1).type(password);
  cy.get('.input-form-button').click();
});

Cypress.Commands.add('addItem', (itemName, itemPrice, itemQuantity) => {
  cy.get('.item-info-input').eq(0).type(itemName);
  cy.get('.item-info-input').eq(1).type(itemPrice);
  cy.get('.item-info-input').eq(2).type(itemQuantity);
  cy.get('.input-form-button').click();
});
