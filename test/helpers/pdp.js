const productGrid = require("./productGrid");
module.exports = {
  pdp() {
    this.enterQuantity();
    this.getPrice();
    this.addToBasket();
    browser.pause(2000);
    this.preCheckoutTitle();
    browser.pause(2000);
    this.proceedToCheckout();
  },

  enterQuantity() {
    const quantityField = $('[id="quantity_wanted"]');
    quantityField.setValue("2");
  },
  getPrice() {
    const getPrice = $('[id="our_price_display"]').getText();
    return getPrice;
  },
  addToBasket() {
    const addToBasket = $("#add_to_cart > button");
    addToBasket.click();
  },

  preCheckoutTitle() {
    const title = $("#layer_cart_product_title");
    title.getText();
    return title;
  },

  proceedToCheckout() {
    const goToCheckoutBtn = $("div.button-container > a");
    goToCheckoutBtn.waitForClickable();
    goToCheckoutBtn.click();
  },
};
