Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  cy.get('#login-button').click();
  cy.get('.user-info-form > input').eq(0).type(email);
  cy.get('.user-info-form > input').eq(1).type(password);
  cy.get('.input-form-button').click();
});

describe('잔돈 충전 탭 테스트', () => {
  beforeEach(() => {
    cy.login('a@naaver.com', '1234!@#$asdf');
    cy.get('#coin-recharge-tab-button').click();
  });

  it('금액을 입력하고 충전 버튼을 누르면 잔돈이 충전된다.', () => {
    const cashInput = 1000;

    cy.get('.cash-charge-input').type(cashInput);
    cy.get('.input-form-button').click();

    cy.get('#charged-amount').should('have.text', cashInput);
  });
});
