
/// <reference types="cypress" />



describe('OrangeHRM - Testes', () => {

  beforeEach('Acessar a home', () => {
    cy.visitHomepage();
  });

  // Login padrão com os dados preenchidos
  it('Deve fazer login com sucesso', () => {
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('be.visible');
  });

  // Logout, com Commands de 'Login' para facilitar
  it('Deve fazer o logout com sucesso', () => {
    cy.login('Admin', 'admin123');
    cy.contains('Dashboard').should('be.visible');

    cy.get('.oxd-userdropdown-tab').click();
    cy.wait(4000); // Página ira aguardar 1 segundo, porque ta dando erro por causa da atualização rápida da página
    cy.get('.oxd-dropdown-menu').should('be.visible');

    cy.contains('Logout').click();

    cy.contains('h5', 'Login').should('be.visible');
    cy.url().should('include', '/auth/login');
  });

  it('Login com dados inválidos', () => {
    cy.get('input[name="username"]').type('Ad000min');
    cy.get('input[name="password"]').type('000');
    cy.get('button[type="submit"]').click();
    cy.contains('p', 'Invalid credentials')
      .should('be.visible')
      .and('have.text', 'Invalid credentials');
  });

});