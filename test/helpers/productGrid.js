const utility = require("./utility");

module.exports = {
  clickQuickView() {
    const { product } = this.selectRandomProduct();
    product.click();
    browser.pause(3000);
  },

  selectRandomProduct() {
    const products = this.products();
    const position = utility.randomPosition(products.length);
    const product = products[position];
    product.scrollIntoView(true);
    return {
      product,
    };
  },
  products() {
    return $$(
      '//ul[contains(@class, "product_list grid row")]//a[@class="product_img_link"]'
    );
  },
};
