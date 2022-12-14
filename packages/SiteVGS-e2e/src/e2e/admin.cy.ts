const baseUrl = Cypress.config().baseUrl

describe('Admin', () => {
  beforeEach(() => {
    cy.visit(baseUrl)

    // Login
    cy.get('[data-cy="nav-ul"]').children().should('contain', 'CONNEXION')
    cy.get('[data-cy="login"]').click()
    cy.url().should('include', '/vgs-connect')
    cy.get('[data-cy="login-username"]').should('exist').type('testAdmin')
    cy.get('[data-cy="login-password"]').should('exist').type('testtest')
    cy.get('[data-cy=login-submit]').click()

    // Check si on est bien renvoyé à l'accueil à la suite de la connexion
    cy.url().should('include', '/index.php')
  })

  it('Delete Member', () => {
    // Check si dans la navbar le lien paramètre est bien là
    cy.get('[data-cy="nav-ul"]').children().should('contain', 'PARAMÈTRE')
    cy.get('[data-cy="settings"]').click()
    cy.url().should('include', '/admin/profil.php?name=')

    // Ensuite on check si lien config est bien là
    cy.get('[data-cy="nav-ul-admin"]').children().should('contain', 'Config')
    cy.get('[data-cy="config"]').click()
    cy.url().should('include', '/admin/config.php')

    // 
    cy.get('[data-cy="delete-members"]').click()
    cy.url().should('include', '/admin/delete_member.php')
    cy.get('[data-cy="delete-member"]').check('Floflo1')
    cy.get('[data-cy="delete-member-submit"]').click()
    cy.get('[data-cy="delete-members"]').click()
    cy.get('[data-cy="pseudo-member"]').contains('Floflo1').should('not.exist')
  })
});