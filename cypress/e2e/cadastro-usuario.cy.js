describe('Cadastro de usuário', () => {
    it('Acessa a página de cadastro, preenche o formulário e realiza cadastro', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
        cy.get('[data-test="input-name"]').type('Usuário de Teste');
        cy.get('[data-test="input-email"]').type('usuario@teste.com.br');
        cy.get('[data-test="input-password"]').type('Senha321');
        cy.get('[data-test="input-confirm-password"]').type('Senha321');
        cy.get('[data-test="submit-button"]').click();
    });
});