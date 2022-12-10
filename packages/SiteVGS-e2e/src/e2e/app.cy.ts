import { getGreeting } from '../support/app.po';

describe('sitevgs', () => {
  beforeEach(() => cy.visit('http://localhost:8000'));

  it('should display welcome message', () => {
    cy.contains('CONNEXION').click();
  });
});
