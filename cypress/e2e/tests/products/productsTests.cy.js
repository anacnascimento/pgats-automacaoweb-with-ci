import register from "../../../pages/register";
import homePage from "../../../pages/homePage";
import login from "../../../pages/login";
import products from '../../../pages/products';
import paymentMethod from '../../../pages/paymentMethod';

var timestamp = new Date().getTime();
let username = "";
let email = "";
let product = "";


beforeEach(() => {
    homePage.goToHomePage();
})

describe('Automation Exercise - Products Feature', () => {
    it('Test Case 8: Verify All Products and product detail page', () => {
        homePage.goToProductsPage();
        products.clickProduct();
        products.validateProductInfo();
    });

    it('Test Case 9: Search Product', () => {
        const productName = "Dress";

        homePage.goToProductsPage();
        products.search(productName);
        products.validateSearchReturn();
    });

    it('Test Case 15: Place Order: Register before Checkout', () => {
        email = `testerqa-${timestamp}@gmail.com`;
        username = "Tester QA Scenario 15";
        product = "Sleeveless Dress";

        register.signUp(username, email);
        register.fillForm(username);
        register.validateRegisterSucess();
        login.validateLoggedUser(username)
        homePage.goToProductsPage();
        products.addItemCart(product);
        products.checkoutAndPlaceOrder();
        paymentMethod.fillCredictCardDetails();
        paymentMethod.pay();
        paymentMethod.continue();
        login.deleteAccount();
    });
});