const utility = require("./utility");

module.exports = {
  clickProduct() {
    const { product } = this.selectRandomProduct();
    product.click({ x: 100 });
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
