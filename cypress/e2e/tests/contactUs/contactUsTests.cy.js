import { faker } from '@faker-js/faker';
import homePage from "../../../pages/homePage";
import contactUs from "../../../pages/contactUs";

var name = faker.person.firstName();
let email = "";


beforeEach(() => {
    homePage.goToHomePage();
})

describe('Automation Exercise - Contact Us Feature', () => {
    it('Test Case 6: Contact Us Form', () => {
        homePage.goToContactUsPage();
        name = "QA Ana";
        email = "qaana@gmail.com";
        let file = "contactFormFIle.txt";

        contactUs.fillForm(name, email);
        contactUs.uploadFileToFrom(file);
        contactUs.validateSucessMessage();
    });
});