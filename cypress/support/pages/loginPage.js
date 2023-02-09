class LoginPage {

    getUsernameInput() {
        return cy.get('#Email')
    }

    getPasswordInput() {
        return cy.get('#Password')
    }

    getSubmitButton() {
        return cy.get('.login-button').contains('Log in')
    }

    getEmailErrorText() {
        return cy.get('#Email-error')
    }

    getLoginErrorText() {
        return cy.get('.message-error')
    }

    getLogoutLink() {
        return cy.get('a[href="/logout"]').contains('Logout')
    }

    //Enter Login details
    login(email, password) {
        this.getUsernameInput().should('be.visible').clear().type(email);
        this.getPasswordInput().should('be.visible').clear().type(password);
        this.getSubmitButton().should('be.visible').click();
    }

    logout() {
        this.getLogoutLink().click({timeout: 300});
        // this.getUsernameInput().should('be.visible');
    }

}
export default LoginPage;