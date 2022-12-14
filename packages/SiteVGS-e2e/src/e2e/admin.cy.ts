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


  it('Add Chapter', () => {
    cy.get('[data-cy="upload"]').should('exist').click()
    cy.url().should('include', '/admin/upload.php')
    cy.get('[data-cy="upload_chapter"]').should('exist').click()
    cy.get('[data-cy="name_project_manga"]').should('exist').type('A Girl Like Alien')
    cy.get('[data-cy="file_zip"]').should('exist').selectFile('src/fixtures/35MANGA.zip')
    cy.get('[data-cy="number_chapter"]').should('exist').type('1')
    cy.get('[data-cy="create_chapter"]').should('exist').click()


  })

  it('Create project', () => {
    cy.get('[data-cy="upload"]').should('exist').click()
    cy.url().should('include', '/admin/upload.php')
    cy.get('[data-cy="create_project"]').should('exist').click()
    cy.get('[data-cy="img_project"]').should('exist').selectFile('src/fixtures/1.jpg')
    cy.get('[data-cy="name_project"]').should('exist').type('aaaaaaaaaaaaaaaaaaa')
    cy.get('[data-cy="name_project_alternative"]').should('exist').type('bbbbbbbbbbbbbb')
    cy.get('[data-cy="Auteur"]').should('exist').type('azazazaz')
    cy.get('[data-cy="Artiste"]').should('exist').type('azazazaz')
    cy.get('[data-cy="Status"]').should('exist').type('En cours')
    cy.get('[data-cy="Annee"]').should('exist').type('2020')
    cy.get('[data-cy="genre"]').should('exist').type('Action, ecchi')
    cy.get('[data-cy="description"]').should('exist').type('TEsttesttestsoidjfklsjvlkognosnohdvoilsoij soin os oeh goshg ohzouhgoushkjjgb zoeshgou')
    cy.get('[data-cy="Create_project"]').should('exist').click()


  })

  afterEach(() => {
    // logout
    cy.get('[data-cy="nav-ul-admin"]').children().should('contain', 'Deconnexion')
    cy.get('[data-cy="logout"]').click()
    cy.url().should('include', '/index.php')
  })
});
