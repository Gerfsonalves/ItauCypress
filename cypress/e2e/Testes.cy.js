
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
    cy.wait(1000);// Página ira aguardar segundo(s), dando erro por causa da atualização rápida da página
    cy.get('.oxd-dropdown-menu').should('be.visible');

    cy.contains('Logout').click();

    cy.contains('h5', 'Login').should('be.visible');
    cy.url().should('include', '/auth/login');
  });

  // Login com dados inválidos
  it('Deve tentar logar com dados inválidos', () => {
    cy.get('input[name="username"]').type('Ad000min');
    cy.get('input[name="password"]').type('000');
    cy.get('button[type="submit"]').click();
    cy.contains('p', 'Invalid credentials')
      .should('be.visible')
      .and('have.text', 'Invalid credentials');
  });

  // Deve tentar logar sem preencher o usuário e verificar se o sistema exibe um aviso.
  it.only('Deve tentar logar sem preencher o "Username"', () => {

  });

  // Deve tentar logar sem preencher a senha e verificar se o sistema exibe um aviso.
  it('Deve tentar logar sem preencher o "Password"', () => {

  });
});