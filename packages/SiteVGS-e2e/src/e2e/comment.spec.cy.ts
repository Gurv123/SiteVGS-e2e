import { eq, random } from 'cypress/types/lodash';
const baseUrl = Cypress.config().baseUrl
describe('empty spec', () => {

  beforeEach(() => {
    //se connecter au compte test
    
    cy.visit(baseUrl + '/')
    cy.get('[data-cy="login"]').should('exist').click() //vérifier que le lien vers la page de connection existe avant de cliquer dessus
    cy.url().should("eq", baseUrl + '/vgs-connect.php') //vérifier que l'on est sur la page de connection
    cy.get('[data-cy="login-username"]').should('exist').type("test"); //entrer le nom du compte de test après avoir vérifié la présence du champ
    cy.get('[data-cy="login-password"]').should('exist').type("testtest") //entrer le mpd  du compte de test après avoir vérifié la présence du champ
    cy.get('[data-cy="login-submit"]').should('exist').click() //vérifier la présente du bouton de connection puis cliquer dessus
    cy.url().should("eq", baseUrl + '/index.php') //vérifier que de retour sur la page d'accueil, redirection automatique
    cy.get('[data-cy="login"]').should('not.exist') //vérifier que le lien de login n'existe pas, cela veut dire que l'utilisateur est connecté

  })

  afterEach(() => {
    //se déconnecter du compte actuel
   
    cy.get('[data-cy="logout"]').should('exist').click(); //vérifier que le lien de déconnection est présent puis se déconnecter en cliquant dessus
    cy.get('[data-cy="login"]').should('exist') //vérifier que le lien de connection est maintenant affiché, vu que ce lien apparait uniquement quand on est déconnecté
  })

  it('should leave a comment on a manga page', () => {
    
    cy.visit(baseUrl + '/')
    cy.get('[data-cy="mangas"]').should('exist').click() //vérifier que le lien existe puis cliquer dessus
    cy.url().should("eq", baseUrl + '/mangas.php') //vérifier l'url d'arrivée
    cy.get('[data-cy="manga-en-cours-1"]').should('exist').click() //vérifier que le lien/image vers le premier manga en cours existe puis cliquer dessus


    cy.url().should("contain", 'projet.php?name=')
    // cy.get().should('have.length', 0)

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

  })

})