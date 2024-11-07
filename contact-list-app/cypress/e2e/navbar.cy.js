// testing suite for navbar component

describe('Navigation Bar', () => {
    beforeEach(() => {
      // visits home page
      cy.visit('/home');
    });
  
    // Unit - tests navbar component renders on home page
  
    it('loads navigation bar', () => {
      cy.get('[data-test="navbar"]').contains('Abbie\'s Contacts');
      cy.contains('Home');
      cy.contains('Contacts');
    })
  
    it('clicking "Home" navigates to correct url', () => {
      cy.contains('Home').click();
      cy.url().should('include', '/home');
      cy.get('[data-test="home-page"]').should('be.visible');
    })
  
    it('clicking "Contacts" navigates to correct url', () => {
      cy.get('[data-test="contact-btn"]').contains('Contacts').click();
      cy.url().should('include', '/contacts');
      cy.get('[data-test="contacts-list"]').should('be.visible');
    })
  });