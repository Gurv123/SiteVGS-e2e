// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
const baseUrl = Cypress.config().baseUrl

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(email: string, password: string): void;
  }
}
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  console.log('Custom command example: Login', email, password);
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })



// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    postcomment(username: string, password: string): void;
  }
}

Cypress.Commands.add('postcomment', (username, password) => {
  cy.get('[data-cy="login-username"]').should('exist').type(username); //entrer le nom du compte de test après avoir vérifié la présence du champ
  cy.get('[data-cy="login-password"]').should('exist').type(password) //entrer le mpd  du compte de test après avoir vérifié la présence du champ
    cy.get('[data-cy="login-submit"]').should('exist').click() //vérifier la présente du bouton de connection puis cliquer dessus
    cy.url().should("eq", baseUrl + '/index.php') //vérifier que de retour sur la page d'accueil, redirection automatique
    cy.get('[data-cy="login"]').should('not.exist') //vérifier que le lien de login n'existe pas, cela veut dire que l'utilisateur est connecté


    cy.visit(baseUrl + '/')
    cy.get('[data-cy="mangas"]').should('exist').click() //vérifier que le lien existe puis cliquer dessus
    cy.url().should("eq", baseUrl + '/mangas.php') //vérifier l'url d'arrivée
    cy.get('[data-cy="manga-en-cours-1"]').should('exist').click() //vérifier que le lien/image vers le premier manga en cours existe puis cliquer dessus


    cy.url().should("contain", 'projet.php?name=')
    //récupération du body car on est garanti de le trouver
    cy.get("body").then($body => {

      //une  fois dans le then on peut manipuler plus facilement des variables
      //variable du nombre actuel de commentaires
      let alreadyExistingComments = 0
      //si il y a déjà des commentaires, on ajoute le nombre au compteur
      if ($body.find('[data-cy="projet-comment-instance"]').length > 0) {
        alreadyExistingComments = $body.find('[data-cy="projet-comment-instance"]').length
      }

      //le nombre de commentaire attendu après l'ajout d'un commentaire est égal au compteur +1
      const expectedNumberOfCommentAfterPosting = alreadyExistingComments + 1
      //alreadyExistingComments++; // incrementer le compteur de 1 au lieu d'en créer un second réduirait le nombre de déclaration mais impacterait la lisibilité et la clareté du code 

      cy.get('[data-cy="projet-comment-textarea"]').should('exist').type("Lorem ipsum") //tapper le texte du commentaire dans le champ après avoir vérifié son existance
      cy.get('[data-cy="projet-comment-submit"]').should('exist').click() //cliquer sur le bouton de post de commentaire après avoir vérifié son existance
      cy.url().should("contain", 'projet.php?name='); //vérifier que l'on est toujours sur la page de projet
      cy.get('[data-cy="projet-comment-instance"]').should('have.length', expectedNumberOfCommentAfterPosting) //comparer le nombre de commentaire affiché par rapport au nombre attendu

    })

});