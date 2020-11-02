const productGrid = require("./productGrid");
module.exports = {
  addToBasket() {
    const addToBasket = $(
      '//form[@id="buy_block"]//div[@class="box-info-product"]//div[@class="box-cart-bottom"]/div/p[@id="add_to_cart"]/button[@type="submit"]'
    );
    addToBasket.click();
  },
  enterQuantity() {
    const quantityField = $('[id="quantity_wanted"]');
    quantityField.setValue("2");
  },
  getPrice() {
    const getPrice = $('[id="our_price_display"]').getText();
  },
  getName() {
    const getName = $(
      '//body[@id="product"]//div[@class="primary_block row"]//div[@class="pb-center-column col-xs-12 col-sm-4"]/h1[@itemprop="name"]'
    );
    getName.getText();
  },
};
