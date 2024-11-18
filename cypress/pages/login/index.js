const input_signInEmail = "[data-qa='login-email']";
const input_signInPassword = "[data-qa='login-password']";
const button_login = "[data-qa='login-button']";
const button_logout = "a[href$=logout]";
const button_deleteAccount = "a[href$=delete_account]";
const label_accountDeleted = "[data-qa='account-deleted']";

class Login {

    signIn(username, password) {
        cy.get(input_signInEmail).type(username);
        cy.get(input_signInPassword).type(password, { log: false });
        cy.get(button_login).click();
    }

    validateLoggedUser(username) {
        cy.get('i.fa-user').parent().should('contain', username);
    }

    validateInvalidLoginMessage() {
        cy.get('.login-form form p').should('contain', "Your email or password is incorrect!");
    }

    logout() {
        cy.get(button_logout).click();
    }

    validateLogoutUser() {
        cy.url().should('contain', 'login');
        cy.contains("Login to your account").should("be.visible");
    }

    deleteAccount() {
        cy.get(button_deleteAccount).click();
        cy.get(label_accountDeleted).should("be.visible");
    }
}

export default new Login()