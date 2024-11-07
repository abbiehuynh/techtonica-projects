describe('Contacts Component', () => {

    beforeEach(() => {
      cy.visit('/contacts'); 
    });
  
    it('renders the contact card', () => {
      cy.get('.card-title').should('be.visible');
      cy.get('.card-subtitle').should('be.visible');
      cy.get('.card-text').should('be.visible');
      cy.get('.card-text').should('be.visible');
    });

    it('renders the contact list', () => {
        cy.get('[data-test="contact-list"]').should('be.visible');
    });
    
    it('renders the contact card buttons', () => {
        cy.get('[data-test="update-btn"]').should('be.visible');
        cy.get('[data-test="delete-btn"]').should('be.visible');
    });

  
  });