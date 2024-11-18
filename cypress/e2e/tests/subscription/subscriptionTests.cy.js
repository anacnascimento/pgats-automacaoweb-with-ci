import homePage from "../../../pages/homePage";

let email = "";

beforeEach(() => {
    homePage.goToHomePage();
})

describe('Automation Exercise', () => {
    it('Test Case 10: Verify Subscription in home page', () => {
        email = "teste@gmail.com";

        homePage.subscribe(email);
        homePage.validateSucessMessage();
    });
});