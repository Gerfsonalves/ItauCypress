/// <reference types="cypress" />

describe('OrangeHRM - Testes', () => {

    beforeEach('Acessar a home', () => {
        cy.visitHomepage();
        cy.login('Admin', 'admin123')
    })

    it('CadastroUser', () => {
        cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name').contains('PIM').click()
        cy.get('a.oxd-topbar-body-nav-tab-item').contains('Add Employee').click()
        cy.get('input[name="firstName"]').type('Carlos')
        cy.get('input[name="middleName"]').type('Silva')
        cy.get('input[name="lastName"]').type('Alves')
        cy.contains('label.oxd-label', 'Employee Id')
            .parent()
            .next('div')
            .find('input.oxd-input')
            .clear()
            .type('01')
        cy.get('button.oxd-button').contains('Save').click()
        cy.contains('a.oxd-topbar-body-nav-tab-item', 'Employee List').click()
        cy.contains('div.oxd-table-row', 'Carlos')
            .should('be.visible')
    })

});
