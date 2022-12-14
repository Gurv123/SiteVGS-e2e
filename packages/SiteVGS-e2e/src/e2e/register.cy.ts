export {};

const baseUrl = Cypress.config().baseUrl

describe('register', () => {
  beforeEach(() => {
    cy.visit(baseUrl)
    cy.get('[data-cy="register"]').click()
    cy.url().should('include', '/inscription')
  });

  it('Registration form', () => {
    // Test Registration form
    cy.get('[data-cy="registration-pseudo"]').should('exist').type('userTest')
    cy.get('[data-cy="registration-mail"]').should('exist').type('user@email.fr')
    cy.get('[data-cy="registration-mail2"]').should('exist').type('user@email.fr')
    cy.get('[data-cy="registration-password"]').should('exist').type('testtest')
    cy.get('[data-cy="registration-password2"]').should('exist').type('testtest')
    cy.get('[data-cy="registration-birthdate"]').should('exist').type('2001-12-08')
    cy.get('[data-cy="registration-submit"]').should('exist').click()
    cy.url().should('include', '/vgs-connect') 

    // Test if the registration passed with login
    cy.get('[data-cy="login-username"]').should('exist').type('userTest')
    cy.get('[data-cy="login-password"]').should('exist').type('testtest')
    cy.get('[data-cy="login-submit"]').should('exist').click()
    cy.url().should('include', '/index')
    cy.get('[data-cy="logout"]').should('exist')
  })

  it('Already registered', () => {
    // Test Already registered link
    cy.get('[data-cy="already-registered-login"]').click()
    cy.url().should('include', '/vgs-connect')
  })
})