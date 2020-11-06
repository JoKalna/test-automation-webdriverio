const productGrid = require("./productGrid");
module.exports = {
  pdp() {
    this.enterQuantity();
    this.addToBasket();
    this.getPrice();
  },

  addToBasket() {
    const addToBasket = $("#add_to_cart > button");
    addToBasket.click();
  },
  enterQuantity() {
    const quantityField = $('[id="quantity_wanted"]');
    quantityField.setValue("2");
  },
  getPrice() {
    const getPrice = $('[id="our_price_display"]').getText();
    console.log("Whats the price", getPrice);
    return getPrice;
  },
};
