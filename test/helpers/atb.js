const { default: $ } = require("webdriverio/build/commands/browser/$");

module.exports = {
  atbAndVeryify() {
    const basketItems = [];
    basketItems.push(this.addToBasket(1));
    browser.pause(5000);
    basketItems.push(this.addToBasket(2));
    //this.checkBasketAmount();
  },

  //add to basket
  addToBasket(index) {
    //make sure all products are loaded.
    //    browser.waitUntil(() => {return this.productsWithAddToBasket().length > 0;})
    const products = this.productsWithAddToBasket();
    const product = products[index];
    browser.pause(500);
    this.addToBasketButton(product);
  },

  addToBasketButton(product) {
    const button = product.$("//button[text()='Add to cart']");
    button.click();
  },
  // checkBasketAmount(){
  //     const basketAmountElement = this.shoppingCartContainer();
  //     console.log('WHATS INSIDE BASKETAMOUNT',basketAmountElement);
  //     expect(basketAmountElement().getText().to.equal('1'));
  // },

  //elements
  productsWithAddToBasket() {
    return $$("//button[text()='Add to cart']");
  },

  shoppingCartContainer() {
    return $("#shopping_cart_container > a > span");
  },
};
