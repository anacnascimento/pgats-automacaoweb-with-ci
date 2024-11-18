import { faker } from '@faker-js/faker';
import homePage from "../homePage";

const input_signUpName = "input[data-qa='signup-name']";
const input_signUpEmail = "input[data-qa='signup-email']";
const button_submitSignUp = "[data-qa='signup-button']";
const checkbox_title = "input[type=radio]";
const input_password = "[type=password]";
const dropdown_day = "[data-qa='days']";
const dropdown_months = "[data-qa='months']";
const dropdown_years = "[data-qa='years']";
const checkbox_newsletter = "[id='newsletter']";
const checkbox_optin = "[id='optin']";
const input_firstName = "[data-qa='first_name']";
const input_lastName = "[data-qa='last_name']";
const input_company = "[data-qa='company']";
const input_address = "[data-qa='address']";
const dropdown_country = "[data-qa='country']"
const input_state = "[data-qa='state']";
const input_city = "[data-qa='city']";
const input_zipcode = "[data-qa='zipcode']";
const input_mobileNumber = "[data-qa='mobile_number']";
const button_createAccount = "[data-qa='create-account']";
const button_continue = "[data-qa='continue-button']";
const label_accountCreated = "[data-qa='account-created']";

class Register {

    signUp(username, email) {
        homePage.goToSignUpLoginPage();
        cy.get(input_signUpName).type(username);
        cy.get(input_signUpEmail).type(email);
        cy.get(button_submitSignUp).click();
    }

    fillForm(username) {
        cy.get(checkbox_title).check('Mrs')
        cy.get(checkbox_title).eq(1).check();
        cy.get(input_password).type(faker.internet.password(12, true, /[A-Za-z0-9]/, '!@#'), { log: false });
        cy.get(dropdown_day).select(faker.date.birthdate().getDate());
        cy.get(dropdown_months).select(faker.date.month());
        cy.get(dropdown_years).select(faker.date.birthdate().getFullYear().toString());
        cy.get(checkbox_newsletter).check();
        cy.get(checkbox_optin).check();
        cy.get(input_firstName).type(username);
        cy.get(input_lastName).type(faker.person.lastName());
        cy.get(input_company).type(faker.company.name());
        cy.get(input_address).type(faker.location.streetAddress());
        cy.get(dropdown_country).select("India");
        cy.get(input_state).type(faker.location.state());
        cy.get(input_city).type(faker.location.city());
        cy.get(input_zipcode).type(faker.location.zipCode());
        cy.get(input_mobileNumber).type(faker.phone.number());
        cy.get(button_createAccount).click();
    }

    validateRegisterSucess() {
        cy.url().should('includes', 'account_created');
        cy.get(label_accountCreated).should('be.visible');
        cy.get(button_continue).click();
    }

    validateErrorEmailExists() {
        cy.get('.signup-form form p').should('contain', "Email Address already exist!");
    }
}

export default new Register()