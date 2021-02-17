const pdp = require("./pdp");
module.exports = {
  shoppingChartSummary(pdpPrice) {
    this.checkoutSummaryPrice();
    //this.orderSummaryTitle();
    this.productVerify(pdpPrice);
  },

  // orderSummaryTitle() {
  //   const productTitle = $("#cart_summary > tbody > tr > td > p > a");
  //   productTitle.getText();
  //   console.log("whats inside checkout", productTitle.getText());
  //   return productTitle;
  // },
  checkoutSummaryPrice() {
    browser.pause(3000);
    const checkoutPrice = $("#total_product");
    const price = checkoutPrice.getText();
    return price;
  },
  productVerify(pdpPrice) {
    expect(pdpPrice).to.equal(this.checkoutSummaryPrice());
  },
};
