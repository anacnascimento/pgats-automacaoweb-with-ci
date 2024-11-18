import { faker } from '@faker-js/faker';

const input_NameOnCard = "[data-qa='name-on-card']";
const input_CardNumber = "[data-qa='card-number']";
const input_cvc = "[data-qa='cvc']";
const input_expiryMonth = "[data-qa='expiry-month']";
const input_expiryYear = "[data-qa='expiry-year']";
const button_payAndConfirm = "[data-qa='pay-button']";
const button_continue = "[data-qa='continue-button']";

class PaymentMethod {

    fillCredictCardDetails() {
        cy.get(input_NameOnCard).type(faker.person.fullName());
        cy.get(input_CardNumber).type(faker.finance.creditCardNumber({ issuer: 'visa' }));
        cy.get(input_cvc).type(faker.finance.creditCardCVV());
        cy.get(input_expiryMonth).type(faker.number.int({ min: 1, max: 12 }));
        cy.get(input_expiryYear).type(faker.number.int({ min: 2024, max: 2050 }));
    }

    pay() {
        cy.get(button_payAndConfirm).click();
    }

    validateSucessMessage() {
        cy.contains("Congratulations! Your order has been confirmed!").should("be.visible");
    }

    continue() {
        cy.get(button_continue).click();
    }
}

export default new PaymentMethod()