export {};

const baseUrl = Cypress.config().baseUrl

describe('comment manga', () => {
  beforeEach(() => {
    //se connecter au compte test
    cy.visit(baseUrl + '/')
    cy.get('[data-cy="login"]').should('exist').click() //vérifier que le lien vers la page de connection existe avant de cliquer dessus
    cy.url().should("eq", baseUrl + '/vgs-connect.php') //vérifier que l'on est sur la page de connection
  })

  afterEach(() => {
    //se déconnecter du compte actuel
    cy.get('[data-cy="logout"]').should('exist').click(); //vérifier que le lien de déconnection est présent puis se déconnecter en cliquant dessus
    cy.get('[data-cy="login"]').should('exist') //vérifier que le lien de connection est maintenant affiché, vu que ce lien apparait uniquement quand on est déconnecté
  })

  it('should leave a comment on a manga page as a user', () => {
    //on passe l'username testUser en parametre
    cy.postcomment("testUser","testtest")
  })

  it('should leave a comment on a manga page as an admin', () => {
    //on passe l'username testAdmin en parametre
    cy.postcomment("testAdmin","testtest")
  })
})