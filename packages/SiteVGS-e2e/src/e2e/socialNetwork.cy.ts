export {};

const baseUrl = Cypress.config().baseUrl

describe('Social Networks', () => {
  beforeEach(() => {
    cy.visit(baseUrl)
  });

  // Check Facebook link
  it('Discord', () => {
    cy.get('[data-cy="discord"]').click()
    cy.url().should('include', 'https://discord.com/invite/DvvSNdN')
  })

  // Check Facebook link
  it('Twitter', () => {
    cy.get('[data-cy="twitter"]').click()
    cy.url().should('include', 'https://twitter.com/VolpGang')
  })

  // Check Facebook link
  it('Facebook', () => {
    cy.get('[data-cy="facebook"]').click()
    cy.url().should('include', 'https://www.facebook.com/VGSTeams')
  })

  // Ne passe pas car une fois sur la page demande d'accepter les cookies
  // it('Youtube', () => {
  //   cy.get('[data-cy="youtube"]').click()
  //   cy.url().should('include', 'https://www.youtube.com/channel/UCMnKgOVkuoBamqcvZjGko7Q')
  // })

  // Check Facebook link
  it('Twitch', () => {
    cy.get('[data-cy="twitch"]').click()
    cy.url().should('include', 'https://www.twitch.tv/volpgangscantrad')
  })
})