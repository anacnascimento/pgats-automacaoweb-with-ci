const productsList = ".single-products";
const input_searchProduct = "[id='search_product']";
const button_searchProduct = "[id='submit_search']";
const button_continueShopping = "[class*='close-modal']";
const button_top_cart = "li a[href$=view_cart]";
const button_proceedToCheckout = "[class='btn btn-default check_out']";
const label_checkoutDetails = "[class='page-subheading']";
const input_messageCheckout = "[name='message']";
const button_placeOrder = "a[href$=payment]";

class Products {

    clickProduct() {
        cy.get(productsList).should("be.visible").and('have.length.at.least', 1).first().parent().contains('View Product').click();
    }

    validateProductInfo() {
        cy.url().should('contain', "product_details/1");
        cy.get(".product-information h2").should("be.visible").contains("Blue Top");
        cy.get(".product-information p").should("be.visible").contains("Category: Women > Tops");
        cy.get(".product-information span span").should("be.visible").contains("Rs. 500");
        cy.get(".product-information p").should("be.visible").contains("In Stock");
        cy.get(".product-information p").should("be.visible").contains("New");
        cy.get(".product-information p").should("be.visible").contains("Polo");
    }

    search(productName) {
        cy.get(input_searchProduct).type(productName);
        cy.get(button_searchProduct).click();
    }

    validateSearchReturn() {
        cy.get('.title').should("be.visible").and('contain', "Searched Products");
        cy.get('.single-products').should("be.visible").and("have.length.at.least", 1);
    }

    addItemCart(productName) {
        cy.get('.productinfo > p').contains(productName).parents('.productinfo').find('.add-to-cart').click();
        cy.get(button_continueShopping).should("be.visible").click();
        cy.get(button_top_cart).scrollIntoView().click();
        cy.url().should("includes", "view_cart");
    }

    checkoutAndPlaceOrder() {
        cy.get(button_proceedToCheckout).click();
        cy.get(label_checkoutDetails).should("be.visible").contains("Your delivery address");
        cy.get(label_checkoutDetails).should("be.visible").contains("Your billing address");
        cy.get(input_messageCheckout).type("Checkout message! Hurry up!"); 
        cy.get(button_placeOrder).click();
    }

}

export default new Products()