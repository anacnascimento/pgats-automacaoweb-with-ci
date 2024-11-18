
const input_name = "[data-qa='name']";
const input_email = "[data-qa='email']";
const input_subject = "[data-qa='subject']";
const input_message = "[data-qa='message']";
const button_submit = "[data-qa='submit-button']";
const button_uploadFile = "input[name='upload_file']";

class Contact {

    fillForm(name, email) {
        cy.get(input_name).type(name);
        cy.get(input_email).type(email);
        cy.get(input_subject).type("Testing concerns");
        cy.get(input_message).type("Needs improvement on testing tools and scenarios.");
    }

    // OBSERVAÇÃO - Esse método está separado por não se tratar de um campo obrigatório, podendo variar cenários em que este passo não se faz necessário
        uploadFileToFrom(file) {
        cy.fixture(file).as('fileToUpload');
        cy.get(button_uploadFile).selectFile('@fileToUpload');
        cy.get(button_submit).click();
    }

    validateSucessMessage() {
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');
    }
}

export default new Contact()