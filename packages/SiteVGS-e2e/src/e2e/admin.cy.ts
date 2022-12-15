export {};

const baseUrl = Cypress.config().baseUrl

describe('Admin', () => {
  beforeEach(() => {
    cy.visit(baseUrl)

    // Login
    cy.get('[data-cy="login"]').should('exist').click()
    cy.url().should('include', '/vgs-connect')
    cy.get('[data-cy="login-username"]').should('exist').type('testAdmin')
    cy.get('[data-cy="login-password"]').should('exist').type('testtest')
    cy.get('[data-cy=login-submit]').click()

    // Check si on est bien renvoyé à l'accueil à la suite de la connexion
    cy.url().should('include', '/index.php')

    // Check si dans la navbar le lien paramètre est bien là
    cy.get('[data-cy="settings"]').should('exist').click()
    cy.url().should('include', '/admin/profil.php?name=')

    // Ensuite on check si lien config est bien là
    cy.get('[data-cy="config"]').should('exist').click()
    cy.url().should('include', '/admin/config.php')
  })

  it('Add Team Member', () => {
    // Add Team Member
    cy.get('[data-cy="add-member-team"]').should('exist').click()
    cy.url().should('include', '/admin/add_member.php')
    cy.get('[data-cy="add-member-img"]').should('exist').selectFile('src/fixtures/test.jpg')
    cy.get('[data-cy="add-member-username"]').should('exist').type('userTest')
    cy.get('[data-cy="add-member-role"]').should('exist').type('clean')
    cy.get('[data-cy="add-member-grade"]').should('exist').type('sous-chef')
    cy.get('[data-cy="add-member-submit"]').should('exist').click()
    cy.url().should('include', '/admin/config.php')
    cy.get('[data-cy="update-member-team"]').should('exist').click()
    cy.url().should('include', '/admin/select_team.php')
    cy.get('[data-cy="update-member-team-username"]').contains('userTest').should('exist')
  })

  it('Update Team Member', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    })

    // Update data of a Team Member
    cy.get('[data-cy="update-member-team"]').should('exist').click();
    cy.url().should('include', '/admin/select_team.php');
    cy.get('[data-cy="update-member-team-username"]').contains('userTest').should('exist');
    cy.get('[data-cy="update-member-team-radio"]').check('userTest');
    cy.get('[data-cy="update-member-team-submit"]').should('exist').click();
    cy.url().should('include', '/admin/modif_team.php?name=');
    cy.get('[data-cy="modif-team-role"]').should('exist').type('clean');
    cy.get('[data-cy="modif-team-grade"]').should('exist').type('sous-chef');
    cy.get('[data-cy="modif-team-admin"]').should('exist').type('1');
    cy.get('[data-cy="modif-team-submit"]').should('exist').click();
  });

  it('Delete Team Member', () => {
    // Delete Team Member and check it
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

  it('Update project', () => {
    // Modification d'un projet
    cy.get('[data-cy="update-project"]').should('exist').click()
    cy.url().should('include', '/admin/select_project.php')
    cy.get('[data-cy="projects-list"]').should('exist').type('Universe And Sword')
    cy.get('[data-cy="update-selected-project"]').should('exist').click()
    cy.url().should('include', '/admin/modif_project.php?name=Universe%20And%20Sword')
    cy.get('[data-cy="update-name"]').should('exist').type('UniverseAndSword')
    cy.get('[data-cy="update-alternative-name"]').should('exist').type('UniverseAndSword')
    cy.get('[data-cy="update-author"]').should('exist').type('SIN SIN')
    cy.get('[data-cy="update-artist"]').should('exist').type('SIN SIN')
    cy.get('[data-cy="update-status"]').should('exist').select('en cours')
    cy.get('[data-cy="update-year"]').should('exist').type('2154')
    cy.get('[data-cy="update-genre"]').should('exist').type('Homard')
    cy.get('[data-cy="update-description"]').should('exist').type('Description de la description')
    cy.get('[data-cy="submit-update"]').should('exist').click()
    cy.url().should('include', '/admin/select_project.php')

    // Vérification de la prise en compte des modifications
    cy.get('[data-cy="projects-list"]').should('exist').type('UniverseAndSword')
    cy.get('[data-cy="update-selected-project"]').should('exist').click()
    cy.url().should('include', '/admin/modif_project.php?name=UniverseAndSword')
    cy.get('[data-cy="current-alternative-name"]').should('exist', 'have.value', 'UniverseAndSword')
    cy.get('[data-cy="current-author"]').should('exist', 'have.value', 'SIN SIN')
    cy.get('[data-cy="current-artist"]').should('exist', 'have.value', 'SIN SIN')
    cy.get('[data-cy="current-status"]').should('exist', 'have.value', 'en cours')
    cy.get('[data-cy="current-year"]').should('exist', 'have.value', '2154')
    cy.get('[data-cy="current-genre"]').should('exist', 'have.value', 'Homard')
    cy.get('[data-cy="current-description"]').should('exist', 'have.value', 'Description de la description')
  })

  afterEach(() => {
    // logout
    cy.get('[data-cy="logout"]').should('exist').click()
    cy.url().should('include', '/index.php')
  })
});