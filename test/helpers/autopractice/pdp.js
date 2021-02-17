const productGrid = require("./productGrid");
module.exports = {
  pdp() {
    const pdpPrice = this.getPrice();
    this.addToBasket();
    this.pdpTitle();
    this.proceedToCheckout();
    return pdpPrice;
  },
  getPrice() {
    browser.pause(3000);
    const priceElement = $(
      '//div[@id="center_column"]//div[@class="primary_block row"]//form[@id="buy_block"]//div[@class="box-info-product"]//div[@class="price"]//span[@id="our_price_display"]'
    );
    const price = priceElement.getText();
    return price;
  },
  addToBasket() {
    const addToBasket = $("#add_to_cart > button");
    addToBasket.click();
  },

  pdpTitle() {
    const pdpTitle = $("#layer_cart_product_title");
    pdpTitle.getText();
    console.log("whats inside pdp pdpTitle");
    return pdpTitle;
  },

  proceedToCheckout() {
    const goToCheckoutBtn = $("div.button-container > a");
    goToCheckoutBtn.waitForClickable();
    goToCheckoutBtn.click();
  },
};
