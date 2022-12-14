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

    // Check si dans la navbar le lien paramètre est bien là
    cy.get('[data-cy="nav-ul"]').children().should('contain', 'PARAMÈTRE')
    cy.get('[data-cy="settings"]').click()
    cy.url().should('include', '/admin/profil.php?name=')

    // Ensuite on check si lien config est bien là
    cy.get('[data-cy="nav-ul-admin"]').children().should('contain', 'Config')
    cy.get('[data-cy="config"]').click()
    cy.url().should('include', '/admin/config.php')
  })

  it('Add Member on Team', () => {
    cy.get('[data-cy="add-member-team"]').should('exist').click()
    cy.url().should('include', '/admin/add_member.php')
    cy.get('[data-cy="add-member-img"]').should('exist').selectFile('/packages/SiteVGS/img/team/test.jpg')
    cy.get('[data-cy="add-member-username"]').should('exist').type('userTest')
    cy.get('[data-cy="add-member-role"]').should('exist').type('clean')
    cy.get('[data-cy="add-member-grade"]').should('exist').type('sous-chef')
    cy.get('[data-cy="add-member-submit"]').should('exist').click()
    cy.url().should('include', '/admin/config.php')
    cy.get('[data-cy="update-member-team"]').should('exist').click()
    cy.url().should('include', '/admin/select_team.php')
    cy.get('[data-cy="update-member-team-username"]').should('exist')
  })

  it('Update Member on Team', () => {
    cy.get('[data-cy="update-member-team"]').should('exist').click()
  })

  it('Delete Member of Team', () => {
    // Delete Member of team and check it
    cy.get('[data-cy="delete-members-team"]').should('exist').click()
    cy.url().should('include', '/admin/delete_member_team.php')
    cy.get('[data-cy="delete-member-team"]').check('userTest')
    cy.get('[data-cy="delete-member-team-submit"]').should('exist').click()
    cy.get('[data-cy="delete-members-team"]').click()
    cy.get('[data-cy="pseudo-member-team"]').contains('userTest').should('not.exist')
  })

  it('Delete Member', () => {
    // Delete Member and check it
    cy.get('[data-cy="delete-members"]').should('exist').click()
    cy.url().should('include', '/admin/delete_member.php')
    cy.get('[data-cy="delete-member"]').check('userTest')
    cy.get('[data-cy="delete-member-submit"]').should('exist').click()
    cy.get('[data-cy="delete-members"]').click()
    cy.get('[data-cy="pseudo-member"]').contains('userTest').should('not.exist')
  })

  it('delete Mangas', () => {
    // Delete Mangas and check it
    cy.get('[data-cy="delete-mangas"]').should('exist').click()
    cy.url().should('include', '/admin/delete_mangas.php')
    cy.get('[data-cy="Five Senses"]').should('exist').check()
    cy.get('[data-cy="submit-delete-mangas"]').should('exist').click()
    cy.url().should('include', '/admin/config.php')
    cy.get('[data-cy="delete-mangas"]').should('exist').click()
    cy.url().should('include', '/admin/delete_mangas.php')
    cy.get('[data-cy="Five Senses"]').should('not.exist')
  })

  afterEach(() => {
    // logout
    cy.get('[data-cy="nav-ul-admin"]').children().should('contain', 'Deconnexion')
    cy.get('[data-cy="logout"]').click()
    cy.url().should('include', '/index.php')
  })
});