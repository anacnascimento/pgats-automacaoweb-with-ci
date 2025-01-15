import register from "../../../pages/register";
import homePage from "../../../pages/homePage";
import login from "../../../pages/login";

var timestamp = new Date().getTime();
let username = "";
let email = "";
let password = "";


beforeEach(() => {
    homePage.goToHomePage();
})

describe('Automation Exercise - Login Feature', () => {
    it('Test Case 1: Register User', () => {
        username = "Tester QA";
        email = `testerqa-${timestamp}@gmail.com`;

        register.signUp(username, email);
        register.fillForm(username);
        register.validateRegisterSucess();
        login.validateLoggedUser(username);
    });

    it('Test Case 2: Login User with correct email and password', () => {
        username = "Tester QA";
        email = 'testerqa@gmail.com';
        password = '1234';

        homePage.goToSignUpLoginPage();
        login.signIn(email, password);
        login.validateLoggedUser(username);
    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        email = "user@gmail.com";
        password = "1234";

        homePage.goToSignUpLoginPage();
        login.signIn(email, password);
        login.validateInvalidLoginMessage();
    });

    it('Test Case 4: Logout User', () => {
        email = "testerqa@gmail.com";
        password = "1234";

        homePage.goToSignUpLoginPage();
        login.signIn(email, password);
        login.validateLoggedUser(username);
        login.logout();
        login.validateLogoutUser();
    });

    it('Test Case 5: Register User with existing email', () => {
        email = "testerqa@gmail.com";
        username = "Tester QA";

        register.signUp(username, email);
        register.validateErrorEmailExists();
    });
});