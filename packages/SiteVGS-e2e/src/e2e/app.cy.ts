describe('sitevgs', () => {
  beforeEach(() => cy.visit('http://localhost:8000'));

  // it('should display welcome message', () => {
  //   cy.contains('CONNEXION').click();
  // });


  it('Lecture chapter', () => {
    // Test Already registered link
    cy.get('[data-cy="mangas"]').click()
    cy.url().should('include', '/mangas')
    cy.get('[data-cy="A_Girl_Like_Alien"]').click()
    cy.get('[data-cy="35"]').click()
    cy.url().should('include', '/main.php')



    cy.get('[data-cy="right_Arrow"]').should('be.visible').click()
    cy.get('[data-cy="right_Arrow"]').should('be.visible').click()
    cy.get('[data-cy="right_Arrow"]').should('be.visible').click()
    cy.get('[data-cy="right_Arrow"]').should('be.visible').click()
    cy.get('[data-cy="right_Arrow"]').should('be.visible').click()
    cy.get('[data-cy="right_Arrow"]').should('be.visible').click()
    cy.get('[data-cy="right_Arrow"]').should('be.visible').click()
    cy.get('[data-cy="right_Arrow"]').should('be.visible').click()


    cy.url().should('include', '/projet.php')


  })


});
