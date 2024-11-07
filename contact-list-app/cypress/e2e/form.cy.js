describe('Form Component', () => {
  beforeEach(() => {
    cy.visit('/contacts');
  })

  it('renders the form', () => {
    // checks if the form is present
    cy.get('[data-test="form"]').should('exist');
    cy.get('[data-test="form-header"]').should('have.text', "Add New Friend!");
    
    // checks if all form fields are rendered
    cy.get('#add-user-name').should('exist');
    cy.get('#add-title').should('exist');
    cy.get('#add-email').should('exist');
    cy.get('#add-phone-number').should('exist');
    
    // checks if the submit button is present
    cy.get('button[type="submit"]').should('exist');
  });

  it('allows a user to submit the form with valid data', () => {
    //fFill out the form with valid data
    cy.get('#add-user-name').type('John Doe');
    cy.get('#add-title').type('Friend');
    cy.get('#add-email').type('john.doe@example.com');
    cy.get('#add-phone-number').type('123-456-7890');

    // submit the form
    cy.get('button[type="submit"]').click();
  });

  it('shows an error message if email format is incorrect', () => {
    // fill in the form with incorrect email format
    cy.get('#add-user-name').type('John Doe');
    cy.get('#add-title').type('Friend');
    cy.get('#add-email').type('invalid-email');
    cy.get('#add-phone-number').type('123-456-7890');

    // submit the form
    cy.get('button[type="submit"]').click();

    // checks that an error message for invalid email is shown
    cy.get('[data-test="email-error"]').should('contain', 'Email format is invalid.');
  });

  it('calls handleSubmit when form is submitted', () => {
    // variable for external handler
    const handleSubmitSpy = cy.spy();
    
    // adds the spy to the form's onSubmit handler
    cy.get('form').then((form) => {
      form[0].onsubmit = handleSubmitSpy;
    });

    // fills out the form and submit
    cy.get('#add-user-name').type('John Doe');
    cy.get('#add-title').type('Friend');
    cy.get('#add-email').type('john.doe@example.com');
    cy.get('#add-phone-number').type('123-456-7890');
    cy.get('button[type="submit"]').click();

    // checks that handleSubmit was called
    cy.wrap(handleSubmitSpy).should('have.been.calledOnce');
  });

})