import LoginPage from '../../../support/pages/loginPage';
const loginPage = new LoginPage();

describe('Login Tests',  {tags: ['@login', '@regression']}, () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('Test login page using invalid credentials', () => {
        cy.fixture('login-data.json').then((loginData) => {
            for (var i=0; i < loginData.login.length; i++) {
                loginPage.login(loginData.login[i].email, loginData.login[i].password);
                let text = loginData.login[i].validation_text;
                if (!text.includes('Login was unsuccessful')) {
                    loginPage.getEmailErrorText().contains(loginData.login[i].validation_text);
                } else {
                    loginPage.getLoginErrorText().contains(loginData.login[i].validation_text);
                }
            }
        });
    });

    it('Test User login and logout', () => {
        loginPage.login(Cypress.env('username'), Cypress.env('password'));
        loginPage.logout();
    });

});
