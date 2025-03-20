/// <reference types="cypress" />

describe('OrangeHRM - Testes', () => {

    beforeEach('Acessar a home', () => {
        cy.visitHomepage();
        cy.login('Admin', 'admin123')
    })

    it('CadastroUser', () => {
        cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name').contains('PIM').click()
        cy.get('a.oxd-topbar-body-nav-tab-item').contains('Add Employee').click()
        cy.formularioUser('Carlos', 'Silva', 'Alves', '01')

        cy.get('button.oxd-button').contains('Save').click()
        cy.contains('a.oxd-topbar-body-nav-tab-item', 'Employee List').click()
        cy.contains('div.oxd-table-row', 'Carlos')
            .should('be.visible')
    })

});
