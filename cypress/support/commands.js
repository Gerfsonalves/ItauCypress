// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//

Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

})


// -- command --


Cypress.Commands.add('visitHomepage', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

//
// -- command --
Cypress.Commands.add('formularioUser', (firstName, middleName, lastName, employeeId) => {
    cy.get('input[name="firstName"]').type(firstName);
    cy.get('input[name="middleName"]').type(middleName);
    cy.get('input[name="lastName"]').type(lastName);
    cy.contains('label.oxd-label', 'Employee Id')
        .parent()
        .next('div')
        .find('input.oxd-input')
        .clear()
        .type(employeeId);
});
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })