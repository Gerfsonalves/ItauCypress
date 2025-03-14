/// <reference types="cypress" />

describe('OrangeHRM - Testes', () => {

    beforeEach('Acessar a home', () => {
        cy.visitHomepage();
        cy.login('Admin', 'admin123');
    });

    it('', () => {

    });

});
