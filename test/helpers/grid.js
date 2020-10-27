const utility = require("./utility");

module.exports = {
  goToProduct() {
    const { product } = this.selectRandomProduct();
    browser.pause(3000);
    product.click();
  },
  selectRandomProduct() {
    const products = this.products();
    const position = utility.randomPosition(products.length);
    const product = products[position];
    product.scrollIntoView(true);
    browser.pause(3000);
    console.log("WHAT POSITION", position);
    return {
      product,
    };
  },
  products() {
    return $$(
      '//ul[contains(@class, "product_list grid row")]/li/div/div[@class="left-block"]/div[@class="product-image-container"]/a[@class="product_img_link"]'
    );
  },
};
