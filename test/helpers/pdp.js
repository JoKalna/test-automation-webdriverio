const productGrid = require("./productGrid");
module.exports = {
  pdp() {
    this.enterQuantity();
    this.getPrice();
    this.addToBasket();
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

  proceedToCheckout() {
    const goToCheckoutBtn = $("div.button-container > a");
    goToCheckoutBtn.waitForClickable();
    goToCheckoutBtn.click();
  },
};
