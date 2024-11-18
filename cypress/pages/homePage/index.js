const button_signUp = "a[href$=login]";
const button_contactUs = "a[href$=contact_us]";
const button_products = "a[href$=products]";
const input_subscribeEmail = "[id='susbscribe_email']";
const button_subscribe = "[id='subscribe']";

const url = "https://automationexercise.com";


class Commons {

    goToHomePage() {
        cy.visit(url);
    }

    goToSignUpLoginPage() {
        cy.get(button_signUp).click();
    }

    goToContactUsPage() {
        cy.get(button_contactUs).click();
        cy.contains("Get In Touch").should("be.visible");
    }

    goToProductsPage() {
        cy.get(button_products).click();
        cy.contains("All Products").should("be.visible");
        cy.url().should('contain', "products");
    }

    subscribe(email) {
        cy.get(input_subscribeEmail).scrollIntoView().type(email);
        cy.get(button_subscribe).click();
    }

    validateSucessMessage() {
        cy.contains("You have been successfully subscribed!").should("be.visible");
    }
 }

export default new Commons()